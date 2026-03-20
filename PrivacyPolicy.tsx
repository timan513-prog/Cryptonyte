import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Mail, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);

      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });

        // Reset status after 3 seconds
        setTimeout(() => setSubmitStatus('idle'), 3000);
      }, 1000);
    };
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
                    Contact Us
                  </span>
                </h1>

                <div className="bg-black/60 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8 mb-8">
                  <p className="text-amber-200/80 mb-6 text-lg leading-relaxed">
                    Have questions about crypto or need help with our guides? We're here to help! Send us a message and we'll get back to you as soon as possible.
                  </p>
                </div>

                <div className="bg-black/60 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-amber-100 font-bold mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-amber-500/30 text-amber-100 placeholder-amber-200/50 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-amber-100 font-bold mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-amber-500/30 text-amber-100 placeholder-amber-200/50 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-amber-100 font-bold mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-amber-500/30 text-amber-100 placeholder-amber-200/50 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent resize-vertical"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative overflow-hidden px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25 disabled:opacity-50 disabled:cursor-not-allowed w-full"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5"/>
                            Send Message
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-green-900/60 border border-green-500/30 rounded-xl p-4 text-green-200 text-center"
                      >
                        ✅ Message sent successfully! We'll get back to you soon.
                      </motion.div>
                    )}
                  </form>
                </div>
                <div className="bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-400/30 rounded-2xl p-8 mt-8">
                  <h3 className="text-2xl font-bold text-amber-100 mb-4">Other Ways to Reach Us</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-amber-400"/>
                      <span className="text-amber-200/80">
                        Email: <a href="mailto:mycryptonyte2026@gmail.com" className="text-amber-400 hover:text-amber-300 underline">mycryptonyte2026@gmail.com</a>
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <ExternalLink className="w-5 h-5 text-amber-400"/>
                      <span className="text-amber-200/80">
                        Website: <a href="https://mycryptonyte.com/" className="text-amber-400 hover:text-amber-300 underline">https://mycryptonyte.com/</a>
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
  );
};

export default Contact;