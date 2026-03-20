import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BookOpen,
  Shield,
  TrendingUp,
  Users,
  Globe,
  Target,
} from 'lucide-react';
import CryptoPriceTracker from '../components/CryptoPriceTracker';

const LandingPage: React.FC = () => {
  const [showDisclaimerModal, setShowDisclaimerModal] = useState(false);
  const [pendingDownload, setPendingDownload] = useState<{
    url: string;
    filename: string;
  } | null>(null);

  function triggerDownload(url: string, filename?: string) {
    setPendingDownload({
      url,
      filename: filename || 'Crypto-Blueprint-Guide.pdf',
    });
    setShowDisclaimerModal(true);
  }

  function proceedWithDownload() {
    if (pendingDownload) {
      const { url, filename } = pendingDownload;
      const a = document.createElement('a');
      a.href = url + '#page=1';
      a.download = filename;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
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
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8"
      >
        <div className="absolute inset-0 bg-gradient-radial from-[#1A1300] via-transparent to-transparent opacity-60" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
            {/* Left side — Logo */}
            <div className="flex items-start justify-center pt-8 order-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative text-center flex flex-col items-center"
              >
                <div className="absolute inset-0 bg-gradient-radial from-[#CDA349]/40 to-transparent rounded-full blur-3xl animate-pulse" />
                <div className="absolute inset-0 bg-gradient-radial from-amber-400/30 to-transparent rounded-full blur-2xl animate-pulse" />
                <img
                  src="/image copy copy copy.png"
                  alt="Cryptonyte — cryptocurrency education platform logo"
                  className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] xl:h-[900px] object-contain drop-shadow-2xl mx-auto"
                />
              </motion.div>
            </div>

            {/* Right side — Hero text */}
            <div className="text-left flex flex-col justify-center min-h-[500px] lg:mt-16 order-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mt-16"
              >
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent font-[800] tracking-wide">
                    Master Crypto
                  </span>
                  <br />
                  <span className="text-amber-100 font-[800] tracking-wide">
                    Like a{' '}
                    <span className="bg-gradient-to-r from-[#FFD966] to-[#CDA349] bg-clip-text text-transparent">
                      Pro
                    </span>
                  </span>
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl lg:max-w-[70%] leading-relaxed text-[#FDF7E4]">
                  Transform crypto complexity into clear, actionable strategies.
                  Join thousands learning the future of finance.
                </p>
              </motion.div>
            </div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8 sm:mt-16 px-4"
          >
            <motion.a
              href="/what-is-crypto"
              className="group relative overflow-hidden px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold text-base sm:text-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(205,163,73,0.33)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <BookOpen className="w-5 h-5" />
                Start Learning Free
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
            <motion.a
              href="/guides"
              className="group relative overflow-hidden px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-transparent border border-amber-500/30 text-[#FDF7E4] font-bold text-base sm:text-lg transition-all duration-300 shadow-[inset_0_0_20px_rgba(205,163,73,0.1)] hover:shadow-[0_0_15px_rgba(205,163,73,0.33),inset_0_0_30px_rgba(205,163,73,0.2)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span className="group-hover:hidden">View Guides</span>
                <span className="hidden group-hover:inline">
                  Explore the Guides
                </span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Live Crypto Prices */}
      <CryptoPriceTracker />

      {/* Features Section */}
      <section id="guides" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                Why Choose Cryptonyte?
              </span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-[#FDF7E4]">
              We break down complex crypto concepts into digestible, actionable
              insights you can use immediately.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: BookOpen,
                title: 'Beginner Friendly',
                description:
                  'Start from zero knowledge and build expertise step by step with our structured learning path.',
                gradient: 'from-amber-500 to-yellow-500',
              },
              {
                icon: Shield,
                title: 'Security First',
                description:
                  'Learn to protect your investments with industry-standard security practices and tools.',
                gradient: 'from-yellow-500 to-amber-400',
              },
              {
                icon: TrendingUp,
                title: 'Market Insights',
                description:
                  'Stay ahead with real-time analysis, trends, and actionable market intelligence.',
                gradient: 'from-amber-400 to-yellow-600',
              },
              {
                icon: Users,
                title: 'Community Driven',
                description:
                  'Join a supportive community of learners and experts sharing knowledge and experiences.',
                gradient: 'from-yellow-600 to-amber-500',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.gradient}/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500`}
                />
                <div className="relative bg-black/60 backdrop-blur-xl border border-amber-500/20 rounded-2xl p-8 hover:bg-black/80 transition-all duration-300 h-full">
                  <div
                    className={`p-4 rounded-xl bg-gradient-to-r ${feature.gradient} mb-6 w-fit`}
                  >
                    <feature.icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-amber-100 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-amber-200/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Crypto Video Section */}
      <section id="what-is-crypto-video" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                What is Crypto?
              </span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-[#FDF7E4]">
              Watch our comprehensive introduction to cryptocurrency and
              discover why it's revolutionizing the financial world.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-black/60 backdrop-blur-xl border border-amber-500/20 rounded-3xl p-8">
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-black/80 mb-6">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/aogr57Xu0P0?si=-SdqKz8Y1UMmpUuC"
                    title="What is Crypto? — Cryptocurrency Explained"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <p className="text-lg mb-6 leading-relaxed text-center text-[#FDF7E4]">
                  Get a clear, beginner-friendly explanation of cryptocurrency,
                  blockchain technology, and why it matters for your financial
                  future.
                </p>
                <div className="text-center">
                  <Link
                    to="/what-is-crypto"
                    className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25"
                  >
                    <BookOpen className="w-5 h-5" />
                    Explore Interactive Guide
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section id="about" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-yellow-500/5" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-black mb-8">
                <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                  About Cryptonyte
                </span>
              </h2>
              <p className="text-lg mb-6 leading-relaxed text-[#FDF7E4]">
                We believe cryptocurrency education shouldn't be overwhelming.
                Our mission is to transform complex concepts into clear,
                actionable content that empowers informed decision-making.
              </p>
              <p className="text-lg mb-8 leading-relaxed text-[#FDF7E4]">
                Whether you're a complete beginner or looking to expand your
                knowledge, we provide honest, research-backed information to
                help you navigate the crypto landscape with confidence.
              </p>
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold transition-all duration-300 hover:shadow-[0_0_15px_rgba(205,163,73,0.33)]"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-3xl blur-xl" />
              <div className="relative bg-black/60 backdrop-blur-xl border border-amber-500/20 rounded-3xl p-8">
                <h3 className="text-3xl font-bold text-amber-100 mb-6 text-center">
                  Our Impact
                </h3>
                <p className="text-lg mb-8 text-center text-[#FDF7E4]">
                  Trusted by learners worldwide, we're building the future of
                  crypto education.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    {
                      icon: Globe,
                      label: 'Global Reach',
                      value: 'Growing Globally',
                    },
                    {
                      icon: Users,
                      label: 'Community',
                      value: 'Active Community',
                    },
                    {
                      icon: BookOpen,
                      label: 'Resources',
                      value: 'Expert Resources',
                    },
                    {
                      icon: Target,
                      label: 'Quality',
                      value: 'Quality Focused',
                    },
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 flex items-center justify-center">
                        <stat.icon className="w-6 h-6 text-black" />
                      </div>
                      <div className="text-2xl font-bold text-amber-100 mb-1">
                        {stat.value}
                      </div>
                      <div className="text-amber-200/70 text-sm">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section id="contact" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                Ready to Start?
              </span>
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-[#FDF7E4]">
              Get your FREE Crypto Blueprint guide and join thousands of
              learners mastering cryptocurrency.
            </p>

            {/* Free Guide Highlight */}
            <div className="bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-400/30 rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-black" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-amber-100">
                    The Crypto Blueprint
                  </h3>
                  <p className="text-[#FDF7E4]">
                    Beginner's Guide 2026 Edition
                  </p>
                </div>
              </div>
              <p className="text-sm text-[#FDF7E4]">
                Complete PDF guide covering everything from basics to advanced
                strategies
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() =>
                  triggerDownload(
                    "https://rufgrcaxemvewhqiayfk.supabase.co/storage/v1/object/public/Crypto/The%20Crypto%20Blueprint%20Beginner's%20Guide%202026%20Edition%201.2.pdf",
                    'Crypto-Blueprint-Free-Guide.pdf'
                  )
                }
                className="group relative overflow-hidden px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold text-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(205,163,73,0.33)]"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Download Free Guide
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              <Link
                to="/what-is-crypto"
                className="group relative overflow-hidden px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold text-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(205,163,73,0.33)]"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Premium Interactive Guide
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <Link
                to="/contact"
                className="group relative overflow-hidden px-8 py-4 rounded-2xl bg-black/60 border border-amber-500/30 text-[#FDF7E4] font-bold text-lg transition-all duration-300 hover:bg-black/80 hover:shadow-[0_0_15px_rgba(205,163,73,0.33)]"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Contact Us
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer Modal */}
      {showDisclaimerModal && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="disclaimer-title"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-black/90 backdrop-blur-xl border border-amber-500/30 rounded-2xl p-8 w-full max-w-lg"
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-500/20 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-amber-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>
              <h3
                id="disclaimer-title"
                className="text-2xl font-bold text-amber-100 mb-4"
              >
                Important Disclaimer
              </h3>
            </div>

            <div className="bg-amber-900/30 border border-amber-500/30 rounded-xl p-6 mb-6">
              <p className="text-amber-200/90 leading-relaxed text-center">
                This content is for informational purposes only and does not
                constitute financial or investment advice. Always conduct
                independent research before making investment decisions.
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
    </>
  );
};

export default LandingPage;
