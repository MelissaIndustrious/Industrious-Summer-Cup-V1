import { Link, useLocation } from 'react-router-dom';
import { Trophy, Info, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Leaderboard', path: '/', icon: Trophy },
    { name: 'Rules & Points', path: '/rules', icon: Info },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-bg border-b-4 border-brand-accent text-white shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="w-12 h-12 bg-brand-accent flex items-center justify-center group-hover:rotate-12 transition-transform">
              <Trophy className="text-brand-bg w-8 h-8" />
            </div>
            <span className="font-display font-black text-2xl md:text-3xl tracking-tighter uppercase leading-none">
              Industrious <br className="md:hidden" />
              <span className="text-brand-accent italic">Summer Cup</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center space-x-2 text-sm font-black uppercase tracking-tighter transition-colors hover:text-brand-accent ${
                  location.pathname === link.path ? 'text-brand-accent' : 'text-white/60'
                }`}
              >
                <link.icon className="w-5 h-5" />
                <span>{link.name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white/80 hover:text-white"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-green border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-4 px-4 py-4 rounded-xl text-lg font-medium ${
                    location.pathname === link.path ? 'bg-white/10 text-brand-gold' : 'text-white/80 hover:bg-white/5'
                  }`}
                >
                  <link.icon className="w-6 h-6" />
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
