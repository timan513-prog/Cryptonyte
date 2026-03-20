import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link} from 'react-router-dom';
import { ArrowLeft, ArrowRight, BookOpen, Download, ShoppingCart, Check, Star, Sparkles, Shield, Zap, Crown } from 'lucide-react';
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring } from 'framer-motion';

/* ─────────────────────── PARTICLE CANVAS ─────────────────────── */
const ParticleField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number; pulse: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 800;
    };
    resize();
    window.addEventListener('resize', resize);

    // Create particles
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        pulse: Math.random() * Math.PI * 2 });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += 0.01;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const dynamicOpacity = p.opacity * (0.6 + 0.4 * Math.sin(p.pulse));

        // Gold glow
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);
        gradient.addColorStop(0, `rgba(245, 185, 66, ${dynamicOpacity})`);
        gradient.addColorStop(0.5, `rgba(245, 185, 66, ${dynamicOpacity * 0.3})`);
        gradient.addColorStop(1, 'rgba(245, 185, 66, 0)');

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 215, 100, ${dynamicOpacity * 1.5})`;
        ctx.fill();

        // Connect nearby particles
        particles.forEach((p2, j) => {
          if (j <= i) return;
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(245, 185, 66, ${0.06 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  );
};

/* ─────────────────────── 3D TILT CARD ─────────────────────── */
const TiltCard: React.FC<{ children: React.ReactNode; className?: string; glowColor?: string }> = ({ children, className = '', glowColor = 'amber' }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const smoothRotateX = useSpring(rotate{ stiffness: 150, damping: 20 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (e.clientY - centerY) / (rect.height / 2);
    const y = -(e.clientX - centerX) / (rect.width / 2);
    rotateX.set(x * 6);
    rotateY.set(y * 6);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: smoothRotateX,
        rotateY: smoothRotateY,
        perspective: 1200 }}
      className={`relative ${className}`}
    >
      {children}
    </motion.div>
  );
};

/* ─────────────────────── SCROLL REVEAL ─────────────────────── */
const ScrollReveal: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ children, delay = 0, className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ─────────────────────── ANIMATED COUNTER ─────────────────────── */
const AnimatedCounter: React.FC<{ value: string; label: string; delay?: number }> = ({ value, label, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-black bg-gradient-to-b from-amber-300 to-amber-500 bg-clip-text text-transparent font-['Instrument_Serif',Georgia,serif]">
        {value}
      </div>
      <div className="text-amber-200/50 text-sm mt-1 tracking-wider uppercase font-light">
        {label}
      </div>
    </motion.div>
  );
};

/* ─────────────────────── NAVBAR (unchanged) ─────────────────────── */
/* ─────────────────────── DATA ─────────────────────── */
const GUIDES = [
  {
    id: "advanced-crypto",
    title: "Advanced Crypto Guide",
    subtitle: "Master the Markets",
    description: "Master advanced trading strategies, DeFi protocols, and institutional-level crypto analysis techniques.",
    price: 39.99,
    stripeLink: "https://buy.stripe.com/cNi9ATfZL74GfQrcTb6Na06",
    downloadUrl: "https://rufgrcaxemvewhqiayfk.supabase.co/storage/v1/object/public/Crypto/Cryptonyte%20Advanced%20Crypto%20Guide%20(2026).pdf",
    features: ["Advanced Trading Strategies", "DeFi Deep Dive", "Risk Management", "Portfolio Optimization"],
    icon: ,
    accent: 'from-amber-400 to-orange-500' },
  {
    id: "cheat-sheet",
    title: "Crypto Cheat Sheet",
    subtitle: "Quick Reference",
    description: "Quick reference guide with essential crypto terms, formulas, and key concepts for instant access.",
    price: 9.99,
    stripeLink: "https://buy.stripe.com/3cI3cv14Rcp00Vxf1j6Na08",
    downloadUrl: "https://rufgrcaxemvewhqiayfk.supabase.co/storage/v1/object/public/Crypto/CRYPTONYTECHEATSHEET.pdf",
    features: ["Essential Terms", "Quick Formulas", "Key Concepts", "Handy Reference"],
    icon: Zap,
    accent: 'from-yellow-400 to-amber-500' },
  {
    id: "insider",
    title: "Insider Tips Guide",
    subtitle: "Expert Knowledge",
    description: "Exclusive insider knowledge and pro tips from experienced crypto traders and analysts.",
    price: 19.99,
    stripeLink: "https://buy.stripe.com/8x200jfZL4WycEff1j6Na07",
    downloadUrl: "https://rufgrcaxemvewhqiayfk.supabase.co/storage/v1/object/public/Crypto/CRYPTONYTEInsiderTipsGuide.pdf",
    features: ["Insider Strategies", "Pro Tips", "Market Insights", "Expert Analysis"],
    icon: Shield,
    accent: 'from-amber-500 to-yellow-400' },
  {
    id: "complete-series",
    title: "Complete Series 1.0",
    subtitle: "The Ultimate Bundle",
    description: "The ultimate crypto education bundle — all guides included with exclusive bonus content.",
    price: 59.99,
    originalPrice: 89.97,
    stripeLink: "https://buy.stripe.com/00weVd4h3gFg8nZ9GZ6Na05",
    downloadUrl: "https://rufgrcaxemvewhqiayfk.supabase.co/storage/v1/object/public/Crypto/CRYPTONYTECOMBO1.pdf",
    features: ["All 3 Guides Included", "Exclusive Bonus Content", "Lifetime Updates", "Priority Support"],
    icon: Crown,
    accent: 'from-yellow-300 via-amber-400 to-orange-500',
    popular: true },
];

const TESTIMONIALS = [
  {
    name: "Alex M.",
    role: "Crypto Investor",
    text: "The Advanced Guide completely changed how I approach DeFi. The risk management framework alone was worth 10x the price.",
    stars: 5 },
  {
    name: "Sarah K.",
    role: "Day Trader",
    text: "I keep the Cheat Sheet open on my second monitor. It's become an essential part of my daily trading routine.",
    stars: 5 },
  {
    name: "James R.",
    role: "Portfolio Manager",
    text: "The Complete Series is the most comprehensive crypto education resource I've found. Highly recommended for serious investors.",
    stars: 5 },
];

const COMPARISON_FEATURES = [
  { name: "Trading Strategies", advanced: true, cheat: false, insider: true, complete: true },
  { name: "DeFi Protocols", advanced: true, cheat: false, insider: false, complete: true },
  { name: "Quick Reference Cards", advanced: false, cheat: true, insider: false, complete: true },
  { name: "Key Formulas", advanced: true, cheat: true, insider: false, complete: true },
  { name: "Insider Tips & Signals", advanced: false, cheat: false, insider: true, complete: true },
  { name: "Risk Management", advanced: true, cheat: false, insider: true, complete: true },
  { name: "Portfolio Optimization", advanced: true, cheat: false, insider: false, complete: true },
  { name: "Market Psychology", advanced: false, cheat: false, insider: true, complete: true },
  { name: "Bonus Content", advanced: false, cheat: false, insider: false, complete: true },
  { name: "Lifetime Updates", advanced: false, cheat: false, insider: false, complete: true },
  { name: "Priority Support", advanced: false, cheat: false, insider: false, complete: true },
];

const validEtsyCodes = ["ETSY-EXAMPLE-123", "ETSY-EXAMPLE-456"];

const INDIVIDUAL_CODES: Record<string, string[]> = {
  "advanced-crypto": ["CRYPTO1", "crypto1"],
  "cheat-sheet": ["cheatsheet1", "CHEAT123", "cheat123"],
  "insider": ["insider1", "INSIDER123", "insider123"],
  "complete-series": ["COMPLETE123", "complete123", "cryptocombo1", "cryptocombo2", "cryptocombo3", "cryptocombo123"]
};

/* ─────────────────────── MAIN PAGE ─────────────────────── */
export default function Guides() {
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [selectedGuide, setSelectedGuide] = useState<string | null>(null);
  const [codeInput, setCodeInput] = useState("");
  const [unlockedGuides, setUnlockedGuides] = useState<Record<string, boolean>>({});
  const [message, setMessage] = useState("");
  const [showDisclaimerModal, setShowDisclaimerModal] = useState(false);
  const [pendingDownload, setPendingDownload] = useState<{ url: string; filename: string } | null>(null);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  function handleCodeSubmit(e: React.FormEvent) {
    e.preventDefault();
    const code = codeInput.trim();

    if (selectedGuide) {
      const validCodes = INDIVIDUAL_CODES[selectedGuide];
      if (validCodes && validCodes.includes(code)) {
        setUnlockedGuides(prev => ({ ...prev, [selectedGuide]: true }));
        setMessage(`✅ Code accepted — ${GUIDES.find(g => g.id === selectedGuide)?.title} is ready for download.`);
        setShowCodeModal(false);
        setSelectedGuide(null);
        setCodeInput("");
      } else {
        setMessage("❌ Invalid code for this guide. Please check your code.");
      }
    } else {
      let foundGuide: string | null = null;
      for (const [guideId, codes] of Object.entries(INDIVIDUAL_CODES)) {
        if (codes.includes(code)) {
          foundGuide = guideId;
          break;
        }
      }

      if (foundGuide) {
        setUnlockedGuides(prev => ({ ...prev, [foundGuide!]: true }));
        setMessage(`✅ Code accepted — ${GUIDES.find(g => g.id === foundGuide)?.title} is ready for download.`);
        setShowCodeModal(false);
        setCodeInput("");
      } else if (validEtsyCodes.includes(code)) {
        const unlocked: Record<string, boolean> = {};
        GUIDES.forEach((g) => (unlocked[g.id] = true));
        setUnlockedGuides(unlocked);
        setMessage("✅ Code accepted — your downloads are ready.");
        setShowCodeModal(false);
        setCodeInput("");
      } else {
        setMessage("❌ Invalid code. Please double-check your code.");
      }
    }
  }

  function triggerDownload(url: string, filename?: string) {
    setPendingDownload({ url, filename: filename || "Crypto-Blueprint-Guide.pdf" });
    setShowDisclaimerModal(true);
  }

  function proceedWithDownload() {
    if (pendingDownload) {
      const { url, filename } = pendingDownload;
      const a = document.createElement("a");
      a.href = url + "#page=1";
      a.download = filename;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
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
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

        .font-display { font-family: 'Instrument Serif', Georgia, serif; }
        .font-body { font-family: 'Plus Jakarta Sans', sans-serif; }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .shimmer-border {
          background: linear-gradient(90deg, transparent, rgba(245,185,66,0.4), transparent);
          background-size: 200% 100%;
          animation: shimmer 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .float-animation { animation: float 6s ease-in-out infinite; }

        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(245,185,66,0.15), 0 0 60px rgba(245,185,66,0.05); }
          50% { box-shadow: 0 0 30px rgba(245,185,66,0.25), 0 0 80px rgba(245,185,66,0.1); }
        }
        .glow-pulse { animation: glow-pulse 4s ease-in-out infinite; }

        .comparison-row:nth-child(even) { background: rgba(245,185,66,0.03); }
        .comparison-row:hover { background: rgba(245,185,66,0.08); }
      `}</style>

{/* ════════════ HERO SECTION ════════════ */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      >
        <ParticleField />

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,185,66,0.08)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/5 mb-8">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-amber-300/80 text-sm font-body tracking-wide">2025 Cryptonyte Series</span>
            </div>

            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] mb-8 tracking-tight">
              <span className="block text-amber-50">Premium</span>
              <span className="block bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                Crypto Guides
              </span>
            </h1>

            <p className="font-body text-lg md:text-xl text-amber-200/50 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
              Institutional-grade knowledge distilled into elegant, actionable guides.
              <br className="hidden md:block" />
              Built for the serious investor.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="#guides"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group relative overflow-hidden px-10 py-4 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-bold font-body text-base transition-all duration-500 hover:shadow-[0_0_40px_rgba(245,185,66,0.3)]"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Explore Guides
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </motion.a>

              <motion.button
                onClick={() => setShowCodeModal(true)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 rounded-full border border-amber-500/30 text-amber-200/80 font-medium font-body text-base hover:border-amber-400/60 hover:text-amber-100 transition-all duration-300 hover:bg-amber-500/5"
              >
                Redeem Access Code
              </motion.button>
            </div>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 grid grid-cols-3 gap-8 max-w-xl mx-auto"
          >
            <AnimatedCounter value="4" label="Expert Guides" delay={0.7} />
            <AnimatedCounter value="200+" label="Pages" delay={0.8} />
            <AnimatedCounter value="100%" label="Actionable" delay={0.9} />
          </motion.div>
        </div>
      </motion.section>

      {/* ════════════ ACCESS CODE NOTICE ════════════ */}
      <ScrollReveal className="max-w-4xl mx-auto px-6 mt-8 mb-16 relative z-10">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 rounded-2xl shimmer-border opacity-50 pointer-events-none" />
          <div className="relative bg-amber-950/20 backdrop-blur-sm border border-amber-500/15 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400/20 to-amber-600/10 flex items-center justify-center">
                <svg className="w-7 h-7 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div className="font-body">
                <h3 className="text-lg font-semibold text-amber-100 mb-1">Access Code Delivery</h3>
                <p className="text-amber-200/60 leading-relaxed text-sm">
                  Most codes arrive within <strong className="text-amber-200/90">1–2 hours</strong>, up to 24 hours max.
                  Haven't received yours?{' '}
                  <a href="mailto:mycryptonyte2026@gmail.com" className="text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors">
                    Contact us
                  </a>{' '}
                  for immediate help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Message Display */}
      {message && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center mb-8 px-6"
        >
          <div className={`inline-block px-6 py-3 rounded-xl font-medium font-body ${
            message.includes('✅')
              ? 'bg-green-900/40 text-green-200 border border-green-500/20'
              : 'bg-red-900/40 text-red-200 border border-red-500/20'
          }`}>
            {message}
          </div>
        </motion.div>
      )}

      {/* ════════════ GUIDES GRID ════════════ */}
      <section id="guides" className="max-w-7xl mx-auto px-6 pb-32">
        <ScrollReveal className="text-center mb-16">
          <span className="font-body text-amber-400/60 text-sm tracking-[0.25em] uppercase">Choose Your Edge</span>
          <h2 className="font-display text-4xl md:text-5xl text-amber-50 mt-3">The Collection</h2>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {GUIDES.map((guide, index) => {
            const IconComponent = guide.icon;
            return (
              <ScrollReveal key={guide.id} delay={index * 0.1}>
                <TiltCard className="h-full">
                  {/* Popular ribbon */}
                  {guide.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                      <div className="px-5 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-black text-xs font-bold font-body tracking-wider shadow-lg shadow-amber-500/30">
                        BEST VALUE
                      </div>
                    </div>
                  )}

                  <div className={`relative h-full rounded-2xl overflow-hidden transition-all duration-500 glow-pulse ${
                    guide.popular ? 'border-2 border-amber-400/50' : 'border border-amber-500/10 hover:border-amber-500/25'
                  }`}>
                    {/* Card inner gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-amber-500/[0.04] via-transparent to-amber-500/[0.02] pointer-events-none" />

                    <div className="relative p-7 flex flex-col h-full font-body">
                      {/* Icon & subtitle */}
                      <div className="flex items-center gap-3 mb-5">
                        <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${guide.accent} flex items-center justify-center shadow-lg`}>
                          <IconComponent className="w-5 h-5 text-black" />
                        </div>
                        <div>
                          <div className="text-[11px] tracking-[0.15em] uppercase text-amber-400/50 font-medium">{guide.subtitle}</div>
                        </div>
                      </div>

                      <h3 className="font-display text-2xl text-amber-50 mb-3 leading-tight">{guide.title}</h3>

                      <p className="text-amber-200/45 text-sm leading-relaxed mb-6 font-light flex-grow">
                        {guide.description}
                      </p>

                      {/* Features */}
                      <div className="mb-6 space-y-2">
                        {guide.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2.5 text-amber-200/60 text-sm">
                            <Check className="w-3.5 h-3.5 text-amber-400/70 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Pricing */}
                      <div className="mb-6 pt-4 border-t border-amber-500/10">
                        <div className="flex items-baseline gap-2">
                          <span className="font-display text-3xl text-amber-50">${guide.price.toFixed(2)}</span>
                          {guide.originalPrice && (
                            <span className="text-sm text-amber-200/30 line-through">${guide.originalPrice.toFixed(2)}</span>
                          )}
                        </div>
                        {guide.originalPrice && (
                          <div className="text-xs text-green-400/80 font-medium mt-1">
                            Save ${(guide.originalPrice - guide.price).toFixed(2)}
                          </div>
                        )}
                      </div>

                      {/* CTA */}
                      {unlockedGuides[guide.id] ? (
                        <div className="mt-auto relative z-10">
                        <motion.button
                          onClick={() => triggerDownload(guide.downloadUrl, `${guide.id}.pdf`)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full py-3.5 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 flex items-center justify-center gap-2"
                        >
                          <Download className="w-4 h-4" />
                          Download Now
                        </motion.button>
                        </div>
                      ) : (
                        <div className="space-y-2.5 mt-auto relative z-10">
                          <motion.a
                            href={guide.stripeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                              guide.popular
                                ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-black hover:shadow-lg hover:shadow-amber-500/25'
                                : 'bg-gradient-to-r from-amber-500/90 to-yellow-500/90 text-black hover:shadow-lg hover:shadow-amber-500/20'
                            }`}
                          >
                            <ShoppingCart className="w-4 h-4" />
                            Purchase Now
                          </motion.a>

                          <button
                            onClick={() => { setSelectedGuide(guide.id); setShowCodeModal(true); }}
                            className="w-full py-3 rounded-xl border border-amber-500/15 text-amber-200/60 text-sm font-medium hover:text-amber-200/90 hover:border-amber-500/30 hover:bg-amber-500/5 transition-all duration-300 flex items-center justify-center gap-2"
                          >
                            Have a Code?
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* ════════════ COMPARISON TABLE ════════════ */}
      <section className="max-w-5xl mx-auto px-6 pb-32">
        <ScrollReveal className="text-center mb-16">
          <span className="font-body text-amber-400/60 text-sm tracking-[0.25em] uppercase">Side by Side</span>
          <h2 className="font-display text-4xl md:text-5xl text-amber-50 mt-3">Compare Guides</h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="relative rounded-2xl overflow-hidden border border-amber-500/10">
            <div className="absolute inset-0 bg-gradient-to-b from-amber-500/[0.03] to-transparent pointer-events-none" />

            {/* Sticky header row */}
            <div className="relative overflow-x-auto">
              <table className="w-full font-body text-sm">
                <thead>
                  <tr className="border-b border-amber-500/10">
                    <th className="text-left py-5 px-6 text-amber-200/40 font-medium min-w-[180px]">Feature</th>
                    <th className="py-5 px-4 text-center min-w-[100px]">
                      <div className="text-amber-200/70 font-semibold text-xs">Advanced</div>
                      <div className="text-amber-400/40 text-[10px] mt-0.5">$39.99</div>
                    </th>
                    <th className="py-5 px-4 text-center min-w-[100px]">
                      <div className="text-amber-200/70 font-semibold text-xs">Cheat Sheet</div>
                      <div className="text-amber-400/40 text-[10px] mt-0.5">$9.99</div>
                    </th>
                    <th className="py-5 px-4 text-center min-w-[100px]">
                      <div className="text-amber-200/70 font-semibold text-xs">Insider</div>
                      <div className="text-amber-400/40 text-[10px] mt-0.5">$19.99</div>
                    </th>
                    <th className="py-5 px-4 text-center min-w-[100px] relative">
                      <div className="absolute -top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-b-full" />
                      <div className="text-amber-100 font-bold text-xs">Complete</div>
                      <div className="text-amber-400/60 text-[10px] mt-0.5">$59.99</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_FEATURES.map((feature, i) => (
                    <tr key={i} className="comparison-row border-b border-amber-500/5 transition-colors duration-200">
                      <td className="py-4 px-6 text-amber-200/60 font-medium">{feature.name}</td>
                      <td className="py-4 px-4 text-center">
                        {feature.advanced ? <Check className="w-4 h-4 text-amber-400 mx-auto" /> : <span className="text-amber-200/15">—</span>}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {feature.cheat ? <Check className="w-4 h-4 text-amber-400 mx-auto" /> : <span className="text-amber-200/15">—</span>}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {feature.insider ? <Check className="w-4 h-4 text-amber-400 mx-auto" /> : <span className="text-amber-200/15">—</span>}
                      </td>
                      <td className="py-4 px-4 text-center bg-amber-500/[0.04]">
                        {feature.complete ? <Check className="w-4 h-4 text-amber-400 mx-auto" /> : <span className="text-amber-200/15">—</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ════════════ TESTIMONIALS ════════════ */}
      <section className="max-w-5xl mx-auto px-6 pb-32">
        <ScrollReveal className="text-center mb-16">
          <span className="font-body text-amber-400/60 text-sm tracking-[0.25em] uppercase">What Readers Say</span>
          <h2 className="font-display text-4xl md:text-5xl text-amber-50 mt-3">Trusted by Traders</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.12}>
              <div className="relative rounded-2xl border border-amber-500/10 p-7 hover:border-amber-500/20 transition-all duration-500 group h-full">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-amber-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative">
                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  <p className="font-body text-amber-200/60 leading-relaxed mb-6 text-sm font-light italic">
                    "{t.text}"
                  </p>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400/20 to-amber-600/10 flex items-center justify-center">
                      <span className="text-amber-400 font-bold font-body text-sm">{t.name[0]}</span>
                    </div>
                    <div>
                      <div className="text-amber-100 font-semibold text-sm font-body">{t.name}</div>
                      <div className="text-amber-200/40 text-xs font-body">{t.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ════════════ ETSY CODE CTA ════════════ */}
      <section className="max-w-3xl mx-auto px-6 pb-32">
        <ScrollReveal>
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-yellow-500/10 pointer-events-none" />
            <div className="absolute inset-[1px] rounded-3xl bg-[#080808] pointer-events-none" />

            <div className="relative p-12 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-amber-400/20 to-amber-600/10 flex items-center justify-center float-animation">
                <BookOpen className="w-8 h-8 text-amber-400" />
              </div>

              <h3 className="font-display text-3xl text-amber-50 mb-3">Purchased on Etsy?</h3>
              <p className="font-body text-amber-200/50 mb-8 max-w-md mx-auto text-sm leading-relaxed">
                Enter your unlock code below to instantly access all your purchased guides.
              </p>

              <motion.button
                onClick={() => setShowCodeModal(true)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-bold font-body text-sm transition-all duration-500 hover:shadow-[0_0_40px_rgba(245,185,66,0.25)]"
              >
                Enter Etsy Code
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ════════════ DISCLAIMER MODAL ════════════ */}
      {showDisclaimerModal && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-[#0a0a0a] border border-amber-500/20 rounded-3xl p-10 w-full max-w-lg"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-amber-500/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="font-display text-3xl text-amber-50 mb-2">Disclaimer</h3>
            </div>

            <div className="bg-amber-950/20 border border-amber-500/10 rounded-2xl p-6 mb-8">
              <p className="font-body text-amber-200/70 leading-relaxed text-center text-sm">
                This content is for informational purposes only and does not constitute financial or investment advice. Always conduct independent research before making investment decisions.
              </p>
            </div>

            <div className="flex justify-center gap-4 font-body">
              <button
                onClick={cancelDownload}
                className="px-7 py-3 rounded-xl border border-amber-500/15 text-amber-200/60 hover:text-amber-200/90 hover:border-amber-500/30 transition-all duration-300 text-sm font-medium"
              >
                Cancel
              </button>
              <motion.button
                onClick={proceedWithDownload}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-7 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-bold text-sm hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
              >
                I Understand, Download
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}

      {/* ════════════ CODE MODAL ════════════ */}
      {showCodeModal && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-[#0a0a0a] border border-amber-500/20 rounded-3xl p-10 w-full max-w-md"
          >
            <h3 className="font-display text-3xl text-amber-50 mb-2 text-center">
              {selectedGuide ? 'Unlock Guide' : 'Enter Your Code'}
            </h3>
            {selectedGuide && (
              <p className="text-center text-amber-200/40 font-body text-sm mb-6">
                {GUIDES.find(g => g.id === selectedGuide)?.title}
              </p>
            )}
            {!selectedGuide && <div className="mb-6" />}

            <form onSubmit={handleCodeSubmit}>
              <input
                type="text"
                value={codeInput}
                onChange={(e) => setCodeInput(e.target.value)}
                placeholder="Paste your code here"
                className="w-full mb-6 rounded-xl border border-amber-500/15 bg-amber-500/[0.03] text-amber-100 p-4 text-center focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 focus:outline-none placeholder-amber-200/25 font-body transition-all duration-300"
              />
              <div className="flex justify-center gap-4 font-body">
                <button
                  type="button"
                  onClick={() => { setShowCodeModal(false); setSelectedGuide(null); setCodeInput(""); }}
                  className="px-7 py-3 rounded-xl border border-amber-500/15 text-amber-200/60 hover:text-amber-200/90 hover:border-amber-500/30 transition-all duration-300 text-sm font-medium"
                >
                  Cancel
                </button>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-7 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-bold text-sm hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
                >
                  {selectedGuide ? "Unlock Guide" : "Unlock Guides"}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      )}


  );
}