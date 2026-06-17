import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

/** Thin gold progress bar pinned to the top of the viewport. */
export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    mass: 0.3,
  });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-[#e5c46d] origin-left z-[60]"
      aria-hidden="true"
    />
  );
};

/**
 * Warm gold halo that follows the cursor inside its parent.
 * Hidden on touch / coarse pointers.
 */
export const CursorSpotlight: React.FC<{ className?: string }> = ({
  className = '',
}) => {
  const [pos, setPos] = useState({ x: -1000, y: -1000 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const onMove = (e: PointerEvent) => {
      const target = (e.currentTarget as HTMLElement) || document.body;
      const rect = target.getBoundingClientRect?.();
      if (!rect) return;
      setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    const host = document.getElementById('hero-spotlight-host');
    if (!host) return;
    const onEnter = () => setVisible(true);
    const onLeave = () => setVisible(false);
    host.addEventListener('pointermove', onMove as EventListener);
    host.addEventListener('pointerenter', onEnter);
    host.addEventListener('pointerleave', onLeave);
    return () => {
      host.removeEventListener('pointermove', onMove as EventListener);
      host.removeEventListener('pointerenter', onEnter);
      host.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${
        visible ? 'opacity-100' : 'opacity-0'
      } ${className}`}
      style={{
        background: `radial-gradient(420px circle at ${pos.x}px ${pos.y}px, rgba(229,196,109,0.13), transparent 60%)`,
      }}
    />
  );
};

/** Animated word-stagger reveal for display headlines. */
export const SplitReveal: React.FC<{
  text: string;
  className?: string;
  delay?: number;
}> = ({ text, className = '', delay = 0 }) => {
  const words = text.split(' ');
  return (
    <span className={className}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-baseline">
          <motion.span
            initial={{ y: '110%' }}
            animate={{ y: '0%' }}
            transition={{
              duration: 0.7,
              ease: [0.2, 0.7, 0.2, 1],
              delay: delay + i * 0.06,
            }}
            className="inline-block"
          >
            {w}
            {i < words.length - 1 && ' '}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

/** Counts from 0 to `value` when scrolled into view. */
export const Counter: React.FC<{
  value: number;
  suffix?: string;
  pad?: number;
  duration?: number;
  className?: string;
}> = ({ value, suffix = '', pad, duration = 1.4, className = '' }) => {
  const [n, setN] = useState(0);
  const ref = React.useRef<HTMLSpanElement | null>(null);
  const started = React.useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / (duration * 1000));
              const eased = 1 - Math.pow(1 - t, 3);
              setN(Math.round(value * eased));
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value, duration]);

  const formatted = pad ? String(n).padStart(pad, '0') : String(n);
  return (
    <span ref={ref} className={`tabular ${className}`}>
      {formatted}
      {suffix}
    </span>
  );
};

/**
 * Massive ghosted section number rendered behind a section as a watermark.
 * Pin it inside a `relative` parent.
 */
export const SectionWatermark: React.FC<{
  n: string;
  align?: 'left' | 'right';
}> = ({ n, align = 'right' }) => (
  <span
    aria-hidden="true"
    className={`pointer-events-none absolute -top-8 ${
      align === 'right' ? 'right-2 lg:right-6' : 'left-2 lg:left-6'
    } display select-none text-[clamp(8rem,22vw,22rem)] leading-none text-transparent`}
    style={{
      WebkitTextStroke: '1px rgba(229,196,109,0.08)',
    }}
  >
    {n}
  </span>
);

/**
 * Subtle 3D tilt that follows the cursor. Disabled on coarse pointers.
 */
export const TiltCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  max?: number;
}> = ({ children, className = '', max = 6 }) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [t, setT] = useState({ rx: 0, ry: 0 });

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const el = ref.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = (e.clientX - cx) / (r.width / 2);
      const dy = (e.clientY - cy) / (r.height / 2);
      setT({ rx: -dy * max, ry: dx * max });
    };
    const onLeave = () => setT({ rx: 0, ry: 0 });
    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);
    return () => {
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
    };
  }, [max]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `perspective(900px) rotateX(${t.rx}deg) rotateY(${t.ry}deg)`,
        transformStyle: 'preserve-3d',
        transition: 'transform 300ms cubic-bezier(0.2,0.7,0.2,1)',
      }}
    >
      {children}
    </div>
  );
};
