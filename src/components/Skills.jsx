import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Database, Layers, UserCheck, Globe } from 'lucide-react';
import ToolLogo from './ui/ToolLogos';
import {
  pdfSkillsList,
  marqueeRow1,
  marqueeRow2,
  skillsCategoriesData
} from '../data/portfolioData';

const fadeInRise = {
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

// Custom Animated Skill Item: Progress bar animates from 20% to target %, number counts up from 20 to target
function AnimatedSkillBar({ name, level, desc }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [currentVal, setCurrentVal] = useState(20);

  useEffect(() => {
    if (!isInView) return;
    let startTimestamp = null;
    const duration = 1500;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const val = Math.floor(20 + easeProgress * (level - 20));
      setCurrentVal(val);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, level]);

  return (
    <div ref={ref} className="p-4 rounded-2xl bg-[#141A26] border border-white/10 space-y-2.5 shadow-lg">
      <div className="flex items-center justify-between text-xs">
        <span className="font-bold text-white flex items-center gap-2">
          <ToolLogo name={name} className="w-4 h-4 shrink-0" />
          <span>{name}</span>
        </span>
        <span className="font-mono text-cyan-400 font-bold font-mono text-xs">
          {currentVal}%
        </span>
      </div>

      {/* Progress Bar Container */}
      <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden relative">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-400"
          initial={{ width: '20%' }}
          animate={{ width: isInView ? `${level}%` : '20%' }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      </div>

      <p className="text-[11px] text-slate-300 leading-relaxed line-clamp-2">{desc}</p>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#070A10] relative border-t border-white/5 overflow-hidden">
      
      {/* Background glow ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          {...fadeInRise}
          className="text-center max-w-2xl mx-auto mb-16 space-y-3"
        >
          <span className="font-mono text-xs text-violet-400 font-bold uppercase tracking-wider">
            // Core Toolkit & Skillset
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tools & Technology
          </h2>
          <p className="text-sm text-slate-300">
            Verified expertise across relational databases, BI platforms, data cleaning pipelines, and analytical reporting.
          </p>
        </motion.div>

        {/* 2-Line Slow Marquee Animation with Authentic Brand Logos */}
        <motion.div
          {...fadeInRise}
          className="mb-20 space-y-6"
        >
          <div className="text-center">
            <span className="text-xs font-mono text-slate-400 tracking-widest uppercase font-bold">
              • Technical Tools & Stack Logos •
            </span>
          </div>

          {/* Marquee Container */}
          <div className="relative overflow-hidden space-y-4 py-2">
            
            {/* Fade gradients on edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#070A10] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#070A10] to-transparent z-10 pointer-events-none" />

            {/* Row 1 - Scroll Left Slow */}
            <div className="flex overflow-hidden">
              <motion.div
                className="flex gap-4 items-center whitespace-nowrap"
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                  duration: 50,
                  ease: 'linear',
                  repeat: Infinity,
                }}
              >
                {[...marqueeRow1, ...marqueeRow1, ...marqueeRow1, ...marqueeRow1].map((tool, idx) => (
                  <div
                    key={`row1-${idx}`}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-[#0F1420] border border-white/10 shadow-md hover:border-violet-500/50 transition-colors"
                  >
                    <ToolLogo name={tool.name} className="w-5 h-5" />
                    <span className="text-xs font-bold text-white font-mono">{tool.name}</span>
                    <span className="text-[10px] text-slate-400 bg-white/5 px-2 py-0.5 rounded-md font-mono">{tool.category}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Row 2 - Scroll Right Slow */}
            <div className="flex overflow-hidden">
              <motion.div
                className="flex gap-4 items-center whitespace-nowrap"
                animate={{ x: ['-50%', '0%'] }}
                transition={{
                  duration: 55,
                  ease: 'linear',
                  repeat: Infinity,
                }}
              >
                {[...marqueeRow2, ...marqueeRow2, ...marqueeRow2, ...marqueeRow2].map((tool, idx) => (
                  <div
                    key={`row2-${idx}`}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-[#0F1420] border border-white/10 shadow-md hover:border-cyan-500/50 transition-colors"
                  >
                    <ToolLogo name={tool.name} className="w-5 h-5" />
                    <span className="text-xs font-bold text-white font-mono">{tool.name}</span>
                    <span className="text-[10px] text-slate-400 bg-white/5 px-2 py-0.5 rounded-md font-mono">{tool.category}</span>
                  </div>
                ))}
              </motion.div>
            </div>

          </div>
        </motion.div>

        {/* Skills Breakdown Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          
          {/* Card 1: Core Skills from Resume PDF */}
          <motion.div
            {...fadeInRise}
            className="lg:col-span-5 p-6 rounded-3xl bg-[#0F1420] border border-white/10 space-y-4 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-violet-600/10 border border-violet-500/30 text-violet-400">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Data Analyst Skills</h3>
            </div>
            <p className="text-xs text-slate-400">Core analytical capabilities verified across projects and data operations.</p>
            <div className="flex flex-wrap gap-2 pt-2">
              {pdfSkillsList.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-200 flex items-center gap-2"
                >
                  <ToolLogo name={skill} className="w-3.5 h-3.5" />
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 2: Key Functional Expertise */}
          <motion.div
            {...fadeInRise}
            className="lg:col-span-7 p-6 rounded-3xl bg-[#0F1420] border border-white/10 space-y-4 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-cyan-600/10 border border-cyan-500/30 text-cyan-400">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Key Functional Expertise</h3>
                <p className="text-xs text-slate-400">Animated progress bars & numbers (20% → level)</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {skillsCategoriesData[0].skills.map((s, idx) => (
                <AnimatedSkillBar
                  key={idx}
                  name={s.name}
                  level={s.level}
                  desc={s.desc}
                />
              ))}
            </div>
          </motion.div>

        </div>

        {/* Soft Skills & Languages Row */}
        <motion.div
          {...fadeInRise}
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          <div className="p-5 rounded-2xl bg-[#0F1420] border border-white/10 flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-3">
              <UserCheck className="w-5 h-5 text-emerald-400" />
              <div>
                <div className="text-xs font-bold text-white">Soft Skills</div>
                <div className="text-xs text-slate-400 mt-0.5">Problem Solving · Communication · Leadership</div>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#0F1420] border border-white/10 flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="text-xs font-bold text-white">Languages</div>
                <div className="text-xs text-slate-400 mt-0.5">Bangla (Native) · English (Professional)</div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
