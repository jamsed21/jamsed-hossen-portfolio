import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  FileText, 
  BookOpen, 
  Layers, 
  ArrowUpRight,
  CheckCircle2,
  FileCheck
} from 'lucide-react';
import { productDocuments } from '../data/portfolioData';
import DocumentModal from './Modals/DocumentModal';

export default function DocShowcase() {
  const [selectedDoc, setSelectedDoc] = useState(null);

  return (
    <section id="docs" className="py-24 relative bg-[#090D16] overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Product Assets & Specs</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-sans">
            Product Documentation <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">Showcase</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Inspect real PRDs, BRDs, Gherkin User Stories, and Process Flow specs authored for production features.
          </p>
        </div>

        {/* Document Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {productDocuments.map((doc, idx) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 glass-card-hover flex flex-col justify-between group space-y-6"
            >
              <div className="space-y-4">
                
                {/* Header Meta */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                    {doc.type}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {doc.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                  {doc.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {doc.summary}
                </p>

                {/* Document Sections Preview Pills */}
                <div className="space-y-2 pt-2">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Included Spec Sections</div>
                  <div className="flex flex-wrap gap-1.5">
                    {doc.sections.map((s, i) => (
                      <span key={i} className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-slate-300">
                        {s.heading.split(':')[0]}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action Button */}
              <button
                onClick={() => setSelectedDoc(doc)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-xs text-white bg-white/5 hover:bg-indigo-500/20 border border-white/10 hover:border-indigo-500/40 hover:text-indigo-300 transition-all duration-300 group/btn"
              >
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <span>Read Full Document Spec</span>
                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </button>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Document Reader Modal */}
      {selectedDoc && (
        <DocumentModal
          doc={selectedDoc}
          onClose={() => setSelectedDoc(null)}
        />
      )}
    </section>
  );
}
