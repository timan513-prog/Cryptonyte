import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface CoinData {
  id: string;
  name: string;
  symbol: string;
  price: number;
  lastUpdated: number;
}

interface CoinGeckoResponse {
  bitcoin?: { usd: number; last_updated_at: number };
  ethereum?: { usd: number; last_updated_at: number };
  solana?: { usd: number; last_updated_at: number };
  dogecoin?: { usd: number; last_updated_at: number };
}

const COIN_CONFIG = [
  { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC' },
  { id: 'ethereum', name: 'Ethereum', symbol: 'ETH' },
  { id: 'solana', name: 'Solana', symbol: 'SOL' },
  { id: 'dogecoin', name: 'Dogecoin', symbol: 'DOGE' },
];

const CryptoPriceTracker: React.FC = () => {
  const [coins, setCoins] = useState<CoinData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastFetch, setLastFetch] = useState<Date | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const fetchPrices = async () => {
    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

      let response: Response;
      const directUrl =
        'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,dogecoin&vs_currencies=usd&include_last_updated_at=true';

      if (supabaseUrl && supabaseKey) {
        try {
          response = await fetch(`${supabaseUrl}/functions/v1/crypto-prices`, {
            headers: {
              Accept: 'application/json',
              Authorization: `Bearer ${supabaseKey}`,
            },
          });
          if (!response.ok) throw new Error(`status ${response.status}`);
        } catch {
          response = await fetch(directUrl, {
            headers: { Accept: 'application/json' },
          });
        }
      } else {
        response = await fetch(directUrl, {
          headers: { Accept: 'application/json' },
        });
      }

      if (!response.ok) throw new Error(`status ${response.status}`);
      const data: CoinGeckoResponse = await response.json();

      const formatted: CoinData[] = COIN_CONFIG.map((c) => {
        const row = (data as Record<string, { usd: number; last_updated_at: number } | undefined>)[c.id];
        return {
          id: c.id,
          name: c.name,
          symbol: c.symbol,
          price: row?.usd || 0,
          lastUpdated: row?.last_updated_at || Date.now() / 1000,
        };
      });

      setCoins(formatted);
      setLastFetch(new Date());
      setError(null);
      setLoading(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch prices');
      setLoading(false);
    }
  };

  const retry = () => {
    setError(null);
    setLoading(true);
    fetchPrices();
  };

  const formatPrice = (price: number) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: price >= 1 ? 2 : 4,
      maximumFractionDigits: price >= 1 ? 2 : 6,
    }).format(price);

  const formatTime = (ts: number) =>
    new Date(ts * 1000).toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });

  useEffect(() => {
    fetchPrices();
    intervalRef.current = setInterval(fetchPrices, 15000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section className="py-16">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="eyebrow text-[#e5c46d]">Live Index</span>
          <span className="h-px flex-1 bg-[#e5c46d]/20" />
          <span className="eyebrow inline-flex items-center gap-2">
            <span className="live-dot" />
            Streaming
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="hairline rounded-2xl bg-[#0c0a07]/80 overflow-hidden"
        >
          {loading && (
            <div className="px-6 py-10 text-center text-[#c9bfa8] text-sm">
              <span className="inline-flex items-center gap-2">
                <span className="w-3 h-3 border-2 border-[#e5c46d]/30 border-t-[#e5c46d] rounded-full animate-spin" />
                Loading prices…
              </span>
            </div>
          )}

          {error && (
            <div className="px-6 py-10 text-center">
              <p className="text-sm text-[#c9bfa8]">
                Couldn't load live prices ({error}).
              </p>
              <button
                onClick={retry}
                className="mt-3 inline-flex items-center gap-2 text-[#e5c46d] hover:text-[#f5d488] text-sm"
              >
                Retry →
              </button>
            </div>
          )}

          {!loading && !error && coins.length > 0 && (
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-y divide-[#e5c46d]/15 lg:divide-y-0 lg:divide-x">
              {coins.map((c) => (
                <div key={c.id} className="px-6 py-6">
                  <div className="flex items-center justify-between">
                    <span className="eyebrow text-[#8a8268]">{c.symbol}</span>
                    <span className="text-[10px] text-[#8a8268] tabular">
                      {formatTime(c.lastUpdated)}
                    </span>
                  </div>
                  <div className="display text-2xl lg:text-3xl text-[#f4ecd8] mt-2 tabular">
                    {formatPrice(c.price)}
                  </div>
                  <div className="text-xs text-[#8a8268] mt-1">{c.name}</div>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {lastFetch && !loading && (
          <div className="mt-3 text-[11px] text-[#8a8268] tabular">
            Last refresh ·{' '}
            {lastFetch.toLocaleTimeString('en-US', {
              hour12: false,
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
            })}{' '}
            · auto-updates every 15s
          </div>
        )}
      </div>
    </section>
  );
};

export default CryptoPriceTracker;
