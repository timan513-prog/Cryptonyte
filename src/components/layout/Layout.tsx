import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen text-[#f4ecd8] w-full relative bg-[#0a0806]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#e5c46d] focus:text-black focus:rounded-md focus:font-semibold"
      >
        Skip to main content
      </a>

      {/* Background layers — subtle, never busy */}
      <div className="bg-vignette" aria-hidden="true" />
      <div className="bg-hairline-grid" aria-hidden="true" />

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
