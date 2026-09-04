import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, Mail, MapPin, Linkedin, GraduationCap, Briefcase, Award } from 'lucide-react';
import { resumeData } from '../../data/resumeData';

export default function ResumeModal({ onClose }) {
  const handleDownloadPdf = () => {
    const link = document.createElement('a');
    link.href = resumeData.pdfPath;
    link.download = 'Jamsed_Hossen_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="w-full max-w-4xl rounded-3xl border border-[rgba(255,255,255,0.12)] bg-[#0A0A0A] text-slate-100 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        >
          {/* Modal Header */}
          <div className="p-6 border-b border-[rgba(255,255,255,0.08)] flex items-center justify-between bg-[#121212]">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-violet-600/10 border border-violet-500/30 text-violet-400">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Curriculum Vitae</h3>
                <p className="text-xs font-mono text-[#737373]">Jamsed Hossen • Data Analyst Resume</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleDownloadPdf}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-violet-600 hover:bg-violet-500 shadow-lg shadow-violet-600/30 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF Resume</span>
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Body - PDF Format Resume */}
          <div className="p-6 sm:p-10 space-y-8 overflow-y-auto custom-scrollbar flex-1 bg-[#0E0E0E] text-slate-200 font-sans">
            
            {/* Header Persona */}
            <div className="border-b border-[rgba(255,255,255,0.08)] pb-6 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-extrabold text-white tracking-tight">{resumeData.name}</h1>
                  <p className="text-sm font-mono text-violet-400 font-bold mt-1">{resumeData.title}</p>
                </div>
                
                <div className="text-xs font-mono space-y-1 text-[#A3A3A3]">
                  <div className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-violet-400" /> {resumeData.contact.email}</div>
                  <div className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-violet-400" /> {resumeData.contact.location}</div>
                  <div className="flex items-center gap-2"><Linkedin className="w-3.5 h-3.5 text-violet-400" /> {resumeData.contact.linkedin}</div>
                </div>
              </div>

              <div className="pt-2">
                <h2 className="text-xs font-mono font-bold text-violet-400 uppercase tracking-wider mb-1">PROFILE SUMMARY</h2>
                <p className="text-xs sm:text-sm text-[#CCCCCC] leading-relaxed">
                  {resumeData.summary}
                </p>
              </div>
            </div>

            {/* Experience Section */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono font-bold text-violet-400 uppercase tracking-wider border-b border-[rgba(255,255,255,0.08)] pb-1 flex items-center gap-2">
                <Briefcase className="w-3.5 h-3.5" />
                EXPERIENCE
              </h2>
              <div className="space-y-6">
                {resumeData.experience.map((exp, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between items-baseline flex-wrap gap-1">
                      <h3 className="text-sm font-bold text-white">{exp.company} — <span className="text-violet-300">{exp.role}</span></h3>
                      <span className="text-xs font-mono text-[#737373]">{exp.period}</span>
                    </div>
                    <ul className="space-y-1.5 list-disc list-inside text-xs text-[#A3A3A3] leading-relaxed">
                      {exp.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills & Tools */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono font-bold text-violet-400 uppercase tracking-wider border-b border-[rgba(255,255,255,0.08)] pb-1">
                SKILLS & TOOLS
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {Object.entries(resumeData.skills).map(([category, items]) => (
                  <div key={category} className="bg-[#141414] p-3.5 rounded-xl border border-[rgba(255,255,255,0.06)] space-y-1">
                    <div className="font-bold text-white font-mono text-[11px] uppercase">{category}</div>
                    <div className="text-[#CCCCCC] font-mono text-xs">{items.join(' • ')}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono font-bold text-violet-400 uppercase tracking-wider border-b border-[rgba(255,255,255,0.08)] pb-1 flex items-center gap-2">
                <GraduationCap className="w-3.5 h-3.5" />
                EDUCATION
              </h2>
              {resumeData.education.map((edu, i) => (
                <div key={i} className="text-xs space-y-0.5">
                  <div className="font-bold text-white">{edu.degree}</div>
                  <div className="text-[#A3A3A3]">{edu.institution} • {edu.period}</div>
                </div>
              ))}
            </div>

          </div>

          {/* Modal Footer */}
          <div className="p-4 border-t border-[rgba(255,255,255,0.08)] bg-[#121212] flex items-center justify-between">
            <span className="text-xs font-mono text-[#737373]">Jamsed Hossen Resume</span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              Close
            </button>
          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
}
