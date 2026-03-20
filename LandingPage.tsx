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
  bitcoin?: {
    usd: number;
    last_updated_at: number;
  };
  ethereum?: {
    usd: number;
    last_updated_at: number;
  };
  solana?: {
    usd: number;
    last_updated_at: number;
  };
  dogecoin?: {
    usd: number;
    last_updated_at: number;
  };
}

const CryptoPriceTracker = () => {
  const [coins, setCoins] = useState<CoinData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastFetch, setLastFetch] = useState<Date | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const widgetRef = useRef<HTMLDivElement>(null);
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  const coinConfig = [
    { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', icon: '₿' },
    { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', icon: 'Ξ' },
    { id: 'solana', name: 'Solana', symbol: 'SOL', icon: '◎' },
    { id: 'dogecoin', name: 'Dogecoin', symbol: 'DOGE', icon: 'Ð' }
  ];

  const fetchPrices = async () => {
    try {
      console.log('Fetching prices...');
      
      // Check if Supabase environment variables are available
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
      
      let response;
      
      if (supabaseUrl && supabaseKey) {
        // Try Supabase Edge Function first
        const apiUrl = `${supabaseUrl}/functions/v1/crypto-prices`;
        
        try {
          response = await fetch(
            apiUrl,
            {
              method: 'GET',
              headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${supabaseKey}`,
              },
            }
          );
          
          if (!response.ok) {
            throw new Error(`Supabase function error: ${response.status}`);
          }
        } catch (supabaseError) {
          console.warn('Supabase Edge Function failed, falling back to direct API:', supabaseError);
          // Fall back to direct CoinGecko API
          response = await fetch(
            'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,dogecoin&vs_currencies=usd&include_last_updated_at=true',
            {
              method: 'GET',
              headers: {
                'Accept': 'application/json',
              },
            }
          );
        }
      } else {
        console.warn('Supabase environment variables not found, using direct API');
        // Use direct CoinGecko API if no Supabase config
        response = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,dogecoin&vs_currencies=usd&include_last_updated_at=true',
          {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
            },
          }
        );
      }
      
      if (!response.ok) {
        throw new Error(`API error! status: ${response.status}`);
      }

      const data: CoinGeckoResponse = await response.json();
      console.log('Fetched data:', data);

      const formattedCoins: CoinData[] = [
        {
          id: 'bitcoin',
          name: 'Bitcoin',
          symbol: 'BTC',
          price: data.bitcoin?.usd || 0,
          lastUpdated: data.bitcoin?.last_updated_at || Date.now() / 1000
        },
        {
          id: 'ethereum',
          name: 'Ethereum',
          symbol: 'ETH',
          price: data.ethereum?.usd || 0,
          lastUpdated: data.ethereum?.last_updated_at || Date.now() / 1000
        },
        {
          id: 'solana',
          name: 'Solana',
          symbol: 'SOL',
          price: data.solana?.usd || 0,
          lastUpdated: data.solana?.last_updated_at || Date.now() / 1000
        },
        {
          id: 'dogecoin',
          name: 'Dogecoin',
          symbol: 'DOGE',
          price: data.dogecoin?.usd || 0,
          lastUpdated: data.dogecoin?.last_updated_at || Date.now() / 1000
        }
      ];
      
      setCoins(formattedCoins);
      setLastFetch(new Date());
      setError(null);
      setLoading(false);
      console.log('Prices updated successfully');
    } catch (err) {
      console.error('Error fetching prices:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch prices');
      setLoading(false);
    }
  };

  const retry = () => {
    setError(null);
    setLoading(true);
    fetchPrices();
  };

  const formatPrice = (price: number) => {
    if (price >= 1) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(price);
    } else {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 4,
        maximumFractionDigits: 6
      }).format(price);
    }
  };

  const formatLastUpdated = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString('en-US', { 
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  // TradingView Widget Effect
  useEffect(() => {
    if (widgetRef.current && !scriptRef.current) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = JSON.stringify({
        symbols: [
          {
            proName: "BINANCE:BTCUSDT",
            title: "Bitcoin"
          },
          {
            proName: "BINANCE:ETHUSDT",
            title: "Ethereum"
          },
          {
            proName: "BINANCE:SOLUSDT",
            title: "Solana"
          },
          {
            proName: "BINANCE:DOGEUSDT",
            title: "Dogecoin"
          }
        ],
        showSymbolLogo: true,
        colorTheme: "dark",
        isTransparent: true,
        displayMode: "adaptive",
        locale: "en"
      });

      widgetRef.current.appendChild(script);
      scriptRef.current = script;
    }

    return () => {
      if (scriptRef.current && widgetRef.current) {
        try {
          widgetRef.current.removeChild(scriptRef.current);
        } catch (e) {
          // Script might already be removed
        }
        scriptRef.current = null;
      }
    };
  }, []);

  // Fetch prices on mount and set up interval
  useEffect(() => {
    console.log('Component mounted, starting price fetch...');
    fetchPrices();
    
    intervalRef.current = setInterval(() => {
      console.log('Interval fetch triggered');
      fetchPrices();
    }, 15000); // 15 seconds
    
    return () => {
      if (intervalRef.current) {
        console.log('Cleaning up interval');
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <section className="py-16 relative bg-gradient-to-b from-transparent via-amber-500/5 to-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-black mb-4">
            <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
              Live Crypto Prices
            </span>
          </h2>
          <p className="text-lg text-amber-200/70 mb-8">
            Real-time cryptocurrency market data
          </p>
        </motion.div>

        {/* TradingView Ticker Tape */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-black/60 backdrop-blur-xl border border-amber-500/20 rounded-2xl p-4 overflow-hidden">
            <div className="tradingview-widget-container" ref={widgetRef}>
              <div className="tradingview-widget-container__widget"></div>
            </div>
          </div>
        </motion.div>

        {/* Price Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {loading && (
            <div className="text-center py-12">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-black/60 border border-amber-500/20">
                <div className="w-5 h-5 border-2 border-amber-400/30 border-t-amber-400 rounded-full animate-spin"></div>
                <span className="text-amber-200">Loading prices...</span>
              </div>
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <div className="bg-red-900/40 border border-red-500/30 rounded-xl p-6 max-w-md mx-auto">
                <p className="text-red-200 mb-4">
                  Failed to load prices: {error}
                  <br />
                  <small className="text-red-300/70">
                    This may be due to rate limiting or network issues. Please try again.
                  </small>
                </p>
                <button
                  onClick={retry}
                  className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-medium transition-colors duration-300"
                >
                  Retry
                </button>
              </div>
            </div>
          )}

          {!loading && !error && coins.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {coins.map((coin, index) => {
                const config = coinConfig.find(c => c.id === coin.id);
                return (
                  <motion.div
                    key={coin.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative bg-black/60 backdrop-blur-xl border border-amber-500/20 rounded-2xl p-6 hover:bg-black/80 transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 flex items-center justify-center text-black font-bold text-lg">
                            {config?.icon || coin.symbol.charAt(0)}
                          </div>
                          <div>
                            <h3 className="text-amber-100 font-bold text-sm">{coin.name}</h3>
                            <p className="text-amber-200/60 text-xs">{coin.symbol}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-green-400 text-xs font-medium">Live</span>
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <p className="text-2xl font-bold text-amber-100 mb-1">
                          {formatPrice(coin.price)}
                        </p>
                        <p className="text-amber-200/60 text-xs">
                          Updated: {formatLastUpdated(coin.lastUpdated)}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}

          {lastFetch && !loading && (
            <div className="text-center">
              <p className="text-amber-200/60 text-sm">
                Last updated: {lastFetch.toLocaleTimeString('en-US', { 
                  hour12: false,
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit'
                })}
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CryptoPriceTracker;