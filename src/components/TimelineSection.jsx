import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  CalendarDays, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  Award, 
  Plus, 
  BookOpen, 
  Tag, 
  Users,
  Compass
} from 'lucide-react';

export const TimelineSection = () => {
  const { 
    timeline, 
    searchQuery, 
    isAdminMode, 
    setIsAdminModalOpen 
  } = usePortfolio();

  const filteredEvents = timeline.filter((event) => {
    return !searchQuery ||
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.organizer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.learnings.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <section id="activities" className="space-y-6 pt-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-lavender-700 dark:text-lavender-400">
              06 // Experiential Journey
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            Workshops, Events & Campus Activities
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Chronological timeline of workshops, developer hackathons, and innovation cell activities.
          </p>
        </div>

        {isAdminMode && (
          <button
            onClick={() => setIsAdminModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-lavender-700 text-white shadow-soft-purple hover:bg-lavender-800 transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add / Edit Event</span>
          </button>
        )}
      </div>

      {/* Timeline Layout */}
      <div className="relative pl-6 sm:pl-8 border-l-2 border-lavender-200 dark:border-darkbg-border space-y-6 ml-3 sm:ml-4">
        {filteredEvents.map((event, idx) => (
          <div key={event.id} className="relative group">
            
            {/* Timeline Dot Indicator */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-darkbg-card border-4 border-lavender-600 dark:border-lavender-400 group-hover:scale-125 transition-transform" />

            {/* Event Content Card */}
            <div className="p-5 rounded-3xl bg-white dark:bg-darkbg-card border border-lavender-200/80 dark:border-darkbg-border shadow-sm hover:shadow-soft-purple transition-all duration-300 space-y-3">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-lavender-100 dark:bg-darkbg-surface text-lavender-800 dark:text-lavender-300 border border-lavender-200 dark:border-darkbg-border">
                    {event.category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/50 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>{event.status}</span>
                  </span>
                </div>

                <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                  {event.date}
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {event.title}
                </h3>
                <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    Organizer: {event.organizer}
                  </span>
                  {event.venue && (
                    <span className="flex items-center gap-1 text-slate-400">
                      <MapPin className="w-3 h-3 text-lavender-600" />
                      <span>{event.venue}</span>
                    </span>
                  )}
                </div>
              </div>

              {/* What I learned */}
              <div className="p-3 rounded-2xl bg-lavender-50/60 dark:bg-darkbg-surface border border-lavender-100 dark:border-darkbg-border">
                <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-lavender-700 dark:text-lavender-400 font-semibold mb-1">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Key Takeaways & Learnings</span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {event.learnings}
                </p>
              </div>

              {/* Tags */}
              {event.tags && event.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {event.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-100 dark:bg-darkbg-surface text-slate-600 dark:text-slate-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

            </div>

          </div>
        ))}
      </div>

    </section>
  );
};
