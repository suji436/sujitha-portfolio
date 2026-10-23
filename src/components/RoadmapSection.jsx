import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  Milestone, 
  CheckCircle2, 
  Circle, 
  Plus, 
  Sparkles, 
  Calendar, 
  ArrowRight,
  TrendingUp,
  BrainCircuit,
  Clock
} from 'lucide-react';

export const RoadmapSection = () => {
  const { 
    roadmap, 
    toggleMilestone, 
    stats, 
    isAdminMode, 
    setIsAdminModalOpen 
  } = usePortfolio();

  return (
    <section id="roadmap" className="space-y-6 pt-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-lavender-700 dark:text-lavender-400">
              07 // Career Development Track
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            Machine Learning Engineer Roadmap
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Interactive goal tracker. Click any milestone checkbox to update progress in real time.
          </p>
        </div>

        {isAdminMode && (
          <button
            onClick={() => setIsAdminModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-lavender-700 text-white shadow-soft-purple hover:bg-lavender-800 transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Manage Milestones</span>
          </button>
        )}
      </div>

      {/* Dynamic Progress Overview Card */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-lavender-100/90 via-purple-50/70 to-white dark:from-darkbg-card dark:via-darkbg-surface dark:to-darkbg-card border border-lavender-200/80 dark:border-darkbg-border shadow-sm space-y-4">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-lavender-800 dark:text-lavender-300">
              Target Role: Machine Learning Engineer
            </span>
            <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mt-0.5">
              Cumulative Roadmap Completion
            </h3>
          </div>

          <div className="text-right">
            <span className="text-3xl font-extrabold text-lavender-700 dark:text-lavender-400 font-mono">
              {stats.roadmapProgress}%
            </span>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              {stats.completedMilestones} of {stats.totalMilestones} Completed
            </p>
          </div>
        </div>

        {/* Dynamic Progress Bar */}
        <div className="w-full h-3 bg-lavender-200/70 dark:bg-darkbg-surface rounded-full overflow-hidden p-0.5 border border-lavender-300/40 dark:border-darkbg-border">
          <div 
            className="h-full bg-gradient-to-r from-lavender-600 via-purple-600 to-emerald-500 rounded-full transition-all duration-700"
            style={{ width: `${stats.roadmapProgress}%` }}
          />
        </div>

        <p className="text-xs text-slate-500 dark:text-slate-400">
          * Progress percentage is strictly calculated from the verified milestones marked complete below, without arbitrary estimations.
        </p>

      </div>

      {/* Interactive Milestones List */}
      <div className="space-y-3">
        {roadmap.map((item, index) => {
          const isDone = item.completed;

          return (
            <div
              key={item.id}
              onClick={() => toggleMilestone(item.id)}
              className={`cursor-pointer p-4 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                isDone
                  ? 'bg-white/80 dark:bg-darkbg-card/70 border-emerald-200/70 dark:border-emerald-900/40 hover:border-emerald-400 shadow-sm'
                  : 'bg-white dark:bg-darkbg-card border-lavender-200/80 dark:border-darkbg-border hover:border-lavender-400 dark:hover:border-lavender-600 shadow-sm'
              }`}
            >
              {/* Checkbox Trigger */}
              <button 
                type="button"
                className="mt-0.5 shrink-0 transition-transform active:scale-90"
                aria-label={`Toggle ${item.title}`}
              >
                {isDone ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
                ) : (
                  <Circle className="w-5 h-5 text-slate-300 dark:text-slate-600 hover:text-lavender-500" />
                )}
              </button>

              {/* Milestone Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-mono text-xs text-slate-400">
                      0{index + 1}.
                    </span>
                    <h4 className={`text-sm font-bold ${
                      isDone 
                        ? 'text-slate-900 dark:text-slate-100 line-through decoration-emerald-500/50 decoration-2' 
                        : 'text-slate-900 dark:text-white'
                    }`}>
                      {item.title}
                    </h4>
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-lavender-100 dark:bg-darkbg-surface text-lavender-800 dark:text-lavender-300 border border-lavender-200 dark:border-darkbg-border">
                      {item.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-lavender-600" />
                      <span>{item.targetDate}</span>
                    </span>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                      isDone 
                        ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300' 
                        : 'bg-slate-100 dark:bg-darkbg-surface text-slate-600 dark:text-slate-400'
                    }`}>
                      {isDone ? 'Completed' : 'In Progress'}
                    </span>
                  </div>
                </div>

                {item.notes && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                    {item.notes}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};
