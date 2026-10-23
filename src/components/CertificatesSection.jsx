import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { CertificateModal } from './CertificateModal';
import { 
  Award, 
  CheckCircle2, 
  ExternalLink, 
  Building2, 
  Calendar, 
  Plus, 
  Sparkles,
  Trophy,
  ShieldCheck,
  FileText
} from 'lucide-react';

export const CertificatesSection = () => {
  const { 
    certificates, 
    searchQuery, 
    setSelectedCert, 
    isAdminMode, 
    setIsAdminModalOpen 
  } = usePortfolio();

  const filteredCerts = certificates.filter((cert) => {
    return !searchQuery ||
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.category.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <section id="certificates" className="space-y-6 pt-6">
      
      {/* Modal for certificate inspection */}
      <CertificateModal />

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-lavender-700 dark:text-lavender-400">
              05 // Verified Credentials
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            Certificates & Achievements
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Verified course completions, developer badges, and collegiate symposium/expo awards.
          </p>
        </div>

        {isAdminMode && (
          <button
            onClick={() => setIsAdminModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-lavender-700 text-white shadow-soft-purple hover:bg-lavender-800 transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add / Edit Certificate</span>
          </button>
        )}
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCerts.map((cert) => {
          const isPrize = cert.category.includes('Award') || cert.category.includes('Prize');

          return (
            <div
              key={cert.id}
              className="p-5 rounded-3xl bg-white dark:bg-darkbg-card border border-lavender-200/80 dark:border-darkbg-border shadow-sm hover:shadow-soft-purple hover:border-lavender-400 dark:hover:border-lavender-600 transition-all duration-300 flex flex-col justify-between space-y-4"
            >
              <div>
                {/* Top Row: Category & Status */}
                <div className="flex items-center justify-between gap-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium ${
                    isPrize 
                      ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-900' 
                      : 'bg-lavender-100 dark:bg-darkbg-surface text-lavender-800 dark:text-lavender-300 border border-lavender-200 dark:border-darkbg-border'
                  }`}>
                    {cert.badge || cert.category}
                  </span>

                  <span className="text-[11px] font-mono text-slate-400">
                    {cert.date}
                  </span>
                </div>

                {/* Title & Issuer */}
                <div className="mt-3">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-lavender-800 dark:text-lavender-300 font-medium mt-1">
                    {cert.issuer}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2.5 line-clamp-2 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Bottom Row / Actions */}
              <div className="pt-3 border-t border-slate-100 dark:border-darkbg-border flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{cert.status}</span>
                </span>

                <button
                  onClick={() => setSelectedCert(cert)}
                  className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-lavender-50 dark:bg-darkbg-surface text-lavender-800 dark:text-lavender-300 border border-lavender-200 dark:border-darkbg-border hover:bg-lavender-100 transition-colors"
                >
                  View Details
                </button>
              </div>

            </div>
          );
        })}
      </div>

      {filteredCerts.length === 0 && (
        <div className="p-8 text-center rounded-2xl bg-white dark:bg-darkbg-card border border-dashed border-slate-200 dark:border-darkbg-border text-slate-400 text-xs">
          No certificates matching "{searchQuery}".
        </div>
      )}

    </section>
  );
};
