import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  FolderGit2, 
  Code2, 
  Award, 
  Milestone, 
  Building2, 
  Sparkles, 
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Layers
} from 'lucide-react';

export const DashboardMetrics = () => {
  const { stats, setActiveSection, profile } = usePortfolio();

  const cards = [
    {
      id: 'projects',
      title: 'Technical Projects',
      primaryStat: stats.totalProjects,
      statLabel: 'Projects Documented',
      secondaryText: `${stats.inProgressProjects} In Progress • ${stats.completedProjects} Completed`,
      icon: FolderGit2,
      accent: 'from-purple-500 to-indigo-600',
      badgeBg: 'bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300',
      borderAccent: 'border-purple-200/80 dark:border-purple-900/40',
      sectionTarget: 'projects'
    },
    {
      id: 'skills',
      title: 'Skills & Tools',
      primaryStat: stats.totalSkills,
      statLabel: 'Tracked Competencies',
      secondaryText: '5 Categorized Domains',
      icon: Code2,
      accent: 'from-lavender-600 to-purple-700',
      badgeBg: 'bg-lavender-50 dark:bg-lavender-950/40 text-lavender-700 dark:text-lavender-300',
      borderAccent: 'border-lavender-200/80 dark:border-lavender-800/40',
      sectionTarget: 'skills'
    },
    {
      id: 'certificates',
      title: 'Certificates & Honors',
      primaryStat: stats.totalCertificates,
      statLabel: 'Verified Achievements',
      secondaryText: 'Google, NVIDIA, HP, Symposium',
      icon: Award,
      accent: 'from-amber-500 to-orange-600',
      badgeBg: 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300',
      borderAccent: 'border-amber-200/80 dark:border-amber-900/40',
      sectionTarget: 'certificates'
    },
    {
      id: 'roadmap',
      title: 'Roadmap Goals',
      primaryStat: `${stats.roadmapProgress}%`,
      statLabel: `${stats.completedMilestones} of ${stats.totalMilestones} Milestones`,
      secondaryText: 'Machine Learning Engineer Track',
      icon: Milestone,
      accent: 'from-emerald-500 to-teal-600',
      badgeBg: 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300',
      borderAccent: 'border-emerald-200/80 dark:border-emerald-900/40',
      sectionTarget: 'roadmap'
    },
    {
      id: 'industry',
      title: 'Industry & Communities',
      primaryStat: stats.industryPartnersCount,
      statLabel: 'Developer Programs',
      secondaryText: 'Google & NVIDIA Ecosystems',
      icon: Building2,
      accent: 'from-blue-500 to-cyan-600',
      badgeBg: 'bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300',
      borderAccent: 'border-blue-200/80 dark:border-blue-900/40',
      sectionTarget: 'industry'
    }
  ];

  const handleCardClick = (target) => {
    setActiveSection(target);
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="overview" className="space-y-4 pt-2 reveal-on-scroll">
      
      {/* Welcome Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-sky-50 via-white to-lavender-50 dark:from-navy-900 dark:via-darkbg-card dark:to-navy-950 border border-lavender-200/70 dark:border-darkbg-border shadow-soft-navy">
        <div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-sky-600 dark:text-sky-400" />
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight">
              Welcome, Sujitha — Your AI/ML Career Journey
            </h2>
          </div>
          <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
            Real-time portfolio overview tracking active projects, verified credentials, and machine learning milestones.
          </p>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto text-xs font-mono text-slate-500 dark:text-slate-400 bg-white/70 dark:bg-darkbg-surface px-3 py-1.5 rounded-xl border border-lavender-200/60 dark:border-darkbg-border">
          <Clock className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
          <span>Active Academic Year: 2024–2026</span>
        </div>
      </div>

      {/* Overview Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <button
              key={card.id}
              onClick={() => handleCardClick(card.sectionTarget)}
              className={`group text-left p-4 rounded-2xl bg-white dark:bg-darkbg-card border ${card.borderAccent} shadow-sm card-hover flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className={`p-2 rounded-xl ${card.badgeBg}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600 group-hover:text-sky-600 dark:group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>

                <div className="mt-3">
                  <div className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight font-mono">
                    {card.primaryStat}
                  </div>
                  <h3 className="text-xs font-semibold text-slate-700 dark:text-slate-200 mt-0.5">
                    {card.title}
                  </h3>
                </div>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-darkbg-border">
                <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                  {card.secondaryText}
                </p>
              </div>
            </button>
          );
        })}
      </div>

    </div>
  );
};
