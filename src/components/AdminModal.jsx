import React, { useState, useRef } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  X, 
  Save, 
  Plus, 
  Trash2, 
  Upload, 
  Download, 
  RotateCcw, 
  User, 
  FolderGit2, 
  Code2, 
  Award, 
  Milestone, 
  Building2, 
  Database,
  Camera,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

export const AdminModal = () => {
  const { 
    isAdminModalOpen, 
    setIsAdminModalOpen, 
    profile, 
    updateProfile, 
    uploadProfilePhoto,
    skills, 
    addSkill, 
    deleteSkill, 
    projects, 
    addProject, 
    deleteProject, 
    certificates, 
    addCertificate, 
    deleteCertificate, 
    roadmap, 
    addMilestone, 
    deleteMilestone,
    exportDataJSON,
    importDataJSON,
    resetToDefault,
    showToast
  } = usePortfolio();

  const [activeTab, setActiveTab] = useState('profile');
  const fileImportRef = useRef(null);
  const avatarInputRef = useRef(null);

  // Form states
  const [profileForm, setProfileForm] = useState({ ...profile });
  
  // New Project Form state
  const [newProject, setNewProject] = useState({
    title: '',
    subtitle: '',
    category: 'AI',
    status: 'In Progress',
    description: '',
    problem: '',
    solution: '',
    contribution: '',
    technologies: '',
    githubUrl: 'https://github.com/Suji436',
    liveUrl: '',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop',
    learningOutcomes: ''
  });

  // New Skill Form state
  const [newSkill, setNewSkill] = useState({
    category: 'AI and Machine Learning',
    name: '',
    level: 70,
    stage: 'Learning & Applying',
    notes: ''
  });

  // New Certificate Form state
  const [newCert, setNewCert] = useState({
    title: '',
    issuer: '',
    category: 'Development',
    date: '2024 - 2025',
    credentialId: '',
    verificationUrl: '',
    status: 'Verified',
    description: '',
    badge: 'Certified'
  });

  // New Milestone Form state
  const [newMilestone, setNewMilestone] = useState({
    title: '',
    category: 'Machine Learning',
    targetDate: '2025',
    notes: ''
  });

  if (!isAdminModalOpen) return null;

  const handleProfileSave = (e) => {
    e.preventDefault();
    updateProfile(profileForm);
  };

  const handleCreateProject = (e) => {
    e.preventDefault();
    if (!newProject.title) {
      showToast('Project title is required', 'error');
      return;
    }
    const techArray = typeof newProject.technologies === 'string'
      ? newProject.technologies.split(',').map(t => t.trim()).filter(Boolean)
      : newProject.technologies;

    addProject({
      ...newProject,
      technologies: techArray.length ? techArray : ['Python', 'AI']
    });

    setNewProject({
      title: '',
      subtitle: '',
      category: 'AI',
      status: 'In Progress',
      description: '',
      problem: '',
      solution: '',
      contribution: '',
      technologies: '',
      githubUrl: 'https://github.com/Suji436',
      liveUrl: '',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop',
      learningOutcomes: ''
    });
  };

  const handleCreateSkill = (e) => {
    e.preventDefault();
    if (!newSkill.name) {
      showToast('Skill name is required', 'error');
      return;
    }
    addSkill({ ...newSkill, level: Number(newSkill.level) });
    setNewSkill({
      category: 'AI and Machine Learning',
      name: '',
      level: 70,
      stage: 'Learning & Applying',
      notes: ''
    });
  };

  const handleCreateCert = (e) => {
    e.preventDefault();
    if (!newCert.title) {
      showToast('Certificate title is required', 'error');
      return;
    }
    addCertificate(newCert);
    setNewCert({
      title: '',
      issuer: '',
      category: 'Development',
      date: '2024 - 2025',
      credentialId: '',
      verificationUrl: '',
      status: 'Verified',
      description: '',
      badge: 'Certified'
    });
  };

  const handleCreateMilestone = (e) => {
    e.preventDefault();
    if (!newMilestone.title) {
      showToast('Milestone title is required', 'error');
      return;
    }
    addMilestone(newMilestone);
    setNewMilestone({
      title: '',
      category: 'Machine Learning',
      targetDate: '2025',
      notes: ''
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div className="relative w-full max-w-4xl rounded-3xl bg-white dark:bg-darkbg-card border border-lavender-200 dark:border-darkbg-border shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Modal Top Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-lavender-100/90 via-white to-lavender-50/70 dark:from-darkbg-surface dark:via-darkbg-card dark:to-darkbg-surface border-b border-lavender-200/70 dark:border-darkbg-border flex items-center justify-between gap-3 shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Personal Portfolio Studio & Admin
              </h2>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Customize personal details, add projects, modify skills, and backup portfolio data locally.
            </p>
          </div>

          <button
            onClick={() => setIsAdminModalOpen(false)}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-lavender-100 dark:hover:bg-darkbg-surface transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1 px-4 py-2 bg-lavender-50/70 dark:bg-darkbg-surface border-b border-lavender-200/60 dark:border-darkbg-border overflow-x-auto scrollbar-none shrink-0">
          {[
            { id: 'profile', label: 'Profile & Bio', icon: User },
            { id: 'projects', label: 'Projects', icon: FolderGit2 },
            { id: 'skills', label: 'Skills', icon: Code2 },
            { id: 'certs', label: 'Certifications', icon: Award },
            { id: 'roadmap', label: 'Roadmap', icon: Milestone },
            { id: 'backup', label: 'Backup & Restore', icon: Database },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-lavender-700 text-white shadow-soft-purple font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-darkbg-card'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Modal Scrollable Content Surface */}
        <div className="overflow-y-auto p-5 sm:p-6 space-y-6">
          
          {/* TAB 1: PROFILE & BIO */}
          {activeTab === 'profile' && (
            <form onSubmit={handleProfileSave} className="space-y-4">
              <div className="flex flex-col sm:flex-row items-center gap-4 p-4 rounded-2xl bg-lavender-50/60 dark:bg-darkbg-surface border border-lavender-100 dark:border-darkbg-border">
                <div className="relative group">
                  <img 
                    src={profileForm.avatar} 
                    alt="Preview" 
                    className="w-16 h-16 rounded-2xl object-cover ring-2 ring-lavender-400"
                  />
                  <button
                    type="button"
                    onClick={() => avatarInputRef.current?.click()}
                    className="absolute -bottom-1 -right-1 p-1 rounded-lg bg-lavender-700 text-white shadow"
                  >
                    <Camera className="w-3.5 h-3.5" />
                  </button>
                  <input
                    type="file"
                    ref={avatarInputRef}
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = (ev) => {
                          setProfileForm({ ...profileForm, avatar: ev.target.result });
                          uploadProfilePhoto(file);
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                    accept="image/*"
                    className="hidden"
                  />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200">Profile Photo</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Click the camera icon to upload an image from your computer, or paste a URL below.
                  </p>
                  <input 
                    type="text"
                    value={profileForm.avatar}
                    onChange={(e) => setProfileForm({ ...profileForm, avatar: e.target.value })}
                    placeholder="Image URL"
                    className="mt-1.5 w-full text-xs px-2.5 py-1 rounded-lg border border-slate-200 dark:border-darkbg-border bg-white dark:bg-darkbg-card"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    value={profileForm.name} 
                    onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                    className="w-full text-xs px-3 py-2 rounded-xl border border-slate-200 dark:border-darkbg-border bg-white dark:bg-darkbg-surface" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Career Goal</label>
                  <input 
                    type="text" 
                    value={profileForm.careerGoal} 
                    onChange={(e) => setProfileForm({ ...profileForm, careerGoal: e.target.value })}
                    className="w-full text-xs px-3 py-2 rounded-xl border border-slate-200 dark:border-darkbg-border bg-white dark:bg-darkbg-surface" 
                    required 
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Professional Tagline</label>
                <input 
                  type="text" 
                  value={profileForm.tagline} 
                  onChange={(e) => setProfileForm({ ...profileForm, tagline: e.target.value })}
                  className="w-full text-xs px-3 py-2 rounded-xl border border-slate-200 dark:border-darkbg-border bg-white dark:bg-darkbg-surface" 
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Education Level</label>
                  <input 
                    type="text" 
                    value={profileForm.educationLevel} 
                    onChange={(e) => setProfileForm({ ...profileForm, educationLevel: e.target.value })}
                    className="w-full text-xs px-3 py-2 rounded-xl border border-slate-200 dark:border-darkbg-border bg-white dark:bg-darkbg-surface" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Institution / College</label>
                  <input 
                    type="text" 
                    value={profileForm.institution} 
                    onChange={(e) => setProfileForm({ ...profileForm, institution: e.target.value })}
                    className="w-full text-xs px-3 py-2 rounded-xl border border-slate-200 dark:border-darkbg-border bg-white dark:bg-darkbg-surface" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">GitHub Username & URL</label>
                  <input 
                    type="text" 
                    value={profileForm.githubUrl} 
                    onChange={(e) => setProfileForm({ ...profileForm, githubUrl: e.target.value })}
                    className="w-full text-xs px-3 py-2 rounded-xl border border-slate-200 dark:border-darkbg-border bg-white dark:bg-darkbg-surface" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">LinkedIn URL (Editable)</label>
                  <input 
                    type="text" 
                    value={profileForm.linkedinUrl} 
                    onChange={(e) => setProfileForm({ ...profileForm, linkedinUrl: e.target.value })}
                    placeholder="https://linkedin.com/in/your-handle"
                    className="w-full text-xs px-3 py-2 rounded-xl border border-slate-200 dark:border-darkbg-border bg-white dark:bg-darkbg-surface" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Contact Email</label>
                <input 
                  type="email" 
                  value={profileForm.email} 
                  onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                  className="w-full text-xs px-3 py-2 rounded-xl border border-slate-200 dark:border-darkbg-border bg-white dark:bg-darkbg-surface" 
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">About Me / Bio</label>
                <textarea 
                  rows={4}
                  value={profileForm.bio} 
                  onChange={(e) => setProfileForm({ ...profileForm, bio: e.target.value })}
                  className="w-full text-xs px-3 py-2 rounded-xl border border-slate-200 dark:border-darkbg-border bg-white dark:bg-darkbg-surface" 
                />
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-lavender-700 text-white hover:bg-lavender-800 shadow-soft-purple transition-all"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Save Profile Changes</span>
                </button>
              </div>
            </form>
          )}

          {/* TAB 2: PROJECTS */}
          {activeTab === 'projects' && (
            <div className="space-y-6">
              {/* Add New Project Card */}
              <div className="p-4 rounded-2xl bg-lavender-50/60 dark:bg-darkbg-surface border border-lavender-200 dark:border-darkbg-border space-y-3">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Plus className="w-4 h-4 text-lavender-600" />
                  <span>Add New Project</span>
                </h4>

                <form onSubmit={handleCreateProject} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input 
                      type="text" 
                      placeholder="Project Title *" 
                      value={newProject.title} 
                      onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                      className="text-xs px-3 py-2 rounded-xl border border-slate-200 dark:border-darkbg-border bg-white dark:bg-darkbg-card" 
                      required 
                    />
                    <input 
                      type="text" 
                      placeholder="Subtitle (e.g. AI Triage Assistant)" 
                      value={newProject.subtitle} 
                      onChange={(e) => setNewProject({ ...newProject, subtitle: e.target.value })}
                      className="text-xs px-3 py-2 rounded-xl border border-slate-200 dark:border-darkbg-border bg-white dark:bg-darkbg-card" 
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <select
                      value={newProject.category}
                      onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
                      className="text-xs px-3 py-2 rounded-xl border border-slate-200 dark:border-darkbg-border bg-white dark:bg-darkbg-card"
                    >
                      <option value="AI">AI</option>
                      <option value="Machine Learning">Machine Learning</option>
                      <option value="Generative AI">Generative AI</option>
                      <option value="AI Agents">AI Agents</option>
                      <option value="Web Applications">Web Applications</option>
                      <option value="Research Ideas">Research Ideas</option>
                    </select>

                    <select
                      value={newProject.status}
                      onChange={(e) => setNewProject({ ...newProject, status: e.target.value })}
                      className="text-xs px-3 py-2 rounded-xl border border-slate-200 dark:border-darkbg-border bg-white dark:bg-darkbg-card"
                    >
                      <option value="Idea">Idea</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                      <option value="Published">Published</option>
                    </select>
                  </div>

                  <textarea 
                    rows={2} 
                    placeholder="Short Description" 
                    value={newProject.description} 
                    onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                    className="w-full text-xs px-3 py-2 rounded-xl border border-slate-200 dark:border-darkbg-border bg-white dark:bg-darkbg-card" 
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <textarea 
                      rows={2} 
                      placeholder="Problem Statement" 
                      value={newProject.problem} 
                      onChange={(e) => setNewProject({ ...newProject, problem: e.target.value })}
                      className="w-full text-xs px-3 py-2 rounded-xl border border-slate-200 dark:border-darkbg-border bg-white dark:bg-darkbg-card" 
                    />
                    <textarea 
                      rows={2} 
                      placeholder="Proposed Solution" 
                      value={newProject.solution} 
                      onChange={(e) => setNewProject({ ...newProject, solution: e.target.value })}
                      className="w-full text-xs px-3 py-2 rounded-xl border border-slate-200 dark:border-darkbg-border bg-white dark:bg-darkbg-card" 
                    />
                  </div>

                  <input 
                    type="text" 
                    placeholder="Technologies (comma-separated, e.g. Python, Scikit-learn, React)" 
                    value={newProject.technologies} 
                    onChange={(e) => setNewProject({ ...newProject, technologies: e.target.value })}
                    className="w-full text-xs px-3 py-2 rounded-xl border border-slate-200 dark:border-darkbg-border bg-white dark:bg-darkbg-card" 
                  />

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-lavender-700 text-white hover:bg-lavender-800 transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Project to Portfolio</span>
                    </button>
                  </div>
                </form>
              </div>

              {/* Existing Projects List */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Existing Projects ({projects.length})
                </h4>
                <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
                  {projects.map((proj) => (
                    <div
                      key={proj.id}
                      className="p-3 rounded-xl bg-white dark:bg-darkbg-surface border border-slate-200 dark:border-darkbg-border flex items-center justify-between gap-3 text-xs"
                    >
                      <div className="min-w-0">
                        <span className="font-bold text-slate-900 dark:text-white truncate block">
                          {proj.title}
                        </span>
                        <span className="text-slate-400 text-[11px]">
                          {proj.category} • Status: {proj.status}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => deleteProject(proj.id)}
                        className="p-1.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/40 rounded-lg transition-colors shrink-0"
                        title="Delete Project"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: SKILLS */}
          {activeTab === 'skills' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-lavender-50/60 dark:bg-darkbg-surface border border-lavender-200 dark:border-darkbg-border space-y-3">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Plus className="w-4 h-4 text-lavender-600" />
                  <span>Add New Technical Skill</span>
                </h4>

                <form onSubmit={handleCreateSkill} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input 
                      type="text" 
                      placeholder="Skill Name (e.g. PyTorch, LangChain) *" 
                      value={newSkill.name} 
                      onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
                      className="text-xs px-3 py-2 rounded-xl border border-slate-200 dark:border-darkbg-border bg-white dark:bg-darkbg-card" 
                      required 
                    />
                    <select
                      value={newSkill.category}
                      onChange={(e) => setNewSkill({ ...newSkill, category: e.target.value })}
                      className="text-xs px-3 py-2 rounded-xl border border-slate-200 dark:border-darkbg-border bg-white dark:bg-darkbg-card"
                    >
                      <option value="AI and Machine Learning">AI and Machine Learning</option>
                      <option value="Programming and Development">Programming and Development</option>
                      <option value="Data and Analytics">Data and Analytics</option>
                      <option value="Cloud and Developer Technologies">Cloud and Developer Technologies</option>
                      <option value="Additional Learning">Additional Learning</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-medium text-slate-600 dark:text-slate-400 mb-1">
                        Confidence Level: {newSkill.level}%
                      </label>
                      <input 
                        type="range" 
                        min="20" 
                        max="100" 
                        value={newSkill.level} 
                        onChange={(e) => setNewSkill({ ...newSkill, level: e.target.value })}
                        className="w-full accent-lavender-700" 
                      />
                    </div>
                    <input 
                      type="text" 
                      placeholder="Proficiency Stage (e.g. Practicing, Certified)" 
                      value={newSkill.stage} 
                      onChange={(e) => setNewSkill({ ...newSkill, stage: e.target.value })}
                      className="text-xs px-3 py-2 rounded-xl border border-slate-200 dark:border-darkbg-border bg-white dark:bg-darkbg-card" 
                    />
                  </div>

                  <input 
                    type="text" 
                    placeholder="Short practical note / application context" 
                    value={newSkill.notes} 
                    onChange={(e) => setNewSkill({ ...newSkill, notes: e.target.value })}
                    className="w-full text-xs px-3 py-2 rounded-xl border border-slate-200 dark:border-darkbg-border bg-white dark:bg-darkbg-card" 
                  />

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-lavender-700 text-white hover:bg-lavender-800 transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Skill</span>
                    </button>
                  </div>
                </form>
              </div>

              {/* Skills List */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Tracked Skills ({skills.length})
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-60 overflow-y-auto pr-1">
                  {skills.map((s) => (
                    <div
                      key={s.id}
                      className="p-2.5 rounded-xl bg-white dark:bg-darkbg-surface border border-slate-200 dark:border-darkbg-border flex items-center justify-between text-xs"
                    >
                      <div className="min-w-0 pr-2">
                        <span className="font-bold text-slate-900 dark:text-white truncate block">{s.name}</span>
                        <span className="text-[10px] text-slate-400">{s.category} • {s.level}%</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => deleteSkill(s.id)}
                        className="p-1 text-red-500 hover:bg-red-50 rounded-lg shrink-0"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: CERTIFICATIONS */}
          {activeTab === 'certs' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-lavender-50/60 dark:bg-darkbg-surface border border-lavender-200 dark:border-darkbg-border space-y-3">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Plus className="w-4 h-4 text-lavender-600" />
                  <span>Add New Certificate or Achievement</span>
                </h4>

                <form onSubmit={handleCreateCert} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input 
                      type="text" 
                      placeholder="Certificate Title *" 
                      value={newCert.title} 
                      onChange={(e) => setNewCert({ ...newCert, title: e.target.value })}
                      className="text-xs px-3 py-2 rounded-xl border border-slate-200 dark:border-darkbg-border bg-white dark:bg-darkbg-card" 
                      required 
                    />
                    <input 
                      type="text" 
                      placeholder="Issuing Organization (e.g. Google, HP)" 
                      value={newCert.issuer} 
                      onChange={(e) => setNewCert({ ...newCert, issuer: e.target.value })}
                      className="text-xs px-3 py-2 rounded-xl border border-slate-200 dark:border-darkbg-border bg-white dark:bg-darkbg-card" 
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <input 
                      type="text" 
                      placeholder="Date (e.g. 2024)" 
                      value={newCert.date} 
                      onChange={(e) => setNewCert({ ...newCert, date: e.target.value })}
                      className="text-xs px-3 py-2 rounded-xl border border-slate-200 dark:border-darkbg-border bg-white dark:bg-darkbg-card" 
                    />
                    <input 
                      type="text" 
                      placeholder="Credential ID" 
                      value={newCert.credentialId} 
                      onChange={(e) => setNewCert({ ...newCert, credentialId: e.target.value })}
                      className="text-xs px-3 py-2 rounded-xl border border-slate-200 dark:border-darkbg-border bg-white dark:bg-darkbg-card" 
                    />
                    <input 
                      type="text" 
                      placeholder="Verification Link URL" 
                      value={newCert.verificationUrl} 
                      onChange={(e) => setNewCert({ ...newCert, verificationUrl: e.target.value })}
                      className="text-xs px-3 py-2 rounded-xl border border-slate-200 dark:border-darkbg-border bg-white dark:bg-darkbg-card" 
                    />
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-lavender-700 text-white hover:bg-lavender-800 transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Certificate</span>
                    </button>
                  </div>
                </form>
              </div>

              {/* Existing Certs */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Verified Certificates ({certificates.length})
                </h4>
                <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                  {certificates.map((cert) => (
                    <div
                      key={cert.id}
                      className="p-3 rounded-xl bg-white dark:bg-darkbg-surface border border-slate-200 dark:border-darkbg-border flex items-center justify-between text-xs"
                    >
                      <div className="min-w-0 pr-2">
                        <span className="font-bold text-slate-900 dark:text-white truncate block">{cert.title}</span>
                        <span className="text-[11px] text-slate-400">{cert.issuer} • {cert.date}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => deleteCertificate(cert.id)}
                        className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg shrink-0"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: ROADMAP */}
          {activeTab === 'roadmap' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-lavender-50/60 dark:bg-darkbg-surface border border-lavender-200 dark:border-darkbg-border space-y-3">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Plus className="w-4 h-4 text-lavender-600" />
                  <span>Add New Roadmap Milestone</span>
                </h4>

                <form onSubmit={handleCreateMilestone} className="space-y-3">
                  <input 
                    type="text" 
                    placeholder="Milestone Title (e.g. Master PyTorch & TorchVision) *" 
                    value={newMilestone.title} 
                    onChange={(e) => setNewMilestone({ ...newMilestone, title: e.target.value })}
                    className="w-full text-xs px-3 py-2 rounded-xl border border-slate-200 dark:border-darkbg-border bg-white dark:bg-darkbg-card" 
                    required 
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input 
                      type="text" 
                      placeholder="Category (e.g. Deep Learning, MLOps)" 
                      value={newMilestone.category} 
                      onChange={(e) => setNewMilestone({ ...newMilestone, category: e.target.value })}
                      className="text-xs px-3 py-2 rounded-xl border border-slate-200 dark:border-darkbg-border bg-white dark:bg-darkbg-card" 
                    />
                    <input 
                      type="text" 
                      placeholder="Target Date (e.g. Q2 2025)" 
                      value={newMilestone.targetDate} 
                      onChange={(e) => setNewMilestone({ ...newMilestone, targetDate: e.target.value })}
                      className="text-xs px-3 py-2 rounded-xl border border-slate-200 dark:border-darkbg-border bg-white dark:bg-darkbg-card" 
                    />
                  </div>

                  <input 
                    type="text" 
                    placeholder="Learning notes / study resources" 
                    value={newMilestone.notes} 
                    onChange={(e) => setNewMilestone({ ...newMilestone, notes: e.target.value })}
                    className="w-full text-xs px-3 py-2 rounded-xl border border-slate-200 dark:border-darkbg-border bg-white dark:bg-darkbg-card" 
                  />

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-lavender-700 text-white hover:bg-lavender-800 transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Milestone</span>
                    </button>
                  </div>
                </form>
              </div>

              {/* Milestones List */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Current Milestones ({roadmap.length})
                </h4>
                <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                  {roadmap.map((m) => (
                    <div
                      key={m.id}
                      className="p-3 rounded-xl bg-white dark:bg-darkbg-surface border border-slate-200 dark:border-darkbg-border flex items-center justify-between text-xs"
                    >
                      <div className="min-w-0 pr-2">
                        <span className={`font-bold ${m.completed ? 'line-through text-slate-400' : 'text-slate-900 dark:text-white'}`}>
                          {m.title}
                        </span>
                        <span className="text-[10px] text-slate-400 block">{m.category} • Target: {m.targetDate}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => deleteMilestone(m.id)}
                        className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg shrink-0"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: BACKUP & RESTORE */}
          {activeTab === 'backup' && (
            <div className="space-y-6">
              <div className="p-5 rounded-2xl bg-lavender-50/70 dark:bg-darkbg-surface border border-lavender-200 dark:border-darkbg-border space-y-3">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Database className="w-4 h-4 text-lavender-700 dark:text-lavender-400" />
                  <span>Browser Storage & Backup Management</span>
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  All updates you make in Edit Mode are automatically saved to your browser's LocalStorage. You can export your entire portfolio as a clean JSON backup file to prevent data loss, or import a saved backup anytime.
                </p>

                <div className="pt-2 flex flex-wrap gap-3">
                  <button
                    onClick={exportDataJSON}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-lavender-700 text-white hover:bg-lavender-800 shadow-soft-purple transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span>Export Data Backup (JSON)</span>
                  </button>

                  <button
                    onClick={() => fileImportRef.current?.click()}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-darkbg-card text-slate-800 dark:text-slate-200 border border-lavender-200 dark:border-darkbg-border hover:bg-lavender-50 transition-colors"
                  >
                    <Upload className="w-4 h-4 text-lavender-600" />
                    <span>Import Backup File (JSON)</span>
                  </button>
                  <input
                    type="file"
                    ref={fileImportRef}
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) importDataJSON(file);
                    }}
                    accept=".json"
                    className="hidden"
                  />
                </div>
              </div>

              {/* Reset to Default */}
              <div className="p-4 rounded-2xl bg-red-50/40 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30 flex items-start justify-between gap-4">
                <div>
                  <h4 className="text-xs font-bold text-red-900 dark:text-red-300 flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    <span>Reset Portfolio to Default State</span>
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Reverts all projects, skills, certificates, and profile values back to original verified data.
                  </p>
                </div>

                <button
                  onClick={resetToDefault}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-red-600 text-white hover:bg-red-700 transition-colors shrink-0"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Data</span>
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-lavender-50/50 dark:bg-darkbg-surface border-t border-lavender-200/70 dark:border-darkbg-border flex items-center justify-between text-xs text-slate-500">
          <span>Local browser storage active • No cloud credentials required</span>
          <button
            onClick={() => setIsAdminModalOpen(false)}
            className="px-4 py-1.5 rounded-xl text-xs font-semibold bg-slate-200 dark:bg-darkbg-card text-slate-800 dark:text-slate-200 hover:bg-slate-300 transition-colors"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
