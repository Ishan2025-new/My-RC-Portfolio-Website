import React from 'react';
import { EDUCATION_LIST } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="scroll-mt-20">
      <div className="mb-6">
        <span className="text-xs font-mono text-[var(--accent-brass)]">05 — Academics</span>
        <h2 className="text-2xl font-bold font-serif text-[var(--text-primary)] mt-1">
          Education &amp; Scholastic Honors
        </h2>
        <p className="text-xs text-[var(--text-secondary)] mt-1 max-w-xl">
          Dual First Division degrees from Amity University with specialization in Artificial Intelligence &amp; Machine Learning.
        </p>
      </div>

      <div className="space-y-4">
        {EDUCATION_LIST.map((edu, idx) => (
          <div 
            key={idx}
            className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[var(--accent-pine)] shrink-0" />
                <h3 className="text-base font-bold font-serif text-[var(--text-primary)]">
                  {edu.degree}
                  {edu.field && <span className="font-sans font-normal text-sm text-[var(--text-secondary)]"> — {edu.field}</span>}
                </h3>
              </div>
              <span className="text-xs font-mono font-medium text-[var(--accent-pine)]">
                {edu.period}
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs text-[var(--text-secondary)] mb-3">
              <span className="font-medium text-[var(--text-primary)]">{edu.institution}</span>
              {edu.honors && (
                <>
                  <span aria-hidden="true">·</span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-medium inline-flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" />
                    {edu.honors}
                  </span>
                </>
              )}
              {edu.score && (
                <>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono text-slate-700 dark:text-slate-300">Score: {edu.score}</span>
                </>
              )}
            </div>

            {/* Major/Minor Projects in Education */}
            {(edu.majorProject || edu.minorProject) && (
              <div className="my-3 p-3 rounded-lg bg-[var(--bg-canvas)] border border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] space-y-1">
                {edu.majorProject && (
                  <div>
                    <span className="font-semibold text-[var(--text-primary)]">Major Project: </span>
                    <span>{edu.majorProject}</span>
                  </div>
                )}
                {edu.minorProject && (
                  <div>
                    <span className="font-semibold text-[var(--text-primary)]">Minor Project: </span>
                    <span>{edu.minorProject}</span>
                  </div>
                )}
              </div>
            )}

            {edu.details && (
              <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
                {edu.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2">
                    <span className="text-[var(--accent-pine)] font-bold">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
