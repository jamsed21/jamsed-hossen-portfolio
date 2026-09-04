import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Linkedin } from 'lucide-react';
import { personalProfile } from '../data/portfolioData';
import TiltCard from './ui/TiltCard';
import KineticText from './ui/KineticText';

const roles = ['Data Analyst', 'BI Specialist', 'SQL Expert', 'Dashboard Builder'];

function useCounter(end, duration = 1500, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, end, duration]);
  return count;
}

export default function Hero({ onOpenResume }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [blobPos, setBlobPos] = useState({ x: '50%', y: '40%' });
  const [counting, setCounting] = useState(false);
  const heroRef = useRef(null);

  // Cursor blob tracking
  useEffect(() => {
    const handleMove = (e) => {
      setBlobPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  // Role rotator
  useEffect(() => {
    const t = setInterval(() => setRoleIndex(p => (p + 1) % roles.length), 3000);
    return () => clearInterval(t);
  }, []);

  // Trigger counters when hero is visible
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setCounting(true); },
      { threshold: 0.3 }
    );
    if (heroRef.current) obs.observe(heroRef.current);
    return () => obs.disconnect();
  }, []);

  const c500 = useCounter(500, 1800, counting);
  const c85  = useCounter(85,  1600, counting);

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
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#070A10]"
      style={{ paddingTop: '100px' }}
    >
      {/* Dynamic Cursor Light Ambient Glow */}
      <div
        className="cursor-blob pointer-events-none opacity-50"
        style={{ left: blobPos.x, top: blobPos.y }}
      />

      {/* Cyber Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Ambient Radial Mesh Highlights */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-violet-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10 w-full py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Hero Content Block */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Open to Work Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex"
            >
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-semibold backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                Available for Hire · Data Analyst & BI Specialist
              </div>
            </motion.div>

            {/* Name & Animated Title with Lusion-style Kinetic Text */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.02]">
                Jamsed<br />
                <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                  Hossen
                </span>
              </h1>

              {/* Animated Role Line */}
              <div className="flex items-center gap-3 h-7">
                <span className="font-mono text-xs text-slate-500 font-bold uppercase tracking-widest">SPECIALTY</span>
                <span className="text-slate-600">/</span>
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="font-mono text-sm font-bold text-cyan-400 tracking-wide"
                >
                  {roles[roleIndex]}
                </motion.span>
              </div>

              {/* Lusion-style Kinetic Paragraph Reveal */}
              <div className="pt-1">
                <KineticText
                  text="I help organizations turn complex data into actionable insights through analytics, dashboards, and process automation enabling smarter, faster, and more data driven decisions across the business."
                  className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl font-normal"
                />
              </div>

            </div>

            {/* Action CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <a
                href="#projects"
                data-cursor="VIEW"
                className="px-6 py-3 rounded-full text-xs font-bold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-xl shadow-violet-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <span>View Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalProfile.resumePdf}
                onClick={handleDownloadResume}
                data-cursor="PDF"
                className="px-5 py-3 rounded-full text-xs font-bold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume PDF</span>
              </a>

              <a
                href="https://www.linkedin.com/in/jamsed21/"
                target="_blank"
                rel="noreferrer"
                data-cursor="LINK"
                className="p-3 rounded-full text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-violet-400" />
              </a>
            </motion.div>

            {/* Stat Cards Row with 3D Tilt */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4"
            >
              <TiltCard maxAngle={8}>
                <div className="bg-white/[0.02] p-3.5 rounded-2xl border border-white/5 shadow-md">
                  <div className="font-mono text-2xl font-black text-white">
                    3+<span className="text-violet-400 text-sm font-normal">Yrs</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5 font-medium">Data Analytics Exp</div>
                </div>
              </TiltCard>

              <TiltCard maxAngle={8}>
                <div className="bg-white/[0.02] p-3.5 rounded-2xl border border-white/5 shadow-md">
                  <div className="font-mono text-2xl font-black text-white">
                    {c500}<span className="text-cyan-400 text-sm font-normal">+</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5 font-medium">SQL Queries Built</div>
                </div>
              </TiltCard>

              <TiltCard maxAngle={8}>
                <div className="bg-white/[0.02] p-3.5 rounded-2xl border border-white/5 shadow-md">
                  <div className="font-mono text-2xl font-black text-white">
                    {c85}<span className="text-emerald-400 text-sm font-normal">+</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5 font-medium">BI Dashboards Shipped</div>
                </div>
              </TiltCard>
            </motion.div>

          </div>

          {/* Right Hero Portrait Container with 3D Tilt */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-sm lg:max-w-md flex justify-end"
            >
              <TiltCard maxAngle={12} scaleOnHover={1.03} className="w-full">
                {/* Outer Metallic Glow Shadow */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-violet-600/30 via-indigo-500/20 to-cyan-400/30 blur-lg opacity-60 pointer-events-none" />

                {/* Ultra-Clean Card Container: Maximum 5px padding (p-[5px]) */}
                <div className="relative rounded-2xl bg-[#0D111A] border border-white/15 p-[5px] shadow-[0_20px_50px_rgba(0,0,0,0.8)] w-full">
                  <div className="relative rounded-xl overflow-hidden aspect-[3/4] bg-neutral-950">
                    <img
                      src={personalProfile.profileImage}
                      alt="Jamsed Hossen"
                      className="w-full h-full object-cover object-center filter saturate-[1.05] contrast-[1.02]"
                    />
                    
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl pointer-events-none" />
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
