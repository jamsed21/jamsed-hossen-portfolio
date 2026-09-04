import React from 'react';
import { ArrowUp, Linkedin, Github, Mail, FileText, Download } from 'lucide-react';
import { personalProfile } from '../data/portfolioData';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDownloadResume = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = personalProfile.resumePdf;
    link.download = 'Jamsed_Hossen_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="bg-[#05070B] border-t border-white/10 py-12 text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center font-mono font-bold text-xs text-white shadow-md shadow-violet-500/30">
              JH
            </div>
            <div>
              <div className="text-sm font-bold text-white">Jamsed Hossen</div>
              <div className="text-[11px] text-slate-500 font-mono">Data Analyst · BI Specialist</div>
            </div>
          </div>

          {/* Direct Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/jamsed21/"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-violet-500/40 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-violet-400" />
            </a>

            <a
              href={personalProfile.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-violet-500/40 transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4 text-slate-300" />
            </a>

            <a
              href={`mailto:${personalProfile.email}`}
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-violet-500/40 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
            </a>

            <a
              href={personalProfile.resumePdf}
              onClick={handleDownloadResume}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-white bg-violet-600 hover:bg-violet-500 shadow-md shadow-violet-600/30 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-1.5"
          >
            <span className="font-mono text-[10px] uppercase">Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px] font-mono">
          <div>
            © {new Date().getFullYear()} Jamsed Hossen. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}
