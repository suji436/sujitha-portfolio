import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone,
  ArrowUp, 
  ExternalLink,
  Sparkles,
  MapPin,
  GraduationCap
} from 'lucide-react';

export const Footer = () => {
  const { profile, setIsAdminModalOpen } = usePortfolio();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const emailAddress = profile.email || "sujisri73@gmail.com";
  const phoneNumber = profile.phone || "+91 99430 63536";
  const phoneTel = profile.phoneTel || "+919943063536";
  const linkedInUrl = profile.linkedinUrl || "https://www.linkedin.com/in/sujitha-gurumoorthy-18989b39b/";
  const githubUrl = profile.githubUrl || "https://github.com/suji436";

  return (
    <footer className="mt-16 border-t border-lavender-200/80 dark:border-darkbg-border bg-white/70 dark:bg-darkbg-surface/70 backdrop-blur-md pt-10 pb-8 reveal-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Quick Connection Strip */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-lavender-50/70 dark:bg-navy-900/60 border border-lavender-200/70 dark:border-darkbg-border">
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-8 h-8 rounded-xl bg-sky-600 flex items-center justify-center text-white font-bold text-xs shrink-0">
              SG
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 dark:text-white">
                {profile.name} — AI/ML Engineer Track
              </p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Sir Issac Newton College of Engineering and Technology, Nagapattinam
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <a
              href={`mailto:${emailAddress}`}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-white dark:bg-darkbg-card text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-darkbg-border hover:text-sky-600 dark:hover:text-sky-400 btn-hover"
              title="Send email"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{emailAddress}</span>
            </a>

            <a
              href={`tel:${phoneTel}`}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-white dark:bg-darkbg-card text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-darkbg-border hover:text-emerald-600 dark:hover:text-emerald-400 font-mono btn-hover"
              title="Call phone number"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{phoneNumber}</span>
            </a>

            <a
              href={linkedInUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-blue-50 dark:bg-navy-800 text-blue-700 dark:text-sky-300 border border-blue-200 dark:border-blue-900/40 btn-hover"
              title="LinkedIn (Opens in new tab)"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 text-blue-400" />
            </a>

            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-100 dark:bg-darkbg-card text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-darkbg-border btn-hover"
              title="GitHub (Opens in new tab)"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>
        </div>

        {/* Links and Metadata */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-darkbg-border/60 pt-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-800 dark:text-slate-200">{profile.name}</span>
            <span>•</span>
            <span>{profile.educationLevel}</span>
            <span>•</span>
            <span>{profile.institution}</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsAdminModalOpen(true)}
              className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
            >
              Portfolio Studio
            </button>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="text-center text-[11px] text-slate-400 dark:text-slate-500">
          © {new Date().getFullYear()} Sujitha Gurumoorthy • Powered by React, Vite & Tailwind CSS • AI/ML Engineer Track
        </div>

      </div>
    </footer>
  );
};
