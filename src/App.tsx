import React, { useState, useEffect } from 'react';
import { 
  CANDIDATE_INFO, 
  PROJECTS, 
  EXTRACURRICULARS,
  Project 
} from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { ResumeDocumentView } from './components/ResumeDocumentView';
import { PlannerSimulator } from './components/PlannerSimulator';
import { ProjectModal } from './components/ProjectModal';
import { SkillsSection } from './components/SkillsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { EducationSection } from './components/EducationSection';
import { ContactModal } from './components/ContactModal';
import { 
  ArrowUpRight, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  FileText, 
  CheckCircle2, 
  Sparkles,
  ExternalLink,
  ChevronRight,
  Code2,
  Cpu,
  Layers,
  Award
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'portfolio' | 'resume'>('portfolio');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);
  const [projectFilter, setProjectFilter] = useState<'all' | 'ai-ml' | 'software-dev' | 'data-engineering' | 'analytics'>('all');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const filteredProjects = projectFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === projectFilter);

  return (
    <div className="min-h-screen bg-[var(--bg-canvas)] text-[var(--text-primary)] transition-colors">
      <Navbar 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        theme={theme}
        setTheme={setTheme}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {activeTab === 'resume' ? (
        <ResumeDocumentView />
      ) : (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-20">
          {/* HERO SECTION - 2 Column Split Layout */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-2 pb-6 border-b border-[var(--border-subtle)]">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1 rounded-full bg-[var(--accent-pine)]/10 text-[var(--accent-pine)] border border-[var(--accent-pine)]/20">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-pine)] animate-pulse" />
                <span>{CANDIDATE_INFO.status}</span>
              </div>

              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif tracking-tight text-[var(--text-primary)] leading-[1.15]">
                  Turning complex data into actionable decisions.
                </h1>
                <p className="text-lg sm:text-xl font-normal text-[var(--text-secondary)]">
                  {CANDIDATE_INFO.role}
                </p>
              </div>

              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-2xl text-justify sm:text-left">
                {CANDIDATE_INFO.summary}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="px-5 py-2.5 rounded-lg bg-[var(--accent-pine)] hover:bg-[var(--accent-pine-light)] text-white text-xs font-semibold shadow-xs transition-all flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact for Hire</span>
                </button>

                <button
                  onClick={() => setActiveTab('resume')}
                  className="px-5 py-2.5 rounded-lg border border-[var(--border-strong)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] text-xs font-semibold transition-all flex items-center gap-2"
                >
                  <FileText className="w-4 h-4 text-[var(--accent-pine)]" />
                  <span>Official 2-Page Resume</span>
                </button>

                <a
                  href="#simulator"
                  className="px-4 py-2.5 rounded-lg border border-[var(--border-subtle)] hover:border-[var(--accent-brass)] text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[var(--accent-brass)]" />
                  <span>Try AI Planner Demo</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 text-xs font-mono text-[var(--text-secondary)] pt-1">
                <a
                  href={CANDIDATE_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[var(--text-primary)] flex items-center gap-1"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
                <span>·</span>
                <a
                  href={CANDIDATE_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[var(--text-primary)] flex items-center gap-1"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Kolkata, India</span>
                </span>
              </div>
            </div>

            {/* Right: Profile Photo & Key Metrics Box */}
            <div className="lg:col-span-4 flex flex-col items-center sm:items-start lg:items-center">
              <div className="relative p-3 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-strong)] shadow-lg max-w-xs w-full">
                <div className="w-full aspect-square rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-800 mb-4 border border-[var(--border-subtle)]">
                  <img
                    src={CANDIDATE_INFO.avatarUrl}
                    alt="Rudrashis Chowdhury"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if needed
                      (e.target as HTMLImageElement).src = "/profile_photo.jpg";
                    }}
                  />
                </div>

                <div className="space-y-2 text-center sm:text-left">
                  <div className="font-serif font-bold text-base text-[var(--text-primary)]">
                    Rudrashis Chowdhury
                  </div>
                  <div className="text-xs font-mono text-[var(--text-secondary)]">
                    Amity University MCA · First Division
                  </div>
                </div>

                {/* Micro Stat Badges */}
                <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-[var(--border-subtle)] text-center font-mono">
                  <div className="p-2 rounded-lg bg-[var(--bg-canvas)] border border-[var(--border-subtle)]">
                    <div className="text-base font-bold text-[var(--accent-pine)]">6+</div>
                    <div className="text-[10px] text-[var(--text-secondary)]">Major Systems</div>
                  </div>
                  <div className="p-2 rounded-lg bg-[var(--bg-canvas)] border border-[var(--border-subtle)]">
                    <div className="text-base font-bold text-[var(--accent-brass)]">14</div>
                    <div className="text-[10px] text-[var(--text-secondary)]">Certifications</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FEATURED PROJECTS SECTION */}
          <section id="projects" className="scroll-mt-20">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-mono text-[var(--accent-brass)]">01 — Selected Works</span>
                <h2 className="text-2xl font-bold font-serif text-[var(--text-primary)] mt-1">
                  Engineered Systems &amp; Case Studies
                </h2>
                <p className="text-xs text-[var(--text-secondary)] mt-1 max-w-xl">
                  Production-style data tools, algorithmic financial planners, distributed PySpark pipelines, and enterprise desktop applications.
                </p>
              </div>

              {/* Category Segmented Control */}
              <div className="flex items-center gap-1 p-1 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-lg text-xs overflow-x-auto">
                {(['all', 'ai-ml', 'data-engineering', 'software-dev', 'analytics'] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setProjectFilter(cat)}
                    className={`px-3 py-1 rounded-md font-medium whitespace-nowrap capitalize transition-all ${
                      projectFilter === cat
                        ? 'bg-[var(--accent-pine)] text-white shadow-xs'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {cat === 'all' ? 'All Systems' : cat.replace('-', ' ')}
                  </button>
                ))}
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] p-5 flex flex-col justify-between hover:shadow-md transition-all"
                >
                  <div>
                    {/* Project Image Banner if available */}
                    {project.imageUrl && (
                      <div className="w-full h-40 rounded-xl overflow-hidden mb-4 bg-slate-900 border border-[var(--border-subtle)]">
                        <img 
                          src={project.imageUrl} 
                          alt={project.title} 
                          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                    )}

                    {/* Metadata Header */}
                    <div className="flex items-center justify-between text-[11px] font-mono text-[var(--text-secondary)] mb-2">
                      <span className="text-[var(--accent-pine)] font-semibold">{project.badge}</span>
                      <span>{project.period}</span>
                    </div>

                    <h3 className="text-base font-bold font-serif text-[var(--text-primary)] group-hover:text-[var(--accent-pine)] transition-colors line-clamp-1">
                      {project.title}
                    </h3>

                    <p className="text-xs text-[var(--text-secondary)] mt-2 leading-relaxed line-clamp-3">
                      {project.shortDesc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[var(--border-subtle)]">
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1 mb-3 text-[11px] font-mono text-[var(--text-secondary)]">
                      {project.techStack.slice(0, 4).map((tech, tIdx) => (
                        <span key={tIdx} className="px-1.5 py-0.5 rounded bg-[var(--bg-canvas)] border border-[var(--border-subtle)]">
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="px-1.5 py-0.5 text-[10px] text-[var(--text-secondary)]">
                          +{project.techStack.length - 4} more
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-xs font-medium text-[var(--accent-pine)]">
                      <span className="group-hover:underline">Explore Architecture</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* INTERACTIVE PLANNER SIMULATOR SECTION */}
          <section id="simulator" className="scroll-mt-20">
            <PlannerSimulator />
          </section>

          {/* SKILLS SECTION */}
          <SkillsSection />

          {/* CERTIFICATIONS SECTION */}
          <CertificationsSection />

          {/* EDUCATION SECTION */}
          <EducationSection />

          {/* EXTRACURRICULAR SECTION */}
          <section className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
            <span className="text-xs font-mono text-[var(--accent-brass)]">06 — Extracurriculars</span>
            <h3 className="text-lg font-bold font-serif text-[var(--text-primary)] mt-1 mb-3">
              Hackathons &amp; Industry Learning
            </h3>
            <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
              {EXTRACURRICULARS.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent-pine)] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* CTA CARD */}
          <section className="rounded-2xl p-8 bg-[var(--bg-surface)] border border-[var(--border-strong)] text-center space-y-4 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[var(--text-primary)]">
              Ready to collaborate on innovative AI &amp; Data projects?
            </h2>
            <p className="text-sm text-[var(--text-secondary)] max-w-xl mx-auto">
              Looking for entry-level AI/ML Engineer, Data Scientist, or Python Developer roles. Fast learner, strong foundation in algorithms and scalable software.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={() => setIsContactOpen(true)}
                className="px-6 py-2.5 rounded-lg bg-[var(--accent-pine)] hover:bg-[var(--accent-pine-light)] text-white text-xs font-semibold shadow-xs transition-all"
              >
                Schedule an Interview
              </button>
              <button
                onClick={() => setActiveTab('resume')}
                className="px-6 py-2.5 rounded-lg border border-[var(--border-strong)] hover:bg-[var(--bg-canvas)] text-xs font-medium text-[var(--text-primary)] transition-all"
              >
                Inspect Official Resume
              </button>
            </div>
          </section>
        </main>
      )}

      {/* FOOTER */}
      <footer className="border-t border-[var(--border-subtle)] py-8 mt-20 text-xs text-[var(--text-secondary)] bg-[var(--bg-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-serif font-bold text-[var(--text-primary)]">Rudrashis Chowdhury</span>
            <span className="mx-2">·</span>
            <span>AI/ML Engineer &amp; Python Developer</span>
          </div>

          <div className="flex items-center gap-6 font-mono text-[11px]">
            <a href="mailto:rudrashis.chowdhury@gmail.com" className="hover:text-[var(--text-primary)]">
              Email
            </a>
            <a href="https://www.linkedin.com/in/rudrashis-chowdhury-08019a85" target="_blank" rel="noreferrer" className="hover:text-[var(--text-primary)]">
              LinkedIn
            </a>
            <a href="https://github.com/Ishan2025-new" target="_blank" rel="noreferrer" className="hover:text-[var(--text-primary)]">
              GitHub
            </a>
            <button onClick={() => setActiveTab('resume')} className="hover:text-[var(--text-primary)]">
              Resume PDF
            </button>
          </div>
        </div>
      </footer>

      {/* MODALS */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </div>
  );
}
