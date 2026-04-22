import React from 'react';
import { motion } from 'framer-motion';
import { Receipt, Mail } from 'lucide-react';

const RefundPolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container-page max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">
            <Receipt className="w-3.5 h-3.5" />
            Legal
          </span>
          <h1 className="display-xl text-cream-100 mt-4 mb-6 text-balance">
            Refund Policy
          </h1>
          <p className="text-cream-200/60 text-sm">
            Effective date · 12 December 2025
          </p>

          <div className="mt-12 space-y-6">
            <div className="card-raised p-8 lg:p-10">
              <h2 className="font-display text-2xl text-cream-100 mb-5">
                Our refund policy
              </h2>
              <div className="space-y-5 text-[15.5px] leading-relaxed text-cream-200/80">
                <p>
                  At Cryptonyte, we provide digital products and services
                  delivered instantly after purchase. Due to the nature
                  of our business, all sales are final — we do not offer
                  refunds or exchanges.
                </p>
                <p>
                  We stand by the quality of our products. If you
                  experience technical issues accessing or using your
                  purchased materials, contact us at{' '}
                  <a
                    href="mailto:mycryptonyte2026@gmail.com"
                    className="text-champagne-200 hover:text-champagne-100 underline underline-offset-4"
                  >
                    mycryptonyte2026@gmail.com
                  </a>{' '}
                  and we'll work with you to resolve it promptly.
                </p>
                <p>
                  By completing a purchase on mykryptonyte.com, you
                  acknowledge and agree to this policy.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-champagne-300/30 bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 p-8 lg:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(229,184,92,0.15),transparent_60%)] pointer-events-none" />
              <div className="relative">
                <h3 className="font-display text-xl text-cream-100 mb-4">
                  Need help?
                </h3>
                <p className="text-cream-200/80 mb-6 text-[15.5px] leading-relaxed">
                  If you're experiencing an issue with your purchase or
                  have questions about our products, we're happy to help.
                </p>
                <a
                  href="mailto:mycryptonyte2026@gmail.com"
                  className="btn-gold"
                >
                  <Mail className="w-4 h-4" />
                  mycryptonyte2026@gmail.com
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RefundPolicy;
