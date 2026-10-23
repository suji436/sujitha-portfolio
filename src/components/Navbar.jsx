import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  Sun, 
  Moon, 
  FileText, 
  Settings, 
  Search, 
  Sparkles, 
  Menu,
  Download,
  Upload,
  RotateCcw
} from 'lucide-react';

export const Navbar = ({ toggleSidebar }) => {
  const { 
    isDark, 
    setIsDark, 
    isAdminMode, 
    setIsAdminMode, 
    setIsAdminModalOpen,
    setIsResumeModalOpen, 
    searchQuery, 
    setSearchQuery,
    profile,
    exportDataJSON,
    resetToDefault
  } = usePortfolio();

  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur-xl bg-white/80 dark:bg-darkbg/85 border-b border-lavender-200/70 dark:border-darkbg-border transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Left: Mobile trigger & Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-lavender-100 dark:hover:bg-darkbg-surface transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          <a href="#overview" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-lavender-700 via-purple-600 to-lavender-400 flex items-center justify-center text-white font-bold text-sm shadow-sm group-hover:scale-105 transition-transform">
              SG
            </div>
            <div className="hidden sm:block">
              <span className="font-semibold text-slate-900 dark:text-white text-sm tracking-tight flex items-center gap-1.5">
                {profile.name}
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" title="Active"></span>
              </span>
              <p className="text-[11px] text-lavender-700 dark:text-lavender-300 font-mono tracking-wide leading-none">
                AI / ML Portfolio
              </p>
            </div>
          </a>
        </div>

        {/* Center: Search Bar */}
        <div className="flex-1 max-w-md mx-2 hidden md:block">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500" />
            <input
              type="text"
              placeholder="Search projects, skills, certificates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-1.5 text-xs sm:text-sm bg-lavender-100/60 dark:bg-darkbg-surface border border-lavender-200/80 dark:border-darkbg-border rounded-xl focus:outline-none focus:ring-2 focus:ring-lavender-500 dark:focus:ring-lavender-600 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Resume Button */}
          <button
            onClick={() => setIsResumeModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium bg-lavender-100 dark:bg-lavender-950/60 text-lavender-900 dark:text-lavender-200 hover:bg-lavender-200/80 dark:hover:bg-lavender-900/60 border border-lavender-200/80 dark:border-lavender-800/60 transition-all shadow-sm"
            title="View, customize, or download resume"
          >
            <FileText className="w-3.5 h-3.5 text-lavender-700 dark:text-lavender-400" />
            <span className="hidden sm:inline">Resume</span>
          </button>

          {/* Admin / Edit Mode Toggle Button */}
          <button
            onClick={() => {
              setIsAdminMode(!isAdminMode);
              if (!isAdminMode) {
                setIsAdminModalOpen(true);
              }
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all shadow-sm ${
              isAdminMode 
                ? 'bg-lavender-700 text-white shadow-soft-purple hover:bg-lavender-800 ring-2 ring-lavender-400' 
                : 'bg-white dark:bg-darkbg-surface text-slate-700 dark:text-slate-200 border border-lavender-200 dark:border-darkbg-border hover:bg-lavender-50 dark:hover:bg-darkbg-card'
            }`}
            title="Toggle live editing & dashboard settings"
          >
            <Settings className={`w-3.5 h-3.5 ${isAdminMode ? 'animate-spin' : ''}`} />
            <span className="hidden sm:inline">{isAdminMode ? 'Edit Active' : 'Edit Mode'}</span>
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-lavender-100 dark:hover:bg-darkbg-surface border border-lavender-200/60 dark:border-darkbg-border transition-colors"
            aria-label="Toggle Theme Mode"
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-lavender-700" />
            )}
          </button>
        </div>

      </div>
    </header>
  );
};
