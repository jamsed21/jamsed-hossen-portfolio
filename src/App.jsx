import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import AnalyticsProjects from './components/AnalyticsProjects';
import CaseStudies from './components/CaseStudies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/Modals/ResumeModal';
import FloatingBackToTop from './components/ui/FloatingBackToTop';
import CustomCursor from './components/ui/CustomCursor';
import AdminApp from './admin/AdminApp';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isAdminRoute, setIsAdminRoute] = useState(() => {
    return window.location.hash.includes('admin');
  });

  useEffect(() => {
    const handleHashChange = () => {
      setIsAdminRoute(window.location.hash.includes('admin'));
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (isAdminRoute) {
    return <AdminApp />;
  }

  return (
    <div className="min-h-screen bg-[#070A10] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 antialiased overflow-x-hidden relative cursor-none sm:cursor-none">
      
      {/* Lusion-style Custom Interactive Cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Hero Section */}
      <Hero onOpenResume={() => setIsResumeOpen(true)} />

      {/* About Me & Profile Summary */}
      <About />

      {/* Skills & Tech Stack */}
      <Skills />

      {/* Featured Analytics Projects */}
      <AnalyticsProjects />

      {/* Business Intelligence Case Studies */}
      <CaseStudies />

      {/* Contact Section */}
      <Contact onOpenResume={() => setIsResumeOpen(true)} />

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Floating Back to Top Button */}
      <FloatingBackToTop />

      {/* Interactive Resume Modal */}
      {isResumeOpen && (
        <ResumeModal onClose={() => setIsResumeOpen(false)} />
      )}

    </div>
  );
}
