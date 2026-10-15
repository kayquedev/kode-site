#!/usr/bin/env bash
# =============================================================================
# deploy-site.sh — Publica o site institucional Kode Saúde na VPS
# =============================================================================
# Uso:
#   KSAUDE_HOST=kayquedev@137.131.232.39 KSAUDE_CHAVE=C:/Users/kayqu/.ssh/siaps_deploy bash deploy-site.sh
#
# O que faz:
#   1. Build local do site (npm run build)
#   2. Envia dist/ via rsync para /var/www/kodesaude-site/ no servidor
#   3. Atualiza config Nginx do site institucional (remove redirecionamento)
#   4. Recarrega o Nginx
# =============================================================================
set -euo pipefail

: "${KSAUDE_HOST:?Defina KSAUDE_HOST=usuario@servidor}"
SSH=(ssh -o BatchMode=yes -o ConnectTimeout=20)
SCP=(scp)
USE_RSYNC=false

if command -v rsync &>/dev/null; then
  USE_RSYNC=true
  RSYNC=(rsync -avz --delete)
fi

if [ -n "${KSAUDE_CHAVE:-}" ]; then
  SSH+=(-i "$KSAUDE_CHAVE" -o IdentitiesOnly=yes)
  SCP+=(-i "$KSAUDE_CHAVE" -o IdentitiesOnly=yes)
  if [ "$USE_RSYNC" = true ]; then
    RSYNC+=(-e "ssh -i $KSAUDE_CHAVE -o IdentitiesOnly=yes")
  fi
fi

SITE_DIR="/var/www/kodesaude-site"
NGINX_CONF="/etc/nginx/sites-available/kodesaude.com.br"

# Helper: upload files via rsync or scp fallback
upload() {
  local src="$1" dst="$2"
  if [ "$USE_RSYNC" = true ]; then
    "${RSYNC[@]}" "$src" "$dst"
  else
    echo "(using scp fallback — rsync not available)"
    # scp requires different handling for directories vs files
    if [ -d "$src" ]; then
      "${SCP[@]}" -r "$src"/* "$dst"
    else
      "${SCP[@]}" "$src" "$dst"
    fi
  fi
}

echo "==> Building site locally..."
cd "$(dirname "$0")"
npm run build

echo "==> Syncing dist/ to ${KSAUDE_HOST}:${SITE_DIR}/"
upload dist/ "${KSAUDE_HOST}:${SITE_DIR}/"

echo "==> Uploading Nginx config..."
upload kodesaude-institucional-nginx.conf "${KSAUDE_HOST}:/tmp/kodesaude.com.br.conf"

echo "==> Applying Nginx config on server..."
"${SSH[@]}" "$KSAUDE_HOST" bash <<'REMOTE'
set -e
CONF="/etc/nginx/sites-available/kodesaude.com.br"
LINK="/etc/nginx/sites-enabled/kodesaude.com.br"
OLD_REDIRECT="/etc/nginx/sites-available/kodesaude.kayque.site"
OLD_LINK="/etc/nginx/sites-enabled/kodesaude.kayque.site"

# Remove old redirect-only config if it exists
if [ -L "$OLD_LINK" ]; then
  echo "Removing old redirect config: $OLD_LINK"
  sudo rm -f "$OLD_LINK"
fi
if [ -f "$OLD_REDIRECT" ]; then
  echo "Archiving old redirect config: $OLD_REDIRECT"
  sudo mv "$OLD_REDIRECT" "${OLD_REDIRECT}.disabled.$(date +%Y%m%d%H%M%S)"
fi

# Install new institutional site config
sudo cp /tmp/kodesaude.com.br.conf "$CONF"
sudo ln -sf "$CONF" "$LINK"
rm -f /tmp/kodesaude.com.br.conf

# Ensure site directory exists with correct permissions
sudo mkdir -p /var/www/kodesaude-site
sudo chown kayquedev:kayquedev /var/www/kodesaude-site

# Test and reload Nginx
sudo nginx -t
sudo systemctl reload nginx
echo "==> Nginx reloaded successfully"
REMOTE

echo "==> Verifying site..."
sleep 2
HTTP_CODE=$(curl -sS -o /dev/null -w "%{http_code}" "https://kodesaude.com.br/" 2>/dev/null || echo "FAIL")
if [ "$HTTP_CODE" = "200" ]; then
  echo "==> Site is live! https://kodesaude.com.br/ returned HTTP $HTTP_CODE"
else
  echo "WARNING: https://kodesaude.com.br/ returned HTTP $HTTP_CODE (may need DNS/cert check)"
fi

echo "==> Done."