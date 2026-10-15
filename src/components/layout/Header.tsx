import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { label: 'Início', href: '/' },
    {
      label: 'Soluções',
      children: [
        { label: 'Kode Gestão em Saúde', href: '/kode-saude' },
        { label: 'Kode APS', href: '/kode-aps' },
        { label: 'Kode Endemias', href: '/kode-endemias' },
        { label: 'Ferramentas', href: '/ferramentas' },
      ],
    },
    {
      label: 'Institucional',
      children: [
        { label: 'Quem Somos', href: '/quem-somos' },
        { label: 'Sobre Mim', href: '/sobre-mim' },
        { label: 'LGPD e Segurança', href: '/lgpd' },
      ],
    },
    { label: 'Contato', href: '/contato' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/images/kode-saude-logo.png"
              alt="Kode Gestão em Saúde"
              className="h-10 w-auto"
            />
            <span className="text-xl font-black text-slate-900 tracking-tight">Kode Gestão em Saúde</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                      item.children.some((c) => isActive(c.href))
                        ? 'text-brand-700 bg-brand-50'
                        : 'text-slate-600 hover:text-brand-700 hover:bg-slate-50'
                    }`}
                    aria-expanded={openDropdown === item.label}
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${
                        openDropdown === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Dropdown */}
                  {openDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg shadow-slate-200/60 border border-slate-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className={`block px-4 py-2.5 text-sm font-medium transition-colors ${
                            isActive(child.href)
                              ? 'text-brand-700 bg-brand-50'
                              : 'text-slate-600 hover:text-brand-700 hover:bg-slate-50'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                    isActive(item.href)
                      ? 'text-brand-700 bg-brand-50'
                      : 'text-slate-600 hover:text-brand-700 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all shadow-sm hover:shadow-md"
            >
              <Phone size={16} />
              Fale Conosco
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-brand-700 transition-colors"
            aria-label="Alternar menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 animate-in slide-in-from-top-2 duration-200">
          <nav className="px-4 py-4 space-y-1">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === item.label ? null : item.label
                      )
                    }
                    className="w-full flex items-center justify-between px-3 py-3 text-base font-semibold text-slate-700 hover:text-brand-700 hover:bg-slate-50 rounded-lg transition-colors"
                    aria-expanded={openDropdown === item.label}
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        openDropdown === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openDropdown === item.label && (
                    <div className="pl-4 space-y-1 mt-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          onClick={() => setIsOpen(false)}
                          className={`block px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                            isActive(child.href)
                              ? 'text-brand-700 bg-brand-50'
                              : 'text-slate-600 hover:text-brand-700 hover:bg-slate-50'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 text-base font-semibold rounded-lg transition-colors ${
                    isActive(item.href)
                      ? 'text-brand-700 bg-brand-50'
                      : 'text-slate-700 hover:text-brand-700 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="pt-4 mt-4 border-t border-slate-100">
              <Link
                to="/contato"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-brand-600 hover:bg-brand-700 text-white font-bold px-5 py-3 rounded-xl transition-all"
              >
                <Phone size={18} />
                Fale Conosco
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;