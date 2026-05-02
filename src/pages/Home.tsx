import Leaderboard from '../components/Leaderboard';
import { motion } from 'motion/react';
import { Calendar, Award, Target, ArrowRight, Users, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-brand-bg py-32 sm:py-48">
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#CCFF00_1px,transparent_1px)] [background-size:60px_60px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="flex flex-col items-start max-w-5xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="px-4 py-1 bg-brand-accent text-brand-bg text-[10px] font-black uppercase tracking-[0.4em] mb-12"
            >
              Join the Game! // Jun 01 — Jul 31, 2026
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, type: 'spring', damping: 10 }}
              className="text-[14vw] md:text-[110px] font-display font-black text-white leading-[0.8] uppercase tracking-tighter mb-12"
            >
              Industrious<br />
              <span className="text-brand-accent">Summer Cup</span>
            </motion.h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end w-full">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white/60 text-xl font-bold leading-tight uppercase tracking-tight"
              >
                Join your community and celebrate our collective success. 
                Watch your region flourish as we work, connect, and thrive together.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-6"
              >
                <Link to="/rules" className="btn-primary">
                  Rules & Points
                </Link>
                <a href="#leaderboard" className="btn-outline">
                  Live Feed
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats / Info */}
      <section className="py-24 bg-brand-bg border-t border-white/5 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {[
              { icon: Users, title: 'Regional Community', text: 'We group locations into regions so we can celebrate our shared success together.' },
              { icon: Award, title: 'Level Playing Field', text: "To keep things fair, points are divided by each region's size—so every team has a real shot at winning." },
              { icon: Target, title: 'Effortless Engagement', text: 'No sign-ups or spreadsheets needed! Your normal workspace routine automatically counts toward your team’s score.' },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-white/10 p-12 group hover:bg-brand-green hover:text-white transition-colors"
              >
                <div className="w-12 h-12 border-2 border-brand-accent group-hover:border-white flex items-center justify-center mb-8">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black font-display uppercase mb-4 tracking-tighter leading-none group-hover:text-brand-accent">{feature.title}</h3>
                <p className="text-white/40 group-hover:text-white/70 text-sm leading-tight uppercase font-bold tracking-tight">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Leaderboard Section */}
      <section id="leaderboard" className="py-24 pb-48 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Leaderboard />
        </div>
      </section>

      {/* Footer Branding */}
      <footer className="bg-brand-green py-24 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-left">
            <h2 className="text-6xl font-black uppercase leading-none tracking-tighter">Industrious</h2>
            <p className="text-xs font-black uppercase tracking-[0.4em] opacity-40">Unified Global Network // 2026</p>
          </div>
          <div className="flex items-center gap-6 opacity-40">
             <Trophy className="w-8 h-8" />
             <div className="h-0.5 w-48 bg-white" />
             <span className="text-[10px] font-black uppercase tracking-[0.5em]">S02-B092-X</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
