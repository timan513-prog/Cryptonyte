import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MessageCircle, Clock, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const mailto = () => {
    const subject = encodeURIComponent(
      `Hello from ${form.name || 'Cryptonyte visitor'}`
    );
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}${
        form.email ? ` (${form.email})` : ''
      }`
    );
    window.location.href = `mailto:mycryptonyte2026@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.message.trim()) return;
    mailto();
  };

  return (
    <div className="pt-32 pb-24">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="eyebrow">
            <MessageCircle className="w-3.5 h-3.5" />
            Say hi
          </span>
          <h1 className="display-xl text-cream-100 mt-4 mb-6 text-balance">
            Questions? Feedback?{' '}
            <span className="italic text-champagne-200">Write to us.</span>
          </h1>
          <p className="text-lg text-cream-200/75 leading-relaxed">
            We read every message. Whether it's a content request, a
            technical issue, or a thoughtful critique — we'd love to hear
            from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 card-raised p-8 lg:p-10 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs uppercase tracking-[0.22em] text-cream-100/50 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full bg-ink-950 border border-cream-100/10 rounded-xl px-4 py-3 text-cream-100 placeholder:text-cream-100/30 focus:outline-none focus:border-champagne-300 transition"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.22em] text-cream-100/50 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@domain.com"
                  className="w-full bg-ink-950 border border-cream-100/10 rounded-xl px-4 py-3 text-cream-100 placeholder:text-cream-100/30 focus:outline-none focus:border-champagne-300 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-[0.22em] text-cream-100/50 mb-2">
                Message
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={6}
                placeholder="What's on your mind?"
                className="w-full bg-ink-950 border border-cream-100/10 rounded-xl px-4 py-3 text-cream-100 placeholder:text-cream-100/30 focus:outline-none focus:border-champagne-300 transition resize-none"
                required
              />
            </div>

            <div className="flex items-center justify-between gap-4 pt-2">
              <p className="text-xs text-cream-200/50">
                Submitting opens your mail app to send us a message.
              </p>
              <button
                type="submit"
                className="btn-gold whitespace-nowrap"
                disabled={!form.message.trim()}
              >
                {sent ? 'Opened mail app' : 'Send message'}
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.form>

          {/* Info panel */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-4"
          >
            <a
              href="mailto:mycryptonyte2026@gmail.com"
              className="card-raised p-6 block hover:border-champagne-300/40 transition"
            >
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-champagne-300/15 text-champagne-200 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-display text-lg text-cream-100 mb-1">
                    Email us directly
                  </div>
                  <div className="text-sm text-cream-200/70 break-all">
                    mycryptonyte2026@gmail.com
                  </div>
                </div>
              </div>
            </a>

            <div className="card-raised p-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-mint-300/15 text-mint-300 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-display text-lg text-cream-100 mb-1">
                    Response time
                  </div>
                  <div className="text-sm text-cream-200/70">
                    We reply within 1–2 business days.
                  </div>
                </div>
              </div>
            </div>

            <div className="card-raised p-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-cream-100/10 text-cream-100 flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-display text-lg text-cream-100 mb-1">
                    Elsewhere
                  </div>
                  <div className="text-sm text-cream-200/70">
                    Discord & Twitter — coming soon.
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  );
};

export default Contact;
