import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [hoverText, setHoverText] = useState('');

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      // Check if cursor is over interactive element
      const target = e.target;
      const interactiveEl = target.closest('a, button, input, textarea, [data-cursor]');
      
      if (interactiveEl) {
        setIsHovered(true);
        const cursorLabel = interactiveEl.getAttribute('data-cursor');
        if (cursorLabel) {
          setHoverText(cursorLabel);
        } else {
          setHoverText('');
        }
      } else {
        setIsHovered(false);
        setHoverText('');
      }
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Primary Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-cyan-400 pointer-events-none z-[9999] mix-blend-difference shadow-[0_0_12px_rgba(34,211,238,0.8)]"
        animate={{
          x: mousePos.x - 6,
          y: mousePos.y - 6,
          scale: isMouseDown ? 0.6 : isHovered ? 1.4 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 800,
          damping: 35,
          mass: 0.1,
        }}
      />

      {/* Lusion-style Outer Magnetic Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-violet-400/60 pointer-events-none z-[9998] flex items-center justify-center backdrop-blur-[1px]"
        animate={{
          x: mousePos.x - (isHovered ? 28 : 20),
          y: mousePos.y - (isHovered ? 28 : 20),
          width: isHovered ? 56 : 40,
          height: isHovered ? 56 : 40,
          scale: isMouseDown ? 0.85 : 1,
          borderColor: isHovered ? 'rgba(167,139,250,0.9)' : 'rgba(139,92,246,0.35)',
          backgroundColor: isHovered ? 'rgba(139,92,246,0.12)' : 'transparent',
        }}
        transition={{
          type: 'spring',
          stiffness: 250,
          damping: 25,
          mass: 0.2,
        }}
      >
        {hoverText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[9px] font-mono font-bold text-white tracking-widest uppercase"
          >
            {hoverText}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
