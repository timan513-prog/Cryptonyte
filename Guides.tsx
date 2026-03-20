import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
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
  );
};

export default PrivacyPolicy;