/**
 * News page — pulls latest crypto news daily from a public aggregator.
 *
 * Note on data source:
 *   The user asked for news from https://crypto.com/en/market-updates.
 *   That page is a server-rendered marketing site — no public API, no
 *   RSS feed, and CORS blocks any browser-side scrape. To keep the page
 *   self-contained and free of a backend deploy, we use CryptoCompare's
 *   public news endpoint, which aggregates from dozens of outlets
 *   (including crypto.com/news). Swap NEWS_ENDPOINT below if you'd
 *   prefer a different source, or point it at a Supabase edge function
 *   that scrapes crypto.com directly on a daily cron.
 */

import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, RefreshCw } from 'lucide-react';

const NEWS_ENDPOINT =
  'https://min-api.cryptocompare.com/data/v2/news/?lang=EN';

const CACHE_KEY = 'cryptonyte_news_cache_v1';
const CACHE_TTL_MS = 1000 * 60 * 60 * 12; // 12h — "daily-ish"

interface NewsArticle {
  id: string;
  title: string;
  url: string;
  body: string;
  imageurl: string;
  source: string;
  source_info?: { name?: string; img?: string };
  categories: string;
  tags: string;
  published_on: number;
}

interface NewsResponse {
  Data: NewsArticle[];
  Message?: string;
}

const FILTERS = [
  { id: 'all', label: 'All', match: () => true },
  {
    id: 'bitcoin',
    label: 'Bitcoin',
    match: (a: NewsArticle) => /\bBTC|Bitcoin\b/i.test(a.categories + ' ' + a.tags + ' ' + a.title),
  },
  {
    id: 'ethereum',
    label: 'Ethereum',
    match: (a: NewsArticle) => /\bETH|Ethereum\b/i.test(a.categories + ' ' + a.tags + ' ' + a.title),
  },
  {
    id: 'altcoin',
    label: 'Altcoins',
    match: (a: NewsArticle) =>
      /\b(SOL|Solana|DOGE|XRP|ADA|Cardano|Avalanche|AVAX|MATIC|Polygon|altcoin)\b/i.test(
        a.categories + ' ' + a.tags + ' ' + a.title
      ),
  },
  {
    id: 'market',
    label: 'Market',
    match: (a: NewsArticle) =>
      /\b(market|trading|price|analysis|technical|regulation|ETF|SEC|macro)\b/i.test(
        a.categories + ' ' + a.tags + ' ' + a.title
      ),
  },
];

function loadCache(): { ts: number; data: NewsArticle[] } | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed?.ts || !Array.isArray(parsed?.data)) return null;
    return parsed;
  } catch {
    return null;
  }
}

function saveCache(data: NewsArticle[]) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), data }));
  } catch {
    /* ignore quota errors */
  }
}

function timeAgo(unixSeconds: number) {
  const diff = Math.max(0, Date.now() / 1000 - unixSeconds);
  if (diff < 60) return 'just now';
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  const days = Math.floor(diff / 86400);
  if (days < 7) return `${days}d ago`;
  return new Date(unixSeconds * 1000).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });
}

const News: React.FC = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [active, setActive] = useState<string>('all');
  const [fetchedAt, setFetchedAt] = useState<Date | null>(null);

  const fetchNews = async (force = false) => {
    setError(null);
    setLoading(true);

    if (!force) {
      const cached = loadCache();
      if (cached && Date.now() - cached.ts < CACHE_TTL_MS) {
        setArticles(cached.data);
        setFetchedAt(new Date(cached.ts));
        setLoading(false);
        return;
      }
    }

    try {
      const res = await fetch(NEWS_ENDPOINT, {
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error(`status ${res.status}`);
      const data: NewsResponse = await res.json();
      const list = Array.isArray(data.Data) ? data.Data : [];
      setArticles(list);
      saveCache(list);
      setFetchedAt(new Date());
    } catch (err) {
      const cached = loadCache();
      if (cached?.data?.length) {
        setArticles(cached.data);
        setFetchedAt(new Date(cached.ts));
      }
      setError(err instanceof Error ? err.message : 'Failed to load news');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const filtered = useMemo(() => {
    const f = FILTERS.find((x) => x.id === active) ?? FILTERS[0];
    return articles.filter(f.match);
  }, [articles, active]);

  const [hero, ...rest] = filtered;

  return (
    <section className="pt-28 lg:pt-32 pb-24 lg:pb-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Header band */}
        <div className="flex items-center justify-between hairline-b pb-4">
          <span className="eyebrow">News · The Daily Index</span>
          <span className="eyebrow tabular">
            {new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: '2-digit',
            })}
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 mt-12 mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="display text-[clamp(2.5rem,6vw,5rem)] text-[#f4ecd8] lg:col-span-8"
          >
            Today in crypto,
            <br />
            <span className="text-[#e5c46d]">filtered for signal.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#c9bfa8] text-lg leading-relaxed lg:col-span-4 lg:pt-4"
          >
            A daily-refreshed digest pulled from major crypto outlets — markets,
            policy, on-chain, and infra. Read it, decide for yourself.
          </motion.p>
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 hairline-t hairline-b py-4 mb-10">
          <div className="flex flex-wrap items-center gap-1.5">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  active === f.id
                    ? 'bg-[#e5c46d] text-[#0a0806]'
                    : 'text-[#c9bfa8] hover:text-[#f4ecd8] hover:bg-white/5'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4">
            {fetchedAt && (
              <span className="eyebrow text-[#8a8268] tabular">
                Updated{' '}
                {fetchedAt.toLocaleString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </span>
            )}
            <button
              onClick={() => fetchNews(true)}
              disabled={loading}
              className="inline-flex items-center gap-2 text-xs text-[#c9bfa8] hover:text-[#e5c46d] transition-colors disabled:opacity-50"
              aria-label="Refresh news"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </button>
          </div>
        </div>

        {/* States */}
        {loading && articles.length === 0 && (
          <div className="py-24 text-center text-[#c9bfa8] text-sm">
            <span className="inline-flex items-center gap-2">
              <span className="w-3 h-3 border-2 border-[#e5c46d]/30 border-t-[#e5c46d] rounded-full animate-spin" />
              Loading the day's headlines…
            </span>
          </div>
        )}

        {error && articles.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-[#c9bfa8] text-sm">
              Couldn't reach the news feed ({error}).
            </p>
            <button
              onClick={() => fetchNews(true)}
              className="mt-3 text-[#e5c46d] hover:text-[#f5d488] text-sm"
            >
              Try again →
            </button>
          </div>
        )}

        {/* Hero article */}
        {hero && (
          <motion.a
            key={hero.id}
            href={hero.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="group block hairline rounded-2xl overflow-hidden bg-[#0c0a07]/80 mb-12"
          >
            <div className="grid lg:grid-cols-12">
              {hero.imageurl && (
                <div className="lg:col-span-7 aspect-video lg:aspect-auto bg-[#15110a] overflow-hidden">
                  <img
                    src={hero.imageurl}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
              )}
              <div className={`p-8 lg:p-10 flex flex-col justify-between ${hero.imageurl ? 'lg:col-span-5' : 'lg:col-span-12'}`}>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="eyebrow text-[#e5c46d]">Top Story</span>
                    <span className="text-[#8a8268]">·</span>
                    <span className="eyebrow text-[#8a8268] tabular">
                      {timeAgo(hero.published_on)}
                    </span>
                  </div>
                  <h2 className="display text-3xl lg:text-4xl text-[#f4ecd8] mt-5 group-hover:text-white transition-colors">
                    {hero.title}
                  </h2>
                  <p className="mt-5 text-[#c9bfa8] leading-relaxed line-clamp-4">
                    {hero.body}
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <span className="text-xs text-[#8a8268]">
                    {hero.source_info?.name || hero.source}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[#e5c46d] text-sm font-medium">
                    Read <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </motion.a>
        )}

        {/* Grid */}
        {rest.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.slice(0, 24).map((a, i) => (
              <motion.a
                key={a.id}
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.03, 0.4) }}
                className="group block hairline rounded-xl overflow-hidden bg-[#0c0a07]/70 hover:bg-[#0e0b07] transition-colors"
              >
                {a.imageurl && (
                  <div className="aspect-[16/9] w-full overflow-hidden bg-[#15110a]">
                    <img
                      src={a.imageurl}
                      alt=""
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                )}
                <div className="p-5">
                  <div className="flex items-center gap-2">
                    <span className="eyebrow text-[#8a8268] tabular">
                      {timeAgo(a.published_on)}
                    </span>
                    <span className="text-[#8a8268]">·</span>
                    <span className="text-xs text-[#8a8268] truncate">
                      {a.source_info?.name || a.source}
                    </span>
                  </div>
                  <h3 className="display text-lg text-[#f4ecd8] mt-3 leading-snug line-clamp-3 group-hover:text-[#fff5d6] transition-colors">
                    {a.title}
                  </h3>
                  <div className="mt-4 inline-flex items-center gap-1 text-[#e5c46d] text-xs font-medium">
                    Read <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        )}

        {!loading && filtered.length === 0 && (
          <div className="py-24 text-center">
            <p className="text-[#c9bfa8] text-sm">
              Nothing matches that filter right now. Try another category.
            </p>
          </div>
        )}

        <p className="mt-16 text-[11px] text-[#8a8268] tabular text-center">
          News powered by CryptoCompare · refreshes throughout the day · click
          any headline to read the source article.
        </p>
      </div>
    </section>
  );
};

export default News;
