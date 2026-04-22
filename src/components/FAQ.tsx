import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, HelpCircle, Plus } from 'lucide-react';

const FAQS = [
  {
    q: 'What is Cryptonyte?',
    a: 'Cryptonyte is an educational platform dedicated to making cryptocurrency accessible to everyone. We provide clear, actionable guides and resources to help you understand and navigate the crypto space with confidence.',
  },
  {
    q: 'Is Cryptonyte free to use?',
    a: 'Yes. We offer free educational content including our Crypto Blueprint guide. We also have premium guides for those who want more in-depth knowledge and advanced strategies.',
  },
  {
    q: 'Do you provide financial advice?',
    a: 'No, we do not provide financial advice. All content on Cryptonyte is for educational purposes only. We strongly recommend consulting with qualified financial professionals before making any investment decisions.',
  },
  {
    q: 'How do I get started with cryptocurrency?',
    a: 'Start with our free Crypto Blueprint guide to learn the basics. Then, begin with small amounts you can afford to lose, choose a reputable exchange, and always prioritize security by using hardware wallets for significant holdings.',
  },
  {
    q: 'Are your guides suitable for beginners?',
    a: 'Absolutely. Our guides are designed with beginners in mind. We break down complex concepts into easy-to-understand language and provide step-by-step instructions for getting started safely.',
  },
  {
    q: 'How often is your content updated?',
    a: 'We regularly update our content to reflect the latest developments in the cryptocurrency space. The crypto world moves fast, and we ensure our guides remain current and relevant.',
  },
  {
    q: 'Can I download your guides?',
    a: 'Yes. Our guides are available as downloadable PDFs so you can reference them anytime, anywhere. Premium guides require purchase, while some basic guides are available for free.',
  },
  {
    q: 'Do you offer refunds?',
    a: 'Due to the digital nature of our products, all sales are final. However, if you experience technical issues accessing your purchased materials, please contact us and we\'ll resolve the problem promptly.',
  },
  {
    q: 'How can I stay updated with crypto news?',
    a: 'Follow reputable crypto news sources, join our community, and consider subscribing to our updates. Always verify information from multiple sources before making decisions.',
  },
  {
    q: 'Is cryptocurrency safe?',
    a: 'Cryptocurrency can be safe when proper security measures are followed. This includes using hardware wallets, enabling two-factor authentication, backing up seed phrases, and only using reputable exchanges. Our guides cover security best practices in detail.',
  },
  {
    q: "What's the difference between your free and premium guides?",
    a: 'Free guides cover fundamental concepts and basic getting-started information. Premium guides dive deeper into advanced strategies, detailed analysis, market insights, and comprehensive step-by-step tutorials.',
  },
  {
    q: 'How do I contact support?',
    a: 'You can reach us at mycryptonyte2026@gmail.com for any questions, technical issues, or support needs. We aim to respond to all inquiries promptly.',
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-32 pb-24">
      <div className="container-page max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="eyebrow">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently asked
          </span>
          <h1 className="display-xl text-cream-100 mt-4 mb-6 text-balance">
            Answers to the{' '}
            <span className="italic text-champagne-200">common</span>{' '}
            questions.
          </h1>
          <p className="text-lg text-cream-200/75 leading-relaxed">
            Everything you need to know about Cryptonyte, our guides, and
            getting started with crypto. Still stuck? Reach out at the
            bottom.
          </p>
        </motion.div>

        <div className="rounded-3xl border border-cream-100/10 overflow-hidden bg-ink-900/70">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.q}
                className={`border-b border-cream-100/10 last:border-b-0 transition ${
                  isOpen ? 'bg-ink-800/50' : ''
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-6 px-6 lg:px-10 py-6 text-left group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-5">
                    <span className="font-mono text-xs text-champagne-300 tracking-widest mt-1.5 w-8 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-display text-lg lg:text-xl text-cream-100 leading-snug">
                      {item.q}
                    </span>
                  </div>
                  <span
                    className={`shrink-0 h-8 w-8 rounded-full border border-cream-100/15 flex items-center justify-center text-cream-100/70 group-hover:border-champagne-300 group-hover:text-champagne-300 transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  >
                    <Plus className="w-4 h-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 lg:px-10 pb-6 pl-[4.5rem] lg:pl-[5.5rem] text-cream-200/75 leading-relaxed text-[15.5px] max-w-3xl">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 relative overflow-hidden rounded-3xl border border-champagne-300/30 bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 p-10 lg:p-14 text-center"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(229,184,92,0.15),transparent_60%)] pointer-events-none" />
          <div className="relative max-w-2xl mx-auto">
            <h2 className="display-md text-cream-100 mb-4">
              Still have questions?
            </h2>
            <p className="text-cream-200/75 mb-8">
              Can't find what you're looking for? We're here to help.
            </p>
            <Link to="/contact" className="btn-gold">
              Contact us
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
