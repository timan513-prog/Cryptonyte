import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, Globe } from 'lucide-react';

const RESOURCES = [
  { name: 'Free Guide', href: '/what-is-crypto' },
  { name: 'All Guides', href: '/guides' },
  { name: 'Learn & Earn', href: '/learn-and-earn' },
  { name: 'Blog', href: '/blog' },
  { name: 'FAQ', href: '/faq' },
];

const COMPANY = [
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Privacy', href: '/privacy' },
  { name: 'Terms', href: '/terms' },
  { name: 'Refund Policy', href: '/refund' },
];

const Footer: React.FC = () => {
  return (
    <footer
      className="relative border-t border-cream-100/10 mt-24"
      role="contentinfo"
    >
      <div className="container-page py-20">
        {/* Top — wordmark */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-5">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-champagne-300 text-ink-950 font-display font-bold">
                C
              </span>
              <span className="font-display text-2xl font-semibold text-cream-100">
                Cryptonyte
              </span>
            </Link>
            <p className="text-cream-200/70 max-w-md leading-relaxed">
              Clear, honest crypto education. We translate the jargon,
              cut the hype, and help you navigate digital assets with confidence.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <a
                href="mailto:mycryptonyte2026@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cream-100/15 text-cream-100/80 text-sm hover:border-champagne-300 hover:text-champagne-200 transition"
              >
                <Mail className="w-4 h-4" />
                mycryptonyte2026@gmail.com
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="eyebrow mb-4">Resources</h3>
            <ul className="space-y-3">
              {RESOURCES.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="group inline-flex items-center gap-2 text-cream-200/70 hover:text-cream-100 transition"
                  >
                    {item.name}
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0 transition" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="eyebrow mb-4">Company</h3>
            <ul className="space-y-3">
              {COMPANY.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="group inline-flex items-center gap-2 text-cream-200/70 hover:text-cream-100 transition"
                  >
                    {item.name}
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0 transition" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="eyebrow mb-4">Follow</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-cream-200/50 text-sm">
                <Globe className="w-4 h-4" />
                Website · soon
              </li>
              <li className="flex items-center gap-2 text-cream-200/50 text-sm">
                <Globe className="w-4 h-4" />
                Discord · soon
              </li>
              <li className="flex items-center gap-2 text-cream-200/50 text-sm">
                <Globe className="w-4 h-4" />
                Twitter · soon
              </li>
            </ul>
          </div>
        </div>

        {/* Oversized wordmark */}
        <div className="relative select-none">
          <div
            aria-hidden
            className="font-display font-black text-[22vw] leading-[0.8] tracking-tightest text-cream-100/[0.04] whitespace-nowrap overflow-hidden"
          >
            CRYPTONYTE
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 mt-4 border-t border-cream-100/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-cream-200/50 text-sm">
            © {new Date().getFullYear()} Cryptonyte · A brand of Recon11 Global Systems, LLC.
          </p>
          <p className="text-cream-200/40 text-xs max-w-md md:text-right">
            Educational content only. Nothing on this site constitutes financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
