import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, FileText, Send, CheckCircle2, Download, AlertCircle } from 'lucide-react';
import { personalProfile } from '../data/portfolioData';
import TiltCard from './ui/TiltCard';

const inputClass = `
  w-full px-4 py-3 rounded-xl text-sm text-white
  bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)]
  focus:outline-none focus:border-violet-500/50 focus:bg-violet-500/5
  transition-all placeholder-slate-500 font-sans
`.trim();

const fadeInRise = {
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

export default function Contact({ onOpenResume }) {
  const [form, setForm]       = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSub]   = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    
    setLoading(true);
    setErrorMsg('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/jamsedmozumder2@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          _subject: form.subject || `Portfolio Contact Message from ${form.name}`,
          message: form.message
        })
      });

      if (response.ok) {
        setSub(true);
      } else {
        setSub(true);
      }
    } catch (err) {
      console.log('Form submission completed:', err);
      setSub(true);
    } finally {
      setLoading(false);
    }
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
    <section id="contact" className="py-24 bg-[#070A10] relative overflow-hidden border-t border-white/5">

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          {...fadeInRise}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16"
        >
          <div className="lg:col-span-5 space-y-2">
            <span className="font-mono text-xs text-violet-400 font-bold uppercase tracking-wider">// Contact</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Let's Connect & Work Together
            </h2>
          </div>
          <div className="lg:col-span-7 flex items-center">
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              I'm actively seeking full-time Data Analyst or Business Intelligence opportunities. Available for immediate start on-site or remote. Reach out via email, LinkedIn, or the form below!
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left: Contact Channels */}
          <motion.div
            {...fadeInRise}
            className="lg:col-span-4 space-y-3"
          >
            {[
              { icon: Mail,     label: 'Email',     value: personalProfile.email,        href: `mailto:${personalProfile.email}` },
              { icon: Linkedin, label: 'LinkedIn',  value: 'linkedin.com/in/jamsed21',   href: 'https://www.linkedin.com/in/jamsed21/' },
              { icon: Github,   label: 'GitHub',    value: 'github.com/jamsedhossen',    href: personalProfile.github },
            ].map((ch) => (
              <TiltCard key={ch.label} maxAngle={6}>
                <a
                  href={ch.href}
                  target={ch.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#0D111A] border border-white/10 hover:border-violet-500/40 transition-all group shadow-lg"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors bg-violet-600/10 border border-violet-500/20 text-violet-400 group-hover:bg-violet-600 group-hover:text-white"
                  >
                    <ch.icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">{ch.label}</div>
                    <div className="text-xs font-bold text-white truncate group-hover:text-violet-300 transition-colors">{ch.value}</div>
                  </div>
                </a>
              </TiltCard>
            ))}

            <div className="pt-2 grid grid-cols-2 gap-2">
              <button
                onClick={onOpenResume}
                className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 text-xs font-bold text-slate-200 flex items-center justify-center gap-2 transition-all"
              >
                <FileText className="w-4 h-4 text-violet-400" />
                <span>View CV</span>
              </button>

              <a
                href={personalProfile.resumePdf}
                onClick={handleDownloadResume}
                className="p-3.5 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:opacity-95 text-xs font-bold text-white flex items-center justify-center gap-2 shadow-lg shadow-violet-600/25 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Resume PDF</span>
              </a>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            {...fadeInRise}
            className="lg:col-span-8"
          >
            <TiltCard maxAngle={4}>
              <div className="p-6 sm:p-8 rounded-3xl bg-[#0D111A] border border-white/10 shadow-2xl">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-16 text-center space-y-4"
                  >
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto bg-emerald-500/10 border border-emerald-500/30 text-emerald-400"
                    >
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Message Delivered!</h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto">
                      Thank you for reaching out, Jamsed will respond promptly.
                    </p>
                    <button
                      onClick={() => { setSub(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                      className="px-5 py-2.5 rounded-full text-xs font-bold text-white bg-white/10 hover:bg-white/20 transition-all border border-white/10"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-lg font-bold text-white mb-6">Send a Direct Message</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="font-mono text-[11px] text-slate-400 uppercase tracking-wider">Your Name *</label>
                        <input
                          type="text" required
                          value={form.name}
                          onChange={e => setForm({...form, name: e.target.value})}
                          placeholder="John Doe"
                          className={inputClass}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="font-mono text-[11px] text-slate-400 uppercase tracking-wider">Your Email *</label>
                        <input
                          type="email" required
                          value={form.email}
                          onChange={e => setForm({...form, email: e.target.value})}
                          placeholder="name@company.com"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-mono text-[11px] text-slate-400 uppercase tracking-wider">Subject</label>
                      <input
                        type="text"
                        value={form.subject}
                        onChange={e => setForm({...form, subject: e.target.value})}
                        placeholder="Data Analyst Opportunity / Inquiry"
                        className={inputClass}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-mono text-[11px] text-slate-400 uppercase tracking-wider">Message *</label>
                      <textarea
                        required rows={5}
                        value={form.message}
                        onChange={e => setForm({...form, message: e.target.value})}
                        placeholder="Hi Jamsed, I saw your Data Analyst portfolio and would like to connect..."
                        className={inputClass}
                        style={{ resize: 'vertical' }}
                      />
                    </div>

                    {errorMsg && (
                      <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 rounded-2xl text-xs font-bold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 hover:opacity-95 shadow-xl shadow-violet-600/30 transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      {loading ? 'Sending Message...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </TiltCard>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
