import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  Building2, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  ExternalLink, 
  Award, 
  Layers, 
  Users,
  Edit3,
  AlertCircle
} from 'lucide-react';

export const IndustryExposureSection = () => {
  const { 
    industryExposure, 
    isAdminMode, 
    setIsAdminModalOpen,
    setSelectedCert,
    certificates 
  } = usePortfolio();

  const googleItem = industryExposure.find(e => e.company === 'Google');
  const nvidiaItem = industryExposure.find(e => e.company === 'NVIDIA');
  const otherItems = industryExposure.filter(e => e.company !== 'Google' && e.company !== 'NVIDIA');

  return (
    <section id="industry" className="space-y-6 pt-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-lavender-700 dark:text-lavender-400">
              04 // Ecosystem Engagements
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            Industry Exposure & Developer Communities
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Active developer community memberships, industry-aligned training tracks, and tech learning cohorts.
          </p>
        </div>

        {isAdminMode && (
          <button
            onClick={() => setIsAdminModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-lavender-100 dark:bg-darkbg-card text-lavender-800 dark:text-lavender-200 border border-lavender-200 dark:border-darkbg-border hover:bg-lavender-200 transition-colors"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Edit Industry Details</span>
          </button>
        )}
      </div>

      {/* Prominent Two-Column Layout for Google and NVIDIA */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Google Card */}
        {googleItem && (
          <div className="rounded-3xl bg-white dark:bg-darkbg-card border border-lavender-200/80 dark:border-darkbg-border p-6 shadow-sm flex flex-col justify-between space-y-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-emerald-500 flex items-center justify-center text-white font-bold text-lg shadow-sm">
                    G
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <span>Google</span>
                      <span className="text-xs px-2 py-0.5 rounded-md font-mono font-medium bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900/40">
                        {googleItem.role}
                      </span>
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {googleItem.category} • {googleItem.period}
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {googleItem.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2 pt-1">
                <h4 className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400">
                  Verified Learning & Engagements:
                </h4>
                <ul className="space-y-1.5">
                  {googleItem.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Credential Note Banner */}
            <div className="p-3 rounded-2xl bg-blue-50/60 dark:bg-darkbg-surface border border-blue-100 dark:border-darkbg-border flex items-start gap-2 text-[11px] text-blue-900 dark:text-blue-200">
              <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold">{googleItem.verifiedLabel}:</span>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                  {googleItem.officialNote}
                </p>
              </div>
            </div>

          </div>
        )}

        {/* NVIDIA Card */}
        {nvidiaItem && (
          <div className="rounded-3xl bg-white dark:bg-darkbg-card border border-lavender-200/80 dark:border-darkbg-border p-6 shadow-sm flex flex-col justify-between space-y-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-600 to-green-500 flex items-center justify-center text-white font-bold text-lg shadow-sm">
                    NV
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <span>NVIDIA</span>
                      <span className="text-xs px-2 py-0.5 rounded-md font-mono font-medium bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900/40">
                        {nvidiaItem.role}
                      </span>
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {nvidiaItem.category} • {nvidiaItem.period}
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {nvidiaItem.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2 pt-1">
                <h4 className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400">
                  Ecosystem Highlights:
                </h4>
                <ul className="space-y-1.5">
                  {nvidiaItem.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Credential Note Banner */}
            <div className="p-3 rounded-2xl bg-emerald-50/60 dark:bg-darkbg-surface border border-emerald-100 dark:border-darkbg-border flex items-start gap-2 text-[11px] text-emerald-900 dark:text-emerald-200">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold">{nvidiaItem.verifiedLabel}:</span>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                  {nvidiaItem.officialNote}
                </p>
              </div>
            </div>

          </div>
        )}

      </div>

      {/* Other Industry and Learning Experiences Grid */}
      <div>
        <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
          <span>Other Industry & Learning Experiences</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-lavender-100 dark:bg-darkbg-card text-lavender-800 dark:text-lavender-300 font-mono">
            {otherItems.length} Programs
          </span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherItems.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-3xl bg-white dark:bg-darkbg-card border border-lavender-200/80 dark:border-darkbg-border shadow-sm flex flex-col justify-between space-y-3"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2 py-0.5 rounded-lg text-xs font-bold bg-lavender-100 dark:bg-darkbg-surface text-lavender-900 dark:text-lavender-200">
                    {item.company}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {item.period}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-2">
                  {item.category}
                </h4>

                <div className="mt-1 flex items-center gap-1.5 text-xs text-lavender-800 dark:text-lavender-300 font-medium">
                  <span>Role: {item.role}</span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 dark:border-darkbg-border flex items-center justify-between text-[11px]">
                <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{item.verifiedLabel}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
