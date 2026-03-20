import React, { useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Globe, Layers, Target, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

// Modern navigation with glass morphism (same as main site)
const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const onScrollLink = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.div 
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className={`backdrop-blur-xl bg-black/60 border border-amber-500/30 shadow-2xl rounded-full px-6 py-3 transition-all duration-500 ${
        isScrolled ? 'bg-black/80 shadow-3xl' : 'bg-black/40'
      }`}>
        <div className="flex items-center justify-between gap-2 md:gap-6 lg:gap-8">
          <Link to="/" className="flex items-center gap-3 group">
            <span className="font-bold text-lg bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
              Cryptonyte
            </span>
          </Link>
          
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {[
              { label: 'HOME', href: '#home', id: 'home' },
              { label: 'GUIDES', href: '#guides', id: 'guides' },
              { label: 'LEARN & EARN', href: '/learn-and-earn', id: 'learn-and-earn' },
              { label: 'ABOUT', href: '#about', id: 'about' },
              { label: 'CONTACT', href: '#contact', id: 'contact' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={onScrollLink(item.id)}
                className="px-2 py-2 rounded-full text-xs font-medium text-amber-200/80 hover:text-amber-100 hover:bg-amber-500/10 transition-all duration-300 relative group whitespace-nowrap inline-flex items-center"
              >
                {item.label}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400/0 to-yellow-400/0 group-hover:from-amber-400/20 group-hover:to-yellow-400/20 transition-all duration-300"></div>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link 
              to="/what-is-crypto" 
              className="hidden sm:flex group relative overflow-hidden px-6 py-2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25 flex-shrink-0"
            >
              <span className="relative z-10 flex items-center gap-2">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"/>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-full bg-amber-500/20 hover:bg-amber-500/30 transition-colors duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-amber-400" />
              ) : (
                <Menu className="w-5 h-5 text-amber-400" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-4 right-4 mt-2 z-50"
          >
            <div className="backdrop-blur-xl bg-black/90 border border-amber-500/30 shadow-2xl rounded-2xl p-4">
              <nav className="flex flex-col gap-2">
                {[
                  { label: 'HOME', href: '#home', id: 'home' },
                  { label: 'GUIDES', href: '#guides', id: 'guides' },
                  { label: 'LEARN & EARN', href: '/learn-and-earn', id: 'learn-and-earn' },
                  { label: 'ABOUT', href: '#about', id: 'about' },
                  { label: 'CONTACT', href: '#contact', id: 'contact' },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={onScrollLink(item.id)}
                    className="px-4 py-3 rounded-xl text-sm font-medium text-amber-200/80 hover:text-amber-100 hover:bg-amber-500/10 transition-all duration-300"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="border-t border-amber-500/20 my-2"></div>
                <Link 
                  to="/what-is-crypto" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group relative overflow-hidden px-4 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25 text-center"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"/>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

// Modern footer (same as main site)
const Footer = () => {
  return (
    <footer className="relative bg-black border-t border-amber-500/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                Cryptonyte
              </span>
            </div>
            <p className="text-amber-200/60 mb-6 max-w-md">
              Transforming crypto complexity into clear, actionable strategies for the next generation of digital investors.
            </p>
            <div className="flex gap-4">
              {[Globe, Layers, Target].map((Icon, i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center hover:bg-amber-500/30 transition-colors duration-300 cursor-pointer">
                  <Icon className="w-5 h-5 text-amber-400"/>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-amber-100 font-bold mb-4">Resources</h3>
            <div className="space-y-2">
              {[
                { name: "Free Guide", href: "/what-is-crypto" },
                { name: "Advanced Course", href: "/guides" },
                { name: "Blog", href: "#" },
                { name: "FAQ", href: "/faq" }
              ].map((item) => (
                <Link key={item.name} to={item.href} className="block text-amber-200/60 hover:text-amber-100 transition-colors duration-300">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-amber-100 font-bold mb-4">Legal</h3>
            <div className="space-y-2">
              {[
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" },
                { name: "Refund Policy", href: "/refund" },
                { name: "Contact", href: "/contact" }
              ].map((item) => (
                <Link key={item.name} to={item.href} className="block text-amber-200/60 hover:text-amber-100 transition-colors duration-300">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-amber-500/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-amber-200/60">
            © {new Date().getFullYear()} Cryptonyte. All rights reserved.
          </p>
          <p className="text-amber-200/40 text-sm">
            Made with ❤️ for the crypto community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function InteractiveGuide() {
  const [showDisclaimerModal, setShowDisclaimerModal] = React.useState(false);
  const [pendingDownload, setPendingDownload] = React.useState<{ url: string; filename: string } | null>(null);

  function triggerDownload(url: string, filename?: string) {
    // Show disclaimer popup before download
    setPendingDownload({ url, filename: filename || "Crypto-Blueprint-Guide.pdf" });
    setShowDisclaimerModal(true);
  }

  function proceedWithDownload() {
    if (pendingDownload) {
      const { url, filename } = pendingDownload;
      const a = document.createElement("a");
      a.href = url + "#page=1";
      a.download = filename;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      document.body.appendChild(a);
      a.click();
      a.remove();
    }
    setShowDisclaimerModal(false);
    setPendingDownload(null);
  }

  function cancelDownload() {
    setShowDisclaimerModal(false);
    setPendingDownload(null);
  }

  return (
    <div className="min-h-screen text-amber-100 w-full" style={{ backgroundColor: '#000000' }}>
      <NavBar />

      <div className="w-full bg-gradient-to-b from-amber-500/5 to-transparent backdrop-blur-sm overflow-hidden pt-32">
        {/* Header */}
        <div className="header bg-gradient-to-r from-black via-amber-900/20 to-black text-amber-100 text-center py-12 md:py-20 px-4 md:px-8 relative overflow-hidden w-full border-b border-amber-500/30">
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="text-2xl md:text-4xl opacity-30 absolute top-2 md:top-4 right-4 md:right-8 text-amber-400">🪙</div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-amber-100 tracking-tight px-2">The Crypto Blueprint</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 mx-auto mb-6"></div>
            <p className="text-base md:text-lg lg:text-xl text-amber-200/80 font-normal leading-relaxed max-w-3xl mx-auto px-4">Master Crypto Like a Pro - Your Visual Guide to Understanding Cryptocurrency in 2025</p>
          </div>
        </div>
        
        <div className="bg-black/80 backdrop-blur-sm text-amber-200 px-4 md:px-8 py-6 md:py-8 border-l-4 border-amber-500 w-full shadow-lg">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-amber-400 text-sm">⚠️</span>
              </div>
              <div>
                <strong className="text-base md:text-lg text-amber-100 block mb-2">Important Disclaimer</strong>
                <p className="text-sm md:text-base text-amber-200/80 leading-relaxed">This guide is for educational purposes only and does not constitute financial advice. Always do your own research and consult qualified professionals before making investment decisions.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Introduction */}
        <div className="section px-4 md:px-8 py-12 md:py-16 border-b border-amber-500/20 bg-black/30 w-full">
          <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 flex items-center gap-3 md:gap-4 text-amber-100">
            <span className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 flex items-center justify-center text-xl text-black shadow-lg">🎯</span>
            Why Does Crypto Exist?
          </h2>
          <p className="text-base md:text-lg text-amber-200/80 mb-8 md:mb-12 leading-relaxed">Cryptocurrency wasn't created in a vacuum. It emerged to solve real-world problems that traditional financial systems struggle with:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
            <div className="bg-black/60 backdrop-blur-sm border border-amber-500/20 rounded-xl p-8 hover:bg-black/80 transition-all duration-300 hover:border-amber-500/50 group">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">🏦</div>
              <h3 className="text-lg md:text-xl font-semibold text-amber-100 mb-3">Trust Issues</h3>
              <p className="text-sm md:text-base text-amber-200/70 leading-relaxed">The 2008 financial crisis shattered confidence in banks and governments. Crypto offers a decentralized alternative.</p>
            </div>
            <div className="bg-black/60 backdrop-blur-sm border border-amber-500/20 rounded-xl p-8 hover:bg-black/80 transition-all duration-300 hover:border-amber-500/50 group">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">💸</div>
              <h3 className="text-lg md:text-xl font-semibold text-amber-100 mb-3">Inflation Woes</h3>
              <p className="text-sm md:text-base text-amber-200/70 leading-relaxed">In some countries, savings lose value rapidly. Digital assets provide an alternative store of value.</p>
            </div>
            <div className="bg-black/60 backdrop-blur-sm border border-amber-500/20 rounded-xl p-8 hover:bg-black/80 transition-all duration-300 hover:border-amber-500/50 group">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">🌍</div>
              <h3 className="text-lg md:text-xl font-semibold text-amber-100 mb-3">Slow Transfers</h3>
              <p className="text-sm md:text-base text-amber-200/70 leading-relaxed">Cross-border payments take days and cost 5-10%. Crypto settles in minutes for pennies.</p>
            </div>
            <div className="bg-black/60 backdrop-blur-sm border border-amber-500/20 rounded-xl p-8 hover:bg-black/80 transition-all duration-300 hover:border-amber-500/50 group">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">🚫</div>
              <h3 className="text-lg md:text-xl font-semibold text-amber-100 mb-3">Financial Exclusion</h3>
              <p className="text-sm md:text-base text-amber-200/70 leading-relaxed">Billions lack bank access but have phones. Crypto can reach anyone with internet.</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/30 text-amber-100 rounded-xl p-8 shadow-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-500 flex items-center justify-center text-2xl text-black">💡</div>
              <h4 className="text-lg md:text-xl font-semibold">Think of Crypto as "Email for Money"</h4>
            </div>
            <p className="text-sm md:text-base text-amber-200/80 leading-relaxed">Just like email revolutionized communication by removing gatekeepers, crypto revolutionizes money by removing financial intermediaries.</p>
          </div>
          </div>
        </div>
        
        {/* What is Crypto */}
        <div className="section px-4 md:px-8 py-12 border-b border-amber-500/20 bg-black/10 w-full">
          <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-6 md:mb-8 flex items-center gap-3 md:gap-4 text-amber-100">
            <span className="w-12 h-12 rounded-full bg-black/80 border border-amber-500/50 flex items-center justify-center text-2xl text-amber-400">🪙</span>
            What is Cryptocurrency?
          </h2>
          <p className="text-base md:text-lg text-amber-200/80 mb-6 md:mb-8 leading-relaxed">Cryptocurrency is digital money that uses cryptography for security. Unlike traditional money controlled by governments, crypto networks are maintained collectively by users worldwide through a public ledger - think of it as a giant shared spreadsheet that everyone can see but no one can cheat.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-black/70 backdrop-blur-sm border border-amber-500/30 rounded-2xl p-6 border-l-4 border-amber-400 hover:bg-black/80 transition-all duration-300">
              <h4 className="text-amber-400 text-lg md:text-xl font-bold mb-3">🌐 Decentralized</h4>
              <p className="text-sm md:text-base text-amber-200/70">Records stored on thousands of computers worldwide, not one central server</p>
            </div>
            <div className="bg-black/70 backdrop-blur-sm border border-amber-500/30 rounded-2xl p-6 border-l-4 border-amber-400 hover:bg-black/80 transition-all duration-300">
              <h4 className="text-amber-400 text-lg md:text-xl font-bold mb-3">👁️ Transparent</h4>
              <p className="text-sm md:text-base text-amber-200/70">Anyone can verify the entire history of transactions on the public ledger</p>
            </div>
            <div className="bg-black/70 backdrop-blur-sm border border-amber-500/30 rounded-2xl p-6 border-l-4 border-amber-400 hover:bg-black/80 transition-all duration-300">
              <h4 className="text-amber-400 text-lg md:text-xl font-bold mb-3">🔐 Ownership via Keys</h4>
              <p className="text-sm md:text-base text-amber-200/70">Your private key proves ownership - without it, you can't access your coins</p>
            </div>
          </div>
          </div>
        </div>
        
        {/* Blockchain Explained */}
        <div className="section px-4 md:px-8 py-12 border-b border-amber-500/20 bg-black/20 w-full">
          <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-6 md:mb-8 flex items-center gap-3 md:gap-4 text-amber-100">
            <span className="w-12 h-12 rounded-full bg-black/80 border border-amber-500/50 flex items-center justify-center text-2xl text-amber-400">⛓️</span>
            Understanding Blockchain
          </h2>
          <p className="text-base md:text-lg text-amber-200/80 mb-6 md:mb-8 leading-relaxed">A blockchain is like a digital filing cabinet where each file (block) contains transaction records and is permanently linked to the previous file:</p>
          
          <div className="flex items-center justify-center mb-8 md:mb-12 flex-wrap gap-2 md:gap-4 overflow-x-auto">
            <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-6 py-4 rounded-xl font-bold text-center min-w-24 shadow-lg relative">
              <div className="text-xs md:text-sm">Block 1</div>
              <div className="text-xs">Genesis</div>
              <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 text-amber-500 text-2xl">→</div>
            </div>
            <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-6 py-4 rounded-xl font-bold text-center min-w-24 shadow-lg relative">
              <div className="text-xs md:text-sm">Block 2</div>
              <div className="text-xs">Transactions</div>
              <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 text-amber-500 text-2xl">→</div>
            </div>
            <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-6 py-4 rounded-xl font-bold text-center min-w-24 shadow-lg relative">
              <div className="text-xs md:text-sm">Block 3</div>
              <div className="text-xs">More Txns</div>
              <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 text-amber-500 text-2xl">→</div>
            </div>
            <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-6 py-4 rounded-xl font-bold text-center min-w-24 shadow-lg">
              <div className="text-xs md:text-sm">Block 4</div>
              <div className="text-xs">Latest</div>
            </div>
          </div>
          
          <div className="bg-black/70 backdrop-blur-sm border border-amber-500/30 rounded-2xl p-8">
            <h3 className="text-xl md:text-2xl font-bold text-amber-100 mb-6 md:mb-8 text-center">📊 How Blockchain Works</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div className="bg-black/80 border border-amber-500/30 rounded-2xl p-6 text-center relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-black/80 border border-amber-500/50 rounded-full flex items-center justify-center text-amber-400 font-bold shadow-lg">1</div>
                <h4 className="text-sm md:text-base text-amber-100 font-bold mt-4 mb-3">Broadcast</h4>
                <p className="text-amber-200/70 text-sm">User sends transaction to network</p>
              </div>
              <div className="bg-black/80 border border-amber-500/30 rounded-2xl p-6 text-center relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-black/80 border border-amber-500/50 rounded-full flex items-center justify-center text-amber-400 font-bold shadow-lg">2</div>
                <h4 className="text-sm md:text-base text-amber-100 font-bold mt-4 mb-3">Validate</h4>
                <p className="text-amber-200/70 text-sm">Network validates the transaction</p>
              </div>
              <div className="bg-black/80 border border-amber-500/30 rounded-2xl p-6 text-center relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-black/80 border border-amber-500/50 rounded-full flex items-center justify-center text-amber-400 font-bold shadow-lg">3</div>
                <h4 className="text-sm md:text-base text-amber-100 font-bold mt-4 mb-3">Bundle</h4>
                <p className="text-amber-200/70 text-sm">Transactions grouped into blocks</p>
              </div>
              <div className="bg-black/80 border border-amber-500/30 rounded-2xl p-6 text-center relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-black/80 border border-amber-500/50 rounded-full flex items-center justify-center text-amber-400 font-bold shadow-lg">4</div>
                <h4 className="text-sm md:text-base text-amber-100 font-bold mt-4 mb-3">Confirm</h4>
                <p className="text-amber-200/70 text-sm">Block added to chain permanently</p>
              </div>
            </div>
          </div>
          </div>
        </div>
        
        {/* Bitcoin Section */}
        <div className="section px-4 md:px-8 py-12 border-b border-amber-500/20 bg-black/10 w-full">
          <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-6 md:mb-8 flex items-center gap-3 md:gap-4 text-amber-100">
            <span className="w-12 h-12 rounded-full bg-black/80 border border-amber-500/50 flex items-center justify-center text-2xl text-amber-400">₿</span>
            Bitcoin: Digital Gold
          </h2>
          <p className="text-base md:text-lg text-amber-200/80 mb-6 md:mb-8 leading-relaxed">Bitcoin, launched in 2009, was the first cryptocurrency. It's designed to be digital gold with a fixed supply of 21 million coins.</p>
          
          <div className="bg-black/70 backdrop-blur-sm border border-amber-500/30 rounded-2xl p-4 md:p-8 mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-amber-100 mb-4 md:mb-6 text-center">📈 Bitcoin Supply Schedule</h3>
            <div className="relative h-60 md:h-80 bg-black/80 rounded-xl p-4 md:p-6 flex items-end justify-between gap-1 md:gap-2 overflow-x-auto">
              {[
                { year: '2009', supply: 0, height: '5%' },
                { year: '2012', supply: 10.5, height: '50%' },
                { year: '2016', supply: 15.75, height: '75%' },
                { year: '2020', supply: 18.375, height: '87%' },
                { year: '2024', supply: 19.69, height: '94%' },
                { year: '2028', supply: 20.34, height: '97%' },
                { year: '2032', supply: 20.67, height: '98%' },
                { year: '2036', supply: 20.84, height: '99%' },
                { year: '2140', supply: 21, height: '100%' }
              ].map((data, i) => (
                <div key={i} className="flex flex-col items-center flex-1">
                  <div 
                    className="w-full bg-gradient-to-t from-amber-500 to-yellow-400 rounded-t-lg transition-all duration-1000 hover:from-yellow-400 hover:to-amber-300"
                    style={{ height: data.height }}
                  ></div>
                  <div className="text-xs text-amber-200 mt-1 md:mt-2 text-center">
                    <div className="font-bold text-xs">{data.year}</div>
                    <div className="text-amber-200/60 text-xs">{data.supply}M</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-amber-900/50 border border-amber-500/50 text-amber-100 rounded-2xl p-6 shadow-lg">
            <h4 className="text-lg md:text-xl font-bold mb-4">🎯 Key Bitcoin Facts</h4>
            <ul className="space-y-2 text-sm md:text-base">
              <li><strong>Creator:</strong> Satoshi Nakamoto (pseudonymous)</li>
              <li><strong>Launch:</strong> January 3, 2009</li>
              <li><strong>Max Supply:</strong> 21 million BTC</li>
              <li><strong>Next Halving:</strong> ~2028 (rewards cut in half every 4 years)</li>
            </ul>
          </div>
          </div>
        </div>
        
        {/* Top 10 Cryptos */}
        <div className="section px-4 md:px-8 py-12 border-b border-amber-500/20 bg-black/20 w-full">
          <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-6 md:mb-8 flex items-center gap-3 md:gap-4 text-amber-100">
            <span className="w-12 h-12 rounded-full bg-black/80 border border-amber-500/50 flex items-center justify-center text-2xl text-amber-400">🏆</span>
            Top 10 Cryptocurrencies
          </h2>
          
          <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl p-4 md:p-6 mb-6 md:mb-8 shadow-lg">
            <h4 className="text-lg md:text-xl font-bold mb-3">⚠️ Rankings Change Frequently!</h4>
            <p className="text-sm md:text-base">
              Crypto rankings change constantly based on market conditions. For real-time data, visit{" "}
              <a href="https://www.coingecko.com" className="underline text-red-200">CoinGecko</a>{" "}
              or{" "}
              <a href="https://coinmarketcap.com" className="underline text-red-200">CoinMarketCap</a>.
            </p>
          </div>
          
          <div className="bg-black/70 backdrop-blur-sm border border-amber-500/30 rounded-2xl overflow-hidden overflow-x-auto">
            <table className="w-full min-w-full">
              <thead>
                <tr className="bg-black/80">
                  <th className="text-left p-3 md:p-5 text-amber-100 font-bold text-sm md:text-base">Rank</th>
                  <th className="text-left p-3 md:p-5 text-amber-100 font-bold text-sm md:text-base">Cryptocurrency</th>
                  <th className="text-left p-3 md:p-5 text-amber-100 font-bold text-sm md:text-base">What It Does</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { rank: 1, name: "Bitcoin (BTC)", desc: "First cryptocurrency; digital gold; store of value" },
                  { rank: 2, name: "Ethereum (ETH)", desc: "Smart contracts platform; powers DeFi and NFTs" },
                  { rank: 3, name: "XRP (XRP)", desc: "Fast cross-border payments for banks" },
                  { rank: 4, name: "Tether (USDT)", desc: "Dollar-pegged stablecoin for trading" },
                  { rank: 5, name: "Solana (SOL)", desc: "High-speed blockchain for apps" },
                  { rank: 6, name: "Binance Coin (BNB)", desc: "Utility token for Binance exchange" },
                  { rank: 7, name: "USD Coin (USDC)", desc: "Regulated dollar stablecoin" },
                  { rank: 8, name: "Dogecoin (DOGE)", desc: "Meme coin turned payment method" },
                  { rank: 9, name: "TRON (TRX)", desc: "Entertainment and content platform" },
                  { rank: 10, name: "Cardano (ADA)", desc: "Research-focused sustainable blockchain" }
                ].map((crypto, i) => (
                  <tr key={i} className={`border-b border-amber-500/20 hover:bg-amber-500/10 transition-colors duration-300 ${i % 2 === 0 ? 'bg-black/20' : ''}`}>
                    <td className="p-3 md:p-5">
                      <span className="w-8 h-8 bg-black/80 border border-amber-500/50 text-amber-400 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                        {crypto.rank}
                      </span>
                    </td>
                    <td className="p-3 md:p-5 text-amber-100 font-bold text-sm md:text-base">{crypto.name}</td>
                    <td className="p-3 md:p-5 text-amber-200/80 text-sm md:text-base">{crypto.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </div>
        </div>
        
        {/* Market Share Chart */}
        <div className="section px-4 md:px-8 py-12 border-b border-amber-500/20 bg-black/10 w-full">
          <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-6 md:mb-8 flex items-center gap-3 md:gap-4 text-amber-100">
            <span className="w-12 h-12 rounded-full bg-black/80 border border-amber-500/50 flex items-center justify-center text-2xl text-amber-400">📊</span>
            Crypto Market Overview
          </h2>
          <div className="bg-black/70 backdrop-blur-sm border border-amber-500/30 rounded-2xl p-4 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-amber-100 mb-4 md:mb-6 text-center">Market Dominance by Category</h3>
            <div className="relative h-60 md:h-80 flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="relative w-48 h-48 md:w-64 md:h-64">
                {/* Donut Chart using CSS */}
                <div className="absolute inset-0 rounded-full" style={{
                  background: `conic-gradient(
                    #f59e0b 0deg 162deg,
                    #10b981 162deg 234deg,
                    #3b82f6 234deg 288deg,
                    #8b5cf6 288deg 360deg
                  )`
                }}>
                  <div className="absolute inset-6 md:inset-8 bg-black rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-lg md:text-2xl font-bold text-amber-100">Crypto</div>
                      <div className="text-sm md:text-base text-amber-200/70">Market</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Legend */}
              <div className="md:ml-8 space-y-2 md:space-y-3">
                {[
                  { color: '#f59e0b', label: 'Bitcoin', value: '45%' },
                  { color: '#10b981', label: 'Ethereum', value: '20%' },
                  { color: '#3b82f6', label: 'Stablecoins', value: '15%' },
                  { color: '#8b5cf6', label: 'Other Altcoins', value: '20%' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-amber-200 text-sm">{item.label}</span>
                    <span className="text-amber-200/60 text-sm ml-auto">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </div>
        </div>
        
        {/* Security */}
        <div className="section px-4 md:px-8 py-12 border-b border-amber-500/20 bg-black/20 w-full">
          <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-6 md:mb-8 flex items-center gap-3 md:gap-4 text-amber-100">
            <span className="w-12 h-12 rounded-full bg-black/80 border border-amber-500/50 flex items-center justify-center text-2xl text-amber-400">🔒</span>
            Staying Safe in Crypto
          </h2>
          <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl p-4 md:p-6 mb-6 md:mb-8 shadow-lg">
            <h4 className="text-lg md:text-xl font-bold mb-3">🚨 Golden Rule: "Not Your Keys, Not Your Coins"</h4>
            <p className="text-sm md:text-base">If you don't control your private keys, you don't truly own your crypto. Always transfer significant amounts to your own wallet.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-black/70 backdrop-blur-sm border border-amber-500/30 rounded-2xl p-6 border-l-4 border-amber-400 hover:bg-black/80 transition-all duration-300">
              <h4 className="text-amber-400 text-lg md:text-xl font-bold mb-3">🔐 Use Hardware Wallets</h4>
              <p className="text-sm md:text-base text-amber-200/70">Cold storage devices keep your keys offline and safe from hackers</p>
            </div>
            <div className="bg-black/70 backdrop-blur-sm border border-amber-500/30 rounded-2xl p-6 border-l-4 border-amber-400 hover:bg-black/80 transition-all duration-300">
              <h4 className="text-amber-400 text-lg md:text-xl font-bold mb-3">🔑 Backup Your Seed Phrase</h4>
              <p className="text-sm md:text-base text-amber-200/70">Write down your 12-24 word recovery phrase and store it securely offline</p>
            </div>
            <div className="bg-black/70 backdrop-blur-sm border border-amber-500/30 rounded-2xl p-6 border-l-4 border-amber-400 hover:bg-black/80 transition-all duration-300">
              <h4 className="text-amber-400 text-lg md:text-xl font-bold mb-3">📱 Enable 2FA</h4>
              <p className="text-sm md:text-base text-amber-200/70">Add two-factor authentication to all your crypto accounts</p>
            </div>
            <div className="bg-black/70 backdrop-blur-sm border border-amber-500/30 rounded-2xl p-6 border-l-4 border-amber-400 hover:bg-black/80 transition-all duration-300">
              <h4 className="text-amber-400 text-lg md:text-xl font-bold mb-3">🎣 Avoid Phishing</h4>
              <p className="text-sm md:text-base text-amber-200/70">Always verify URLs and never click suspicious links or emails</p>
            </div>
          </div>
          </div>
        </div>
        
        {/* Common Myths */}
        <div className="section px-4 md:px-8 py-12 border-b border-amber-500/20 bg-black/10 w-full">
          <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-6 md:mb-8 flex items-center gap-3 md:gap-4 text-amber-100">
            <span className="w-12 h-12 rounded-full bg-black/80 border border-amber-500/50 flex items-center justify-center text-2xl text-amber-400">🚫</span>
            Busting Crypto Myths
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div>
              <div className="bg-red-900/40 border border-red-500/50 rounded-2xl p-6 mb-3">
                <h4 className="text-red-300 text-base md:text-lg font-bold mb-3">❌ Myth: "Crypto is anonymous"</h4>
                <p className="text-sm md:text-base text-red-200/80">Most blockchains are public - transactions can be traced!</p>
              </div>
              <div className="bg-amber-900/40 border border-amber-500/50 rounded-2xl p-6">
                <h4 className="text-amber-300 text-base md:text-lg font-bold mb-3">✅ Truth: Pseudonymous</h4>
                <p className="text-sm md:text-base text-amber-200/80">Crypto is pseudonymous - tied to wallet addresses, not names, but still traceable.</p>
              </div>
            </div>
            
            <div>
              <div className="bg-red-900/40 border border-red-500/50 rounded-2xl p-6 mb-3">
                <h4 className="text-red-300 text-base md:text-lg font-bold mb-3">❌ Myth: "It's too late to invest"</h4>
                <p className="text-sm md:text-base text-red-200/80">Crypto adoption is still early - but risks remain high!</p>
              </div>
              <div className="bg-amber-900/40 border border-amber-500/50 rounded-2xl p-6">
                <h4 className="text-amber-300 text-base md:text-lg font-bold mb-3">✅ Truth: Still Emerging</h4>
                <p className="text-sm md:text-base text-amber-200/80">We're still in early adoption phase, but past performance doesn't predict future results.</p>
              </div>
            </div>
            
            <div>
              <div className="bg-red-900/40 border border-red-500/50 rounded-2xl p-6 mb-3">
                <h4 className="text-red-300 text-base md:text-lg font-bold mb-3">❌ Myth: "You need whole coins"</h4>
                <p className="text-sm md:text-base text-red-200/80">You can't afford 1 Bitcoin? No problem!</p>
              </div>
              <div className="bg-amber-900/40 border border-amber-500/50 rounded-2xl p-6">
                <h4 className="text-amber-300 text-base md:text-lg font-bold mb-3">✅ Truth: Highly Divisible</h4>
                <p className="text-sm md:text-base text-amber-200/80">You can buy $10 worth of Bitcoin - crypto is divisible to many decimal places.</p>
              </div>
            </div>
          </div>
          </div>
        </div>
        
        {/* Getting Started */}
        <div className="section px-4 md:px-8 py-12 bg-black/20 w-full">
          <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-6 md:mb-8 flex items-center gap-3 md:gap-4 text-amber-100">
            <span className="w-12 h-12 rounded-full bg-black/80 border border-amber-500/50 flex items-center justify-center text-2xl text-amber-400">🚀</span>
            Your First Steps
          </h2>
          <p className="text-base md:text-lg text-amber-200/80 mb-6 md:mb-8 leading-relaxed">Ready to dip your toes in? Here's your beginner-friendly roadmap:</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {[
              { num: 1, title: "Research", desc: "Learn basics on Coinbase Learn or Binance Academy" },
              { num: 2, title: "Start Small", desc: "Begin with $50-100 you can afford to lose" },
              { num: 3, title: "Choose Exchange", desc: "Pick a regulated platform like Coinbase or Kraken" },
              { num: 4, title: "Buy & Learn", desc: "Make your first purchase and practice transfers" },
              { num: 5, title: "Get a Wallet", desc: "Download Trust Wallet or buy a Ledger device" },
              { num: 6, title: "Stay Updated", desc: "Follow reputable crypto news and communities" }
            ].map((step) => (
              <div key={step.num} className="bg-black/80 border border-amber-500/20 rounded-2xl p-6 text-center relative hover:bg-black/90 transition-all duration-300 hover:-translate-y-2">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-black/80 border border-amber-500/50 rounded-full flex items-center justify-center text-amber-400 font-bold shadow-lg">
                  {step.num}
                </div>
                <h4 className="text-sm md:text-base text-amber-100 font-bold mt-4 mb-3">{step.title}</h4>
                <p className="text-amber-200/70 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="bg-gradient-to-b from-black to-black text-amber-200 text-center px-4 md:px-8 py-12 md:py-16 w-full">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-amber-100 mb-4 md:mb-6">🎓 Remember: Education First, Investment Second</h3>
            <p className="text-amber-200/70 mb-6 md:mb-8 text-base md:text-lg">The cryptocurrency market is highly volatile and risky. Never invest more than you can afford to lose, and always prioritize learning over quick profits.</p>
            
            {/* Download CTA */}
            <div className="bg-amber-900/30 border border-amber-500/50 rounded-2xl p-6 md:p-8 mb-6 md:mb-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h4 className="text-xl md:text-2xl font-bold text-amber-100">Take This Guide With You!</h4>
                  <p className="text-sm md:text-base text-amber-200/70">Download the complete PDF version</p>
                </div>
              </div>
              <p className="text-sm md:text-base text-amber-200/80 mb-6">
                📄 Get the complete "Crypto Blueprint Beginner's Guide 2025 Edition" as a downloadable PDF to reference anytime, anywhere.
              </p>
              <button
                onClick={() => triggerDownload("https://rufgrcaxemvewhqiayfk.supabase.co/storage/v1/object/public/Crypto/The%20Crypto%20Blueprint%20Beginner's%20Guide%202026%20Edition%201.2.pdf", "Crypto-Blueprint-Free-Guide.pdf")}
                className="group inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold text-base md:text-lg transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25 hover:scale-105"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Free Guide
                <span className="text-xs md:text-sm opacity-75">(PDF)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Disclaimer Modal */}
      {showDisclaimerModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-black/90 backdrop-blur-xl border border-amber-500/30 rounded-2xl p-8 w-full max-w-lg"
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-500/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-amber-100 mb-4">Important Disclaimer</h3>
            </div>
            
            <div className="bg-amber-900/30 border border-amber-500/30 rounded-xl p-6 mb-6">
              <p className="text-amber-200/90 leading-relaxed text-center">
                This content is for informational purposes only and does not constitute financial or investment advice. Always conduct independent research before making investment decisions.
              </p>
            </div>
            
            <div className="flex justify-center gap-4">
              <button
                onClick={cancelDownload}
                className="px-6 py-3 rounded-xl bg-black/60 border border-amber-500/20 text-amber-200 hover:bg-black/80 transition-all duration-300"
              >
                Cancel
              </button>
              <button
                onClick={proceedWithDownload}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
              >
                I Understand, Download
              </button>
            </div>
          </motion.div>
        </div>
      )}
      
      <Footer />
    </div>
  );
}