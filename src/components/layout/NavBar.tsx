import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Guides', href: '/guides' },
  { label: 'Learn & Earn', href: '/learn-and-earn' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
];

const NavBar: React.FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 32);
    window.addEventListener('scroll', handleScroll, { passive: true });
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
      }
    },
    [location.pathname]
  );

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`transition-all duration-500 ${
          isScrolled
            ? 'backdrop-blur-xl bg-ink-950/80 border-b border-cream-100/10'
            : 'backdrop-blur-md bg-ink-950/30 border-b border-transparent'
        }`}
      >
        <div className="container-page flex items-center justify-between h-16 lg:h-20">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3 group">
            <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-champagne-300 text-ink-950 font-display font-bold text-lg">
              C
              <span className="absolute inset-0 rounded-full border border-champagne-300/40 animate-slow-spin" />
            </span>
            <div className="flex flex-col leading-none">
              <span className="font-display text-lg font-semibold text-cream-100 tracking-tight">
                Cryptonyte
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-cream-400 mt-0.5">
                Est. 2026
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex items-center gap-1"
            role="navigation"
            aria-label="Main"
          >
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={handleNavClick(item.href)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    active
                      ? 'text-cream-100'
                      : 'text-cream-100/60 hover:text-cream-100'
                  }`}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-4 right-4 -bottom-0.5 h-px bg-champagne-300"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            {/* Desktop CTA */}
            <Link
              to="/what-is-crypto"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-champagne-300 text-ink-950 font-semibold text-sm transition-all duration-300 hover:bg-champagne-200 hover:-translate-y-0.5"
            >
              Start Learning
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-full border border-cream-100/15 text-cream-100 hover:bg-cream-100/5 transition"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden container-page pb-4"
          >
            <div className="rounded-2xl border border-cream-100/10 bg-ink-900/95 backdrop-blur-xl p-3">
              <nav className="flex flex-col" aria-label="Mobile">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={handleNavClick(item.href)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-[15px] font-medium transition ${
                      isActive(item.href)
                        ? 'bg-cream-100/5 text-cream-100'
                        : 'text-cream-100/70 hover:bg-cream-100/5 hover:text-cream-100'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-40" />
                  </Link>
                ))}
                <div className="h-px bg-cream-100/10 my-2 mx-4" />
                <Link
                  to="/what-is-crypto"
                  className="mx-1 mt-1 px-5 py-3 rounded-xl bg-champagne-300 text-ink-950 font-semibold text-sm text-center"
                >
                  Start Learning
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;
