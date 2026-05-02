import { useState, useEffect } from 'react';
import { motion, Reorder, AnimatePresence } from 'motion/react';
import { INITIAL_REGIONS, CALC_NORMALIZED } from '../constants';
import { Region } from '../types';
import { TrendingUp, Users, MapPin, Trophy, ChevronDown, ChevronUp } from 'lucide-react';

export default function Leaderboard() {
  const [regions, setRegions] = useState<Region[]>(INITIAL_REGIONS);
  const [lastUpdate, setLastUpdate] = useState<string>('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Simulate "live" updates for demo purposes
  useEffect(() => {
    const interval = setInterval(() => {
      setRegions(prev => {
        const newRegions = prev.map(r => ({
          ...r,
          points: r.points + Math.floor(Math.random() * 50)
        }));
        // Sort by normalized score
        return [...newRegions].sort((a, b) => 
          CALC_NORMALIZED(b.points, b.occupancy) - CALC_NORMALIZED(a.points, a.occupancy)
        );
      });
      setLastUpdate(new Date().toLocaleTimeString());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 px-4 gap-6">
        <div>
          <h2 className="text-5xl md:text-7xl font-black font-display text-brand-accent uppercase leading-[0.8] tracking-tighter">
            Regional <span className="text-white italic">Standings</span>
          </h2>
          <p className="text-white/40 text-xs font-bold mt-4 uppercase tracking-[0.3em] flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
            </span>
            Real-Time Sync // Last Update: {lastUpdate || 'Online'}
          </p>
        </div>
        <div className="border-l-4 border-brand-accent pl-6 py-2 bg-white/5">
          <p className="text-[10px] font-black text-brand-accent uppercase tracking-tighter leading-none mb-1">Normalization Strategy</p>
          <p className="text-xl text-white font-black uppercase tracking-tighter">Points ÷ Member Base</p>
        </div>
      </div>

      <div className="hidden lg:grid grid-cols-12 gap-4 px-8 mb-6 text-[10px] font-black uppercase tracking-[0.4em] text-white/30 italic">
        <div className="col-span-1">Rank</div>
        <div className="col-span-5">Regional Sector (Click to Expand)</div>
        <div className="col-span-2 text-right">Raw Accumulation</div>
        <div className="col-span-2 text-right">Active Base</div>
        <div className="col-span-2 text-right text-brand-accent">Normalized Metric</div>
      </div>

      <Reorder.Group axis="y" values={regions} onReorder={setRegions} className="space-y-1">
        {regions.map((region, index) => {
          const score = CALC_NORMALIZED(region.points, region.occupancy);
          const isExpanded = expandedId === region.id;
          
          return (
            <Reorder.Item
              key={region.id}
              value={region}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              className={`brutalist-card group cursor-pointer overflow-hidden ${
                isExpanded ? 'bg-brand-card ring-2 ring-brand-accent/50' : ''
              }`}
              onClick={() => toggleExpand(region.id)}
            >
              <div className="p-4 lg:p-4 grid grid-cols-1 md:grid-cols-12 items-center gap-4 relative">
                <div className="col-span-1 hidden md:flex items-center justify-center">
                  <span className={`text-5xl font-display font-black opacity-20 transition-opacity ${
                    isExpanded ? 'text-brand-accent opacity-100' : 'group-hover:text-white group-hover:opacity-100'
                  }`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="col-span-5 flex items-center gap-6">
                  <div className={`w-16 h-16 flex items-center justify-center shrink-0 border border-white/10 transition-colors ${
                    isExpanded ? 'bg-brand-accent' : 'bg-white/5 group-hover:bg-brand-bg transition-colors'
                  }`}>
                    <MapPin className={`w-6 h-6 transition-colors ${
                      isExpanded ? 'text-brand-bg opacity-100' : 'opacity-50 group-hover:opacity-100 group-hover:text-brand-accent'
                    }`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                       <p className={`text-[10px] font-black uppercase tracking-[0.2em] opacity-40 ${
                         isExpanded ? 'text-brand-bg group-hover:text-brand-bg' : 'group-hover:text-brand-accent group-hover:opacity-100'
                       }`}>{region.continent}</p>
                       {isExpanded ? <ChevronUp className="w-3 h-3 opacity-40 text-brand-bg" /> : <ChevronDown className="w-3 h-3 opacity-40 group-hover:text-brand-accent group-hover:opacity-100" />}
                    </div>
                    <h3 className={`font-display font-black text-2xl md:text-3xl uppercase tracking-tighter leading-none transition-colors ${
                      isExpanded ? 'text-brand-bg group-hover:text-brand-bg' : 'text-white group-hover:text-brand-accent'
                    }`}>{region.name}</h3>
                  </div>
                </div>

                <div className={`col-span-2 hidden md:block text-right transition-colors ${
                  isExpanded ? 'text-brand-bg group-hover:text-brand-bg' : 'group-hover:text-white'
                }`}>
                  <p className="text-2xl font-black tabular-nums">{region.points.toLocaleString()}</p>
                  <p className="text-[10px] font-black opacity-30 uppercase tracking-tighter">Raw Points</p>
                </div>

                <div className={`col-span-2 hidden md:block text-right transition-colors ${
                  isExpanded ? 'text-brand-bg group-hover:text-brand-bg' : 'group-hover:text-white'
                }`}>
                  <p className="text-2xl font-black tabular-nums">{region.occupancy.toLocaleString()}</p>
                  <p className="text-[10px] font-black opacity-30 uppercase tracking-tighter">Base</p>
                </div>

                <div className="col-span-2 text-right">
                  <div className={`flex flex-col items-end transition-colors ${
                    isExpanded ? 'text-black group-hover:text-black' : 'group-hover:text-brand-accent'
                  }`}>
                    <span className="text-5xl font-display font-black tracking-tight leading-none tabular-nums">
                      {score.toFixed(2)}
                    </span>
                    <span className="text-[9px] font-black uppercase tracking-widest mt-1 opacity-60">Pts / Mem</span>
                  </div>
                </div>
              </div>

              {/* Expanded Locations View */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="bg-black/40 border-t border-white/10"
                  >
                    <div className="p-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="col-span-full mb-2">
                         <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-accent">Included Locations & Clusters</h4>
                      </div>
                      {region.locations.map((loc, i) => (
                        <motion.div 
                          key={loc}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.05 }}
                          className="px-4 py-3 bg-white/5 border border-white/5 flex items-center gap-3 group/loc"
                        >
                          <div className="w-1.5 h-1.5 bg-brand-accent group-hover/loc:scale-150 transition-transform" />
                          <span className="text-sm font-bold uppercase tracking-tight text-white/70 group-hover/loc:text-white ">{loc}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Reorder.Item>
          );
        })}
      </Reorder.Group>
    </div>
  );
}
