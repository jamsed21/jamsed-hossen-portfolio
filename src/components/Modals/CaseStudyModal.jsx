import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Copy, Terminal, ExternalLink, Sparkles, BarChart2, CheckCircle2 } from 'lucide-react';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function CaseStudyModal({ project, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!project) return null;

  const handleCopySql = () => {
    navigator.clipboard.writeText(project.sqlSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="glass-card w-full max-w-4xl rounded-3xl border border-white/15 bg-[#0F1623]/95 text-slate-100 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        >
          {/* Modal Header */}
          <div className="p-6 border-b border-white/10 flex items-start justify-between bg-white/5">
            <div className="space-y-1 pr-6">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                {project.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2 pt-1">
                {project.tools.map(tool => (
                  <span key={tool} className="text-xs font-mono px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content Scrollable Area */}
          <div className="p-6 sm:p-8 space-y-8 overflow-y-auto custom-scrollbar flex-1">
            
            {/* KPI Banner Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {project.metrics.map((m, i) => (
                <div key={i} className="bg-white/5 rounded-2xl p-4 border border-white/10 text-center space-y-1">
                  <div className="text-xl sm:text-2xl font-mono font-bold text-cyan-300">{m.value}</div>
                  <div className="text-xs text-slate-400 font-sans">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Interactive Chart Preview inside modal */}
            {project.chartData && (
              <div className="glass-card rounded-2xl p-5 border border-white/10 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-2">
                    <BarChart2 className="w-4 h-4 text-cyan-400" />
                    Interactive Visualization Output
                  </span>
                  <span className="text-emerald-400">Live Data Mock</span>
                </div>
                <div className="h-56 w-full pt-2">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={project.chartData}>
                      <XAxis dataKey={Object.keys(project.chartData[0])[0]} stroke="#64748B" fontSize={11} />
                      <YAxis stroke="#64748B" fontSize={11} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#090D16', borderColor: '#1E293B', borderRadius: '12px', color: '#fff' }}
                      />
                      <Bar dataKey={Object.keys(project.chartData[0])[1]} fill="#00F2FE" radius={[6, 6, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            {/* Business Problem & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-rose-500/5 rounded-2xl p-5 border border-rose-500/20 space-y-2">
                <h4 className="text-sm font-mono font-bold text-rose-300 uppercase tracking-wider">Business Problem</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {project.businessProblem}
                </p>
              </div>

              <div className="bg-emerald-500/5 rounded-2xl p-5 border border-emerald-500/20 space-y-2">
                <h4 className="text-sm font-mono font-bold text-emerald-300 uppercase tracking-wider">Technical & Analytics Solution</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Insights List */}
            <div className="space-y-3">
              <h4 className="text-sm font-mono font-bold text-slate-300 uppercase tracking-wider">Key Business Insights Discovered</h4>
              <div className="space-y-2.5">
                {project.keyInsights.map((insight, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5 text-sm text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{insight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SQL Snippet Code Viewer */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono text-xs text-slate-300">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span>Production SQL Query Architecture</span>
                </div>
                <button
                  onClick={handleCopySql}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                  <span>{copied ? 'Copied!' : 'Copy SQL'}</span>
                </button>
              </div>

              <div className="bg-[#090D16] p-4 rounded-2xl border border-white/10 overflow-x-auto font-mono text-xs leading-relaxed text-cyan-200">
                <pre>{project.sqlSnippet}</pre>
              </div>
            </div>

          </div>

          {/* Modal Footer */}
          <div className="p-4 border-t border-white/10 bg-white/5 flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400">Jamsed Hossen Analytics Portfolio</span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              Close Window
            </button>
          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
}
