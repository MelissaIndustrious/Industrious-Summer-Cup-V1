import { POINTS_RULES } from '../constants';
import { motion } from 'motion/react';
import { CheckCircle2, ChevronRight, HelpCircle, Star, Sparkles } from 'lucide-react';

export default function Rules() {
  const tier1 = POINTS_RULES.filter(r => r.tier === 1);
  const tier2 = POINTS_RULES.filter(r => r.tier === 2);

  return (
    <div className="pt-32 pb-48 min-h-screen bg-brand-bg">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header content */}
        <header className="mb-24 text-left border-b-8 border-brand-accent pb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="px-4 py-1 bg-brand-accent text-brand-bg text-[10px] font-black uppercase tracking-[0.4em] mb-8 inline-block"
          >
            Protocol Handbook // v2.4
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10vw] md:text-[90px] font-display font-black text-white uppercase tracking-tighter leading-[0.8] mb-8"
          >
            How To <br />
            <span className="text-brand-accent">Win Points</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/40 max-w-2xl text-xl font-bold uppercase tracking-tight leading-none"
          >
            Regional metrics are aggregated based on daily workspace activity. 
            All members contribute to the collective score.
          </motion.p>
        </header>

        {/* Tiers Section */}
        <div className="grid grid-cols-1 gap-24">
          {/* Combined Points Section */}
          <section>
            <div className="flex flex-col md:flex-row md:items-end gap-6 mb-16">
              <div className="shrink-0">
                <h2 className="text-4xl font-display font-black text-brand-accent uppercase tracking-tighter leading-none">
                  How You <br />
                  <span className="text-white">Earn Points</span>
                </h2>
              </div>
              <div className="h-px flex-1 bg-white/10 hidden md:block mb-3" />
              <p className="max-w-md text-xs font-bold uppercase tracking-tight text-white/40 leading-relaxed">
                Every action counts! Whether you're hosting guests, exploring new locations, or simply working from your home hub, your daily routine automatically powers your region's score.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
              {[...tier1, ...tier2].map((rule, i) => (
                <motion.div
                  key={rule.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  className="bg-brand-bg p-8 flex flex-col justify-between group hover:bg-white transition-colors"
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="font-display font-black text-white text-xl uppercase tracking-tighter leading-none group-hover:text-brand-bg transition-colors">
                        {rule.name}
                      </h3>
                      <div className="flex items-baseline gap-1 text-brand-accent group-hover:text-brand-bg transition-colors">
                        <span className="font-display font-black text-3xl tabular-nums">+{rule.points}</span>
                        <span className="text-[10px] font-black uppercase tracking-widest opacity-60">pts</span>
                      </div>
                    </div>
                    <p className="text-[11px] font-bold uppercase tracking-tight text-white/40 group-hover:text-brand-bg/60 leading-tight transition-colors">
                      {rule.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Core Rules / Normalization Explanation */}
          <section className="mt-12">
            <div className="bg-brand-green p-12 md:p-24 text-white relative overflow-hidden">
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-24">
                <div>
                  <h2 className="text-6xl font-black uppercase tracking-tighter leading-[0.8] mb-12 text-brand-accent">
                    Designed <br />
                    <span className="italic opacity-60 text-white">For Fairness</span>
                  </h2>
                  
                  <div className="space-y-12">
                    {[
                      { n: '01', t: 'Regional Community', d: 'We group locations into regions so we can celebrate our shared success together.' },
                      { n: '02', t: 'Level Playing Field', d: "To keep things fair, points are divided by each region's size—so every team has a real shot at winning." },
                      { n: '03', t: 'Effortless Engagement', d: 'No sign-ups or spreadsheets needed! Your normal workspace routine automatically counts toward your team’s score.' },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-8 group">
                        <span className="text-4xl font-black opacity-20 group-hover:opacity-100 transition-opacity">{item.n}</span>
                        <div>
                          <p className="text-lg font-black uppercase tracking-tighter mb-2">{item.t}</p>
                          <p className="text-sm font-bold uppercase tracking-tight opacity-60 leading-tight">{item.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-12 bg-brand-bg text-white border-2 border-brand-bg">
                  <div className="flex items-center gap-3 mb-12 border-b border-white/10 pb-4">
                     <span className="text-xs font-black uppercase tracking-[0.4em] text-brand-accent">How the Math Works</span>
                  </div>
                  <div className="space-y-12">
                    <div className="flex justify-between items-end border-b border-white/10 pb-8">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Example Region A</p>
                        <p className="text-4xl font-display font-black tracking-tighter">2.00 <span className="text-xs opacity-40">PTS/MEM</span></p>
                      </div>
                      <div className="text-right opacity-40">
                         <p className="text-sm font-bold tabular-nums">10,000 / 5,000</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-end border-b-4 border-brand-accent pb-8">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-brand-accent mb-2 italic">Example Region B // Leader</p>
                        <p className="text-4xl font-display font-black tracking-tighter text-brand-accent">3.12 <span className="text-xs opacity-40 text-white">PTS/MEM</span></p>
                      </div>
                      <div className="text-right">
                         <p className="text-sm font-bold tabular-nums opacity-40 italic">2,500 / 800</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-[10px] uppercase font-black tracking-[0.2em] mt-12 opacity-30 text-center leading-relaxed">
                    Everyone wins when the competition is balanced and fair for all regions.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Terms & Conditions Section */}
          <section className="mt-12 border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center">
                 <HelpCircle className="w-5 h-5 text-brand-accent opacity-50" />
              </div>
              <div>
                <h4 className="text-sm font-black uppercase tracking-tighter text-white">Official Program Governance</h4>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">Legal Documentation // S02-B092-X</p>
              </div>
            </div>
            <a 
              href="#" 
              onClick={(e) => e.preventDefault()}
              className="px-8 py-3 border border-white/20 text-[10px] font-black uppercase tracking-[0.3em] text-white/60 hover:text-brand-accent hover:border-brand-accent transition-all flex items-center gap-3"
            >
              <span>View Terms & Conditions</span>
              <ChevronRight className="w-3 h-3" />
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
