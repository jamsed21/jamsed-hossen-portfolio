import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, CheckCircle2, BookOpen, Layers, Sparkles } from 'lucide-react';

export default function DocumentModal({ doc, onClose }) {
  if (!doc) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="glass-card w-full max-w-3xl rounded-3xl border border-white/15 bg-[#0F1623]/95 text-slate-100 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-start justify-between bg-white/5">
            <div className="space-y-1 pr-6">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                  {doc.type}
                </span>
                <span className="text-xs font-mono text-slate-400">• {doc.date}</span>
                <span className="text-xs font-mono text-emerald-400 font-bold">• {doc.status}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-2">
                {doc.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content Scrollable Area */}
          <div className="p-6 sm:p-8 space-y-6 overflow-y-auto custom-scrollbar flex-1 font-sans">
            
            {/* Summary callout */}
            <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-xs sm:text-sm text-cyan-200 leading-relaxed font-mono">
              <span className="font-bold text-white uppercase block mb-1">Document Summary</span>
              {doc.summary}
            </div>

            {/* Formatted Sections */}
            <div className="space-y-6">
              {doc.sections.map((sec, idx) => (
                <div key={idx} className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-3">
                  <h4 className="text-sm font-mono font-bold text-cyan-300 border-b border-white/10 pb-2">
                    {sec.heading}
                  </h4>
                  <div className="text-xs sm:text-sm text-slate-200 whitespace-pre-line leading-relaxed font-mono">
                    {sec.content}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Modal Footer */}
          <div className="p-4 border-t border-white/10 bg-white/5 flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400">Jamsed Hossen Product Documentation Spec</span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              Close Spec Reader
            </button>
          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
}
