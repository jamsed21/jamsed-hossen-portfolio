import React from 'react';

export const toolLogosMap = {
  "SQL": (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className || "w-4 h-4"}>
      <ellipse cx="12" cy="5" rx="9" ry="3" className="text-cyan-400" fill="rgba(34,211,238,0.15)" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" className="text-cyan-400" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" className="text-cyan-400" />
    </svg>
  ),
  "MySQL": (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={props.className || "w-4 h-4 text-[#00758F]"}>
      <path d="M11.979 2a10 10 0 0 0-9.979 10c0 5.523 4.477 10 9.979 10s10-4.477 10-10A10 10 0 0 0 11.979 2zm4.184 13.908c-.78.117-1.57.195-2.368.234-.51.025-1.02.039-1.53.039-1.46 0-2.88-.234-4.24-.691v-2.07c1.33.456 2.73.684 4.16.684.81 0 1.6-.078 2.37-.234v2.038z"/>
    </svg>
  ),
  "Power BI": (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={props.className || "w-4 h-4 text-[#F2C811]"}>
      <rect x="3" y="11" width="4" height="10" rx="1" />
      <rect x="10" y="7" width="4" height="14" rx="1" />
      <rect x="17" y="3" width="4" height="18" rx="1" />
    </svg>
  ),
  "Metabase": (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={props.className || "w-4 h-4 text-[#509EE3]"}>
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  ),
  "Looker Studio": (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={props.className || "w-4 h-4 text-[#4285F4]"}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/>
    </svg>
  ),
  "Microsoft Excel": (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={props.className || "w-4 h-4 text-[#107C41]"}>
      <path d="M21.17 3.25Q21.5 3.25 21.75 3.5T22 4.08V19.92Q22 20.25 21.75 20.5T21.17 20.75H8.83Q8.5 20.75 8.25 20.5T8 19.92V17H2V7H8V4.08Q8 3.75 8.25 3.5T8.83 3.25H21.17M15.5 15.75L13.25 12L15.5 8.25H13.5L12 10.75L10.5 8.25H8.5L10.75 12L8.5 15.75H10.5L12 13.25L13.5 15.75H15.5Z"/>
    </svg>
  ),
  "Google Sheets": (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={props.className || "w-4 h-4 text-[#0F9D58]"}>
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
    </svg>
  ),
  "Python": (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={props.className || "w-4 h-4 text-[#3776AB]"}>
      <path d="M12 2c-5.1 0-4.8 2.2-4.8 2.2V6.6h4.9v.7H5.2S2 7 2 12.1s2.8 4.9 2.8 4.9h1.7v-2.4s-.1-2.8 2.8-2.8h4.8s2.7 0 2.7-2.7V4.8S17.1 2 12 2zm-2.1 2.3a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6z"/>
      <path d="M12 22c5.1 0 4.8-2.2 4.8-2.2v-2.4h-4.9v-.7h6.9s3.2.3 3.2-4.8-2.8-4.9-2.8-4.9h-1.7v2.4s.1 2.8-2.8 2.8h-4.8s-2.7 0-2.7 2.7v4.3S6.9 22 12 22zm2.1-2.3a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6z" className="text-[#FFD43B]" />
    </svg>
  ),
  "PowerQuery": (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className || "w-4 h-4 text-[#E86C00]"}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="rgba(232,108,0,0.2)" />
    </svg>
  ),
  "Mixpanel": (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={props.className || "w-4 h-4 text-[#7856FF]"}>
      <circle cx="6" cy="12" r="3" />
      <circle cx="13" cy="12" r="2" />
      <circle cx="18" cy="12" r="1.5" />
    </svg>
  ),
  "Notion": (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={props.className || "w-4 h-4 text-white"}>
      <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l11.029-.71c.28-.046.327-.233.14-.42L16.2.825c-.466-.466-.933-.56-1.726-.466L3.48 1.069c-.373.047-.466.233-.28.466l1.259 2.673zm.886 4.383v13.619c0 .793.42 1.026 1.166.98l13.123-.746c.746-.047.84-.56.84-1.213V7.202c0-.653-.28-.98-.933-.933L5.858 7.658c-.373.047-.513.373-.513.933zm11.76.933c0 .28-.093.56-.373.56-.093 0-.187-.047-.233-.093l-4.247-5.46v5.04c0 .373-.233.513-.513.513h-.7c-.28 0-.466-.14-.466-.42V9.068c0-.28.093-.513.327-.513.14 0 .233.047.327.14l4.293 5.46V9.208c0-.373.233-.513.513-.513h.56c.28 0 .466.187.466.466v5.877z"/>
    </svg>
  ),
  "FigJam": (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={props.className || "w-4 h-4 text-[#F24E1E]"}>
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5h-2v-5h2zm-1-6.5a1.25 1.25 0 1 1 1.25-1.25A1.25 1.25 0 0 1 12 10z"/>
    </svg>
  ),
  "Draw.io": (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={props.className || "w-4 h-4 text-[#F08705]"}>
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
    </svg>
  ),
  "JavaScript (Basic)": (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={props.className || "w-4 h-4 text-[#F7DF1E]"}>
      <path d="M3 3h18v18H3V3zm11.5 13.5c.6 0 1.1-.2 1.4-.6.3-.4.4-1 .4-1.9h2c0 1.4-.4 2.5-1.2 3.2-.8.7-1.8 1.1-3 1.1-1.3 0-2.3-.4-3.1-1.2-.8-.8-1.2-2-1.2-3.6 0-1.6.4-2.8 1.2-3.6.8-.8 1.9-1.2 3.2-1.2 1.2 0 2.2.4 3 1.1.8.7 1.2 1.8 1.2 3.2h-2c0-.9-.1-1.5-.4-1.9-.3-.4-.8-.6-1.4-.6-.7 0-1.2.3-1.6.9-.4.6-.6 1.4-.6 2.5 0 1.1.2 1.9.6 2.5.4.6.9.9 1.6.9z"/>
    </svg>
  ),
  "Retool": (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={props.className || "w-4 h-4 text-[#3C4753]"}>
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.2L18.8 8 12 11.8 5.2 8 12 4.2zM4 9.4l7 3.9v7.3l-7-3.5V9.4zm9 11.2v-7.3l7-3.9v7.7l-7 3.5z"/>
    </svg>
  )
};

export default function ToolLogo({ name, className }) {
  const LogoComponent = toolLogosMap[name] || toolLogosMap["SQL"];
  return <LogoComponent className={className} />;
}
