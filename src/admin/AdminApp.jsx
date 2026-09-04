import React, { useState } from 'react';
import { LayoutDashboard, FolderKanban, BookOpenCheck, ExternalLink, LogOut, ShieldCheck, Sparkles } from 'lucide-react';
import AdminLogin from './AdminLogin';
import ManageProjects from './sections/ManageProjects';
import ManageCaseStudies from './sections/ManageCaseStudies';
import { usePortfolioData } from '../hooks/usePortfolioData';

export default function AdminApp() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('jamsed_admin_auth') === 'true';
  });

  const [activeTab, setActiveTab] = useState('projects');

  const {
    projects,
    caseStudies,
    saveProject,
    deleteProject,
    resetProjectsToDefault,
    saveCaseStudy,
    deleteCaseStudy,
    resetCaseStudiesToDefault
  } = usePortfolioData();

  if (!isAuthenticated) {
    return <AdminLogin onLoginSuccess={() => setIsAuthenticated(true)} />;
  }

  const handleLogout = () => {
    sessionStorage.removeItem('jamsed_admin_auth');
    setIsAuthenticated(false);
  };

  return (
    <div className="min-h-screen bg-[#070A10] text-white flex flex-col md:flex-row font-sans">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-[#0F1420] border-r border-white/10 flex flex-col justify-between shrink-0 p-6">
        <div className="space-y-8">
          {/* Logo / Header */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-violet-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-violet-600/30 font-bold text-white text-lg">
              JH
            </div>
            <div>
              <h1 className="font-extrabold text-sm text-white tracking-tight">Admin Portal</h1>
              <p className="text-[11px] text-neutral-400">Jamsed Hossen Portfolio</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            <button
              onClick={() => setActiveTab('projects')}
              className={`w-full px-4 py-3 rounded-2xl text-xs font-semibold flex items-center gap-3 transition-colors text-left cursor-pointer ${
                activeTab === 'projects'
                  ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <FolderKanban className="w-4 h-4" />
              <span>Dashboards ({projects.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('casestudies')}
              className={`w-full px-4 py-3 rounded-2xl text-xs font-semibold flex items-center gap-3 transition-colors text-left cursor-pointer ${
                activeTab === 'casestudies'
                  ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <BookOpenCheck className="w-4 h-4" />
              <span>Case Studies ({caseStudies.length})</span>
            </button>
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="pt-6 border-t border-white/10 space-y-3">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = '';
            }}
            className="w-full px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 text-xs font-medium flex items-center justify-between transition-colors"
          >
            <span className="flex items-center gap-2">
              <ExternalLink className="w-3.5 h-3.5 text-violet-400" />
              View Portfolio
            </span>
            <span className="text-[10px] text-neutral-500 font-mono">Live</span>
          </a>

          <button
            onClick={handleLogout}
            className="w-full px-4 py-2.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-medium flex items-center gap-2 transition-colors cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto max-w-6xl">
        {/* Banner */}
        <div className="mb-8 p-4 rounded-2xl bg-gradient-to-r from-violet-900/30 via-cyan-900/20 to-transparent border border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white">Live Content Management</h2>
              <p className="text-xs text-neutral-400">All edits are instantly reflected on the portfolio homepage.</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Session Active</span>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'projects' && (
          <ManageProjects
            projects={projects}
            saveProject={saveProject}
            deleteProject={deleteProject}
            resetProjectsToDefault={resetProjectsToDefault}
          />
        )}

        {activeTab === 'casestudies' && (
          <ManageCaseStudies
            caseStudies={caseStudies}
            saveCaseStudy={saveCaseStudy}
            deleteCaseStudy={deleteCaseStudy}
            resetCaseStudiesToDefault={resetCaseStudiesToDefault}
          />
        )}
      </main>
    </div>
  );
}
