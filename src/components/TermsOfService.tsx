import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService = () => {
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
  );
};

export default TermsOfService;