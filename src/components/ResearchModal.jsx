import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  X, 
  Lightbulb, 
  FileText, 
  Download, 
  CheckCircle2, 
  Layers, 
  Sparkles,
  ExternalLink,
  ShieldAlert,
  FileCheck2
} from 'lucide-react';

export const ResearchModal = () => {
  const { selectedResearch, setSelectedResearch, showToast } = usePortfolio();

  if (!selectedResearch) return null;

  const handleDownloadDoc = (docName) => {
    showToast(`Downloading research document: ${docName}`);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="relative w-full max-w-2xl rounded-3xl bg-white dark:bg-darkbg-card border border-lavender-200 dark:border-darkbg-border shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="p-6 bg-gradient-to-r from-lavender-100/70 via-white to-lavender-50/50 dark:from-darkbg-surface dark:via-darkbg-card dark:to-darkbg-surface border-b border-lavender-200/70 dark:border-darkbg-border flex items-start justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="p-3 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white shadow-sm shrink-0">
              <Lightbulb className="w-6 h-6" />
            </div>
            <div>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-purple-100 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                {selectedResearch.stageBadge || 'Research Concept'}
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-1.5">
                {selectedResearch.title}
              </h2>
              <p className="text-xs text-lavender-800 dark:text-lavender-300 font-medium">
                Classification: {selectedResearch.status}
              </p>
            </div>
          </div>

          <button
            onClick={() => setSelectedResearch(null)}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-lavender-100 dark:hover:bg-darkbg-surface transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Research Summary Box */}
          <div className="p-4 rounded-2xl bg-lavender-50/70 dark:bg-darkbg-surface border border-lavender-100 dark:border-darkbg-border space-y-2">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-lavender-700 dark:text-lavender-400">
              Executive Abstract
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {selectedResearch.summary}
            </p>
          </div>

          {/* Problem & Methodology */}
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-white dark:bg-darkbg-surface border border-slate-200/80 dark:border-darkbg-border space-y-1.5">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                <ShieldAlert className="w-4 h-4 text-red-500" />
                <span>Target Engineering Problem</span>
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {selectedResearch.problem}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-darkbg-surface border border-slate-200/80 dark:border-darkbg-border space-y-1.5">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                <Layers className="w-4 h-4 text-purple-600" />
                <span>Proposed Technical Methodology</span>
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {selectedResearch.methodology}
              </p>
            </div>

            {selectedResearch.keyInnovation && (
              <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/40 space-y-1.5">
                <h4 className="text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <span>Key Novelty / Innovation</span>
                </h4>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {selectedResearch.keyInnovation}
                </p>
              </div>
            )}
          </div>

          {/* Research Documents / Materials */}
          {selectedResearch.documents && selectedResearch.documents.length > 0 && (
            <div>
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Attached Documents & Proposals
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedResearch.documents.map((doc, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-2xl bg-lavender-50/60 dark:bg-darkbg-surface border border-lavender-200/70 dark:border-darkbg-border flex items-center justify-between gap-2"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <FileCheck2 className="w-5 h-5 text-lavender-700 dark:text-lavender-400 shrink-0" />
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate">
                          {doc.name}
                        </p>
                        <p className="text-[10px] text-slate-400">
                          {doc.type} • {doc.size}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDownloadDoc(doc.name)}
                      className="p-2 rounded-xl text-lavender-700 dark:text-lavender-300 hover:bg-lavender-100 dark:hover:bg-darkbg-card transition-colors shrink-0"
                      title={`Download ${doc.name}`}
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-lavender-50/50 dark:bg-darkbg-surface border-t border-lavender-200/70 dark:border-darkbg-border flex items-center justify-between gap-3">
          <span className="text-[11px] text-slate-400">
            Documented proposal under academic review & ideation
          </span>

          <button
            onClick={() => setSelectedResearch(null)}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-lavender-700 text-white hover:bg-lavender-800 transition-colors"
          >
            Close View
          </button>
        </div>

      </div>
    </div>
  );
};
