import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Container from '../ui/Container';
import logoImg from '../../assets/logos/logo.png';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = ({ activeMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handler Navigasi gabungan untuk Halaman & Hash Section
  const handleNavClick = (path, e) => {
    setIsOpen(false);

    // 1. Jika path mengarah ke Hash Link / Section (misal: /#siteplan, /#kontak)
    if (path.startsWith('/#')) {
      e.preventDefault();
      const targetId = path.replace('/#', '');
      
      if (location.pathname !== '/') {
        // Jika sedang di luar Home (misal di /gallery atau /tentang), pindah ke Home dulu
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 150);
      } else {
        // Jika sudah di Home, langsung scroll ke section
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // 2. Jika path adalah Route Halaman Biasa ('/', '/tentang', '/gallery')
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Tentang', path: '/tentang' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Siteplan', path: '/maintenance' },
    { name: 'Progress', path: '/maintenance' },
    { name: 'Kontak', path: '/maintenance' },
  ];

  // Penentuan Status Active Menu
  const isLinkActive = (link) => {
    if (activeMenu && activeMenu.toLowerCase() === link.name.toLowerCase()) return true;
    if (link.path === '/' && location.pathname === '/' && !location.hash) return true;
    if (link.path === '/tentang' && location.pathname === '/tentang') return true;
    if (link.path === '/gallery' && location.pathname === '/gallery') return true;
    if (link.path.startsWith('/#') && location.hash === link.path.replace('/', '')) return true;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg py-3 border-b border-slate-800/80'
          : 'bg-slate-900 py-4'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={(e) => handleNavClick('/', e)}
            className="flex items-center gap-3 focus:outline-none"
          >
            <img src={logoImg} alt="PoliLand Kairagi Logo" className="h-9 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const active = isLinkActive(link);
              return (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={(e) => handleNavClick(link.path, e)}
                  className={`text-xs font-semibold tracking-wide transition-all duration-200 relative py-1 ${
                    active ? 'text-blue-400' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded-full animate-fade-in" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all duration-300 shadow-md shadow-emerald-950/20 active:scale-95"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100 mt-4 pt-4 border-t border-slate-800' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-1 pb-4">
            {navLinks.map((link) => {
              const active = isLinkActive(link);
              return (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={(e) => handleNavClick(link.path, e)}
                  className={`text-sm font-medium py-2.5 px-3 rounded-lg transition-colors ${
                    active
                      ? 'bg-blue-600/20 text-blue-400 font-bold border border-blue-500/30'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold py-3 rounded-xl mt-3 transition-colors shadow-md"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Hubungi via WhatsApp</span>
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;