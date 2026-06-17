import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Download, Play } from 'lucide-react';
import CryptoPriceTracker from '../components/CryptoPriceTracker';
import {
  CursorSpotlight,
  SplitReveal,
  Counter,
  SectionWatermark,
  TiltCard,
} from '../components/effects/Effects';

const SECTION_LABEL = (n: string, label: string) => (
  <div className="flex items-center gap-3 mb-6">
    <span className="eyebrow text-[#e5c46d]">{n}</span>
    <span className="h-px flex-1 bg-[#e5c46d]/20" />
    <span className="eyebrow">{label}</span>
  </div>
);

const FEATURES = [
  {
    n: '01',
    title: 'Beginner-first, never dumbed down',
    body:
      'A structured path from "what is a wallet" to confident, independent thinking — no jargon dumps, no copy-paste advice.',
  },
  {
    n: '02',
    title: 'Security as a default posture',
    body:
      'Industry-grade habits baked into every lesson — seed phrase hygiene, signing risks, address sanity checks, social-engineering tells.',
  },
  {
    n: '03',
    title: 'Market literacy, not market noise',
    body:
      'Read charts, on-chain signals, and macro headlines the way analysts do — with the BS filter turned all the way up.',
  },
  {
    n: '04',
    title: 'Community over influencers',
    body:
      'Peer-reviewed insight, transparent sources, and a tone that treats you like an adult. No moonboys.',
  },
];

const MARQUEE_WORDS = [
  'No hype',
  'No shilling',
  'Just clarity',
  'Research-backed',
  'Beginner to pro',
  'Zero BS',
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

  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });

  return (
    <>
      {/* ───────────────── HERO ───────────────── */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col pt-28 lg:pt-32"
      >
        <div id="hero-spotlight-host" className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <CursorSpotlight />
        </div>
        <div className="relative max-w-[1400px] w-full mx-auto px-6 lg:px-10 flex-1 flex flex-col">
          {/* Issue line */}
          <div className="flex items-center justify-between hairline-b pb-4">
            <span className="eyebrow">Issue 01 — Vol. 2026</span>
            <span className="eyebrow tabular">{today}</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center flex-1 py-16 lg:py-24">
            {/* Headline + CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7"
            >
              <span className="eyebrow inline-flex items-center gap-2">
                <span className="live-dot" />
                Crypto education, decoded.
              </span>

              <h1 className="display mt-6 text-[clamp(2.75rem,7vw,5.75rem)] text-[#f4ecd8]">
                <SplitReveal text="Cut the noise." />
                <br />
                <span className="shimmer-sweep">
                  <SplitReveal text="Keep the signal." delay={0.35} />
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg text-[#c9bfa8] leading-relaxed">
                Cryptonyte is a calm, research-backed guide to digital finance —
                written for humans, not hype cycles. Read it once and stop
                guessing.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={() =>
                    triggerDownload(
                      "https://rufgrcaxemvewhqiayfk.supabase.co/storage/v1/object/public/Crypto/The%20Crypto%20Blueprint%20Beginner's%20Guide%202026%20Edition%201.2.pdf",
                      'Crypto-Blueprint-Free-Guide.pdf'
                    )
                  }
                  className="btn-gold inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-[15px]"
                >
                  <Download className="w-4 h-4" />
                  Download the free guide
                </motion.button>
                <Link
                  to="/what-is-crypto"
                  className="btn-ghost inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-[15px]"
                >
                  Read the index
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Quiet social proof row */}
              <div className="mt-12 grid grid-cols-3 max-w-md gap-6">
                <div>
                  <div className="display text-2xl text-[#e5c46d]">
                    <Counter value={60} suffix="+" />
                  </div>
                  <div className="text-xs text-[#8a8268] mt-1 leading-tight">
                    Pages of guide
                  </div>
                </div>
                <div>
                  <div className="display text-2xl text-[#e5c46d]">
                    <Counter value={4} pad={2} />
                  </div>
                  <div className="text-xs text-[#8a8268] mt-1 leading-tight">
                    Core modules
                  </div>
                </div>
                <div>
                  <div className="display text-2xl text-[#e5c46d] tabular">
                    24/7
                  </div>
                  <div className="text-xs text-[#8a8268] mt-1 leading-tight">
                    Live market data
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Blueprint card */}
            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-5"
            >
              <TiltCard className="relative hairline rounded-2xl bg-[#0c0a07]/80 backdrop-blur-sm overflow-hidden">
                <div className="flex items-center justify-between px-5 py-3 hairline-b">
                  <span className="eyebrow text-[#e5c46d]">Vol. 01</span>
                  <span className="eyebrow text-[#8a8268]">The Blueprint</span>
                </div>
                <div className="aspect-square w-full relative bg-gradient-to-br from-[#0c0a07] to-[#15110a] flex items-center justify-center">
                  <img
                    src="/image copy copy copy.png"
                    alt="The Cryptonyte Blueprint — cover"
                    className="w-[78%] h-[78%] object-contain animate-float"
                  />
                </div>
                <div className="px-5 py-4 hairline-t flex items-center justify-between">
                  <div>
                    <div className="text-[13px] text-[#f4ecd8] font-medium">
                      The Crypto Blueprint
                    </div>
                    <div className="text-[11px] text-[#8a8268]">
                      Beginner's Guide · 2026 Edition · PDF
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      triggerDownload(
                        "https://rufgrcaxemvewhqiayfk.supabase.co/storage/v1/object/public/Crypto/The%20Crypto%20Blueprint%20Beginner's%20Guide%202026%20Edition%201.2.pdf",
                        'Crypto-Blueprint-Free-Guide.pdf'
                      )
                    }
                    className="text-[#e5c46d] hover:text-[#f5d488] transition-colors text-xs font-medium inline-flex items-center gap-1"
                  >
                    Get it <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </TiltCard>
            </motion.aside>
          </div>
        </div>

        {/* Marquee strip */}
        <div className="hairline-t hairline-b py-4 overflow-hidden">
          <div className="marquee-track">
            {[...Array(2)].map((_, dup) => (
              <div key={dup} className="flex items-center gap-12 pr-12">
                {MARQUEE_WORDS.map((w, i) => (
                  <React.Fragment key={`${dup}-${i}`}>
                    <span className="eyebrow text-[#f4ecd8] whitespace-nowrap">
                      ✦ {w}
                    </span>
                    <span className="text-[#e5c46d]/40">/</span>
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── LIVE INDEX (price tracker) ─────────── */}
      <CryptoPriceTracker />

      {/* ─────────── 02 · WHY ─────────── */}
      <section id="guides" className="relative py-24 lg:py-32 overflow-hidden">
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <SectionWatermark n="02" align="right" />
          {SECTION_LABEL('02', 'Why Cryptonyte')}

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="display text-[clamp(2rem,4.5vw,3.5rem)] text-[#f4ecd8] lg:col-span-7"
            >
              Built for clarity,
              <br />
              <span className="text-[#e5c46d]">not chaos.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-[#c9bfa8] text-lg leading-relaxed lg:col-span-5 lg:pt-3"
            >
              Most crypto content is written to keep you trading. Ours is
              written to keep you informed. Here's what that looks like in
              practice.
            </motion.p>
          </div>

          {/* Numbered list rows */}
          <div className="hairline-t">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.n}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="group grid grid-cols-12 gap-6 py-7 lg:py-9 hairline-b"
              >
                <div className="col-span-12 sm:col-span-2 lg:col-span-1">
                  <span className="display text-2xl text-[#e5c46d] tabular">
                    {f.n}
                  </span>
                </div>
                <div className="col-span-12 sm:col-span-10 lg:col-span-5">
                  <h3 className="display text-2xl lg:text-3xl text-[#f4ecd8] group-hover:text-[#fff5d6] transition-colors">
                    {f.title}
                  </h3>
                </div>
                <div className="col-span-12 lg:col-span-5 lg:col-start-7">
                  <p className="text-[#c9bfa8] leading-relaxed">{f.body}</p>
                </div>
                <div className="hidden lg:flex lg:col-span-1 items-center justify-end">
                  <ArrowRight className="w-5 h-5 text-[#8a8268] group-hover:text-[#e5c46d] group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── 03 · WATCH ─────────── */}
      <section id="what-is-crypto-video" className="relative py-24 lg:py-32 overflow-hidden">
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <SectionWatermark n="03" align="left" />
          {SECTION_LABEL('03', 'Watch')}

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-end mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="display text-[clamp(2rem,4.5vw,3.5rem)] text-[#f4ecd8] lg:col-span-7"
            >
              What is crypto,
              <br />
              <span className="text-[#e5c46d]">in three minutes.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-[#c9bfa8] text-lg leading-relaxed lg:col-span-5"
            >
              A clear, beginner-friendly explanation of cryptocurrency and
              blockchain — and why it matters for your financial future.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="hairline rounded-2xl overflow-hidden bg-[#0c0a07]"
          >
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/aogr57Xu0P0?si=-SdqKz8Y1UMmpUuC"
                title="What is Crypto? — Cryptocurrency Explained"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="flex items-center justify-between px-5 py-4 hairline-t">
              <span className="eyebrow text-[#8a8268]">
                Vol. 01 · Module 00
              </span>
              <Link
                to="/what-is-crypto"
                className="inline-flex items-center gap-2 text-[#e5c46d] hover:text-[#f5d488] text-sm font-medium"
              >
                <Play className="w-4 h-4" />
                Open interactive guide
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────── 04 · MISSION ─────────── */}
      <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <SectionWatermark n="04" align="right" />
          {SECTION_LABEL('04', 'Mission')}

          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="display text-[clamp(1.75rem,4vw,3rem)] text-[#f4ecd8] max-w-5xl leading-[1.1]"
          >
            We translate market noise into language you'd actually want to
            read.
            <span className="text-[#e5c46d]"> No moonboys. No fluff.</span> Just
            the work.
          </motion.blockquote>

          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 hairline-t hairline-b">
            {[
              { k: 'Global', v: 'Built for readers everywhere' },
              { k: 'Active', v: 'Updated for the 2026 cycle' },
              { k: 'Expert', v: 'Research-led, peer-reviewed' },
              { k: 'Honest', v: 'No paid promotions, ever' },
            ].map((s, i) => (
              <div
                key={s.k}
                className={`p-6 lg:p-8 ${
                  i !== 0 ? 'lg:border-l border-[#e5c46d]/15' : ''
                } ${i % 2 !== 0 ? 'border-l border-[#e5c46d]/15 lg:border-l' : ''}`}
              >
                <div className="display text-3xl lg:text-4xl text-[#e5c46d]">
                  {s.k}
                </div>
                <div className="text-sm text-[#8a8268] mt-2 leading-snug">
                  {s.v}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-[#f4ecd8] hover:text-[#e5c46d] transition-colors"
            >
              <span className="eyebrow">More about us</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────── 05 · BLUEPRINT (final CTA) ─────────── */}
      <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <SectionWatermark n="05" align="left" />
          {SECTION_LABEL('05', 'The Blueprint')}

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="lg:col-span-8"
            >
              <h2 className="display text-[clamp(2.25rem,5.5vw,4.5rem)] text-[#f4ecd8]">
                Get the free
                <br />
                <span className="shimmer-sweep">2026 guide.</span>
              </h2>
              <p className="mt-6 text-lg text-[#c9bfa8] max-w-xl leading-relaxed">
                Sixty pages of plain-English crypto literacy. No email gate. No
                upsell. Just the PDF.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() =>
                    triggerDownload(
                      "https://rufgrcaxemvewhqiayfk.supabase.co/storage/v1/object/public/Crypto/The%20Crypto%20Blueprint%20Beginner's%20Guide%202026%20Edition%201.2.pdf",
                      'Crypto-Blueprint-Free-Guide.pdf'
                    )
                  }
                  className="btn-gold inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-[15px]"
                >
                  <Download className="w-4 h-4" />
                  Download free guide
                </button>
                <Link
                  to="/what-is-crypto"
                  className="btn-ghost inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-[15px]"
                >
                  Premium interactive guide
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-[15px] text-[#c9bfa8] hover:text-[#f4ecd8] transition-colors"
                >
                  Contact
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-4 hairline rounded-2xl p-6 bg-[#0c0a07]/80"
            >
              <div className="eyebrow text-[#e5c46d]">What's inside</div>
              <ul className="mt-5 space-y-3 text-[#c9bfa8] text-sm">
                {[
                  'Wallets, keys, and security defaults',
                  'On-chain basics, in plain English',
                  'Reading the market without panic',
                  'The honest risk side of crypto',
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <span className="mt-1.5 block w-1 h-1 rounded-full bg-[#e5c46d] flex-shrink-0" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────── Disclaimer Modal ─────────── */}
      {showDisclaimerModal && (
        <div
          className="fixed inset-0 bg-black/85 backdrop-blur-sm flex items-center justify-center z-[60] p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="disclaimer-title"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-md hairline rounded-2xl bg-[#0c0a07] p-7"
          >
            <div className="eyebrow text-[#e5c46d]">Important</div>
            <h3
              id="disclaimer-title"
              className="display text-2xl text-[#f4ecd8] mt-3"
            >
              A note before you download.
            </h3>
            <p className="mt-4 text-[#c9bfa8] leading-relaxed text-sm">
              This content is for educational and informational purposes only.
              It does not constitute financial or investment advice. Do your own
              research before making any decision involving money.
            </p>

            <div className="mt-7 flex items-center justify-end gap-2">
              <button
                onClick={cancelDownload}
                className="px-4 py-2.5 rounded-full text-sm text-[#c9bfa8] hover:text-[#f4ecd8] transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={proceedWithDownload}
                className="btn-gold inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm"
              >
                <Download className="w-4 h-4" />
                Understood, download
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default LandingPage;
