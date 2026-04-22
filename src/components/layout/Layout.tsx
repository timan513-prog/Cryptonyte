import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full bg-ink-950 text-cream-100 antialiased">
      {/* Ambient background — subtle dot grid + warm radial wash */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.7]"
      >
        <div className="absolute inset-0 bg-dots [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-[radial-gradient(circle,rgba(229,184,92,0.10)_0%,transparent_60%)]" />
      </div>

      {/* Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-champagne-300 focus:text-ink-950 focus:rounded-full focus:font-semibold"
      >
        Skip to main content
      </a>

      <div className="relative z-10">
        <NavBar />
        <main id="main-content" role="main">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
