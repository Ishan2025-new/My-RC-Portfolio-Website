import React from 'react';
import { FileText, Sun, Moon, Sparkles, FolderGit2 } from 'lucide-react';
import { CANDIDATE_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeTab: 'portfolio' | 'resume';
  setActiveTab: (tab: 'portfolio' | 'resume') => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  theme,
  setTheme,
  onOpenContact
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--border-subtle)] bg-[var(--bg-canvas)]/90 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Brand Wordmark (Single text element / title in display face) */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveTab('portfolio')}
            className="flex items-center gap-2.5 text-left font-serif text-xl font-bold tracking-tight text-[var(--text-primary)] hover:opacity-90 transition-opacity"
          >
            <img 
              src={CANDIDATE_INFO.avatarUrl} 
              alt="Rudrashis Chowdhury" 
              className="w-8 h-8 rounded-full object-cover border border-[var(--border-strong)] shadow-xs" 
            />
            <span>Rudrashis Chowdhury</span>
          </button>
          <span className="hidden sm:inline-block text-xs font-mono px-2 py-0.5 rounded text-[var(--accent-pine)] bg-[var(--accent-pine)]/10 font-medium">
            AI/ML Engineer
          </span>
        </div>

        {/* Zone 2: Navigation Links (4-6 clean text links) */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[var(--text-secondary)]">
          <button
            onClick={() => setActiveTab('portfolio')}
            className={`hover:text-[var(--text-primary)] transition-colors pb-1 border-b-2 ${
              activeTab === 'portfolio'
                ? 'border-[var(--accent-pine)] text-[var(--text-primary)]'
                : 'border-transparent'
            }`}
          >
            Portfolio
          </button>
          <a
            href="#projects"
            onClick={() => activeTab !== 'portfolio' && setActiveTab('portfolio')}
            className="hover:text-[var(--text-primary)] transition-colors"
          >
            Projects
          </a>
          <a
            href="#simulator"
            onClick={() => activeTab !== 'portfolio' && setActiveTab('portfolio')}
            className="hover:text-[var(--text-primary)] transition-colors inline-flex items-center gap-1"
          >
            <Sparkles className="w-3.5 h-3.5 text-[var(--accent-brass)]" />
            AI Planner Demo
          </a>
          <a
            href="#skills"
            onClick={() => activeTab !== 'portfolio' && setActiveTab('portfolio')}
            className="hover:text-[var(--text-primary)] transition-colors"
          >
            Skills
          </a>
          <a
            href="#education"
            onClick={() => activeTab !== 'portfolio' && setActiveTab('portfolio')}
            className="hover:text-[var(--text-primary)] transition-colors"
          >
            Education
          </a>
          <button
            onClick={() => setActiveTab('resume')}
            className={`hover:text-[var(--text-primary)] transition-colors pb-1 border-b-2 inline-flex items-center gap-1.5 ${
              activeTab === 'resume'
                ? 'border-[var(--accent-pine)] text-[var(--text-primary)] font-semibold'
                : 'border-transparent'
            }`}
          >
            <FileText className="w-4 h-4 text-[var(--accent-pine)]" />
            Resume Document
          </button>
        </nav>

        {/* Zone 3: Primary Actions (Theme Toggle & Contact / Resume) */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] transition-colors"
            title={`Switch to ${theme === 'dark' ? 'Ivory' : 'Dark'} mode`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Segmented control for mobile view switching */}
          <div className="flex md:hidden p-0.5 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs font-medium">
            <button
              onClick={() => setActiveTab('portfolio')}
              className={`px-2.5 py-1 rounded-md transition-all ${
                activeTab === 'portfolio'
                  ? 'bg-[var(--accent-pine)] text-white shadow-xs'
                  : 'text-[var(--text-secondary)]'
              }`}
            >
              Portfolio
            </button>
            <button
              onClick={() => setActiveTab('resume')}
              className={`px-2.5 py-1 rounded-md transition-all ${
                activeTab === 'resume'
                  ? 'bg-[var(--accent-pine)] text-white shadow-xs'
                  : 'text-[var(--text-secondary)]'
              }`}
            >
              Resume
            </button>
          </div>

          <a
            href="https://github.com/Ishan2025-new"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] rounded-md border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            GitHub
          </a>

          <button
            onClick={onOpenContact}
            className="px-3.5 py-1.5 text-xs font-medium text-white bg-[var(--accent-pine)] hover:bg-[var(--accent-pine-light)] rounded-md shadow-sm transition-all whitespace-nowrap"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </header>
  );
};
