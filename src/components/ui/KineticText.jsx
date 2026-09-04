import React from 'react';
import { motion } from 'framer-motion';

export default function KineticText({ text, className = '', delay = 0 }) {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: delay },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring',
        damping: 18,
        stiffness: 120,
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
      rotateX: -40,
      transition: {
        type: 'spring',
        damping: 18,
        stiffness: 120,
      },
    },
  };

  return (
    <motion.div
      className={`inline-flex flex-wrap gap-x-3 gap-y-1 ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      style={{ perspective: 800 }}
    >
      {words.map((word, index) => (
        <span key={index} className="overflow-hidden inline-block py-1">
          <motion.span variants={child} className="inline-block transform-gpu">
            {word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
}
