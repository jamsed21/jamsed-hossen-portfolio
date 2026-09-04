import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import { usePortfolioData } from '../hooks/usePortfolioData';
import CaseStudyModal from './Modals/CaseStudyModal';
import ToolLogo from './ui/ToolLogos';
import TiltCard from './ui/TiltCard';

const fadeInRise = {
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

export default function AnalyticsProjects() {
  const { projects } = usePortfolioData();
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="py-24 bg-[#070A10] relative overflow-hidden border-t border-white/5">

      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-500/6 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Clean Header */}
        <motion.div
          {...fadeInRise}
          className="mb-12 space-y-2"
        >
          <span className="font-mono text-xs text-violet-400 font-bold uppercase tracking-wider">// Portfolio Work</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Analytics & BI Dashboards
          </h2>
        </motion.div>

        {/* Project cards with 3D Tilt */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <TiltCard maxAngle={10} scaleOnHover={1.03}>
                <div
                  className="group rounded-3xl bg-[#0F1420] border border-white/10 overflow-hidden flex flex-col cursor-pointer shadow-xl hover:border-violet-500/50 transition-colors duration-300"
                  onClick={() => setSelected(project)}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-neutral-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F1420] via-transparent to-transparent" />

                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span
                        className="font-mono text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#0D111A]/80 border border-violet-500/30 text-violet-300 backdrop-blur-md"
                      >
                        {project.category}
                      </span>
                    </div>

                    {/* Hover inspect */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/40 backdrop-blur-xs">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-white bg-violet-600 shadow-lg">
                        <Eye className="w-3.5 h-3.5" />
                        View SQL & Details
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 flex-1 flex flex-col gap-4">
                    <div className="flex-1 space-y-2">
                      <h3 className="font-bold text-white text-base leading-snug group-hover:text-violet-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                        {project.shortDesc}
                      </p>
                    </div>

                    {/* Tools with Brand Logos */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tools.map(t => (
                        <span
                          key={t}
                          className="font-mono text-[10px] px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 flex items-center gap-1.5"
                        >
                          <ToolLogo name={t} className="w-3 h-3" />
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-2 pt-3 border-t border-white/10">
                      {project.metrics.slice(0, 2).map((m, i) => (
                        <div key={i} className="space-y-0.5">
                          <div className="font-mono text-base font-bold text-violet-300">{m.value}</div>
                          <div className="text-[10px] text-slate-400 font-medium">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>

      {selected && <CaseStudyModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
