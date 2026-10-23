import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  Code2, 
  Cpu, 
  BarChart3, 
  Cloud, 
  BookOpen, 
  Plus, 
  Sliders, 
  Info,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const SkillsSection = () => {
  const { 
    skills, 
    searchQuery, 
    isAdminMode, 
    setIsAdminModalOpen 
  } = usePortfolio();

  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'AI and Machine Learning',
    'Programming and Development',
    'Data and Analytics',
    'Cloud and Developer Technologies',
    'Additional Learning'
  ];

  const getCategoryIcon = (cat) => {
    switch (cat) {
      case 'AI and Machine Learning':
        return Cpu;
      case 'Programming and Development':
        return Code2;
      case 'Data and Analytics':
        return BarChart3;
      case 'Cloud and Developer Technologies':
        return Cloud;
      default:
        return BookOpen;
    }
  };

  // Filter skills based on selected category and global search query
  const filteredSkills = skills.filter((skill) => {
    const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (skill.notes && skill.notes.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Group filtered skills by category for neat layout when 'All' is selected
  const groupedCategories = selectedCategory === 'All' 
    ? [...new Set(filteredSkills.map(s => s.category))]
    : [selectedCategory];

  return (
    <section id="skills" className="space-y-6 pt-6 reveal-on-scroll">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
              02 // Technical Competencies
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            Technical Skills & Tooling
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            Structured into 5 professional tracks. Realistically evaluated according to current academic stage.
          </p>
        </div>

        {isAdminMode && (
          <button
            onClick={() => setIsAdminModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-sky-600 hover:bg-sky-500 text-white shadow-soft-purple transition-colors btn-hover"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add / Edit Skills</span>
          </button>
        )}
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all btn-hover ${
                isSelected
                  ? 'bg-sky-600 text-white shadow-soft-purple font-semibold'
                  : 'bg-white dark:bg-darkbg-card text-slate-600 dark:text-slate-300 border border-lavender-200/80 dark:border-darkbg-border hover:bg-lavender-50 dark:hover:bg-darkbg-hover'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Skills Display by Category */}
      <div className="space-y-6">
        {groupedCategories.map((catName) => {
          const categorySkills = filteredSkills.filter((s) => s.category === catName);
          if (categorySkills.length === 0) return null;
          const CategoryIcon = getCategoryIcon(catName);

          return (
            <div 
              key={catName} 
              className="p-5 rounded-3xl bg-white dark:bg-darkbg-card border border-lavender-200/80 dark:border-darkbg-border shadow-soft-navy space-y-4"
            >
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-darkbg-border pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-sky-50 dark:bg-navy-800 text-sky-600 dark:text-sky-300">
                    <CategoryIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      {catName}
                    </h3>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      {categorySkills.length} competencies
                    </p>
                  </div>
                </div>
              </div>

              {/* Grid of skills */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {categorySkills.map((skill) => (
                  <div
                    key={skill.id}
                    className="p-3.5 rounded-2xl bg-lavender-50/50 dark:bg-darkbg-surface border border-lavender-100 dark:border-darkbg-border card-hover flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                          {skill.name}
                        </h4>
                        <span className="shrink-0 px-2 py-0.5 rounded-md text-[10px] font-mono font-medium bg-lavender-100 dark:bg-navy-800 text-lavender-900 dark:text-sky-200 border border-lavender-200 dark:border-darkbg-border badge-hover">
                          {skill.stage}
                        </span>
                      </div>

                      {skill.notes && (
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                          {skill.notes}
                        </p>
                      )}
                    </div>

                    {/* Progress Bar & Numerical Indicator */}
                    <div className="mt-3 pt-2 border-t border-slate-200/50 dark:border-darkbg-border/60">
                      <div className="flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400 mb-1">
                        <span>Confidence Level</span>
                        <span className="font-mono font-medium text-sky-600 dark:text-sky-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-lavender-200/70 dark:bg-navy-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-sky-500 via-blue-500 to-lavender-600 rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          );
        })}

        {filteredSkills.length === 0 && (
          <div className="p-8 text-center rounded-2xl bg-white dark:bg-darkbg-card border border-dashed border-slate-200 dark:border-darkbg-border text-slate-400 text-xs">
            No skills found matching "{searchQuery}" in this category.
          </div>
        )}
      </div>

    </section>
  );
};
