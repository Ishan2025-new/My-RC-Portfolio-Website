import React, { useState } from 'react';
import { X, Mail, Phone, MapPin, Linkedin, Github, Copy, Check, Send } from 'lucide-react';
import { CANDIDATE_INFO } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [subject, setSubject] = useState<string>('Interview Invitation / Opportunity');
  const [message, setMessage] = useState<string>(
    `Hi Rudrashis,\n\nI reviewed your portfolio and resume showcasing your work on the Intelligent Financial Planner, PySpark Big Data, and AI/ML projects. We would love to discuss an opportunity with our team.`
  );

  if (!isOpen) return null;

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:${CANDIDATE_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailto;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-strong)] p-6 sm:p-8 shadow-2xl text-[var(--text-primary)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between border-b border-[var(--border-subtle)] pb-4 mb-5">
          <div className="flex items-center gap-3.5">
            <img 
              src={CANDIDATE_INFO.avatarUrl} 
              alt={CANDIDATE_INFO.name}
              className="w-12 h-12 rounded-xl object-cover border border-[var(--border-strong)] shadow-xs" 
            />
            <div>
              <h3 className="text-xl font-bold font-serif text-[var(--text-primary)]">
                Get in Touch
              </h3>
              <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                Available for full-time AI/ML, Data Science &amp; Python Developer roles.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg border border-[var(--border-subtle)] hover:bg-[var(--bg-canvas)] text-[var(--text-secondary)]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Contact Buttons */}
        <div className="space-y-2.5 mb-6">
          <div className="flex items-center justify-between p-3 rounded-lg bg-[var(--bg-canvas)] border border-[var(--border-subtle)]">
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[var(--accent-pine)]" />
              <div>
                <div className="text-[10px] font-mono text-[var(--text-secondary)] uppercase">Email</div>
                <a href={`mailto:${CANDIDATE_INFO.email}`} className="text-xs font-mono font-medium hover:underline text-[var(--text-primary)]">
                  {CANDIDATE_INFO.email}
                </a>
              </div>
            </div>
            <button
              onClick={() => handleCopy(CANDIDATE_INFO.email, 'email')}
              className="p-1.5 rounded hover:bg-[var(--bg-surface)] text-[var(--text-secondary)]"
              title="Copy email"
            >
              {copiedKey === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          <div className="flex items-center justify-between p-3 rounded-lg bg-[var(--bg-canvas)] border border-[var(--border-subtle)]">
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[var(--accent-pine)]" />
              <div>
                <div className="text-[10px] font-mono text-[var(--text-secondary)] uppercase">Phone / WhatsApp</div>
                <a href={`tel:${CANDIDATE_INFO.phone}`} className="text-xs font-mono font-medium hover:underline text-[var(--text-primary)]">
                  {CANDIDATE_INFO.phone}
                </a>
              </div>
            </div>
            <button
              onClick={() => handleCopy(CANDIDATE_INFO.phone, 'phone')}
              className="p-1.5 rounded hover:bg-[var(--bg-surface)] text-[var(--text-secondary)]"
              title="Copy phone"
            >
              {copiedKey === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          <div className="flex items-center justify-between p-3 rounded-lg bg-[var(--bg-canvas)] border border-[var(--border-subtle)]">
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-[var(--accent-pine)]" />
              <div>
                <div className="text-[10px] font-mono text-[var(--text-secondary)] uppercase">Location</div>
                <div className="text-xs text-[var(--text-primary)]">
                  Kolkata, West Bengal, India (Open to Relocation / Remote)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Email Drafter */}
        <form onSubmit={handleSendEmail} className="space-y-3">
          <div>
            <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1">
              Subject Line
            </label>
            <input 
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-canvas)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-pine)]"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1">
              Message Preview
            </label>
            <textarea 
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-canvas)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-pine)] resize-none"
            />
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-3 text-xs">
              <a 
                href={CANDIDATE_INFO.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] flex items-center gap-1"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <a 
                href={CANDIDATE_INFO.github} 
                target="_blank" 
                rel="noreferrer"
                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] flex items-center gap-1"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-[var(--accent-pine)] hover:bg-[var(--accent-pine-light)] rounded-lg shadow-sm transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Launch Mail Client</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
