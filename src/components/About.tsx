import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Users,
  Award,
  BookOpen,
  TrendingUp,
  Target,
} from 'lucide-react';

const VALUES = [
  {
    no: '01',
    icon: BookOpen,
    title: 'Education first',
    body: 'We prioritize learning over shortcuts. Understand before you invest — not the other way around.',
  },
  {
    no: '02',
    icon: Users,
    title: 'Community focused',
    body: 'A calm, supportive community where curiosity is welcome and dumb questions don’t exist.',
  },
  {
    no: '03',
    icon: Award,
    title: 'Quality content',
    body: 'Every guide is researched, tested, and updated. We take our own medicine.',
  },
  {
    no: '04',
    icon: TrendingUp,
    title: 'Practical approach',
    body: 'Real-world frameworks, not theory for its own sake. You’ll be able to act on what you learn.',
  },
];

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container-page">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <span className="eyebrow">
            <Target className="w-3.5 h-3.5" />
            About
          </span>
          <h1 className="display-xl text-cream-100 mt-4 mb-6 text-balance">
            Clear thinking.{' '}
            <span className="italic text-champagne-200">Honest</span> writing.
          </h1>
          <p className="text-lg text-cream-200/75 leading-relaxed">
            Cryptonyte exists to make crypto legible. We translate, test,
            and teach — so you can make informed decisions instead of
            following strangers on the internet.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-12 gap-10 mb-24"
        >
          <div className="lg:col-span-4">
            <span className="eyebrow">Our mission</span>
            <h2 className="display-md text-cream-100 mt-4">
              Make crypto{' '}
              <span className="italic text-champagne-200">understandable</span>
              .
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-6 text-[17px] text-cream-200/80 leading-relaxed">
            <p>
              We believe cryptocurrency education shouldn't be overwhelming
              or confusing. Our mission is to transform complex concepts
              into clear, digestible content — the kind that empowers
              anyone to act with confidence.
            </p>
            <p>
              We're committed to honest, research-backed information.
              Whether you're a complete beginner or an experienced investor
              looking to go deeper, you'll find something here that respects
              your intelligence and your time.
            </p>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="eyebrow">Principles</span>
              <h2 className="display-md text-cream-100 mt-4">Our core values</h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-cream-100/10 rounded-3xl overflow-hidden border border-cream-100/10">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="group bg-ink-900 p-8 lg:p-10 hover:bg-ink-800 transition-colors"
              >
                <div className="flex items-start justify-between mb-10">
                  <span className="font-mono text-xs text-champagne-300 tracking-widest">
                    {v.no}
                  </span>
                  <v.icon className="w-5 h-5 text-cream-100/50 group-hover:text-champagne-300 transition" />
                </div>
                <h3 className="font-display text-xl text-cream-100 mb-3">
                  {v.title}
                </h3>
                <p className="text-cream-200/70 text-[15px] leading-relaxed">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card-raised p-10 lg:p-16 mb-20"
        >
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <span className="eyebrow">Our story</span>
              <h2 className="display-md text-cream-100 mt-4">
                Why Cryptonyte exists.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-5 text-[17px] text-cream-200/80 leading-relaxed">
              <p>
                Cryptonyte was born from a simple observation: the crypto
                space was full of jargon, conflicting information, and
                schemes that left smart people confused.
              </p>
              <p>
                Talented, curious people were avoiding crypto entirely
                because they couldn't find reliable, beginner-friendly
                resources. Others were making costly mistakes because they
                jumped in without proper education.
              </p>
              <p>
                So we decided to build something different — a calm,
                research-driven corner of the internet focused on helping
                you actually understand what's going on.
              </p>

              <div className="pt-6 mt-2 border-t border-cream-100/10">
                <p className="text-cream-200/60 text-sm">
                  Cryptonyte is a brand of{' '}
                  <span className="text-cream-100 font-medium">
                    Recon11 Global Systems, LLC
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="display-md text-cream-100 mb-6">
            Ready to start your crypto journey?
          </h2>
          <p className="text-lg text-cream-200/70 mb-8 max-w-xl mx-auto">
            Join learners who trust Cryptonyte for clear, actionable
            education.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/what-is-crypto" className="btn-gold">
              <BookOpen className="w-4 h-4" />
              Start learning
            </Link>
            <Link to="/contact" className="btn-ghost">
              Get in touch
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
