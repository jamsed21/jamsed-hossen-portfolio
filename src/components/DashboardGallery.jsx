import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, Eye } from 'lucide-react';
import { galleryDashboards, featuredProjects } from '../data/portfolioData';
import CaseStudyModal from './Modals/CaseStudyModal';

const categories = ['All', 'Sales & Revenue Analytics', 'Operations Analytics', 'Product & Data Analytics', 'Executive BI'];

export default function DashboardGallery() {
  const [active, setActive]   = useState('All');
  const [modal, setModal]     = useState(null);

  const filtered = active === 'All'
    ? galleryDashboards
    : galleryDashboards.filter(d => d.category === active);

  const handleInspect = (dash) => {
    const matched = featuredProjects.find(p => p.category === dash.category) || {
      id: dash.id, title: dash.title, category: dash.category, tools: dash.tools,
      shortDesc: dash.description, image: dash.image,
      metrics: [{ label: 'Data Refresh', value: 'Hourly' }, { label: 'Queries', value: '15+' }],
      businessProblem: `${dash.title} was built to replace manual spreadsheet tracking with real-time metrics.`,
      solution: `Integrated via ${dash.tools.join(', ')} with automated aggregations and drill-down widgets.`,
      keyInsights: ['Single source of truth for operations.', 'Automated threshold alerts.'],
      sqlSnippet: `SELECT category, COUNT(*) AS total, SUM(gmv) AS value\nFROM metrics_warehouse\nGROUP BY 1 ORDER BY 3 DESC;`,
    };
    setModal(matched);
  };

  return (
    <section id="gallery" className="section-pad bg-[#0D0D0D] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-4">
            <p className="section-num mb-3">05 / Gallery</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Dashboard<br />
              <span className="gradient-text">gallery</span>
            </h2>
          </div>
          <div className="lg:col-span-8 flex flex-col justify-center gap-6">
            <p className="text-[#737373] text-base leading-relaxed">
              A visual showcase of dashboards built at NITEX. Click any card to see the 
              SQL and metrics behind it.
            </p>
            {/* Filter pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className="font-mono text-[11px] font-semibold px-3 py-1.5 rounded-lg transition-all duration-150"
                  style={{
                    background: active === cat ? 'rgba(139,92,246,0.15)' : 'rgba(255,255,255,0.04)',
                    border: active === cat ? '1px solid rgba(139,92,246,0.4)' : '1px solid rgba(255,255,255,0.07)',
                    color: active === cat ? '#C4B5FD' : '#737373',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {filtered.map((dash, idx) => (
              <motion.div
                layout
                key={dash.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25, delay: idx * 0.04 }}
                className="group panel rounded-2xl overflow-hidden cursor-pointer"
                style={{ transition: 'border-color 0.2s' }}
                onClick={() => handleInspect(dash)}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(139,92,246,0.3)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
              >
                {/* Image */}
                <div className="relative h-40 overflow-hidden bg-[#111]">
                  <img
                    src={dash.image}
                    alt={dash.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-white" style={{ background: 'rgba(139,92,246,0.85)' }}>
                      <Maximize2 className="w-3.5 h-3.5" />
                      Inspect
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="font-bold text-sm text-white group-hover:text-violet-300 transition-colors leading-snug">{dash.title}</h3>
                    <p className="text-[11px] text-[#737373] leading-relaxed mt-1 line-clamp-2">{dash.description}</p>
                  </div>
                  <div className="flex items-center justify-between border-t border-[rgba(255,255,255,0.05)] pt-3">
                    <div className="flex gap-1.5">
                      {dash.tools.map(t => (
                        <span key={t} className="font-mono text-[9px] px-1.5 py-0.5 rounded" style={{ background: 'rgba(255,255,255,0.04)', color: '#525252', border: '1px solid rgba(255,255,255,0.06)' }}>{t}</span>
                      ))}
                    </div>
                    <Eye className="w-3.5 h-3.5 text-[#525252] group-hover:text-violet-400 transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
      {modal && <CaseStudyModal project={modal} onClose={() => setModal(null)} />}
    </section>
  );
}
