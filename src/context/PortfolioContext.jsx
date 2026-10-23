import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialPortfolioData } from '../data/portfolioData';

const PortfolioContext = createContext(null);

const STORAGE_KEY = 'sujitha_portfolio_data_v3';
const THEME_KEY = 'sujitha_portfolio_theme_v3';

export const PortfolioProvider = ({ children }) => {
  // Load data from localStorage or fallback
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Ensure new fields like phone exist
        return {
          ...parsed,
          profile: {
            ...initialPortfolioData.profile,
            ...parsed.profile,
          }
        };
      }
    } catch (e) {
      console.error('Failed to parse saved portfolio data', e);
    }
    return initialPortfolioData;
  });

  // Dark mode state
  const [isDark, setIsDark] = useState(() => {
    try {
      const savedTheme = localStorage.getItem(THEME_KEY);
      if (savedTheme !== null) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch (e) {
      return false;
    }
  });

  // UI state
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Modals state
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null);
  const [selectedResearch, setSelectedResearch] = useState(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  
  // Toast notifications
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type, id: Date.now() });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  // Sync dark class on <html>
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem(THEME_KEY, 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem(THEME_KEY, 'light');
    }
  }, [isDark]);

  // Sync data to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('Failed to save portfolio data to local storage', e);
    }
  }, [data]);

  // Profile actions
  const updateProfile = (fields) => {
    setData((prev) => ({
      ...prev,
      profile: {
        ...prev.profile,
        ...fields
      }
    }));
    showToast('Profile information updated successfully');
  };

  const uploadProfilePhoto = (file) => {
    return new Promise((resolve, reject) => {
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64 = e.target.result;
        updateProfile({ avatar: base64 });
        showToast('Profile photo updated successfully');
        resolve(base64);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const uploadResumeFile = (file) => {
    if (!file) return;
    updateProfile({
      resumeFileName: file.name,
      resumeLastUpdated: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    });
    showToast(`Resume file set to "${file.name}"`);
  };

  // Projects actions
  const addProject = (project) => {
    const newProject = {
      ...project,
      id: `proj-${Date.now()}`
    };
    setData((prev) => ({
      ...prev,
      projects: [newProject, ...prev.projects]
    }));
    showToast(`Project "${project.title}" added`);
  };

  const updateProject = (id, fields) => {
    setData((prev) => ({
      ...prev,
      projects: prev.projects.map((p) => (p.id === id ? { ...p, ...fields } : p))
    }));
    showToast('Project updated successfully');
  };

  const deleteProject = (id) => {
    setData((prev) => ({
      ...prev,
      projects: prev.projects.filter((p) => p.id !== id)
    }));
    showToast('Project removed');
  };

  // Skills actions
  const addSkill = (skill) => {
    const newSkill = {
      ...skill,
      id: `skill-${Date.now()}`
    };
    setData((prev) => ({
      ...prev,
      skills: [...prev.skills, newSkill]
    }));
    showToast(`Skill "${skill.name}" added`);
  };

  const updateSkill = (id, fields) => {
    setData((prev) => ({
      ...prev,
      skills: prev.skills.map((s) => (s.id === id ? { ...s, ...fields } : s))
    }));
    showToast('Skill updated');
  };

  const deleteSkill = (id) => {
    setData((prev) => ({
      ...prev,
      skills: prev.skills.filter((s) => s.id !== id)
    }));
    showToast('Skill deleted');
  };

  // Certificates actions
  const addCertificate = (cert) => {
    const newCert = {
      ...cert,
      id: `cert-${Date.now()}`
    };
    setData((prev) => ({
      ...prev,
      certificates: [newCert, ...prev.certificates]
    }));
    showToast(`Certificate "${cert.title}" added`);
  };

  const updateCertificate = (id, fields) => {
    setData((prev) => ({
      ...prev,
      certificates: prev.certificates.map((c) => (c.id === id ? { ...c, ...fields } : c))
    }));
    showToast('Certificate updated');
  };

  const deleteCertificate = (id) => {
    setData((prev) => ({
      ...prev,
      certificates: prev.certificates.filter((c) => c.id !== id)
    }));
    showToast('Certificate removed');
  };

  // Roadmap actions
  const toggleMilestone = (id) => {
    setData((prev) => ({
      ...prev,
      roadmap: prev.roadmap.map((m) =>
        m.id === id ? { ...m, completed: !m.completed } : m
      )
    }));
    showToast('Milestone status updated');
  };

  const addMilestone = (milestone) => {
    const newMilestone = {
      ...milestone,
      id: `road-${Date.now()}`,
      completed: false
    };
    setData((prev) => ({
      ...prev,
      roadmap: [...prev.roadmap, newMilestone]
    }));
    showToast(`Milestone added`);
  };

  const updateMilestone = (id, fields) => {
    setData((prev) => ({
      ...prev,
      roadmap: prev.roadmap.map((m) => (m.id === id ? { ...m, ...fields } : m))
    }));
    showToast('Milestone updated');
  };

  const deleteMilestone = (id) => {
    setData((prev) => ({
      ...prev,
      roadmap: prev.roadmap.filter((m) => m.id !== id)
    }));
    showToast('Milestone removed');
  };

  // Timeline / Activity actions
  const addTimelineEvent = (event) => {
    const newEvent = {
      ...event,
      id: `time-${Date.now()}`
    };
    setData((prev) => ({
      ...prev,
      timeline: [newEvent, ...prev.timeline]
    }));
    showToast(`Event "${event.title}" added`);
  };

  const updateTimelineEvent = (id, fields) => {
    setData((prev) => ({
      ...prev,
      timeline: prev.timeline.map((t) => (t.id === id ? { ...t, ...fields } : t))
    }));
    showToast('Event updated');
  };

  const deleteTimelineEvent = (id) => {
    setData((prev) => ({
      ...prev,
      timeline: prev.timeline.filter((t) => t.id !== id)
    }));
    showToast('Event removed');
  };

  // Research actions
  const updateResearchItem = (id, fields) => {
    setData((prev) => ({
      ...prev,
      research: prev.research.map((r) => (r.id === id ? { ...r, ...fields } : r))
    }));
    showToast('Research item updated');
  };

  const addResearchItem = (item) => {
    const newItem = {
      ...item,
      id: `res-${Date.now()}`
    };
    setData((prev) => ({
      ...prev,
      research: [newItem, ...prev.research]
    }));
    showToast(`Research concept added`);
  };

  const deleteResearchItem = (id) => {
    setData((prev) => ({
      ...prev,
      research: prev.research.filter((r) => r.id !== id)
    }));
    showToast('Research item removed');
  };

  // Export & Import
  const exportDataJSON = () => {
    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(data, null, 2)
    )}`;
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', jsonString);
    downloadAnchor.setAttribute('download', `Sujitha_Portfolio_Backup_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast('Portfolio data exported as JSON backup');
  };

  const importDataJSON = (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target.result);
        if (imported.profile && imported.skills && imported.projects) {
          setData(imported);
          showToast('Portfolio data restored successfully!');
        } else {
          showToast('Invalid portfolio backup file structure', 'error');
        }
      } catch (err) {
        showToast('Error parsing JSON backup file', 'error');
      }
    };
    reader.readAsText(file);
  };

  const resetToDefault = () => {
    if (window.confirm('Are you sure you want to reset all portfolio data to default? Any unsaved edits will be replaced.')) {
      setData(initialPortfolioData);
      localStorage.removeItem(STORAGE_KEY);
      showToast('Portfolio data reset to default successfully');
    }
  };

  // Dynamic calculations for dashboard
  const completedMilestones = data.roadmap.filter((m) => m.completed).length;
  const totalMilestones = data.roadmap.length;
  const roadmapProgress = totalMilestones > 0 ? Math.round((completedMilestones / totalMilestones) * 100) : 0;

  const value = {
    data,
    profile: data.profile,
    skills: data.skills,
    projects: data.projects,
    industryExposure: data.industryExposure,
    certificates: data.certificates,
    timeline: data.timeline,
    roadmap: data.roadmap,
    research: data.research,
    
    // Calculated stats
    stats: {
      totalProjects: data.projects.length,
      completedProjects: data.projects.filter((p) => p.status === 'Completed').length,
      inProgressProjects: data.projects.filter((p) => p.status === 'In Progress').length,
      ideaProjects: data.projects.filter((p) => p.status === 'Idea' || p.status === 'Research Idea').length,
      totalSkills: data.skills.length,
      totalCertificates: data.certificates.length,
      completedMilestones,
      totalMilestones,
      roadmapProgress,
      totalActivities: data.timeline.length,
      industryPartnersCount: data.industryExposure.length
    },

    // Modes & UI
    isDark,
    setIsDark,
    isAdminMode,
    setIsAdminMode,
    activeSection,
    setActiveSection,
    searchQuery,
    setSearchQuery,
    
    // Modals
    selectedProject,
    setSelectedProject,
    selectedCert,
    setSelectedCert,
    selectedResearch,
    setSelectedResearch,
    isResumeModalOpen,
    setIsResumeModalOpen,
    isAdminModalOpen,
    setIsAdminModalOpen,

    // Toast
    toast,
    showToast,

    // Actions
    updateProfile,
    uploadProfilePhoto,
    uploadResumeFile,
    addProject,
    updateProject,
    deleteProject,
    addSkill,
    updateSkill,
    deleteSkill,
    addCertificate,
    updateCertificate,
    deleteCertificate,
    toggleMilestone,
    addMilestone,
    updateMilestone,
    deleteMilestone,
    addTimelineEvent,
    updateTimelineEvent,
    deleteTimelineEvent,
    updateResearchItem,
    addResearchItem,
    deleteResearchItem,
    exportDataJSON,
    importDataJSON,
    resetToDefault
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
