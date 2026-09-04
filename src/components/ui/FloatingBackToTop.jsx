import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function FloatingBackToTop() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled > 300px
      const pageScrolled = window.scrollY > 300;
      
      // Check if footer is in viewport
      const footerEl = document.querySelector('footer');
      let nearFooter = false;
      if (footerEl) {
        const rect = footerEl.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 50) {
          nearFooter = true;
        }
      }

      setVisible(pageScrolled && !nearFooter);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.25 }}
          onClick={scrollToTop}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 p-3 rounded-full bg-[#0D111A]/90 border border-violet-500/40 text-white shadow-2xl backdrop-blur-xl hover:bg-violet-600 hover:border-violet-400 transition-all duration-300 group"
          title="Back to Top"
        >
          <ArrowUp className="w-4 h-4 text-violet-300 group-hover:text-white transition-colors shrink-0" />
          
          <AnimatePresence>
            {hovered && (
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 'auto', opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden text-xs font-mono font-bold whitespace-nowrap pr-1"
              >
                Back to Top
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
