import React from 'react';
import { motion } from 'framer-motion';
import { experienceTimeline } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section-pad bg-[#0A0A0A] relative overflow-hidden">

      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-4">
            <p className="section-num mb-3">07 / Experience</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Where I've<br />
              <span className="gradient-text">worked & grown</span>
            </h2>
          </div>
          <div className="lg:col-span-8 flex items-center">
            <p className="text-[#737373] text-base leading-relaxed">
              Spent 2+ years at NITEX, a B2B fashion-tech platform. 
              Grew from data operations into a data analyst role, building the 
              analytical infrastructure the business runs on.
            </p>
          </div>
        </div>

        {/* Timeline entries */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden sm:block absolute left-[140px] top-0 bottom-0 w-px bg-[rgba(255,255,255,0.06)]" />

          <div className="space-y-12">
            {experienceTimeline.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.12 }}
                className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-6 sm:gap-10 relative"
              >
                {/* Period */}
                <div className="sm:text-right pt-1 space-y-1">
                  <div className="font-mono text-[10px] text-[#525252] uppercase tracking-widest leading-tight">
                    {exp.period.replace('–', '–\n')}
                  </div>
                  <div className="text-[11px] font-bold text-violet-400 font-mono">{exp.company}</div>
                </div>

                {/* Timeline dot */}
                <div className="hidden sm:block absolute left-[133px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#0A0A0A] border-2 border-violet-500" />

                {/* Content */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-extrabold text-white">{exp.role}</h3>
                      <p className="text-xs text-[#525252] font-mono mt-0.5">{exp.location}</p>
                    </div>
                    <span
                      className="shrink-0 font-mono text-[10px] font-bold px-2.5 py-1 rounded-lg whitespace-nowrap"
                      style={{
                        background: 'rgba(139,92,246,0.1)',
                        border: '1px solid rgba(139,92,246,0.2)',
                        color: '#C4B5FD',
                      }}
                    >
                      {exp.type}
                    </span>
                  </div>

                  <p className="text-xs text-[#737373] italic leading-relaxed border-l-2 border-violet-500/30 pl-3">
                    {exp.companyDescription}
                  </p>

                  <ul className="space-y-2.5">
                    {exp.keyResponsibilities.map((r, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#A3A3A3] leading-relaxed">
                        <span className="w-1 h-1 rounded-full bg-violet-400 mt-2 shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[rgba(255,255,255,0.05)]">
                    {exp.technologies.map(tech => (
                      <span
                        key={tech}
                        className="font-mono text-[10px] font-semibold px-2 py-0.5 rounded-md"
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          color: '#737373',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
