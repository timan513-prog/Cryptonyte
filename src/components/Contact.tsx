import React from 'react';
import { motion } from 'framer-motion';

const RefundPolicy = () => {
  return (
    <div className="w-full bg-gradient-to-b from-amber-500/5 to-transparent backdrop-blur-sm overflow-hidden pt-32">
            <div className="max-w-4xl mx-auto px-6 py-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-6xl font-black mb-8">
                  <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                    Refund Policy
                  </span>
                </h1>

                <div className="bg-black/60 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8 mb-8">
                  <p className="text-amber-200/80 mb-6 text-lg">
                    <strong>Effective Date:</strong> 12 December 2025
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="bg-black/60 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8">
                    <h2 className="text-3xl font-bold text-amber-400 mb-6">Our Refund Policy</h2>
                    <p className="text-amber-200/80 mb-6 leading-relaxed">
                      At Cryptonyte, we provide digital products and services delivered instantly after purchase. Due to the nature of our business, all sales are final and we do not offer refunds or exchanges.
                    </p>
                    <p className="text-amber-200/80 mb-6 leading-relaxed">
                      However, we stand by the quality of our products. If you experience any technical issues accessing or using your purchased materials, please contact us at{" "}
                      <a href="mailto:mycryptonyte2026@gmail.com" className="text-amber-400 hover:text-amber-300 underline transition-colors duration-300">
                        mycryptonyte2026@gmail.com
                      </a>{" "}
                      and we will work with you to resolve the problem promptly.
                    </p>
                    <p className="text-amber-200/80 leading-relaxed">
                      By completing a purchase on mykryptonyte.com, you acknowledge and agree to this policy.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-amber-600/20 to-yellow-600/20 border border-amber-400/30 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-amber-400 mb-4">Need Help?</h3>
                    <p className="text-amber-200/80 mb-4 leading-relaxed">
                      If you're experiencing any issues with your purchase or have questions about our products, we're here to help:
                    </p>
                    <div className="space-y-2 text-amber-200/80">
                      <p><strong>Email:</strong> <a href="mailto:mycryptonyte2026@gmail.com" className="text-amber-400 hover:text-amber-300 underline transition-colors duration-300">mycryptonyte2026@gmail.com</a></p>
                      <p>
                        <strong>Website:</strong>{" "}
                        <a
                          href="https://mycryptonyte.com/"
                          className="text-amber-400 hover:text-amber-300 underline transition-colors duration-300"
                        >
                          https://mycryptonyte.com/
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
  );
};

export default RefundPolicy;