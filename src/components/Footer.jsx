import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Heart, 
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

  return (
    <footer id="contact" className="mt-16 border-t border-lavender-200/80 dark:border-darkbg-border bg-white/60 dark:bg-darkbg-surface/60 backdrop-blur-md pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Contact Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-lavender-700 via-purple-700 to-lavender-900 text-white p-6 sm:p-10 shadow-glow-purple relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white/10 backdrop-blur-md text-lavender-100 border border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-lavender-300" />
              <span>Let's Connect & Collaborate</span>
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight">
              Looking for an AI/ML Intern or Research Collaborator?
            </h3>
            <p className="text-xs sm:text-sm text-lavender-100/90 leading-relaxed">
              I am open to machine learning engineering internships, AI agent research projects, and developer hackathon collaborations. Feel free to reach out directly.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 px-5 py-3 rounded-2xl font-semibold text-xs sm:text-sm bg-white text-lavender-900 hover:bg-lavender-50 shadow-md transition-all duration-300"
            >
              <Mail className="w-4 h-4 text-lavender-700" />
              <span>Send Email</span>
            </a>

            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-2xl font-semibold text-xs sm:text-sm bg-white/15 hover:bg-white/25 text-white border border-white/20 backdrop-blur-md transition-all duration-300"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            {profile.linkedinUrl && (
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-2xl font-semibold text-xs sm:text-sm bg-blue-600/80 hover:bg-blue-600 text-white border border-blue-400/30 backdrop-blur-md transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            )}
          </div>
        </div>

        {/* Links and Metadata */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-darkbg-border/60 pt-6">
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
              className="hover:text-lavender-700 dark:hover:text-lavender-300 transition-colors"
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
