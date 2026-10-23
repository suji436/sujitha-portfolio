import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  X, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Clock, 
  Lightbulb, 
  Layers, 
  AlertCircle, 
  UserCheck, 
  BookOpen, 
  Tag
} from 'lucide-react';

export const ProjectDetailModal = () => {
  const { selectedProject, setSelectedProject } = usePortfolio();

  if (!selectedProject) return null;

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800';
      case 'In Progress':
        return 'bg-purple-100 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800';
      case 'Idea':
      case 'Research Idea':
        return 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800';
      default:
        return 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700';
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="relative w-full max-w-3xl rounded-3xl bg-white dark:bg-darkbg-card border border-lavender-200 dark:border-darkbg-border shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="relative p-6 bg-gradient-to-r from-lavender-100/70 via-white to-lavender-50/50 dark:from-darkbg-surface dark:via-darkbg-card dark:to-darkbg-surface border-b border-lavender-200/70 dark:border-darkbg-border shrink-0 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${getStatusBadge(selectedProject.status)}`}>
                {selectedProject.status}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-lavender-100 dark:bg-darkbg-surface text-lavender-800 dark:text-lavender-300 border border-lavender-200 dark:border-darkbg-border">
                {selectedProject.category}
              </span>
            </div>
            
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-2 tracking-tight">
              {selectedProject.title}
            </h2>
            {selectedProject.subtitle && (
              <p className="text-xs sm:text-sm text-lavender-800 dark:text-lavender-300 font-medium mt-0.5">
                {selectedProject.subtitle}
              </p>
            )}
          </div>

          <button
            onClick={() => setSelectedProject(null)}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-lavender-100 dark:hover:bg-darkbg-surface transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          
          {/* Project Screenshot / Visual Banner */}
          {selectedProject.image && (
            <div className="rounded-2xl overflow-hidden border border-lavender-200/80 dark:border-darkbg-border max-h-64">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Short Description */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-lavender-700 dark:text-lavender-400 mb-1">
              Overview
            </h4>
            <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
              {selectedProject.description}
            </p>
          </div>

          {/* Problem vs Proposed Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-red-50/50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30">
              <div className="flex items-center gap-2 text-red-700 dark:text-red-400 font-bold text-xs uppercase tracking-wide mb-1.5">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>Problem Statement</span>
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                {selectedProject.problem}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30">
              <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-xs uppercase tracking-wide mb-1.5">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Proposed Solution</span>
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                {selectedProject.solution}
              </p>
            </div>
          </div>

          {/* My Contribution */}
          <div className="p-4 rounded-2xl bg-lavender-50/60 dark:bg-darkbg-surface border border-lavender-200/70 dark:border-darkbg-border">
            <div className="flex items-center gap-2 text-lavender-800 dark:text-lavender-300 font-bold text-xs uppercase tracking-wide mb-1.5">
              <UserCheck className="w-4 h-4 shrink-0" />
              <span>Sujitha's Contribution & Role</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
              {selectedProject.contribution}
            </p>
          </div>

          {/* Key Learning Outcomes */}
          {selectedProject.learningOutcomes && (
            <div className="p-4 rounded-2xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-100 dark:border-purple-900/30">
              <div className="flex items-center gap-2 text-purple-800 dark:text-purple-300 font-bold text-xs uppercase tracking-wide mb-1.5">
                <BookOpen className="w-4 h-4 shrink-0" />
                <span>Key Learning Outcomes</span>
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                {selectedProject.learningOutcomes}
              </p>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {selectedProject.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-lavender-100 dark:bg-darkbg-surface text-lavender-900 dark:text-lavender-200 border border-lavender-200 dark:border-darkbg-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer / External Actions */}
        <div className="p-4 sm:p-5 bg-lavender-50/50 dark:bg-darkbg-surface border-t border-lavender-200/70 dark:border-darkbg-border shrink-0 flex items-center justify-between gap-3">
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Status: <span className="font-semibold text-slate-800 dark:text-slate-200">{selectedProject.status}</span>
          </div>

          <div className="flex items-center gap-2">
            {selectedProject.githubUrl && (
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-darkbg-card text-slate-800 dark:text-slate-200 border border-lavender-200 dark:border-darkbg-border hover:bg-lavender-50 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
              </a>
            )}

            {selectedProject.liveUrl ? (
              <a
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-lavender-700 text-white hover:bg-lavender-800 shadow-soft-purple transition-all"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="text-[11px] text-slate-400 italic">
                (Live demo link can be configured in Edit Mode)
              </span>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
