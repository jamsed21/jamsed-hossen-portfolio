import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, CheckCircle2, TrendingUp, ChevronDown } from 'lucide-react';
import { usePortfolioData } from '../hooks/usePortfolioData';

const fadeInRise = {
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

export default function CaseStudies() {
  const { caseStudies } = usePortfolioData();
  const [open, setOpen] = useState(caseStudies[0]?.id || null);

  return (
    <section id="casestudies" className="py-24 bg-[#0A0D14] relative overflow-hidden border-t border-white/5">

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          {...fadeInRise}
          className="mb-12 space-y-2"
        >
          <span className="font-mono text-xs text-violet-400 font-bold uppercase tracking-wider">// Deep-Dive Analytics</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Data & BI Case Studies
          </h2>
        </motion.div>

        {/* Accordion case studies */}
        <div className="space-y-4">
          {caseStudies.map((study, idx) => {
            const isOpen = open === study.id;
            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-3xl overflow-hidden transition-all duration-300 bg-[#0F1420] border border-white/10 shadow-xl"
                style={{
                  borderColor: isOpen ? 'rgba(139,92,246,0.5)' : 'rgba(255,255,255,0.1)',
                }}
              >
                {/* Accordion header */}
                <button
                  className="w-full flex items-center justify-between px-8 py-6 text-left"
                  onClick={() => setOpen(isOpen ? null : study.id)}
                >
                  <h3 className="text-base sm:text-lg font-bold text-white pr-4">
                    {study.title}
                  </h3>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 ml-4 p-2 rounded-full bg-white/5 border border-white/10"
                  >
                    <ChevronDown
                      className="w-4 h-4 text-violet-400"
                    />
                  </motion.div>
                </button>

                {/* Accordion body */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 space-y-8 border-t border-white/10">

                        {/* Subtitle */}
                        <p className="text-sm text-slate-300 leading-relaxed pt-6">
                          {study.subtitle}
                        </p>

                        {/* Impact metrics */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {study.impactMetrics.map((m, i) => (
                            <div
                              key={i}
                              className="rounded-2xl p-4 text-center space-y-1 bg-violet-600/10 border border-violet-500/20"
                            >
                              <div className="font-mono text-2xl font-black text-violet-300">{m.value}</div>
                              <div className="text-xs font-bold text-white">{m.label}</div>
                              <div className="text-[10px] font-mono text-slate-400">{m.desc}</div>
                            </div>
                          ))}
                        </div>

                        {/* Problem / Solution grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          {/* Problem */}
                          <div className="rounded-2xl p-5 space-y-3 bg-red-500/5 border border-red-500/20">
                            <div className="flex items-center gap-2 text-xs font-mono font-bold text-red-400 uppercase tracking-wider">
                              <AlertCircle className="w-3.5 h-3.5" />
                              Operational Bottleneck
                            </div>
                            <h4 className="font-bold text-white text-sm">{study.problem.headline}</h4>
                            <p className="text-xs text-slate-300 leading-relaxed">{study.problem.details}</p>
                          </div>

                          {/* Solution steps */}
                          <div className="space-y-3">
                            <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                              <TrendingUp className="w-3.5 h-3.5" />
                              Solution Architecture
                            </div>
                            <div className="space-y-2">
                              {study.solution.steps.map((step) => (
                                <div
                                  key={step.num}
                                  className="flex gap-3 rounded-2xl p-3 bg-white/[0.03] border border-white/5"
                                >
                                  <span className="font-mono text-xs font-bold text-violet-400 shrink-0 mt-0.5">{step.num}</span>
                                  <div>
                                    <div className="text-xs font-bold text-white mb-0.5">{step.title}</div>
                                    <div className="text-[11px] text-slate-400 leading-relaxed">{step.desc}</div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Impact points */}
                        <div className="rounded-2xl p-5 space-y-3 bg-emerald-500/5 border border-emerald-500/20">
                          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                            Measurable Business Outcomes
                          </div>
                          <div className="space-y-2">
                            {study.impact.points.map((pt, i) => (
                              <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                                {pt}
                              </div>
                            ))}
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
