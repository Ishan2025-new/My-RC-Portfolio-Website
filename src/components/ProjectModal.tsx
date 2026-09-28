import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, Database } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-strong)] p-6 sm:p-8 shadow-2xl text-[var(--text-primary)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Title and Close button */}
        <div className="flex items-start justify-between gap-4 border-b border-[var(--border-subtle)] pb-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent-pine)] mb-1">
              <span>{project.badge}</span>
              <span>·</span>
              <span>{project.period}</span>
            </div>
            <h2 className="text-2xl font-bold font-serif">{project.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg border border-[var(--border-subtle)] hover:bg-[var(--bg-canvas)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Project Image Banner if available */}
        {project.imageUrl && (
          <div className="mb-6 rounded-xl overflow-hidden border border-[var(--border-subtle)] max-h-64 bg-slate-900">
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        )}

        {/* Full Overview Description */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] mb-2">
            System Overview &amp; Architecture
          </h4>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            {project.fullDesc}
          </p>
        </div>

        {/* Impact & Key Achievements */}
        <div className="mb-6 p-4 rounded-xl bg-[var(--bg-canvas)] border border-[var(--border-subtle)]">
          <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] mb-3 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[var(--accent-pine)]" />
            Key Quantified Outcomes
          </h4>
          <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
            {project.impactMetrics.map((metric, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[var(--accent-pine)] font-bold mt-0.5">•</span>
                <span>{metric}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Core Features */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] mb-3">
            Core Technical Capabilities
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[var(--text-secondary)]">
            {project.features.map((feat, i) => (
              <div key={i} className="p-2.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)]">
                {feat}
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Chips (Unboxed text with dots) */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] mb-2">
            Technologies &amp; Libraries
          </h4>
          <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono text-[var(--accent-pine)]">
            {project.techStack.map((tech, i) => (
              <span key={i} className="px-2 py-0.5 rounded bg-[var(--accent-pine)]/10">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between gap-4 pt-4 border-t border-[var(--border-subtle)]">
          <span className="text-xs text-[var(--text-secondary)] font-mono">
            Verified repository on GitHub
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium rounded-lg border border-[var(--border-subtle)] hover:bg-[var(--bg-canvas)]"
            >
              Close
            </button>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-[var(--accent-pine)] hover:bg-[var(--accent-pine-light)] rounded-lg shadow-sm transition-all"
            >
              <Github className="w-4 h-4" />
              <span>View Source Code</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
