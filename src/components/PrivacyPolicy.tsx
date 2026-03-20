import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Globe, Layers, Target, Menu, X } from 'lucide-react';

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
    if (id === 'about') {
      navigate('/about');
      return;
    }
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <motion.div 
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className={`backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 shadow-2xl rounded-full px-6 py-3 transition-all duration-500 ${
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
              { label: 'GUIDES', href: '/guides', id: 'guides' },
              { label: 'LEARN & EARN', href: '/learn-and-earn', id: 'learn-and-earn' },
              { label: 'ABOUT', href: '/about', id: 'about' },
              { label: 'CONTACT', href: '#contact', id: 'contact' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={item.href.startsWith('/') ? undefined : onScrollLink(item.id)}
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
                  { label: 'GUIDES', href: '/guides', id: 'guides' },
                  { label: 'LEARN & EARN', href: '/learn-and-earn', id: 'learn-and-earn' },
                  { label: 'ABOUT', href: '/about', id: 'about' },
                  { label: 'CONTACT', href: '#contact', id: 'contact' },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={item.href.startsWith('/') ? () => setIsMobileMenuOpen(false) : onScrollLink(item.id)}
                    className="px-4 py-3 rounded-xl text-sm font-medium text-amber-200/80 hover:text-amber-100 hover:bg-amber-500/10 transition-all duration-300 text-center"
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

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen text-amber-100 w-full" style={{ backgroundColor: '#000000' }}>
      <NavBar />

      <div className="w-full bg-gradient-to-b from-amber-500/5 to-transparent backdrop-blur-sm overflow-hidden pt-32">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-black mb-8">
              <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                Privacy Policy
              </span>
            </h1>
            
            <div className="bg-black/60 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8 mb-8">
              <p className="text-amber-200/80 mb-6 text-lg">
                <strong>Effective Date:</strong> 12 December 2025
              </p>
              <p className="text-amber-200/80 mb-6 leading-relaxed">
                Cryptonyte ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and protect your information when you visit our website.
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-black/60 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-amber-400 mb-6">1. Information We Collect</h2>
                <p className="text-amber-200/80 mb-4 leading-relaxed">
                  We may collect the following information:
                </p>
                <div className="space-y-4">
                  <div className="bg-black/80 rounded-xl p-4 border border-amber-400/30">
                    <h3 className="text-amber-400 font-bold mb-2">Personal Information:</h3>
                    <p className="text-amber-200/70">Such as your name, email address, or other details you voluntarily provide when signing up for newsletters or contacting us.</p>
                  </div>
                  <div className="bg-black/80 rounded-xl p-4 border border-yellow-400/30">
                    <h3 className="text-yellow-400 font-bold mb-2">Non-Personal Information:</h3>
                    <p className="text-amber-200/70">Such as browser type, device information, IP address, and website usage data (e.g., pages visited, time spent).</p>
                  </div>
                </div>
              </div>

              <div className="bg-black/60 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-amber-400 mb-6">2. How We Use Your Information</h2>
                <p className="text-amber-200/80 mb-4 leading-relaxed">
                  We use the information we collect to:
                </p>
                <ul className="space-y-2 text-amber-200/80">
                  <li>• Provide and improve our services.</li>
                  <li>• Respond to inquiries or support requests.</li>
                  <li>• Send newsletters or updates (if you've opted in).</li>
                  <li>• Analyze site usage to enhance user experience.</li>
                </ul>
              </div>

              <div className="bg-black/60 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-amber-400 mb-6">3. Cookies and Tracking</h2>
                <p className="text-amber-200/80 mb-4 leading-relaxed">
                  We may use cookies or similar technologies to:
                </p>
                <ul className="space-y-2 text-amber-200/80 mb-4">
                  <li>• Improve site functionality.</li>
                  <li>• Analyze trends and traffic patterns.</li>
                  <li>• Remember user preferences.</li>
                </ul>
                <p className="text-amber-200/80 leading-relaxed">
                  You can adjust your browser settings to refuse cookies, but some site features may not work properly without them.
                </p>
              </div>

              <div className="bg-black/60 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-amber-400 mb-6">4. Sharing Your Information</h2>
                <p className="text-amber-200/80 mb-4 leading-relaxed">
                  We do not sell or rent your personal information. We may share data only when:
                </p>
                <ul className="space-y-2 text-amber-200/80">
                  <li>• Required by law or to protect legal rights.</li>
                  <li>• Working with trusted service providers who assist in site operations (e.g., hosting, analytics).</li>
                </ul>
              </div>

              <div className="bg-black/60 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-amber-400 mb-6">5. Third-Party Links</h2>
                <p className="text-amber-200/80 leading-relaxed">
                  Our website may contain links to third-party sites. We are not responsible for their privacy practices, so please review their policies separately.
                </p>
              </div>

              <div className="bg-black/60 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-amber-400 mb-6">6. Data Security</h2>
                <p className="text-amber-200/80 leading-relaxed">
                  We implement reasonable security measures to protect your personal information. However, no online system is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div className="bg-black/60 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-amber-400 mb-6">7. Children's Privacy</h2>
                <p className="text-amber-200/80 leading-relaxed">
                  Our website is not intended for children under 13, and we do not knowingly collect their personal information.
                </p>
              </div>

              <div className="bg-black/60 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-amber-400 mb-6">8. Your Rights</h2>
                <p className="text-amber-200/80 mb-4 leading-relaxed">
                  You may request to:
                </p>
                <ul className="space-y-2 text-amber-200/80">
                  <li>• Access or correct your personal information.</li>
                  <li>• Opt out of marketing emails.</li>
                  <li>• Delete your information (subject to legal obligations).</li>
                </ul>
              </div>

              <div className="bg-black/60 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-amber-400 mb-6">9. Updates to This Policy</h2>
                <p className="text-amber-200/80 leading-relaxed">
                  We may update this Privacy Policy periodically. The updated version will be posted on this page with a revised effective date.
                </p>
              </div>

              <div className="bg-black/60 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-amber-400 mb-6">10. Contact Us</h2>
                <p className="text-amber-200/80 mb-4 leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="space-y-2 text-amber-200/80">
                  <p><strong>Email:</strong> mycryptonyte2026@gmail.com</p>
                  <p><strong>Website:</strong> https://mycryptonyte.com/</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;