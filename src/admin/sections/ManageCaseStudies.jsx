import React, { useState } from 'react';
import { Plus, Edit2, Trash2, RotateCcw, X, Check } from 'lucide-react';

export default function ManageCaseStudies({ caseStudies, saveCaseStudy, deleteCaseStudy, resetCaseStudiesToDefault }) {
  const [editingStudy, setEditingStudy] = useState(null);
  const [formData, setFormData] = useState(initialFormState());

  function initialFormState() {
    return {
      id: '',
      title: '',
      subtitle: '',
      impactMetrics: [
        { label: 'Time Saved', value: '40%' },
        { label: 'Error Reduction', value: '95%' },
        { label: 'Reporting Speed', value: '10x' }
      ],
      problem: {
        headline: '',
        details: ''
      },
      solutionSteps: [
        { title: 'Step 1: Data Structuring', desc: '' },
        { title: 'Step 2: SQL & Pipeline Automation', desc: '' },
        { title: 'Step 3: Dashboard Development', desc: '' }
      ],
      impact: 'Outcome 1\nOutcome 2\nOutcome 3'
    };
  }

  const handleOpenCreate = () => {
    setFormData(initialFormState());
    setEditingStudy({ isNew: true });
  };

  const handleOpenEdit = (study) => {
    setFormData({
      id: study.id,
      title: study.title || '',
      subtitle: study.subtitle || '',
      impactMetrics: study.impactMetrics || [
        { label: 'Time Saved', value: '40%' },
        { label: 'Error Reduction', value: '95%' },
        { label: 'Reporting Speed', value: '10x' }
      ],
      problem: {
        headline: study.problem?.headline || '',
        details: study.problem?.details || ''
      },
      solutionSteps: study.solutionSteps || [
        { title: 'Step 1', desc: '' },
        { title: 'Step 2', desc: '' }
      ],
      impact: Array.isArray(study.impact) ? study.impact.join('\n') : study.impact || ''
    });
    setEditingStudy({ isNew: false, id: study.id });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      id: formData.id || undefined,
      title: formData.title,
      subtitle: formData.subtitle,
      impactMetrics: formData.impactMetrics,
      problem: formData.problem,
      solutionSteps: formData.solutionSteps,
      impact: formData.impact.split('\n').map((i) => i.trim()).filter(Boolean)
    };

    saveCaseStudy(payload);
    setEditingStudy(null);
  };

  const handleImpactMetricChange = (index, field, value) => {
    const newMetrics = [...formData.impactMetrics];
    newMetrics[index] = { ...newMetrics[index], [field]: value };
    setFormData({ ...formData, impactMetrics: newMetrics });
  };

  const handleStepChange = (index, field, value) => {
    const newSteps = [...formData.solutionSteps];
    newSteps[index] = { ...newSteps[index], [field]: value };
    setFormData({ ...formData, solutionSteps: newSteps });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
        <div>
          <h2 className="text-xl font-bold text-white">Data & BI Case Studies ({caseStudies.length})</h2>
          <p className="text-xs text-neutral-400">Deep-dive accordion case studies on the portfolio page.</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={resetCaseStudiesToDefault}
            className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-400 text-xs flex items-center gap-1.5 transition-colors border border-white/10"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>
          <button
            onClick={handleOpenCreate}
            className="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold flex items-center gap-2 shadow-lg shadow-violet-600/30 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Case Study</span>
          </button>
        </div>
      </div>

      {/* Case Study Cards */}
      <div className="space-y-4">
        {caseStudies.map((study) => (
          <div key={study.id} className="p-6 rounded-2xl bg-[#0F1420] border border-white/10 space-y-3">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[11px] font-mono text-cyan-400 uppercase font-semibold">{study.subtitle}</span>
                <h3 className="text-lg font-bold text-white mt-1">{study.title}</h3>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                <button
                  onClick={() => handleOpenEdit(study)}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 transition-colors"
                  title="Edit"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    if (confirm(`Delete case study "${study.title}"?`)) deleteCaseStudy(study.id);
                  }}
                  className="p-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-colors"
                  title="Delete"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <p className="text-xs text-neutral-400 line-clamp-2">{study.problem?.details}</p>

            <div className="flex flex-wrap gap-3 pt-2">
              {study.impactMetrics?.map((m, i) => (
                <div key={i} className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 text-[11px]">
                  <span className="text-neutral-400">{m.label}: </span>
                  <span className="text-cyan-400 font-bold">{m.value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Form Modal */}
      {editingStudy && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#0F1420] border border-white/15 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 shadow-2xl relative space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="text-lg font-bold text-white">
                {editingStudy.isNew ? 'Add Data & BI Case Study' : 'Edit Case Study'}
              </h3>
              <button
                onClick={() => setEditingStudy(null)}
                className="p-1.5 rounded-xl bg-white/5 text-neutral-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-neutral-400 mb-1 font-medium">Case Study Title</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-violet-500"
                  placeholder="e.g. Automated ERP Data Pipelines & Executive BI Dashboard"
                />
              </div>

              <div>
                <label className="block text-neutral-400 mb-1 font-medium">Subtitle / Impact Tagline</label>
                <input
                  type="text"
                  required
                  value={formData.subtitle}
                  onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-violet-500"
                  placeholder="e.g. Enterprise Data Architecture & Reporting Overhaul"
                />
              </div>

              {/* 3 Impact Metrics */}
              <div>
                <label className="block text-neutral-400 mb-2 font-medium">3 Highlight Impact Metrics</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {formData.impactMetrics.map((m, idx) => (
                    <div key={idx} className="space-y-1 bg-white/5 p-2 rounded-xl border border-white/5">
                      <input
                        type="text"
                        placeholder="Label"
                        value={m.label}
                        onChange={(e) => handleImpactMetricChange(idx, 'label', e.target.value)}
                        className="w-full px-2 py-1 rounded bg-black/30 text-white text-[11px]"
                      />
                      <input
                        type="text"
                        placeholder="Value"
                        value={m.value}
                        onChange={(e) => handleImpactMetricChange(idx, 'value', e.target.value)}
                        className="w-full px-2 py-1 rounded bg-black/30 text-cyan-400 font-bold text-[11px]"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Problem Section */}
              <div className="space-y-2 bg-white/5 p-3 rounded-xl border border-white/5">
                <label className="block text-violet-400 font-bold">The Business Problem</label>
                <input
                  type="text"
                  placeholder="Problem Headline (e.g. Manual Excel Reports Delaying Decisions)"
                  value={formData.problem.headline}
                  onChange={(e) =>
                    setFormData({ ...formData, problem: { ...formData.problem, headline: e.target.value } })
                  }
                  className="w-full px-3 py-2 rounded-xl bg-black/40 border border-white/10 text-white"
                />
                <textarea
                  rows={3}
                  placeholder="Detailed description of the problem..."
                  value={formData.problem.details}
                  onChange={(e) =>
                    setFormData({ ...formData, problem: { ...formData.problem, details: e.target.value } })
                  }
                  className="w-full px-3 py-2 rounded-xl bg-black/40 border border-white/10 text-white"
                />
              </div>

              {/* Solution Steps */}
              <div className="space-y-2 bg-white/5 p-3 rounded-xl border border-white/5">
                <label className="block text-violet-400 font-bold">Solution Implementation Steps</label>
                {formData.solutionSteps.map((step, idx) => (
                  <div key={idx} className="space-y-1 bg-black/30 p-2 rounded-lg">
                    <input
                      type="text"
                      placeholder={`Step ${idx + 1} Title`}
                      value={step.title}
                      onChange={(e) => handleStepChange(idx, 'title', e.target.value)}
                      className="w-full px-2 py-1 rounded bg-white/5 text-white font-medium"
                    />
                    <textarea
                      rows={2}
                      placeholder={`Step ${idx + 1} Description`}
                      value={step.desc}
                      onChange={(e) => handleStepChange(idx, 'desc', e.target.value)}
                      className="w-full px-2 py-1 rounded bg-white/5 text-neutral-300"
                    />
                  </div>
                ))}
              </div>

              {/* Impact / Key Outcomes */}
              <div>
                <label className="block text-neutral-400 mb-1 font-medium">Key Outcomes / Business Impact (One per line)</label>
                <textarea
                  rows={4}
                  value={formData.impact}
                  onChange={(e) => setFormData({ ...formData, impact: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-violet-500 font-mono text-[11px]"
                  placeholder="Automated daily reporting for executive team&#10;Reduced data processing time from 4 hours to 10 minutes&#10;Eliminated human error across 500+ operational records"
                />
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setEditingStudy(null)}
                  className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold flex items-center gap-1.5 shadow-lg shadow-violet-600/30"
                >
                  <Check className="w-4 h-4" />
                  <span>Save Case Study</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
