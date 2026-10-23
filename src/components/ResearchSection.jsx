import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { ResearchModal } from './ResearchModal';
import { 
  Lightbulb, 
  FileText, 
  Sparkles, 
  ArrowRight, 
  Plus, 
  Layers, 
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

export const ResearchSection = () => {
  const { 
    research, 
    setSelectedResearch, 
    isAdminMode, 
    setIsAdminModalOpen 
  } = usePortfolio();

  const getStageColor = (badge) => {
    switch (badge) {
      case 'Patent Concept':
        return 'bg-purple-100 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800';
      case 'Experimental Study':
        return 'bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800';
      case 'Smart City Proposal':
        return 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800';
      default:
        return 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800';
    }
  };

  return (
    <section id="research" className="space-y-6 pt-6 reveal-on-scroll">
      
      {/* Research Modal instance */}
      <ResearchModal />

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
              08 // Innovation & IP
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            Research & Innovation Concepts
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            Technical research papers, hardware patent ideas, and smart infrastructure proposals.
          </p>
        </div>

        {isAdminMode && (
          <button
            onClick={() => setIsAdminModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-sky-600 hover:bg-sky-500 text-white shadow-soft-purple transition-colors btn-hover"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add / Edit Proposal</span>
          </button>
        )}
      </div>

      {/* Research Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {research.map((item) => (
          <div
            key={item.id}
            className="p-6 rounded-3xl bg-white dark:bg-darkbg-card border border-lavender-200/80 dark:border-darkbg-border shadow-soft-navy card-hover transition-all duration-300 flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold border ${getStageColor(item.stageBadge)}`}>
                  {item.stageBadge}
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  {item.status}
                </span>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                  {item.summary}
                </p>
              </div>

              {/* Problem snippet */}
              <div className="p-3 rounded-2xl bg-lavender-50/60 dark:bg-darkbg-surface border border-lavender-100 dark:border-darkbg-border text-xs text-slate-600 dark:text-slate-300">
                <span className="font-semibold text-slate-900 dark:text-white block mb-0.5">Focus Problem:</span>
                <span className="line-clamp-2">{item.problem}</span>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="pt-3 border-t border-slate-100 dark:border-darkbg-border flex items-center justify-between gap-2">
              <span className="text-xs text-slate-400 font-mono">
                {item.documents ? `${item.documents.length} Attachment(s)` : 'Documentation'}
              </span>

              <button
                onClick={() => setSelectedResearch(item)}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-lavender-100 dark:bg-darkbg-surface text-lavender-900 dark:text-lavender-200 hover:bg-lavender-200 transition-colors"
              >
                <span>Read Full Proposal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};
