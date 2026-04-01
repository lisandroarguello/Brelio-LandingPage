import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Linkedin, Mail, ArrowUp } from 'lucide-react';
import React, { useState, useEffect, ReactNode } from 'react';
import { Logo } from './Logo';
import { company, navLinks, footerDescription, footerContactBlurb } from '@/src/content/siteConfig';

const NavLink = ({ to, children, onClick }: { to: string; children: ReactNode; onClick?: () => void; key?: React.Key }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
        isActive ? 'text-white' : 'text-slate-400 hover:text-white'
      }`}
    >
      {isActive && (
        <motion.div
          layoutId="nav-pill"
          className="absolute inset-0 bg-white/10 rounded-full"
          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </Link>
  );
};

export default function Layout({ children }: { children: ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-bg-dark text-text-main selection:bg-primary/30 selection:text-white overflow-x-hidden">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-bg-dark/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold tracking-tight flex items-center gap-2 group" aria-label="Inicio">
            <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-white/10 transition-colors">
              <Logo className="w-6 h-6 text-emerald-500" />
            </div>
            <span className="font-bold text-xl tracking-tight">{company.name}</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2 bg-white/5 p-1 rounded-full border border-white/5 backdrop-blur-sm">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to}>{link.label}</NavLink>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            {company.social.linkedin && (
              <a
                href={company.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            )}
            <Link
              to="/contacto"
              className="bg-white text-black px-5 py-2 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors"
            >
              Hablemos
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-bg-dark pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-2xl font-light">
              {navLinks.map((link, i) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`pb-4 ${
                    i < navLinks.length - 1
                      ? 'border-b border-white/10'
                      : 'text-primary font-medium'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow pt-24">
        {children}
      </main>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 rounded-full text-white transition-colors shadow-lg"
            aria-label="Volver arriba"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 mt-20 bg-bg-card">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group w-fit">
              <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <Logo className="w-6 h-6 text-emerald-500" />
              </div>
              <span className="font-bold text-xl tracking-tight">{company.name}</span>
            </Link>
            <p className="text-slate-400 max-w-sm mb-8 text-sm leading-relaxed">
              {footerDescription}
            </p>
            <div className="flex gap-4">
              {company.social.linkedin && (
                <a
                  href={company.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-emerald-500/20 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              )}
              <a
                href={`mailto:${company.email}`}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-emerald-500/20 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-sm uppercase text-slate-500 mb-4 tracking-wider">Navegación</h4>
            <ul className="space-y-2 text-slate-400">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-sm uppercase text-slate-500 mb-4 tracking-wider">Contacto</h4>
            <p className="text-slate-400 text-sm mb-4 leading-relaxed">
              {footerContactBlurb}
            </p>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href={`mailto:${company.email}`} className="hover:text-primary transition-colors">
                  {company.email}
                </a>
              </li>
              <li>
                <a href={company.whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  WhatsApp: {company.whatsapp}
                </a>
              </li>
              <li className="pt-4">
                <Link to="/contacto" className="text-primary hover:underline">
                  Iniciar proyecto →
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 text-center text-slate-600 text-sm">
          © {new Date().getFullYear()} {company.name}. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}
