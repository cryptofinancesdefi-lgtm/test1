import { motion } from 'motion/react';
import { Menu, X, Search } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-4 bg-black/50 backdrop-blur-md border-b border-white/5' : 'py-8 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-orange-400 flex items-center justify-center">
            <span className="text-white font-serif font-bold text-lg">A</span>
          </div>
          <span className="text-xl font-serif font-medium tracking-wide text-white group-hover:text-white/90 transition-colors">
            Aura<span className="text-white/50">Vet</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {['Services', 'Philosophy', 'Team', 'Insights'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm uppercase tracking-widest text-white/70 hover:text-white transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-indigo-400 to-orange-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="p-2 text-white/70 hover:text-white transition-colors">
            <Search size={20} />
          </button>
          <a
            href="#contact"
            className="glass-button px-6 py-2 rounded-full text-sm font-medium uppercase tracking-wider text-white hover:scale-105 active:scale-95 transition-all"
          >
            Book Appointment
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
        >
          <div className="flex flex-col p-6 gap-6">
            {['Services', 'Philosophy', 'Team', 'Insights'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-lg font-serif text-white/80 hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="glass-button px-6 py-3 rounded-full text-center text-sm font-medium uppercase tracking-wider text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Appointment
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
