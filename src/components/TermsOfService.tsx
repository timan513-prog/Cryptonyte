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

const TermsOfService = () => {
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
                Terms of Service
              </span>
            </h1>
            
            <div className="bg-black/60 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8 mb-8">
              <p className="text-amber-200/80 mb-6 text-lg">
                <strong>Effective Date:</strong> 12 December 2025
              </p>
              <p className="text-amber-200/80 mb-6 leading-relaxed">
                Welcome to Cryptonyte ("we," "our," or "us"). By accessing or using our website, mykryptonyte.com, you agree to the following Terms of Service. Please read them carefully before using our site.
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-black/60 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-amber-400 mb-6">1. Acceptance of Terms</h2>
                <p className="text-amber-200/80 leading-relaxed">
                  By accessing or using this website, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, please discontinue use of our website.
                </p>
              </div>

              <div className="bg-black/60 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-amber-400 mb-6">2. Use of the Website</h2>
                <ul className="space-y-2 text-amber-200/80">
                  <li>• You agree to use the website only for lawful purposes.</li>
                  <li>• You agree not to disrupt or interfere with the security or operation of the website.</li>
                  <li>• You may not use this site to distribute harmful content, spam, or malicious software.</li>
                </ul>
              </div>

              <div className="bg-black/60 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-amber-400 mb-6">3. Intellectual Property</h2>
                <p className="text-amber-200/80 leading-relaxed">
                  All content on this website, including text, graphics, logos, and design, is the property of Cryptonyte unless otherwise stated. You may not reproduce, distribute, or exploit our content without written permission.
                </p>
              </div>

              <div className="bg-black/60 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-amber-400 mb-6">4. No Financial Advice</h2>
                <p className="text-amber-200/80 leading-relaxed">
                  The information on mykryptonyte.com is for educational purposes only and does not constitute financial, investment, or legal advice. Always consult with a qualified professional before making any financial decisions.
                </p>
              </div>

              <div className="bg-black/60 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-amber-400 mb-6">5. Third-Party Links</h2>
                <p className="text-amber-200/80 leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the content, policies, or practices of these external sites.
                </p>
              </div>

              <div className="bg-black/60 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-amber-400 mb-6">6. Disclaimer of Warranties</h2>
                <p className="text-amber-200/80 leading-relaxed">
                  We provide the website "as is" without any warranties of any kind, express or implied. We make no guarantees about the accuracy, reliability, or availability of the site or its content.
                </p>
              </div>

              <div className="bg-black/60 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-amber-400 mb-6">7. Limitation of Liability</h2>
                <p className="text-amber-200/80 leading-relaxed">
                  To the fullest extent permitted by law, Cryptonyte shall not be liable for any damages resulting from your use of the website, including but not limited to direct, indirect, incidental, or consequential damages.
                </p>
              </div>

              <div className="bg-black/60 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-amber-400 mb-6">8. Changes to the Terms</h2>
                <p className="text-amber-200/80 leading-relaxed">
                  We may update these Terms of Service from time to time. Any changes will be posted on this page with a new effective date.
                </p>
              </div>

              <div className="bg-black/60 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-amber-400 mb-6">9. Governing Law</h2>
                <p className="text-amber-200/80 leading-relaxed">
                  These Terms shall be governed by and interpreted under the laws of your local jurisdiction, without regard to its conflict of laws principles.
                </p>
              </div>

              <div className="bg-black/60 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-amber-400 mb-6">10. Contact Information</h2>
                <p className="text-amber-200/80 mb-4 leading-relaxed">
                  For any questions about these Terms of Service, please contact us at:
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

export default TermsOfService;