import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, CheckCircle, Database } from 'lucide-react';
import { personalProfile, experienceTimeline } from '../data/portfolioData';
import TiltCard from './ui/TiltCard';
import KineticText from './ui/KineticText';

const fadeInRise = {
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0A0D14] relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Kinetic Text Reveal */}
        <div className="max-w-2xl mb-16 space-y-3">
          <span className="font-mono text-xs text-violet-400 font-bold uppercase tracking-wider block">
            // Profile & Career Overview
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            <KineticText text="About Me" />
          </h2>
          <p className="text-sm text-slate-300">
            Data Analyst with 3+ years of experience transforming raw operational datasets into strategic reporting solutions.
          </p>
        </div>

        {/* Grid with Sticky Right Side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Taller Content (Profile & Detailed Work History) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Profile Overview Card with 3D Tilt */}
            <motion.div {...fadeInRise}>
              <TiltCard maxAngle={6}>
                <div className="p-8 rounded-3xl bg-[#0F1420] border border-white/10 shadow-2xl space-y-6">
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 rounded-2xl bg-violet-600/10 border border-violet-500/30 text-violet-400">
                      <Database className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Profile Summary</h3>
                      <p className="text-xs text-slate-400">Data Operations & Business Intelligence</p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-200 leading-relaxed font-normal">
                    {personalProfile.bio}
                  </p>

                  <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                      <div className="text-[11px] font-mono text-slate-400 uppercase">Availability</div>
                      <div className="text-xs font-bold text-emerald-400">{personalProfile.availabilityStatus}</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                      <div className="text-[11px] font-mono text-slate-400 uppercase">Location</div>
                      <div className="text-xs font-bold text-white">{personalProfile.location}</div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>

            {/* Detailed Work History Cards with 3D Tilt */}
            <div className="space-y-5">
              <motion.h3
                {...fadeInRise}
                className="text-lg font-bold text-white flex items-center gap-2.5"
              >
                <Briefcase className="w-5 h-5 text-violet-400" />
                Work History Details
              </motion.h3>

              {experienceTimeline.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <TiltCard maxAngle={6}>
                    <div className="p-6 rounded-3xl bg-[#0F1420] border border-white/10 hover:border-violet-500/40 transition-all space-y-3 shadow-xl">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-3">
                        <div>
                          <h4 className="text-base font-bold text-white">{exp.role}</h4>
                          <div className="text-xs text-violet-400 font-mono font-semibold">{exp.company}</div>
                        </div>
                        <span className="text-xs font-mono text-slate-300 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                          {exp.period}
                        </span>
                      </div>
                      <ul className="space-y-2 pt-1">
                        {exp.keyResponsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="text-xs text-slate-300 flex items-start gap-2.5 leading-relaxed">
                            <span className="text-violet-400 font-bold shrink-0 mt-0.5">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>

          </div>

          {/* Right Column: STICKY Side Column */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28 lg:self-start">
            
            {/* Education Box with 3D Tilt */}
            <motion.div {...fadeInRise}>
              <TiltCard maxAngle={8}>
                <div className="p-6 rounded-3xl bg-[#0F1420] border border-white/10 shadow-2xl space-y-4">
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 rounded-2xl bg-cyan-600/10 border border-cyan-500/30 text-cyan-400">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">Education</h3>
                      <p className="text-xs text-slate-400">Academic Qualification</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                    <h4 className="text-xs font-bold text-white leading-snug">
                      {personalProfile.education.degree}
                    </h4>
                    <div className="text-xs text-cyan-400 font-medium">
                      {personalProfile.education.institution}
                    </div>
                    <div className="text-[11px] font-mono text-slate-400 flex justify-between pt-2 border-t border-white/5">
                      <span>{personalProfile.education.period}</span>
                      <span>{personalProfile.education.location}</span>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>

            {/* Core Competencies Checklist with 3D Tilt */}
            <motion.div {...fadeInRise}>
              <TiltCard maxAngle={8}>
                <div className="p-6 rounded-3xl bg-[#0F1420] border border-white/10 shadow-2xl space-y-4">
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 rounded-2xl bg-emerald-600/10 border border-emerald-500/30 text-emerald-400">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">Professional Highlights</h3>
                      <p className="text-xs text-slate-400">Core Capabilities</p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {[
                      "500+ SQL queries built for KPI tracking & automation",
                      "Built interactive Metabase & Power BI dashboards used by management",
                      "Strong background in ERP systems, SaaS products, and product analytics",
                      "Experience across data operations and business intelligence",
                      "Collaborated with Product Managers, Engineers, and Operations leads"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
