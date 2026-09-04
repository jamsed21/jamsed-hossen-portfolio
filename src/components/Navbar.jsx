import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, Download, ArrowUpRight } from 'lucide-react';
import { personalProfile } from '../data/portfolioData';

const navItems = [
  { name: 'About',        href: '#about' },
  { name: 'Skills',       href: '#skills' },
  { name: 'Projects',     href: '#projects' },
  { name: 'Case Studies', href: '#casestudies' },
  { name: 'Contact',      href: '#contact' },
];

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive]         = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const ids = navItems.map(n => n.href.slice(1));
      const pos = window.scrollY + 120;
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.offsetTop <= pos) { setActive(ids[i]); break; }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleDownloadResume = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = personalProfile.resumePdf;
    link.download = 'Jamsed_Hossen_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 pointer-events-none transition-all duration-300">
        <div
          className={`max-w-5xl mx-auto rounded-full pointer-events-auto transition-all duration-300 ${
            scrolled
              ? 'bg-[#0D111A]/85 backdrop-blur-xl border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] py-2.5 px-5'
              : 'bg-[#0F1420]/60 backdrop-blur-md border border-white/5 py-3 px-6'
          }`}
        >
          <div className="flex items-center justify-between">

            {/* Brand Monogram */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-violet-600 to-cyan-500 flex items-center justify-center font-mono font-extrabold text-xs text-white shadow-md shadow-violet-500/20 group-hover:scale-105 transition-transform">
                  JH
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#0D111A] animate-pulse" />
              </div>

              <div className="flex flex-col">
                <span className="font-bold text-white text-sm tracking-tight group-hover:text-violet-300 transition-colors">
                  Jamsed Hossen
                </span>
                <span className="font-mono text-[10px] text-slate-400 font-medium leading-none">
                  Data Analyst
                </span>
              </div>
            </a>

            {/* Desktop Nav Items */}
            <nav className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5">
              {navItems.map((item) => {
                const isActive = active === item.href.slice(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                      isActive
                        ? 'bg-gradient-to-r from-violet-600/90 to-indigo-600/90 text-white shadow-md shadow-violet-600/20 font-bold'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </nav>

            {/* Right Action CTA Buttons */}
            <div className="hidden sm:flex items-center gap-2.5">
              
              {/* Preview Resume Modal Button */}
              <button
                onClick={onOpenResume}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-all border border-white/10"
              >
                View CV
              </button>

              {/* Direct Download Uploaded PDF Button */}
              <a
                href={personalProfile.resumePdf}
                onClick={handleDownloadResume}
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 hover:opacity-95 shadow-lg shadow-violet-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume PDF</span>
              </a>

            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 rounded-full text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>

          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-40"
          >
            <div className="max-w-md mx-auto p-5 rounded-3xl bg-[#0D111A]/95 backdrop-blur-2xl border border-white/10 shadow-2xl space-y-3">
              <div className="space-y-1">
                {navItems.map(item => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                      active === item.href.slice(1)
                        ? 'bg-violet-600/20 text-violet-300 font-bold border border-violet-500/30'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
                <button
                  onClick={() => { setMobileOpen(false); onOpenResume(); }}
                  className="w-full py-2.5 rounded-xl text-xs font-bold text-slate-200 bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4 text-violet-400" />
                  <span>View CV Preview</span>
                </button>

                <a
                  href={personalProfile.resumePdf}
                  onClick={(e) => { setMobileOpen(false); handleDownloadResume(e); }}
                  className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-violet-600 to-cyan-500 hover:opacity-95 transition-all flex items-center justify-center gap-2 shadow-lg shadow-violet-600/20"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume PDF</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
