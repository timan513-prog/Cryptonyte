import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Layers, Target } from 'lucide-react';

const RESOURCE_LINKS = [
  { name: 'Free Guide', href: '/what-is-crypto' },
  { name: 'Advanced Course', href: '/guides' },
  { name: 'Blog', href: '/blog' },
  { name: 'FAQ', href: '/faq' },
];

const LEGAL_LINKS = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Refund Policy', href: '/refund' },
  { name: 'Contact', href: '/contact' },
];

const SOCIAL_LINKS = [
  { icon: Globe, label: 'Website — Coming Soon', href: '#' },
  { icon: Layers, label: 'Discord — Coming Soon', href: '#' },
  { icon: Target, label: 'Twitter — Coming Soon', href: '#' },
];

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black border-t border-amber-500/20" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Link to="/">
                <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                  Cryptonyte
                </span>
              </Link>
            </div>
            <p className="text-amber-200/60 mb-6 max-w-md">
              Transforming crypto complexity into clear, actionable strategies
              for the next generation of digital investors.
            </p>

            {/* Social — placeholder with Coming Soon tooltips */}
            <div className="flex gap-4">
              {SOCIAL_LINKS.map(({ icon: Icon, label }, i) => (
                <div key={i} className="relative group">
                  <div
                    className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center hover:bg-amber-500/30 transition-colors duration-300 cursor-default"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5 text-amber-400" />
                  </div>
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 rounded-lg bg-black/90 border border-amber-500/20 text-amber-200/80 text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    {label}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black/90" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-amber-100 font-bold mb-4">Resources</h3>
            <div className="space-y-2">
              {RESOURCE_LINKS.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-amber-200/60 hover:text-amber-100 transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-amber-100 font-bold mb-4">Legal</h3>
            <div className="space-y-2">
              {LEGAL_LINKS.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-amber-200/60 hover:text-amber-100 transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-amber-500/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-amber-200/60">
            © {new Date().getFullYear()} Cryptonyte. All rights reserved.
          </p>
          <p className="text-amber-200/40 text-sm">
            Empowering the next generation of crypto investors
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
