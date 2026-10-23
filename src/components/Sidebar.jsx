import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  LayoutDashboard, 
  User, 
  Code2, 
  FolderGit2, 
  Building2, 
  Award, 
  CalendarDays, 
  Milestone, 
  Lightbulb, 
  Mail, 
  ExternalLink,
  Github,
  Linkedin,
  Sparkles,
  Download,
  RotateCcw,
  Sliders
} from 'lucide-react';

export const Sidebar = ({ isOpen, closeSidebar }) => {
  const { 
    activeSection, 
    setActiveSection, 
    profile, 
    stats,
    exportDataJSON,
    resetToDefault,
    setIsAdminModalOpen,
    isAdminMode
  } = usePortfolio();

  const navItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard, badge: null },
    { id: 'about', label: 'About Me', icon: User, badge: null },
    { id: 'skills', label: 'Technical Skills', icon: Code2, badge: stats.totalSkills },
    { id: 'projects', label: 'Projects Gallery', icon: FolderGit2, badge: stats.totalProjects },
    { id: 'industry', label: 'Industry & Communities', icon: Building2, badge: stats.industryPartnersCount },
    { id: 'certificates', label: 'Certifications', icon: Award, badge: stats.totalCertificates },
    { id: 'activities', label: 'Events & Timeline', icon: CalendarDays, badge: stats.totalActivities },
    { id: 'roadmap', label: 'ML Roadmap', icon: Milestone, badge: `${stats.roadmapProgress}%` },
    { id: 'research', label: 'Research & Ideas', icon: Lightbulb, badge: '4' },
    { id: 'contact', label: 'Get in Touch', icon: Mail, badge: null },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    closeSidebar();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          onClick={closeSidebar}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      {/* Sidebar container */}
      <aside className={`fixed top-16 bottom-0 left-0 z-40 w-64 bg-white/95 dark:bg-darkbg-surface/95 backdrop-blur-xl border-r border-lavender-200/70 dark:border-darkbg-border flex flex-col justify-between transition-transform duration-300 lg:translate-x-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        
        {/* Navigation list */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
          {/* Quick Profile Summary Card */}
          <div className="mb-4 p-3 rounded-2xl bg-lavender-50 dark:bg-darkbg-card border border-lavender-200/60 dark:border-darkbg-border">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img 
                  src={profile.avatar} 
                  alt={profile.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-lavender-400 dark:ring-lavender-600"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-darkbg-surface"></span>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white truncate">
                  {profile.name}
                </h4>
                <p className="text-[10px] text-lavender-700 dark:text-lavender-300 truncate">
                  {profile.careerGoal}
                </p>
              </div>
            </div>
            
            <div className="mt-2.5 pt-2 border-t border-lavender-200/60 dark:border-darkbg-border flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
              <span className="text-[10px]">Roadmap Progress</span>
              <span className="font-mono font-semibold text-lavender-700 dark:text-lavender-400">{stats.roadmapProgress}%</span>
            </div>
            <div className="w-full h-1.5 bg-lavender-200 dark:bg-darkbg-surface rounded-full mt-1 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-lavender-500 to-purple-600 rounded-full transition-all duration-500" 
                style={{ width: `${stats.roadmapProgress}%` }}
              />
            </div>
          </div>

          <div className="px-2 pb-1 text-[10px] font-semibold tracking-wider uppercase text-slate-400 dark:text-slate-500 font-mono">
            Navigation
          </div>

          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-lavender-700 text-white shadow-soft-purple font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-lavender-100/70 dark:hover:bg-darkbg-card hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400 dark:text-slate-500'}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-mono ${
                    isActive 
                      ? 'bg-white/20 text-white' 
                      : 'bg-lavender-100 dark:bg-darkbg-card text-lavender-800 dark:text-lavender-300 border border-lavender-200/50 dark:border-darkbg-border'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Sidebar Footer: Quick links & Utilities */}
        <div className="p-3 border-t border-lavender-200/70 dark:border-darkbg-border bg-lavender-50/50 dark:bg-darkbg-surface space-y-2">
          
          {/* Social Links */}
          <div className="flex items-center justify-around py-1">
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-lavender-100 dark:hover:bg-darkbg-card transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            {profile.linkedinUrl && (
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-lavender-100 dark:hover:bg-darkbg-card transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}
            <button
              onClick={() => setIsAdminModalOpen(true)}
              className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-lavender-700 dark:hover:text-lavender-300 hover:bg-lavender-100 dark:hover:bg-darkbg-card transition-colors"
              title="Open Admin Dashboard"
            >
              <Sliders className="w-4 h-4" />
            </button>
            <button
              onClick={exportDataJSON}
              className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-emerald-600 hover:bg-lavender-100 dark:hover:bg-darkbg-card transition-colors"
              title="Backup Portfolio (JSON)"
            >
              <Download className="w-4 h-4" />
            </button>
          </div>

          <div className="text-center text-[10px] text-slate-400 dark:text-slate-500">
            Sir Issac Newton College • Nagapattinam
          </div>
        </div>

      </aside>
    </>
  );
};
