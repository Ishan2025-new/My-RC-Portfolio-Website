import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code2, Cpu, BarChart3, Layers, PieChart, Database, Terminal, Sparkles } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getIcon = (name: string) => {
    switch (name) {
      case 'Cpu': return <Cpu className="w-4 h-4 text-[var(--accent-pine)]" />;
      case 'Code2': return <Code2 className="w-4 h-4 text-[var(--accent-pine)]" />;
      case 'BarChart3': return <BarChart3 className="w-4 h-4 text-[var(--accent-pine)]" />;
      case 'Layers': return <Layers className="w-4 h-4 text-[var(--accent-pine)]" />;
      case 'PieChart': return <PieChart className="w-4 h-4 text-[var(--accent-pine)]" />;
      case 'Database': return <Database className="w-4 h-4 text-[var(--accent-pine)]" />;
      case 'Terminal': return <Terminal className="w-4 h-4 text-[var(--accent-pine)]" />;
      default: return <Sparkles className="w-4 h-4 text-[var(--accent-pine)]" />;
    }
  };

  const filteredCategories = selectedCategory === 'all' 
    ? SKILL_CATEGORIES 
    : SKILL_CATEGORIES.filter(c => c.title.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section id="skills" className="scroll-mt-20">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-mono text-[var(--accent-brass)]">03 — Expertise</span>
          <h2 className="text-2xl font-bold font-serif text-[var(--text-primary)] mt-1">
            Technical Skills &amp; Capabilities
          </h2>
          <p className="text-xs text-[var(--text-secondary)] mt-1 max-w-xl">
            Applied competencies across machine learning algorithms, distributed computing with PySpark, relational database design, and automation.
          </p>
        </div>

        {/* Filter buttons - functional interactive controls */}
        <div className="flex items-center gap-1 p-1 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-lg text-xs overflow-x-auto">
          {['all', 'AI & ML', 'Programming', 'Data', 'Database', 'Tools'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-md capitalize font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-[var(--accent-pine)] text-white shadow-xs'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredCategories.map((category, idx) => (
          <div 
            key={idx}
            className="p-5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col justify-between hover:border-[var(--border-strong)] transition-all"
          >
            <div>
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[var(--border-subtle)]">
                {getIcon(category.iconName)}
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)]">
                  {category.title}
                </h3>
              </div>

              {/* Zero-pill: clean list with subtle markers */}
              <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-baseline gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-pine)]/40 shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
