import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  BookOpen,
  Shield,
  TrendingUp,
  Users,
  Sparkles,
  PlayCircle,
  Check,
  AlertTriangle,
} from 'lucide-react';
import CryptoPriceTracker from '../components/CryptoPriceTracker';

const FEATURES = [
  {
    no: '01',
    icon: BookOpen,
    title: 'Beginner Friendly',
    body: 'Start from zero. Our structured path takes you from wallets to strategy without jargon.',
  },
  {
    no: '02',
    icon: Shield,
    title: 'Security First',
    body: 'Protect what you earn. Industry-standard practices, explained in plain English.',
  },
  {
    no: '03',
    icon: TrendingUp,
    title: 'Real Market Context',
    body: 'We teach you to read the market — not to chase signals or follow influencers.',
  },
  {
    no: '04',
    icon: Users,
    title: 'Community Powered',
    body: 'Learn with thousands of peers, mentors, and a growing library of honest guides.',
  },
];

const STEPS = [
  {
    step: 'Step 01',
    title: 'Grab the free blueprint',
    body: 'A 60-page PDF covering the essentials — wallets, blockchains, risk, and getting started safely.',
  },
  {
    step: 'Step 02',
    title: 'Explore the interactive guide',
    body: 'Self-paced lessons that build intuition: how coins move, why DeFi exists, what to ignore.',
  },
  {
    step: 'Step 03',
    title: 'Go deeper with the full course',
    body: 'Advanced strategies, trading frameworks, and the tools we actually use — in one place.',
  },
];

const LandingPage: React.FC = () => {
  const [showDisclaimerModal, setShowDisclaimerModal] = useState(false);
  const [pendingDownload, setPendingDownload] = useState<{
    url: string;
    filename: string;
  } | null>(null);

  function triggerDownload(url: string, filename?: string) {
    setPendingDownload({
      url,
      filename: filename || 'Crypto-Blueprint-Guide.pdf',
    });
    setShowDisclaimerModal(true);
  }

  function proceedWithDownload() {
    if (pendingDownload) {
      const { url, filename } = pendingDownload;
      const a = document.createElement('a');
      a.href = url + '#page=1';
      a.download = filename;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      document.body.appendChild(a);
      a.click();
      a.remove();
    }
    setShowDisclaimerModal(false);
    setPendingDownload(null);
  }

  function cancelDownload() {
    setShowDisclaimerModal(false);
    setPendingDownload(null);
  }

  return (
    <>
      {/* ─────────────── HERO ─────────────── */}
      <section className="relative pt-28 lg:pt-36 pb-16 lg:pb-24 overflow-hidden">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-end">
            {/* Left — editorial heading */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7"
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="eyebrow">
                  <span className="h-1.5 w-1.5 rounded-full bg-mint-300 animate-pulse" />
                  Honest crypto education · 2026
                </span>
              </div>

              <h1 className="display-xl text-cream-100 text-balance">
                Master crypto,
                <br />
                <span className="italic font-light text-champagne-200">
                  minus
                </span>{' '}
                the noise.
              </h1>

              <p className="mt-8 max-w-xl text-lg text-cream-200/75 leading-relaxed">
                Cryptonyte is a calm, research-backed library of guides,
                interactive lessons, and daily notes — built for people who
                want to understand digital assets, not gamble on them.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <Link to="/what-is-crypto" className="btn-gold">
                  Start learning free
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link to="/guides" className="btn-ghost">
                  Browse the guides
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-cream-200/60">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-mint-300" />
                  No sign-up to start
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-mint-300" />
                  Free 60-page PDF
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-mint-300" />
                  Zero financial advice
                </div>
              </div>
            </motion.div>

            {/* Right — logo card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative aspect-square rounded-[2rem] border border-cream-100/10 bg-gradient-to-br from-ink-800 to-ink-900 overflow-hidden">
                <div className="absolute inset-0 bg-dots opacity-40" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(229,184,92,0.18),transparent_60%)]" />
                <img
                  src="/image copy copy copy.png"
                  alt="Cryptonyte"
                  className="absolute inset-0 w-full h-full object-contain p-6"
                />
                {/* Corner marker */}
                <div className="absolute top-5 left-5 font-mono text-[10px] uppercase tracking-[0.3em] text-cream-100/60">
                  /cryptonyte — 001
                </div>
                <div className="absolute bottom-5 right-5 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-mint-300 animate-pulse" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream-100/60">
                    live
                  </span>
                </div>
              </div>

              {/* Floating stat chip */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 hidden sm:block"
              >
                <div className="card-raised p-5 w-60">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-mint-300/15 text-mint-300 flex items-center justify-center">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-cream-100 font-semibold text-sm">
                        New · 2026 edition
                      </div>
                      <div className="text-cream-200/60 text-xs">
                        Updated monthly
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Oversized backdrop wordmark */}
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-10 left-0 right-0 overflow-hidden select-none"
        >
          <div className="font-display font-black text-[20vw] leading-none tracking-tightest text-cream-100/[0.025] whitespace-nowrap">
            CRYPTONYTE · CRYPTONYTE
          </div>
        </div>
      </section>

      {/* ─────────────── LIVE PRICES ─────────────── */}
      <CryptoPriceTracker />

      {/* ─────────────── FEATURES ─────────────── */}
      <section className="relative py-24 lg:py-32">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-5">
              <span className="eyebrow">What we do</span>
              <h2 className="display-lg text-cream-100 mt-4">
                Education that
                <br />
                <span className="italic text-champagne-200">respects</span>{' '}
                your time.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex items-end">
              <p className="text-lg text-cream-200/70 leading-relaxed">
                We don't sell miracle picks or hype. We teach frameworks,
                build intuition, and show you how the space actually works —
                so you can decide what's right for you.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-cream-100/10 rounded-3xl overflow-hidden border border-cream-100/10">
            {FEATURES.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group relative bg-ink-900 p-8 lg:p-10 hover:bg-ink-800 transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-10">
                  <span className="font-mono text-xs text-champagne-300 tracking-widest">
                    {feature.no}
                  </span>
                  <feature.icon className="w-5 h-5 text-cream-100/50 group-hover:text-champagne-300 transition" />
                </div>
                <h3 className="font-display text-2xl text-cream-100 mb-3">
                  {feature.title}
                </h3>
                <p className="text-cream-200/70 leading-relaxed text-[15px]">
                  {feature.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── HOW IT WORKS / STEPS ─────────────── */}
      <section className="relative py-24 lg:py-32">
        <div className="container-page">
          <div className="mb-16 max-w-3xl">
            <span className="eyebrow">The path</span>
            <h2 className="display-lg text-cream-100 mt-4">
              Three steps from{' '}
              <span className="italic text-champagne-200">curious</span> to{' '}
              <span className="italic text-mint-300">confident</span>.
            </h2>
          </div>

          <div className="relative grid md:grid-cols-3 gap-6 lg:gap-8">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="card-raised p-8 h-full">
                  <div className="font-mono text-xs tracking-[0.3em] text-champagne-300 mb-8 uppercase">
                    {s.step}
                  </div>
                  <h3 className="font-display text-2xl text-cream-100 mb-3 leading-tight">
                    {s.title}
                  </h3>
                  <p className="text-cream-200/70 leading-relaxed text-[15px]">
                    {s.body}
                  </p>
                </div>
                {i < STEPS.length - 1 && (
                  <div
                    aria-hidden
                    className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-champagne-300 to-transparent"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── VIDEO / WHAT IS CRYPTO ─────────────── */}
      <section className="relative py-24 lg:py-32">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <span className="eyebrow">
                <PlayCircle className="w-3.5 h-3.5" />
                Watch · 6 min
              </span>
              <h2 className="display-lg text-cream-100 mt-4 mb-6">
                What is crypto,{' '}
                <span className="italic text-champagne-200">really?</span>
              </h2>
              <p className="text-lg text-cream-200/70 leading-relaxed mb-8">
                A clear, no-hype intro to cryptocurrency, blockchain, and
                why any of it matters for your financial future.
              </p>
              <Link
                to="/what-is-crypto"
                className="btn-gold"
              >
                Explore the interactive guide
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="relative rounded-2xl overflow-hidden border border-cream-100/10 bg-ink-900 shadow-card">
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/aogr57Xu0P0?si=-SdqKz8Y1UMmpUuC"
                    title="What is Crypto? — Cryptocurrency Explained"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────── ABOUT PREVIEW ─────────────── */}
      <section className="relative py-24 lg:py-32">
        <div className="container-page">
          <div className="card-raised p-10 lg:p-16 overflow-hidden relative">
            <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />
            <div className="relative grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <span className="eyebrow">About</span>
                <h2 className="display-lg text-cream-100 mt-4 mb-6">
                  A calmer corner of crypto.
                </h2>
                <p className="text-lg text-cream-200/75 leading-relaxed mb-4 max-w-2xl">
                  Crypto doesn't have to be overwhelming. We translate the
                  jargon, cut the hype, and turn complex concepts into
                  decisions you can actually make.
                </p>
                <p className="text-lg text-cream-200/75 leading-relaxed mb-8 max-w-2xl">
                  Whether you're starting from zero or looking to go deeper,
                  we write, research, and test everything ourselves —
                  so you're not guessing.
                </p>
                <Link to="/about" className="btn-ghost">
                  More about Cryptonyte
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                {[
                  { label: 'Guides', value: '40+' },
                  { label: 'Readers', value: 'Global' },
                  { label: 'Active since', value: '2024' },
                  { label: 'Updates', value: 'Monthly' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="relative p-6 rounded-2xl border border-cream-100/10 bg-ink-900/60"
                  >
                    <div className="font-display text-3xl text-champagne-200">
                      {stat.value}
                    </div>
                    <div className="mt-2 text-xs uppercase tracking-[0.22em] text-cream-100/50">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── CTA / GET STARTED ─────────────── */}
      <section id="contact" className="relative py-24 lg:py-32">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-champagne-300/30 bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 p-10 lg:p-20 text-center">
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(229,184,92,0.18),transparent_60%)]"
            />
            <div className="relative max-w-3xl mx-auto">
              <span className="eyebrow justify-center">
                <BookOpen className="w-3.5 h-3.5" />
                Free · 60-page PDF
              </span>

              <h2 className="display-lg text-cream-100 mt-6 mb-6 text-balance">
                Get the{' '}
                <span className="italic text-champagne-200">Crypto Blueprint</span>,
                on the house.
              </h2>
              <p className="text-lg text-cream-200/75 leading-relaxed mb-10 max-w-xl mx-auto">
                The 2026 beginner's guide — wallets, blockchains, strategy,
                risk, and the mistakes to avoid. Written by us, in plain English.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() =>
                    triggerDownload(
                      "https://rufgrcaxemvewhqiayfk.supabase.co/storage/v1/object/public/Crypto/The%20Crypto%20Blueprint%20Beginner's%20Guide%202026%20Edition%201.2.pdf",
                      'Crypto-Blueprint-Free-Guide.pdf'
                    )
                  }
                  className="btn-gold"
                >
                  <BookOpen className="w-4 h-4" />
                  Download free guide
                </button>
                <Link to="/what-is-crypto" className="btn-primary">
                  Premium interactive course
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link to="/contact" className="btn-ghost">
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── DISCLAIMER MODAL ─────────────── */}
      {showDisclaimerModal && (
        <div
          className="fixed inset-0 bg-ink-950/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="disclaimer-title"
          onClick={cancelDownload}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="card-raised p-8 w-full max-w-md"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="shrink-0 h-12 w-12 rounded-full bg-champagne-300/15 text-champagne-200 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h3
                  id="disclaimer-title"
                  className="font-display text-2xl text-cream-100 mb-2"
                >
                  Quick disclaimer.
                </h3>
                <p className="text-cream-200/75 leading-relaxed text-sm">
                  Everything in this guide is for education. It's not
                  financial or investment advice. Always do your own
                  research before making decisions.
                </p>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button onClick={cancelDownload} className="btn-ghost">
                Cancel
              </button>
              <button onClick={proceedWithDownload} className="btn-gold">
                I understand · Download
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default LandingPage;
