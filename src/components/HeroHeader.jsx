import React, { useRef } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  Camera, 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Target, 
  Sparkles, 
  Edit3, 
  CheckCircle,
  ExternalLink
} from 'lucide-react';

export const HeroHeader = () => {
  const { 
    profile, 
    uploadProfilePhoto, 
    setIsResumeModalOpen, 
    setIsAdminModalOpen,
    isAdminMode 
  } = usePortfolio();
  
  const fileInputRef = useRef(null);

  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      uploadProfilePhoto(file);
    }
  };

  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-white via-lavender-50/60 to-white dark:from-darkbg-surface dark:via-darkbg-card dark:to-darkbg-surface border border-lavender-200/80 dark:border-darkbg-border p-6 sm:p-8 md:p-10 shadow-soft-purple">
      
      {/* Decorative subtle ambient background light */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-lavender-300/30 dark:bg-purple-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-purple-300/20 dark:bg-lavender-900/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8">
        
        {/* Profile Photo Area with Upload Trigger */}
        <div className="relative group shrink-0">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-3xl overflow-hidden p-1 bg-gradient-to-tr from-lavender-600 via-purple-500 to-lavender-300 shadow-glass">
            <img 
              src={profile.avatar} 
              alt={profile.name} 
              className="w-full h-full object-cover rounded-[22px] transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Quick Photo Upload Button */}
          <button
            onClick={() => fileInputRef.current?.click()}
            className="absolute -bottom-2 -right-2 p-2.5 rounded-2xl bg-lavender-700 hover:bg-lavender-800 text-white shadow-md border-2 border-white dark:border-darkbg-surface transition-transform hover:scale-110"
            title="Upload / Change Profile Photo"
            aria-label="Upload Profile Photo"
          >
            <Camera className="w-4 h-4" />
          </button>
          
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handlePhotoUpload} 
            accept="image/*" 
            className="hidden" 
          />

          {/* Availability badge */}
          <div className="mt-3 text-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/50">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>Available for 2025/2026 AI Roles</span>
            </span>
          </div>
        </div>

        {/* Profile Content */}
        <div className="flex-1 text-center md:text-left">
          
          {/* Header Row: Name & Edit Shortcut */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2 flex-wrap">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {profile.name}
                </h1>
                <span className="px-2.5 py-0.5 rounded-lg text-xs font-mono font-medium bg-lavender-100 dark:bg-darkbg-surface text-lavender-800 dark:text-lavender-300 border border-lavender-200 dark:border-darkbg-border">
                  B.E. CSE
                </span>
              </div>
              <p className="mt-1 text-base sm:text-lg font-medium text-lavender-800 dark:text-lavender-300">
                {profile.tagline}
              </p>
            </div>

            {isAdminMode && (
              <button
                onClick={() => setIsAdminModalOpen(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-lavender-100 dark:bg-lavender-900/50 text-lavender-800 dark:text-lavender-200 border border-lavender-300 dark:border-lavender-700 hover:bg-lavender-200 transition-colors"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit Profile</span>
              </button>
            )}
          </div>

          {/* Key Facts / Metadata Grid */}
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <GraduationCap className="w-4 h-4 text-lavender-600 dark:text-lavender-400 shrink-0" />
              <span>{profile.educationLevel}</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-semibold text-slate-700 dark:text-slate-200">College:</span>
              <span className="truncate">{profile.institution}</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Target className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
              <span className="font-medium">Goal: <span className="text-slate-900 dark:text-white font-semibold">{profile.careerGoal}</span></span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <MapPin className="w-4 h-4 text-slate-400 dark:text-slate-500 shrink-0" />
              <span>{profile.location}</span>
            </div>
          </div>

          {/* Short Professional Introduction */}
          <p className="mt-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
            {profile.bio}
          </p>

          {/* Technical Interests Tags */}
          <div className="mt-4 flex flex-wrap items-center justify-center md:justify-start gap-1.5">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400 mr-1">Interests:</span>
            {profile.interests.map((interest, idx) => (
              <span 
                key={idx}
                className="px-2.5 py-1 rounded-lg text-xs font-medium bg-lavender-100/80 dark:bg-darkbg-card text-lavender-800 dark:text-lavender-300 border border-lavender-200/70 dark:border-darkbg-border"
              >
                {interest}
              </span>
            ))}
          </div>

          {/* Action Row: Resume, GitHub, LinkedIn, Contact */}
          <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-3">
            
            {/* Downloadable Resume Button */}
            <button
              onClick={() => setIsResumeModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm bg-gradient-to-r from-lavender-700 to-purple-700 hover:from-lavender-800 hover:to-purple-800 text-white shadow-soft-purple hover:shadow-glow-purple transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
              <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded font-mono">PDF</span>
            </button>

            {/* GitHub Button */}
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm bg-white dark:bg-darkbg-card text-slate-800 dark:text-slate-100 border border-lavender-200 dark:border-darkbg-border hover:bg-lavender-50 dark:hover:bg-darkbg-hover shadow-sm transition-all"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
              <span className="text-xs text-slate-400">@{profile.githubUsername}</span>
            </a>

            {/* LinkedIn Button (Editable) */}
            {profile.linkedinUrl ? (
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/40 hover:bg-blue-100/60 transition-all"
              >
                <Linkedin className="w-4 h-4 text-blue-600" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-blue-400" />
              </a>
            ) : (
              <button
                onClick={() => setIsAdminModalOpen(true)}
                className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium text-slate-500 border border-dashed border-slate-300 dark:border-slate-700 hover:border-lavender-400"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>+ Add LinkedIn URL</span>
              </button>
            )}

            {/* Email Contact Button */}
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl font-medium text-xs sm:text-sm bg-slate-100 dark:bg-darkbg-card text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-darkbg-border hover:bg-slate-200/70 transition-all"
            >
              <Mail className="w-4 h-4 text-slate-500" />
              <span>Contact</span>
            </a>

          </div>

        </div>

      </div>

    </section>
  );
};
