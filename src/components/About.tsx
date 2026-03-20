import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Award, BookOpen, TrendingUp, Target } from 'lucide-react';

const About = () => {
  return (
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
                <div className={`absolute inset-0 bg-gradient-to-r ${value.gradient}/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500`}></div>
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
                  Today, we're proud to serve learners worldwide, helping them navigate the crypto space with confidence and clarity.
                </p>

                {/* Recon11 Branding — About page only per Timothy's request */}
                <div className="mt-8 pt-8 border-t border-amber-500/20">
                  <p className="text-amber-200/60 text-base text-center">
                    Cryptonyte is a brand of <span className="text-amber-100 font-semibold">Recon11 Global Systems, LLC</span>
                  </p>
                </div>
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
                Join learners who trust Cryptonyte for clear, actionable crypto education.
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
  );
};

export default About;
