import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  Sparkles, 
  Lightbulb, 
  Code, 
  Layers, 
  Rocket, 
  GraduationCap, 
  BookOpen, 
  HeartHandshake,
  Edit3
} from 'lucide-react';

export const AboutSection = () => {
  const { profile, setIsAdminModalOpen, isAdminMode } = usePortfolio();

  const corePillars = [
    {
      icon: Sparkles,
      title: "Learning New Technologies",
      description: "Constantly expanding skills across foundational ML, modern Generative AI frameworks, and autonomous multi-agent paradigms."
    },
    {
      icon: Code,
      title: "Project-Based Learning",
      description: "Belief in learning by doing — building working applications, implementing papers, and engineering end-to-end prototypes."
    },
    {
      icon: HeartHandshake,
      title: "Solving Real-World Problems",
      description: "Focusing engineering efforts on critical societal impact domains: healthcare assistance, security, and smart public safety."
    },
    {
      icon: Rocket,
      title: "Goal: Machine Learning Engineer",
      description: "Methodically preparing mathematical rigor, algorithmic thinking, and MLOps deployment skills for a career as an ML Engineer."
    }
  ];

  return (
    <section id="about" className="space-y-6 pt-6">
      
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-lavender-700 dark:text-lavender-400">
              01 // Background & Motivation
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
        </div>

        {isAdminMode && (
          <button
            onClick={() => setIsAdminModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-lavender-100 dark:bg-darkbg-card text-lavender-800 dark:text-lavender-300 border border-lavender-200 dark:border-darkbg-border hover:bg-lavender-200 transition-colors"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Edit Bio</span>
          </button>
        )}
      </div>

      {/* Main About Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Narrative & Academic Card */}
        <div className="lg:col-span-7 space-y-4">
          <div className="p-6 rounded-3xl bg-white dark:bg-darkbg-card border border-lavender-200/80 dark:border-darkbg-border shadow-sm space-y-4">
            
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-lavender-700 dark:text-lavender-400" />
              <span>Computer Science Student & Machine Learning Enthusiast</span>
            </h3>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Hello! I am <strong className="text-slate-900 dark:text-white font-semibold">Sujitha Gurumoorthy</strong>, currently in my 2nd Year of B.E. Computer Science and Engineering at <strong className="text-slate-900 dark:text-white font-semibold">Sir Issac Newton College of Engineering and Technology</strong>, Nagapattinam.
            </p>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              My core technical passion lies in <span className="text-lavender-800 dark:text-lavender-300 font-medium">Artificial Intelligence, Machine Learning, and Autonomous AI Agents</span>. I am driven by the immense potential of intelligent systems to solve difficult challenges, from healthcare triage accessibility to automated security threat detection.
            </p>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Rather than theoretical study in isolation, I practice a strict <strong className="text-slate-900 dark:text-white font-medium">project-based learning methodology</strong>. By building real implementations with the Google Gemini API, IBM Granite, Scikit-learn, and web technologies, I test concepts in practice and understand their real-world boundaries.
            </p>

            {/* Academic Snapshot Box */}
            <div className="mt-4 p-4 rounded-2xl bg-lavender-50/70 dark:bg-darkbg-surface border border-lavender-200/60 dark:border-darkbg-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="text-[11px] font-mono text-lavender-700 dark:text-lavender-400 uppercase tracking-wide">
                  Academic Focus
                </span>
                <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                  B.E. Computer Science and Engineering
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Sir Issac Newton College of Engineering and Technology, Nagapattinam
                </p>
              </div>
              <div className="shrink-0 px-3 py-1 rounded-xl bg-white dark:bg-darkbg-card border border-lavender-200 dark:border-darkbg-border text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                2nd Year • 2024–2026
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: 4 Core Pillars */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
          {corePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="p-4 rounded-2xl bg-white dark:bg-darkbg-card border border-lavender-200/80 dark:border-darkbg-border hover:border-lavender-400 dark:hover:border-lavender-600 transition-all shadow-sm flex items-start gap-3.5"
              >
                <div className="p-2.5 rounded-xl bg-lavender-100 dark:bg-darkbg-surface text-lavender-800 dark:text-lavender-300 shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
};
