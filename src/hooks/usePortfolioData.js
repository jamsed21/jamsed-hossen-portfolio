import { useState, useEffect } from 'react';
import { featuredProjects as defaultProjects, pmCaseStudies as defaultCaseStudies } from '../data/portfolioData';

const PROJECTS_STORAGE_KEY = 'jamsed_portfolio_projects';
const CASE_STUDIES_STORAGE_KEY = 'jamsed_portfolio_case_studies';

export function usePortfolioData() {
  const [projects, setProjects] = useState(() => {
    try {
      const saved = localStorage.getItem(PROJECTS_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.error('Failed to parse projects from localStorage', e);
    }
    return defaultProjects;
  });

  const [caseStudies, setCaseStudies] = useState(() => {
    try {
      const saved = localStorage.getItem(CASE_STUDIES_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.error('Failed to parse case studies from localStorage', e);
    }
    return defaultCaseStudies;
  });

  // Sync state to localStorage whenever changed
  const saveProjectsToStorage = (newProjects) => {
    setProjects(newProjects);
    localStorage.setItem(PROJECTS_STORAGE_KEY, JSON.stringify(newProjects));
    window.dispatchEvent(new Event('portfolio_data_updated'));
  };

  const saveCaseStudiesToStorage = (newStudies) => {
    setCaseStudies(newStudies);
    localStorage.setItem(CASE_STUDIES_STORAGE_KEY, JSON.stringify(newStudies));
    window.dispatchEvent(new Event('portfolio_data_updated'));
  };

  // Listen for custom update events (across tabs or within app)
  useEffect(() => {
    const handleUpdate = () => {
      try {
        const savedProj = localStorage.getItem(PROJECTS_STORAGE_KEY);
        if (savedProj) setProjects(JSON.parse(savedProj));
        
        const savedCase = localStorage.getItem(CASE_STUDIES_STORAGE_KEY);
        if (savedCase) setCaseStudies(JSON.parse(savedCase));
      } catch (e) {
        console.error(e);
      }
    };

    window.addEventListener('portfolio_data_updated', handleUpdate);
    window.addEventListener('storage', handleUpdate);
    return () => {
      window.removeEventListener('portfolio_data_updated', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  // Project Actions
  const saveProject = (projectData) => {
    let updated;
    if (projectData.id) {
      // Edit existing
      updated = projects.map((p) => (p.id === projectData.id ? { ...p, ...projectData } : p));
    } else {
      // Create new
      const newId = `proj-${Date.now()}`;
      updated = [{ ...projectData, id: newId }, ...projects];
    }
    saveProjectsToStorage(updated);
  };

  const deleteProject = (id) => {
    const updated = projects.filter((p) => p.id !== id);
    saveProjectsToStorage(updated);
  };

  const resetProjectsToDefault = () => {
    saveProjectsToStorage(defaultProjects);
  };

  // Case Study Actions
  const saveCaseStudy = (caseStudyData) => {
    let updated;
    if (caseStudyData.id) {
      // Edit existing
      updated = caseStudies.map((cs) => (cs.id === caseStudyData.id ? { ...cs, ...caseStudyData } : cs));
    } else {
      // Create new
      const newId = `cs-${Date.now()}`;
      updated = [{ ...caseStudyData, id: newId }, ...caseStudies];
    }
    saveCaseStudiesToStorage(updated);
  };

  const deleteCaseStudy = (id) => {
    const updated = caseStudies.filter((cs) => cs.id !== id);
    saveCaseStudiesToStorage(updated);
  };

  const resetCaseStudiesToDefault = () => {
    saveCaseStudiesToStorage(defaultCaseStudies);
  };

  return {
    projects,
    caseStudies,
    saveProject,
    deleteProject,
    resetProjectsToDefault,
    saveCaseStudy,
    deleteCaseStudy,
    resetCaseStudiesToDefault
  };
}
