import React, { useState } from 'react';
import { Plus, Edit2, Trash2, RotateCcw, X, Check, Eye } from 'lucide-react';

export default function ManageProjects({ projects, saveProject, deleteProject, resetProjectsToDefault }) {
  const [editingProject, setEditingProject] = useState(null); // null = modal closed, {} = creating/editing
  const [formData, setFormData] = useState(initialFormState());

  function initialFormState() {
    return {
      id: '',
      title: '',
      category: '',
      shortDesc: '',
      image: '/images/jamsed_hossen.jpg',
      tools: 'Power BI, SQL, Excel',
      metrics: [
        { label: 'Metric 1', value: '100%' },
        { label: 'Metric 2', value: '50+' },
        { label: 'Metric 3', value: '2.5x' },
        { label: 'Metric 4', value: '99%' }
      ],
      businessProblem: '',
      solution: '',
      keyInsights: 'Insight 1\nInsight 2\nInsight 3',
      sqlSnippet: ''
    };
  }

  const handleOpenCreate = () => {
    setFormData(initialFormState());
    setEditingProject({ isNew: true });
  };

  const handleOpenEdit = (proj) => {
    setFormData({
      id: proj.id,
      title: proj.title || '',
      category: proj.category || '',
      shortDesc: proj.shortDesc || '',
      image: proj.image || '/images/jamsed_hossen.jpg',
      tools: Array.isArray(proj.tools) ? proj.tools.join(', ') : proj.tools || '',
      metrics: proj.metrics || [
        { label: 'Metric 1', value: '100%' },
        { label: 'Metric 2', value: '50+' },
        { label: 'Metric 3', value: '2.5x' },
        { label: 'Metric 4', value: '99%' }
      ],
      businessProblem: proj.businessProblem || '',
      solution: proj.solution || '',
      keyInsights: Array.isArray(proj.keyInsights) ? proj.keyInsights.join('\n') : proj.keyInsights || '',
      sqlSnippet: proj.sqlSnippet || ''
    });
    setEditingProject({ isNew: false, id: proj.id });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      id: formData.id || undefined,
      title: formData.title,
      category: formData.category,
      shortDesc: formData.shortDesc,
      image: formData.image,
      tools: formData.tools.split(',').map((t) => t.trim()).filter(Boolean),
      metrics: formData.metrics,
      businessProblem: formData.businessProblem,
      solution: formData.solution,
      keyInsights: formData.keyInsights.split('\n').map((i) => i.trim()).filter(Boolean),
      sqlSnippet: formData.sqlSnippet
    };

    saveProject(payload);
    setEditingProject(null);
  };

  const handleMetricChange = (index, field, value) => {
    const newMetrics = [...formData.metrics];
    newMetrics[index] = { ...newMetrics[index], [field]: value };
    setFormData({ ...formData, metrics: newMetrics });
  };

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
        <div>
          <h2 className="text-xl font-bold text-white">Analytics & BI Dashboards ({projects.length})</h2>
          <p className="text-xs text-neutral-400">Manage case studies and project cards displayed on the portfolio homepage.</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={resetProjectsToDefault}
            title="Reset to default initial projects"
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
            <span>Add New Dashboard</span>
          </button>
        </div>
      </div>

      {/* Projects Grid/Table */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((proj) => (
          <div key={proj.id} className="p-5 rounded-2xl bg-[#0F1420] border border-white/10 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-start justify-between gap-2">
                <span className="font-mono text-[10px] uppercase text-violet-400 font-semibold px-2 py-0.5 rounded bg-violet-500/10 border border-violet-500/20">
                  {proj.category}
                </span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleOpenEdit(proj)}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 transition-colors"
                    title="Edit"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      if (confirm(`Delete project "${proj.title}"?`)) deleteProject(proj.id);
                    }}
                    className="p-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-colors"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <h3 className="text-base font-bold text-white mt-3 line-clamp-1">{proj.title}</h3>
              <p className="text-xs text-neutral-400 mt-1 line-clamp-2">{proj.shortDesc}</p>
            </div>

            {/* Tools list */}
            <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
              {proj.tools?.map((tool, i) => (
                <span key={i} className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-neutral-300">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Form Modal */}
      {editingProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#0F1420] border border-white/15 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 shadow-2xl relative space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="text-lg font-bold text-white">
                {editingProject.isNew ? 'Add Analytics Dashboard Project' : 'Edit Dashboard Project'}
              </h3>
              <button
                onClick={() => setEditingProject(null)}
                className="p-1.5 rounded-xl bg-white/5 text-neutral-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-neutral-400 mb-1 font-medium">Project Title</label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-violet-500"
                    placeholder="e.g. Supply Chain KPI Dashboard"
                  />
                </div>
                <div>
                  <label className="block text-neutral-400 mb-1 font-medium">Category</label>
                  <input
                    type="text"
                    required
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-violet-500"
                    placeholder="e.g. Supply Chain Analytics"
                  />
                </div>
              </div>

              <div>
                <label className="block text-neutral-400 mb-1 font-medium">Image URL</label>
                <input
                  type="text"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-violet-500"
                  placeholder="/images/jamsed_hossen.jpg or custom image URL"
                />
              </div>

              <div>
                <label className="block text-neutral-400 mb-1 font-medium">Short Description (Card Summary)</label>
                <textarea
                  rows={2}
                  required
                  value={formData.shortDesc}
                  onChange={(e) => setFormData({ ...formData, shortDesc: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-violet-500"
                />
              </div>

              <div>
                <label className="block text-neutral-400 mb-1 font-medium">Tools Used (comma separated)</label>
                <input
                  type="text"
                  value={formData.tools}
                  onChange={(e) => setFormData({ ...formData, tools: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-violet-500"
                  placeholder="Power BI, SQL, Excel, Python"
                />
              </div>

              {/* Metrics */}
              <div>
                <label className="block text-neutral-400 mb-2 font-medium">4 Key Highlight Metrics</label>
                <div className="grid grid-cols-2 gap-2">
                  {formData.metrics.map((m, idx) => (
                    <div key={idx} className="flex gap-2 bg-white/5 p-2 rounded-xl border border-white/5">
                      <input
                        type="text"
                        placeholder="Label"
                        value={m.label}
                        onChange={(e) => handleMetricChange(idx, 'label', e.target.value)}
                        className="w-1/2 px-2 py-1 rounded bg-black/30 text-white text-[11px]"
                      />
                      <input
                        type="text"
                        placeholder="Value"
                        value={m.value}
                        onChange={(e) => handleMetricChange(idx, 'value', e.target.value)}
                        className="w-1/2 px-2 py-1 rounded bg-black/30 text-violet-400 font-bold text-[11px]"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-neutral-400 mb-1 font-medium">Business Problem</label>
                <textarea
                  rows={2}
                  value={formData.businessProblem}
                  onChange={(e) => setFormData({ ...formData, businessProblem: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-violet-500"
                />
              </div>

              <div>
                <label className="block text-neutral-400 mb-1 font-medium">Solution Implemented</label>
                <textarea
                  rows={2}
                  value={formData.solution}
                  onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-violet-500"
                />
              </div>

              <div>
                <label className="block text-neutral-400 mb-1 font-medium">Key Insights (One per line)</label>
                <textarea
                  rows={3}
                  value={formData.keyInsights}
                  onChange={(e) => setFormData({ ...formData, keyInsights: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-violet-500 font-mono text-[11px]"
                />
              </div>

              <div>
                <label className="block text-neutral-400 mb-1 font-medium">SQL Query Snippet (Optional)</label>
                <textarea
                  rows={4}
                  value={formData.sqlSnippet}
                  onChange={(e) => setFormData({ ...formData, sqlSnippet: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-black/40 border border-white/10 text-emerald-400 focus:outline-none focus:border-violet-500 font-mono text-[11px]"
                  placeholder="SELECT ..."
                />
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setEditingProject(null)}
                  className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold flex items-center gap-1.5 shadow-lg shadow-violet-600/30"
                >
                  <Check className="w-4 h-4" />
                  <span>Save Project</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
