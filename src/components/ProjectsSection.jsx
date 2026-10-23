import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { ProjectDetailModal } from './ProjectDetailModal';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Sparkles, 
  Filter, 
  Plus, 
  ArrowRight,
  Clock,
  CheckCircle2,
  Lightbulb,
  Cpu,
  Layers
} from 'lucide-react';

export const ProjectsSection = () => {
  const { 
    projects, 
    searchQuery, 
    setSelectedProject, 
    isAdminMode, 
    setIsAdminModalOpen 
  } = usePortfolio();

  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = [
    'All',
    'AI',
    'Machine Learning',
    'Generative AI',
    'AI Agents',
    'Web Applications',
    'Research Ideas'
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800';
      case 'In Progress':
        return 'bg-purple-100 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800';
      case 'Idea':
      case 'Research Idea':
        return 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800';
      default:
        return 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700';
    }
  };

  const filteredProjects = projects.filter((project) => {
    const matchesFilter = selectedFilter === 'All' || 
      project.category.toLowerCase().includes(selectedFilter.toLowerCase()) ||
      (selectedFilter === 'Research Ideas' && (project.category.includes('Research') || project.status.includes('Idea')));
    
    const matchesSearch = !searchQuery ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesFilter && matchesSearch;
  });

  return (
    <section id="projects" className="space-y-6 pt-6">
      
      {/* Detail Modal instance */}
      <ProjectDetailModal />

      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-lavender-700 dark:text-lavender-400">
              03 // Portfolio Showcase
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            Projects Portfolio
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            12 projects spanning Machine Learning, AI Agents, Generative AI, and Engineering Concepts.
          </p>
        </div>

        {isAdminMode && (
          <button
            onClick={() => setIsAdminModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-lavender-700 text-white shadow-soft-purple hover:bg-lavender-800 transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add / Manage Projects</span>
          </button>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {filters.map((filter) => {
          const isSelected = selectedFilter === filter;
          return (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                isSelected
                  ? 'bg-lavender-700 text-white shadow-soft-purple font-semibold'
                  : 'bg-white dark:bg-darkbg-card text-slate-600 dark:text-slate-300 border border-lavender-200/80 dark:border-darkbg-border hover:bg-lavender-50 dark:hover:bg-darkbg-hover'
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group rounded-3xl bg-white dark:bg-darkbg-card border border-lavender-200/80 dark:border-darkbg-border shadow-sm hover:shadow-soft-purple hover:border-lavender-400 dark:hover:border-lavender-600/50 transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            <div>
              {/* Card Image Banner */}
              <div className="relative h-44 w-full overflow-hidden bg-lavender-100 dark:bg-darkbg-surface">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                
                {/* Badges on top of image */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold backdrop-blur-md border ${getStatusBadge(project.status)}`}>
                    {project.status}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-black/50 text-white backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                <div className="absolute bottom-2.5 left-3 right-3">
                  <h3 className="text-base font-bold text-white drop-shadow-md truncate">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-3">
                {project.subtitle && (
                  <p className="text-xs font-medium text-lavender-800 dark:text-lavender-300 line-clamp-1">
                    {project.subtitle}
                  </p>
                )}

                <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium bg-lavender-100/70 dark:bg-darkbg-surface text-lavender-900 dark:text-lavender-200 border border-lavender-200/60 dark:border-darkbg-border"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono text-slate-400">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Card Footer Actions */}
            <div className="p-4 bg-lavender-50/50 dark:bg-darkbg-surface border-t border-slate-100 dark:border-darkbg-border flex items-center justify-between gap-2">
              <button
                onClick={() => setSelectedProject(project)}
                className="flex items-center gap-1.5 text-xs font-semibold text-lavender-800 dark:text-lavender-300 hover:text-lavender-950 dark:hover:text-white transition-colors"
              >
                <span>Details & Specs</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center gap-1.5">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-darkbg-card transition-colors"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg text-lavender-700 hover:text-lavender-900 dark:hover:text-lavender-300 hover:bg-white dark:hover:bg-darkbg-card transition-colors"
                    title="Open Live Application"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="p-12 text-center rounded-3xl bg-white dark:bg-darkbg-card border border-dashed border-slate-200 dark:border-darkbg-border text-slate-400 text-sm">
          No projects found matching the filter "{selectedFilter}" or query "{searchQuery}".
        </div>
      )}

    </section>
  );
};
