import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Globe, Layers, Target, Users, Award, BookOpen, TrendingUp, Menu, X } from 'lucide-react';

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
              { label: 'GUIDES', href: '#guides', id: 'guides' },
              { label: 'LEARN & EARN', href: '/learn-and-earn', id: 'learn-and-earn' },
              { label: 'ABOUT', href: '/about', id: 'about' },
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
                  { label: 'ABOUT', href: '/about', id: 'about' },
                  { label: 'CONTACT', href: '#contact', id: 'contact' },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={onScrollLink(item.id)}
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

const About = () => {
  return (
    <div className="min-h-screen text-amber-100 w-full" style={{ backgroundColor: '#000000' }}>
      <NavBar />

      <div className="w-full bg-gradient-to-b from-amber-500/5 to-transparent backdrop-blur-sm overflow-hidden pt-32">
        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                About Cryptonyte
              </span>
            </h1>
            <p className="text-xl text-amber-200/70 mb-4 max-w-3xl mx-auto">
              Empowering the next generation of crypto investors with clear, actionable education and strategies.
            </p>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-black/60 backdrop-blur-xl border border-amber-500/20 rounded-3xl p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-500">
                    <Target className="w-8 h-8 text-black"/>
                  </div>
                  <h2 className="text-3xl font-bold text-amber-100">Our Mission</h2>
                </div>
                <p className="text-lg text-amber-200/80 leading-relaxed mb-6">
                  At Cryptonyte, we believe that cryptocurrency education shouldn't be overwhelming or confusing. Our mission is to transform complex crypto concepts into clear, digestible content that empowers anyone to make informed decisions in the digital asset space.
                </p>
                <p className="text-lg text-amber-200/80 leading-relaxed">
                  We're committed to providing honest, research-backed information that helps you navigate the crypto landscape with confidence, whether you're a complete beginner or looking to expand your knowledge.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                Our Core Values
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: BookOpen,
                  title: "Education First",
                  description: "We prioritize learning over quick profits, ensuring you understand before you invest.",
                  gradient: "from-amber-500 to-yellow-500"
                },
                {
                  icon: Users,
                  title: "Community Focused",
                  description: "Building a supportive community where everyone can learn and grow together.",
                  gradient: "from-yellow-500 to-amber-400"
                },
                {
                  icon: Award,
                  title: "Quality Content",
                  description: "Every guide and resource is thoroughly researched and regularly updated.",
                  gradient: "from-amber-400 to-yellow-600"
                },
                {
                  icon: TrendingUp,
                  title: "Practical Approach",
                  description: "Real-world strategies and actionable insights you can implement immediately.",
                  gradient: "from-yellow-600 to-amber-500"
                }
              ].map((value, index) => (
                <div key={index} className="group relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${value.gradient.replace('from-', 'from-').replace('to-', 'to-')}/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500`}></div>
                  <div className="relative bg-black/60 backdrop-blur-xl border border-amber-500/20 rounded-2xl p-6 hover:bg-black/80 transition-all duration-300 h-full">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${value.gradient} mb-4 w-fit`}>
                      <value.icon className="w-6 h-6 text-black"/>
                    </div>
                    <h3 className="text-xl font-bold text-amber-100 mb-3">{value.title}</h3>
                    <p className="text-amber-200/70 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-black/60 backdrop-blur-xl border border-amber-500/20 rounded-3xl p-8 md:p-12">
                <h2 className="text-3xl font-bold text-amber-100 mb-6 text-center">Our Story</h2>
                <div className="space-y-6 text-lg text-amber-200/80 leading-relaxed">
                  <p>
                    Cryptonyte was born from a simple observation: the cryptocurrency space was full of complex jargon, conflicting information, and get-rich-quick schemes that left many people confused and overwhelmed.
                  </p>
                  <p>
                    We saw talented, intelligent people avoiding crypto entirely because they couldn't find reliable, beginner-friendly resources. Others were making costly mistakes because they jumped in without proper education.
                  </p>
                  <p>
                    That's when we decided to create something different. Cryptonyte focuses on breaking down complex concepts into digestible, actionable content. We believe that with the right education, anyone can understand and benefit from the cryptocurrency revolution.
                  </p>
                  <p>
                    Today, we're proud to serve thousands of learners worldwide, helping them navigate the crypto space with confidence and clarity.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-black/60 backdrop-blur-xl border border-amber-500/20 rounded-3xl p-8 md:p-12">
                <h2 className="text-3xl font-bold text-amber-100 mb-6">Ready to Start Your Crypto Journey?</h2>
                <p className="text-lg text-amber-200/70 mb-8 max-w-2xl mx-auto">
                  Join thousands of learners who trust Cryptonyte for clear, actionable crypto education.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/what-is-crypto"
                    className="group/btn relative overflow-hidden px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <BookOpen className="w-5 h-5"/>
                      Start Learning
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-amber-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                  <Link 
                    to="/contact"
                    className="group/btn relative overflow-hidden px-8 py-4 rounded-2xl bg-black/60 border border-amber-500/20 text-amber-100 font-bold text-lg transition-all duration-300 hover:bg-black/80"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Get in Touch
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300"/>
                    </span>
                  </Link>
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

export default About;