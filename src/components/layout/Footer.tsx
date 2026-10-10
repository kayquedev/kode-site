import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, Briefcase, Camera } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img src="/images/logo-kode-white.png" alt="Kode Saúde" className="h-8 w-auto" />
              <span className="text-xl font-black text-white tracking-tight">
                Kode <span className="text-brand-400">Saúde</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Soluções tecnológicas para gestão pública em saúde, análise de dados e apoio à tomada de decisão.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-widest mb-4">Soluções</h4>
            <ul className="space-y-3">
              <li><Link to="/kode-saude" className="text-sm hover:text-brand-400 transition-colors">Kode Saúde</Link></li>
              <li><Link to="/kode-aps" className="text-sm hover:text-brand-400 transition-colors">Kode APS</Link></li>
              <li><Link to="/kode-endemias" className="text-sm hover:text-brand-400 transition-colors">Kode Endemias</Link></li>
              <li><Link to="/ferramentas" className="text-sm hover:text-brand-400 transition-colors">Ferramentas</Link></li>
            </ul>
          </div>

          {/* Institutional */}
          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-widest mb-4">Institucional</h4>
            <ul className="space-y-3">
              <li><Link to="/quem-somos" className="text-sm hover:text-brand-400 transition-colors">Quem Somos</Link></li>
              <li><Link to="/sobre-mim" className="text-sm hover:text-brand-400 transition-colors">Sobre Mim</Link></li>
              <li><Link to="/lgpd" className="text-sm hover:text-brand-400 transition-colors">LGPD e Segurança</Link></li>
              <li><Link to="/contato" className="text-sm hover:text-brand-400 transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-widest mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-400 shrink-0" />
                <span className="text-sm">contato@kodesaude.com.br</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-400 shrink-0" />
                <span className="text-sm">(00) 0000-0000</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-400 shrink-0 mt-0.5" />
                <span className="text-sm">Brasil</span>
              </li>
            </ul>
            <div className="flex items-center gap-4 mt-4">
              <a href="#" className="text-slate-400 hover:text-brand-400 transition-colors" aria-label="Website">
                <Globe size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-brand-400 transition-colors" aria-label="LinkedIn">
                <Briefcase size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-brand-400 transition-colors" aria-label="Instagram">
                <Camera size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Kode Saúde. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/lgpd" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Política de Privacidade</Link>
            <Link to="/lgpd" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;