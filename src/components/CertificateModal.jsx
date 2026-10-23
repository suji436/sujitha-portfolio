import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  X, 
  ExternalLink, 
  Award, 
  Building2, 
  Calendar, 
  CheckCircle2, 
  Download, 
  ShieldCheck,
  FileCheck
} from 'lucide-react';

export const CertificateModal = () => {
  const { selectedCert, setSelectedCert } = usePortfolio();

  if (!selectedCert) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="relative w-full max-w-2xl rounded-3xl bg-white dark:bg-darkbg-card border border-lavender-200 dark:border-darkbg-border shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="p-6 bg-gradient-to-r from-lavender-100/70 via-white to-lavender-50/50 dark:from-darkbg-surface dark:via-darkbg-card dark:to-darkbg-surface border-b border-lavender-200/70 dark:border-darkbg-border flex items-start justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="p-3 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white shadow-sm shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-lavender-100 dark:bg-darkbg-surface text-lavender-800 dark:text-lavender-300 border border-lavender-200 dark:border-darkbg-border">
                {selectedCert.category}
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-1.5">
                {selectedCert.title}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Issued by <strong className="text-slate-700 dark:text-slate-200">{selectedCert.issuer}</strong> • {selectedCert.date}
              </p>
            </div>
          </div>

          <button
            onClick={() => setSelectedCert(null)}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-lavender-100 dark:hover:bg-darkbg-surface transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Certificate Preview Card / Badge Container */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-lavender-50 to-white dark:from-darkbg-surface dark:to-darkbg-card border-2 border-dashed border-lavender-200 dark:border-darkbg-border text-center space-y-3">
            <div className="inline-flex p-3 rounded-2xl bg-white dark:bg-darkbg-surface shadow-sm border border-lavender-100 dark:border-darkbg-border">
              <FileCheck className="w-10 h-10 text-lavender-700 dark:text-lavender-400" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {selectedCert.title}
              </h3>
              <p className="text-xs text-lavender-700 dark:text-lavender-300 font-medium">
                Official Credential Record • Sujitha Gurumoorthy
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-white dark:bg-darkbg-card border border-lavender-200 dark:border-darkbg-border text-slate-700 dark:text-slate-200">
                ID: {selectedCert.credentialId || 'ID Verified on File'}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{selectedCert.status}</span>
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-lavender-700 dark:text-lavender-400 mb-1">
              Credential Summary
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {selectedCert.description}
            </p>
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-lavender-50/60 dark:bg-darkbg-surface border border-lavender-100 dark:border-darkbg-border">
              <span className="text-slate-400 font-mono text-[10px] uppercase">Issuer</span>
              <p className="font-semibold text-slate-800 dark:text-slate-200 mt-0.5">{selectedCert.issuer}</p>
            </div>
            <div className="p-3 rounded-xl bg-lavender-50/60 dark:bg-darkbg-surface border border-lavender-100 dark:border-darkbg-border">
              <span className="text-slate-400 font-mono text-[10px] uppercase">Issuing Period</span>
              <p className="font-semibold text-slate-800 dark:text-slate-200 mt-0.5">{selectedCert.date}</p>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-lavender-50/50 dark:bg-darkbg-surface border-t border-lavender-200/70 dark:border-darkbg-border flex items-center justify-between gap-3">
          <div className="text-[11px] text-slate-400">
            Verified achievement record
          </div>

          <div className="flex items-center gap-2">
            {selectedCert.verificationUrl ? (
              <a
                href={selectedCert.verificationUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-lavender-700 text-white hover:bg-lavender-800 shadow-soft-purple transition-all"
              >
                <span>Verify Credential</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="text-xs text-slate-400 italic">
                (Verification link can be set in Edit Mode)
              </span>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
