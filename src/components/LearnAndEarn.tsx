import React from 'react';
import { Link} from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink, AlertTriangle} from 'lucide-react';

const LearnAndEarn = () => {
  const platforms = [
    {
      name: "Swyftx Learn",
      url: "https://learn.swyftx.com/cryptocurrency/introduction-to-cryptocurrency",
      description: "Introduction to cryptocurrency fundamentals"
    },
    {
      name: "Freecash Academy",
      url: "https://freecash.com/academy/en/cashout/free-crypto",
      description: "Earn crypto through games and tasks"
    },
    {
      name: "Phemex Learn Crypto",
      url: "https://phemex.com/learn-crypto",
      description: "Comprehensive crypto education platform"
    },
    {
      name: "BitDegree Learndrops",
      url: "https://www.bitdegree.org/learndrops",
      description: "Learn blockchain and earn crypto rewards"
    },
    {
      name: "Binance Learn & Earn",
      url: "https://www.binance.com/en/academy/learn-and-earn",
      description: "Educational courses with crypto rewards"
    },
    {
      name: "Coinbase Earn",
      url: "https://www.coinbase.com/earn",
      description: "Watch videos and earn crypto"
    },
    {
      name: "eToro Learn",
      url: "https://www.etoro.com/learn/",
      description: "Trading education and market insights"
    },
    {
      name: "Crypto.com University",
      url: "https://crypto.com/university",
      description: "Crypto education and learning resources"
    }
  ];

  return (
    <>
<div className="w-full bg-gradient-to-b from-amber-500/5 to-transparent backdrop-blur-sm overflow-hidden pt-32">
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                Learn & Earn Crypto
              </span>
            </h1>
            <p className="text-xl text-amber-200/70 mb-4 max-w-3xl mx-auto">
              Discover legitimate platforms where you can earn cryptocurrency for free by learning, completing tasks, and participating in educational programs.
            </p>

            {/* Goldspin Video */}
            <div className="max-w-4xl mx-auto mb-8">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black/80 mx-8">
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
            </div>
          </motion.div>

          {/* Important Disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="bg-red-900/60 border border-red-500/30 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-red-200 mb-4">Important Disclaimer</h3>
                  <div className="space-y-3 text-red-200/80">
                    <p>
                      <strong>Cryptonyte is NOT affiliated with any of the external platforms linked on this page.</strong> We provide these links for educational purposes only.
                    </p>
                    <p>
                      <strong>Use at your own risk.</strong> Always conduct your own research before signing up for any platform or service. Be aware of potential risks including:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Platform security vulnerabilities</li>
                      <li>Changes to terms of service</li>
                      <li>Potential scams or fraudulent activities</li>
                      <li>Tax implications of earning crypto</li>
                    </ul>
                    <p>
                      Never share your private keys or seed phrases with any platform. Cryptonyte is not responsible for any losses incurred through the use of these external services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Platform Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-amber-100 mb-8 text-center">Learn & Earn Platforms</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {platforms.map((platform, index) => (
                <div key={index} className="bg-black/60 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-6 hover:bg-black/80 transition-all duration-300">
                  <h3 className="text-xl font-bold text-amber-100 mb-3">{platform.name}</h3>
                  <p className="text-amber-200/70 mb-4">{platform.description}</p>
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-medium transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25"
                  >
                    Visit Platform
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"/>
                  </a>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-black/60 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-amber-100 mb-6">Cryptonyte's 17 Ways to Earn Free Crypto (Without Mining)</h2>
              <p className="text-sm text-amber-200/60 mb-6 italic">Written by TH Ellison</p>
              
              <div className="space-y-6 text-amber-200/80 leading-relaxed">
                <p>
                  Who doesn't like free stuff? If you're into cryptocurrency, there are legitimate ways to earn crypto without buying it outright. Many platforms reward users for learning, participating, browsing, or simply showing up.
                </p>
                <p>
                  Because crypto prices fluctuate, even small rewards can grow over time. Some platforms also pay in cash, points, or NFTs that can later be converted into crypto.
                </p>
                <p>
                  Below are 17 proven ways to earn free cryptocurrency, plus what to watch out for.
                </p>

                <div className="space-y-8">
                  {[
                    {
                      title: "1. Sign-Up Bonuses From Crypto Exchanges",
                      content: "Many exchanges reward new users with free crypto when they open an account and complete basic actions like identity verification or a small trade. Common platforms include Coinbase, eToro, Gemini, and Crypto.com. Bonuses vary and are often time-limited, so it pays to keep an eye on promotions."
                    },
                    {
                      title: "2. Crypto Staking Rewards",
                      content: "Staking allows you to earn rewards by helping secure a blockchain network. Proof-of-stake coins pay ongoing rewards while you hold them. Returns vary by asset, and higher yields usually come with higher risk. Some staking programs offered by exchanges have faced regulatory scrutiny, so always understand the platform rules before participating."
                    },
                    {
                      title: "3. Free NFTs (That Can Be Sold for Crypto)",
                      content: "NFTs aren't cryptocurrency, but they can often be sold or traded for crypto. Ways to get free NFTs include project giveaways on Discord, social media promotions, and early supporter rewards. Be mindful of tax implications when receiving or selling NFTs."
                    },
                    {
                      title: "4. Learn-and-Earn Programs",
                      content: "Educational programs reward users with small amounts of crypto for watching videos and passing quizzes. Popular examples include learning campaigns run by major exchanges and crypto data platforms. These are beginner-friendly and relatively low risk, though rewards are usually modest."
                    },
                    {
                      title: "5. Crypto Savings Accounts",
                      content: "Some platforms pay interest on crypto you hold, similar to a savings account. Returns are typically higher than traditional banks, especially for stablecoins, but funds may be locked for set periods and are not FDIC insured."
                    },
                    {
                      title: "6. Crypto Lending (DeFi or Platform-Based)",
                      content: "You can lend crypto to other users or protocols and earn interest. This can be done through decentralized finance platforms or centralized providers. Risk management is critical, as borrower defaults or protocol failures can result in losses."
                    },
                    {
                      title: "7. Brokerage Cash Bonuses Converted to Crypto",
                      content: "Some traditional brokerages offer cash bonuses for opening accounts or referrals. While bonuses are paid in dollars, they can often be converted to crypto immediately. This is a low-effort way to stack crypto using incentives designed for traditional investing."
                    },
                    {
                      title: "8. Airdrops",
                      content: "Crypto projects sometimes distribute free tokens to generate awareness. To qualify, users may need to hold a specific token, interact with a blockchain, or follow project communities. Many airdrops are legitimate, but scams are common, so never connect wallets blindly."
                    },
                    {
                      title: "9. Crypto Rewards Credit Cards",
                      content: "Crypto credit cards reward spending with crypto instead of cash back. Rewards are typically paid in Bitcoin or major altcoins. As with any credit card, avoid carrying balances just to chase rewards."
                    },
                    {
                      title: "10. Surveys and Microtasks",
                      content: "Some platforms pay users crypto for completing surveys, playing games, or testing apps. Freecash is one example that allows payouts in crypto, cash, or gift cards."
                    },
                    {
                      title: "11. Earn Crypto While Browsing the Web",
                      content: "The Brave browser rewards users with crypto for viewing privacy-respecting ads. You're already browsing, so this can be a passive way to earn over time."
                    },
                    {
                      title: "12. Referral Programs",
                      content: "Many crypto platforms offer referral bonuses when friends sign up and complete qualifying actions. Stacking referrals across multiple platforms can add up surprisingly fast."
                    },
                    {
                      title: "13. Play-to-Earn Games",
                      content: "Blockchain-based games reward players with tokens or NFTs for gameplay achievements. While earnings vary, some players treat these as casual side income rather than full-time opportunities."
                    },
                    {
                      title: "14. Bug Bounties and Testing Programs",
                      content: "Crypto projects often pay users for reporting bugs, stress-testing networks, or participating in testnets. Technical knowledge helps, but some programs are beginner-friendly."
                    },
                    {
                      title: "15. Faucet Websites",
                      content: "Crypto faucets distribute very small amounts of crypto for completing simple tasks or captchas. Payouts are tiny, but they can be useful for beginners learning wallet basics."
                    },
                    {
                      title: "16. Community Moderation and Content Rewards",
                      content: "Some blockchain communities reward users for writing articles, moderating forums, or creating tutorials and guides. Payments are often made in native tokens."
                    },
                    {
                      title: "17. DAO Participation Rewards",
                      content: "Decentralized Autonomous Organizations (DAOs) sometimes pay members for governance participation, research, or proposal work. This can be a more advanced but higher-value way to earn crypto."
                    }
                  ].map((section, index) => (
                    <div key={index} className="bg-black/40 rounded-xl p-6 border border-amber-500/10">
                      <h3 className="text-xl font-bold text-amber-100 mb-3">{section.title}</h3>
                      <p>{section.content}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-red-900/40 border border-red-500/30 rounded-xl p-6 mt-8">
                  <h3 className="text-xl font-bold text-red-200 mb-4">Watch Out for Crypto Scams</h3>
                  <p className="mb-4">Free crypto attracts scammers. Red flags include:</p>
                  <ul className="list-disc list-inside space-y-1 mb-4">
                    <li>Requests for private keys</li>
                    <li>"Guaranteed" returns</li>
                    <li>Fake airdrops</li>
                    <li>Pressure to act quickly</li>
                  </ul>
                  <p>Never connect a wallet or share credentials unless you fully trust the platform.</p>
                </div>

                <div className="bg-amber-900/40 border border-amber-500/30 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-amber-100 mb-4">Bottom Line</h3>
                  <p className="mb-4">
                    Earning free crypto is possible through education, participation, browsing, and community involvement. While none of these methods are instant-wealth strategies, they can be useful for learning the ecosystem and stacking assets over time.
                  </p>
                  <p className="mb-4">
                    Always verify platforms, understand risks, and treat "free" crypto as a bonus, not a promise.
                  </p>
                  <p className="font-medium">Contact us at mycryptonyte2026@gmail.com for questions.</p>
                </div>

                <div className="bg-gray-800/60 border border-gray-600/30 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-200 mb-3">Editorial Disclaimer</h3>
                  <p className="text-gray-300">
                    This content is for informational purposes only and does not constitute financial or investment advice. Always conduct independent research before making investment decisions. For questions, contact mycryptonyte2026@gmail.com.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      

  );
};

export default LearnAndEarn;