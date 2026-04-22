import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, AlertTriangle, Coins, ShieldAlert } from 'lucide-react';

const PLATFORMS = [
  {
    name: 'Swyftx Learn',
    url: 'https://learn.swyftx.com/cryptocurrency/introduction-to-cryptocurrency',
    description: 'Introduction to cryptocurrency fundamentals.',
  },
  {
    name: 'Freecash Academy',
    url: 'https://freecash.com/academy/en/cashout/free-crypto',
    description: 'Earn crypto through games and tasks.',
  },
  {
    name: 'Phemex Learn Crypto',
    url: 'https://phemex.com/learn-crypto',
    description: 'Comprehensive crypto education platform.',
  },
  {
    name: 'BitDegree Learndrops',
    url: 'https://www.bitdegree.org/learndrops',
    description: 'Learn blockchain and earn crypto rewards.',
  },
  {
    name: 'Binance Learn & Earn',
    url: 'https://www.binance.com/en/academy/learn-and-earn',
    description: 'Educational courses with crypto rewards.',
  },
  {
    name: 'Coinbase Earn',
    url: 'https://www.coinbase.com/earn',
    description: 'Watch videos and earn crypto.',
  },
  {
    name: 'eToro Learn',
    url: 'https://www.etoro.com/learn/',
    description: 'Trading education and market insights.',
  },
  {
    name: 'Crypto.com University',
    url: 'https://crypto.com/university',
    description: 'Crypto education and learning resources.',
  },
];

const METHODS = [
  {
    title: 'Sign-up bonuses from crypto exchanges',
    content:
      'Many exchanges reward new users with free crypto for opening an account and completing basic actions like identity verification or a small trade. Common platforms include Coinbase, eToro, Gemini, and Crypto.com. Bonuses vary and are often time-limited, so it pays to keep an eye on promotions.',
  },
  {
    title: 'Crypto staking rewards',
    content:
      'Staking earns you rewards by helping secure a blockchain network. Proof-of-stake coins pay ongoing rewards while you hold them. Returns vary by asset, and higher yields usually come with higher risk. Some staking programs offered by exchanges have faced regulatory scrutiny, so always understand the platform rules first.',
  },
  {
    title: 'Free NFTs (that can be sold for crypto)',
    content:
      "NFTs aren't cryptocurrency, but they can often be sold or traded for crypto. Ways to get free NFTs include project giveaways on Discord, social-media promotions, and early-supporter rewards. Be mindful of tax implications when receiving or selling NFTs.",
  },
  {
    title: 'Learn-and-earn programs',
    content:
      'Educational programs reward users with small amounts of crypto for watching videos and passing quizzes. Popular examples include learning campaigns run by major exchanges and crypto data platforms. Beginner-friendly and low risk — rewards are modest.',
  },
  {
    title: 'Crypto savings accounts',
    content:
      'Some platforms pay interest on crypto you hold, similar to a savings account. Returns are typically higher than traditional banks, especially for stablecoins, but funds may be locked for set periods and are not FDIC-insured.',
  },
  {
    title: 'Crypto lending (DeFi or platform-based)',
    content:
      'Lend crypto to users or protocols and earn interest — through decentralized finance platforms or centralized providers. Risk management is critical; borrower defaults or protocol failures can result in losses.',
  },
  {
    title: 'Brokerage cash bonuses converted to crypto',
    content:
      'Some traditional brokerages offer cash bonuses for opening accounts or referrals. Bonuses are paid in dollars but can often be converted to crypto immediately — a low-effort way to stack using traditional-investing incentives.',
  },
  {
    title: 'Airdrops',
    content:
      'Crypto projects sometimes distribute free tokens to generate awareness. To qualify, users may need to hold a specific token, interact with a blockchain, or follow project communities. Many airdrops are legitimate, but scams are common — never connect wallets blindly.',
  },
  {
    title: 'Crypto rewards credit cards',
    content:
      'Crypto credit cards reward spending with crypto instead of cash back. Rewards are typically paid in Bitcoin or major altcoins. As with any credit card, avoid carrying balances just to chase rewards.',
  },
  {
    title: 'Surveys and microtasks',
    content:
      'Some platforms pay users crypto for completing surveys, playing games, or testing apps. Freecash is one example with payouts in crypto, cash, or gift cards.',
  },
  {
    title: 'Earn crypto while browsing the web',
    content:
      "The Brave browser rewards users with crypto for viewing privacy-respecting ads. You're already browsing — this can be a passive way to earn over time.",
  },
  {
    title: 'Referral programs',
    content:
      'Many crypto platforms offer referral bonuses when friends sign up and complete qualifying actions. Stacking referrals across multiple platforms can add up surprisingly fast.',
  },
  {
    title: 'Play-to-earn games',
    content:
      'Blockchain-based games reward players with tokens or NFTs for gameplay achievements. Earnings vary; many players treat these as casual side income rather than full-time opportunities.',
  },
  {
    title: 'Bug bounties and testing programs',
    content:
      'Crypto projects often pay users for reporting bugs, stress-testing networks, or participating in testnets. Technical knowledge helps, but some programs are beginner-friendly.',
  },
  {
    title: 'Faucet websites',
    content:
      'Crypto faucets distribute very small amounts of crypto for completing simple tasks or captchas. Payouts are tiny, but useful for beginners learning wallet basics.',
  },
  {
    title: 'Community moderation and content rewards',
    content:
      'Some blockchain communities reward users for writing articles, moderating forums, or creating tutorials. Payments are often made in native tokens.',
  },
  {
    title: 'DAO participation rewards',
    content:
      'Decentralized Autonomous Organizations sometimes pay members for governance participation, research, or proposal work. A more advanced but higher-value way to earn crypto.',
  },
];

const LearnAndEarn: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container-page max-w-6xl">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="eyebrow">
            <Coins className="w-3.5 h-3.5" />
            Learn & Earn
          </span>
          <h1 className="display-xl text-cream-100 mt-4 mb-6 text-balance">
            Earn crypto for{' '}
            <span className="italic text-champagne-200">learning</span>.
          </h1>
          <p className="text-lg text-cream-200/75 leading-relaxed">
            Legitimate platforms where you can earn cryptocurrency for free
            by learning, completing tasks, and participating in educational
            programs.
          </p>
        </motion.div>

        {/* Hero video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-20 rounded-3xl border border-cream-100/10 overflow-hidden bg-ink-900 shadow-card"
        >
          <div className="relative aspect-video bg-ink-950">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/goldspin2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 rounded-3xl border border-red-400/30 bg-red-950/20 p-8 lg:p-10"
        >
          <div className="flex items-start gap-5">
            <div className="h-10 w-10 rounded-full bg-red-400/15 text-red-300 flex items-center justify-center shrink-0">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div className="space-y-3 text-red-100/80 text-[15px] leading-relaxed">
              <h3 className="font-display text-xl text-red-100 mb-2">
                Important disclaimer
              </h3>
              <p>
                <strong className="text-red-50">
                  Cryptonyte is NOT affiliated with any of the external
                  platforms linked on this page.
                </strong>{' '}
                We provide these links for educational purposes only.
              </p>
              <p>
                <strong className="text-red-50">Use at your own risk.</strong>{' '}
                Always conduct your own research before signing up. Be aware
                of potential risks including:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Platform security vulnerabilities.</li>
                <li>Changes to terms of service.</li>
                <li>Potential scams or fraudulent activities.</li>
                <li>Tax implications of earning crypto.</li>
              </ul>
              <p>
                Never share your private keys or seed phrases with any
                platform. Cryptonyte is not responsible for any losses.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Platforms */}
        <div className="mb-24">
          <div className="flex items-end justify-between mb-8">
            <h2 className="display-md text-cream-100">Platforms</h2>
            <span className="eyebrow">
              {PLATFORMS.length} · verified
            </span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {PLATFORMS.map((p, i) => (
              <motion.a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.25) }}
                className="group card-raised p-6 block hover:border-champagne-300/40 transition"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-champagne-300 mb-2">
                      /{String(i + 1).padStart(2, '0')}
                    </div>
                    <h3 className="font-display text-xl text-cream-100 mb-2">
                      {p.name}
                    </h3>
                    <p className="text-cream-200/70 text-[15px] leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-cream-100/40 group-hover:text-champagne-300 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all shrink-0" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Article */}
        <article className="mb-24">
          <div className="max-w-3xl mb-10">
            <span className="eyebrow">Article</span>
            <h2 className="display-md text-cream-100 mt-4 mb-4">
              17 ways to earn free crypto (without mining).
            </h2>
            <p className="text-cream-200/55 text-sm italic">
              Written by TH Ellison
            </p>
          </div>

          <div className="card-raised p-8 lg:p-12 max-w-4xl">
            <div className="space-y-5 text-[15.5px] leading-relaxed text-cream-200/80 mb-10">
              <p>
                Who doesn't like free stuff? If you're into cryptocurrency,
                there are legitimate ways to earn crypto without buying it
                outright. Many platforms reward users for learning,
                participating, browsing, or simply showing up.
              </p>
              <p>
                Because crypto prices fluctuate, even small rewards can
                grow over time. Some platforms also pay in cash, points,
                or NFTs that can later be converted into crypto.
              </p>
              <p>
                Below are 17 proven ways to earn free crypto — plus what
                to watch out for.
              </p>
            </div>

            <div className="space-y-4">
              {METHODS.map((m, i) => (
                <div
                  key={m.title}
                  className="flex gap-5 py-5 border-t border-cream-100/10"
                >
                  <span className="font-mono text-xs text-champagne-300 tracking-widest mt-1.5 w-8 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-display text-lg text-cream-100 mb-2">
                      {m.title}
                    </h3>
                    <p className="text-cream-200/75 text-[15px] leading-relaxed">
                      {m.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Watch out box */}
          <div className="mt-8 rounded-3xl border border-red-400/30 bg-red-950/20 p-8 lg:p-10 max-w-4xl">
            <div className="flex items-start gap-4 mb-4">
              <ShieldAlert className="w-5 h-5 text-red-300 shrink-0 mt-1" />
              <h3 className="font-display text-xl text-red-100">
                Watch out for crypto scams.
              </h3>
            </div>
            <p className="text-red-100/80 mb-4 text-[15.5px]">
              Free crypto attracts scammers. Red flags include:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-4 text-red-100/80 text-[15.5px]">
              <li>Requests for private keys</li>
              <li>"Guaranteed" returns</li>
              <li>Fake airdrops</li>
              <li>Pressure to act quickly</li>
            </ul>
            <p className="text-red-100/80 text-[15.5px]">
              Never connect a wallet or share credentials unless you fully
              trust the platform.
            </p>
          </div>

          {/* Bottom line */}
          <div className="mt-6 rounded-3xl border border-champagne-300/30 bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 p-8 lg:p-10 max-w-4xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(229,184,92,0.12),transparent_60%)] pointer-events-none" />
            <h3 className="relative font-display text-xl text-cream-100 mb-4">
              Bottom line.
            </h3>
            <div className="relative space-y-4 text-cream-200/80 text-[15.5px] leading-relaxed">
              <p>
                Earning free crypto is possible through education,
                participation, browsing, and community involvement. None
                of these are instant-wealth strategies — but they're
                useful for learning the ecosystem and stacking assets
                over time.
              </p>
              <p>
                Always verify platforms, understand risks, and treat
                "free" crypto as a bonus, not a promise.
              </p>
              <p>
                Questions?{' '}
                <a
                  href="mailto:mycryptonyte2026@gmail.com"
                  className="text-champagne-200 hover:text-champagne-100 underline underline-offset-4"
                >
                  mycryptonyte2026@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Editorial disclaimer */}
          <div className="mt-6 rounded-2xl border border-cream-100/10 bg-ink-900/70 p-6 lg:p-8 max-w-4xl text-cream-200/55 text-sm leading-relaxed">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream-100/40 mb-2">
              Editorial disclaimer
            </div>
            <p>
              This content is for informational purposes only and does
              not constitute financial or investment advice. Always
              conduct independent research before making investment
              decisions.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default LearnAndEarn;
