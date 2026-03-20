import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = React.useState<Record<number, boolean>>({});

    const toggleItem = (index: number) => {
      setOpenItems(prev => ({
        ...prev,
        [index]: !prev[index]
      }));
    };

    const faqs = [
      {
        question: "What is Cryptonyte?",
        answer: "Cryptonyte is an educational platform dedicated to making cryptocurrency accessible to everyone. We provide clear, actionable guides and resources to help you understand and navigate the crypto space with confidence."
      },
      {
        question: "Is Cryptonyte free to use?",
        answer: "Yes! We offer free educational content including our Crypto Blueprint guide. We also have premium guides available for those who want more in-depth knowledge and advanced strategies."
      },
      {
        question: "Do you provide financial advice?",
        answer: "No, we do not provide financial advice. All content on Cryptonyte is for educational purposes only. We strongly recommend consulting with qualified financial professionals before making any investment decisions."
      },
      {
        question: "How do I get started with cryptocurrency?",
        answer: "Start with our free Crypto Blueprint guide to learn the basics. Then, begin with small amounts you can afford to lose, choose a reputable exchange, and always prioritize security by using hardware wallets for significant holdings."
      },
      {
        question: "Are your guides suitable for beginners?",
        answer: "Absolutely! Our guides are designed with beginners in mind. We break down complex concepts into easy-to-understand language and provide step-by-step instructions for getting started safely."
      },
      {
        question: "How often is your content updated?",
        answer: "We regularly update our content to reflect the latest developments in the cryptocurrency space. The crypto world moves fast, and we ensure our guides remain current and relevant."
      },
      {
        question: "Can I download your guides?",
        answer: "Yes! Our guides are available as downloadable PDFs so you can reference them anytime, anywhere. Premium guides require purchase, while some basic guides are available for free."
      },
      {
        question: "Do you offer refunds?",
        answer: "Due to the digital nature of our products, all sales are final. However, if you experience technical issues accessing your purchased materials, please contact us and we'll resolve the problem promptly."
      },
      {
        question: "How can I stay updated with crypto news?",
        answer: "Follow reputable crypto news sources, join our community, and consider subscribing to our updates. Always verify information from multiple sources before making decisions."
      },
      {
        question: "Is cryptocurrency safe?",
        answer: "Cryptocurrency can be safe when proper security measures are followed. This includes using hardware wallets, enabling two-factor authentication, backing up seed phrases, and only using reputable exchanges. Our guides cover security best practices in detail."
      },
      {
        question: "What's the difference between your free and premium guides?",
        answer: "Free guides cover fundamental concepts and basic getting-started information. Premium guides dive deeper into advanced strategies, detailed analysis, market insights, and comprehensive step-by-step tutorials."
      },
      {
        question: "How do I contact support?",
        answer: "You can reach us at mycryptonyte2026@gmail.com for any questions, technical issues, or support needs. We aim to respond to all inquiries promptly."
      }
    ];
  return (
    <div className="w-full bg-gradient-to-b from-amber-500/5 to-transparent backdrop-blur-sm overflow-hidden pt-32">
            <div className="max-w-4xl mx-auto px-6 py-12">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h1 className="text-5xl md:text-6xl font-black mb-6">
                  <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                    Frequently Asked Questions
                  </span>
                </h1>
                <p className="text-xl text-amber-200/70 mb-4 max-w-3xl mx-auto">
                  Find answers to common questions about Cryptonyte, cryptocurrency, and our educational resources.
                </p>
              </motion.div>

              {/* FAQ Items */}
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <FAQItem
                      question={faq.question}
                      answer={faq.answer}
                      isOpen={openItems[index] || false}
                      onToggle={() => toggleItem(index)}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Contact CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-center mt-16"
              >
                <div className="bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-400/30 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-amber-100 mb-4">Still Have Questions?</h3>
                  <p className="text-amber-200/70 mb-6">
                    Can't find what you're looking for? We're here to help! Reach out to us directly.
                  </p>
                  <Link 
                    to="/contact"
                    className="group relative overflow-hidden px-8 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25 inline-flex items-center gap-2"
                  >
                    <span className="relative z-10">Contact Us</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"/>
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
  );
};

export default FAQ;