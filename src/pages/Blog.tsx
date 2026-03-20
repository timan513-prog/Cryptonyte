import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, PenTool } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Icon */}
          <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-500 flex items-center justify-center">
            <PenTool className="w-10 h-10 text-black" />
          </div>

          <h1 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
              Cryptonyte Blog
            </span>
          </h1>

          <p className="text-xl text-amber-200/70 mb-4 max-w-2xl mx-auto">
            Daily insights, market analysis, and crypto education straight from
            the Cryptonyte team.
          </p>

          {/* Coming Soon Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12"
          >
            <div className="group relative max-w-xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-3xl blur-xl" />
              <div className="relative bg-black/60 backdrop-blur-xl border border-amber-500/20 rounded-3xl p-10">
                <div className="w-3 h-3 bg-amber-400 rounded-full mx-auto mb-6 animate-pulse" />
                <h2 className="text-2xl font-bold text-amber-100 mb-4">
                  Coming Soon
                </h2>
                <p className="text-amber-200/70 leading-relaxed mb-8">
                  We're building a daily blog with market breakdowns, beginner
                  tips, DeFi deep-dives, and honest takes on what's happening in
                  crypto. Check back soon.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/guides"
                    className="group/btn inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold transition-all duration-300 hover:shadow-[0_0_15px_rgba(205,163,73,0.33)]"
                  >
                    <BookOpen className="w-5 h-5" />
                    Browse Guides
                  </Link>
                  <Link
                    to="/"
                    className="group/btn inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-black/60 border border-amber-500/20 text-amber-100 font-bold transition-all duration-300 hover:bg-black/80"
                  >
                    Back to Home
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
