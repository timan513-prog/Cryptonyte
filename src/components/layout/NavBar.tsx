import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Index', href: '/' },
  { label: 'News', href: '/news' },
  { label: 'Guides', href: '/guides' },
  { label: 'Learn & Earn', href: '/learn-and-earn' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'FAQ', href: '/faq' },
];

const NavBar: React.FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleNavClick = useCallback(
    (href: string) => (e: React.MouseEvent) => {
      setIsMobileMenuOpen(false);

      if (href === '/' && location.pathname === '/') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      if (href === '/contact' && location.pathname === '/') {
        e.preventDefault();
        const el = document.getElementById('contact');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        return;
      }
    },
    [location.pathname]
  );

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? 'bg-[#0a0806]/85 backdrop-blur-md border-b border-[#e5c46d]/15'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <Link to="/" className="group inline-flex items-center gap-2.5">
            <span className="block w-1.5 h-1.5 rounded-full bg-[#e5c46d]" aria-hidden="true" />
            <span className="display text-lg tracking-tight text-[#f4ecd8] group-hover:text-white transition-colors">
              Cryptonyte
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex items-center gap-1"
            role="navigation"
            aria-label="Main navigation"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={handleNavClick(item.href)}
                className={`relative px-3 py-2 text-[13px] font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-[#e5c46d]'
                    : 'text-[#c9bfa8] hover:text-[#f4ecd8]'
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span
                    className="absolute left-3 right-3 -bottom-0.5 h-px bg-[#e5c46d]"
                    aria-hidden="true"
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/what-is-crypto"
              className="hidden sm:inline-flex btn-gold items-center gap-2 px-4 py-2 rounded-full text-sm"
            >
              Start free
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-[#f4ecd8] hover:bg-white/5 transition-colors"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-[#0a0806]/95 backdrop-blur-md border-t border-[#e5c46d]/15"
          >
            <nav
              className="max-w-[1400px] mx-auto px-6 py-4 flex flex-col"
              aria-label="Mobile navigation"
            >
              {NAV_ITEMS.map((item, i) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={handleNavClick(item.href)}
                  className={`flex items-center justify-between py-3 text-sm ${
                    i !== 0 ? 'border-t border-white/5' : ''
                  } ${
                    isActive(item.href) ? 'text-[#e5c46d]' : 'text-[#c9bfa8] hover:text-[#f4ecd8]'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="eyebrow text-[10px] text-[#8a8268]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </Link>
              ))}
              <Link
                to="/what-is-crypto"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-gold mt-4 inline-flex items-center justify-center px-4 py-3 rounded-full text-sm"
              >
                Start free
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default NavBar;
