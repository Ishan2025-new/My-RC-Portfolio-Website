import React, { useState, useMemo } from 'react';
import { CERTIFICATIONS, CertificationItem } from '../data/portfolioData';
import { Award, Search, Filter } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  const [providerFilter, setProviderFilter] = useState<'All' | 'Coursera' | 'Be10x' | 'Udemy'>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCertifications = useMemo(() => {
    return CERTIFICATIONS.filter((cert) => {
      const matchesProvider = providerFilter === 'All' || cert.provider === providerFilter;
      const matchesSearch = cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            cert.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            cert.year.includes(searchQuery);
      return matchesProvider && matchesSearch;
    });
  }, [providerFilter, searchQuery]);

  return (
    <section id="certifications" className="scroll-mt-20">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-mono text-[var(--accent-brass)]">04 — Verified Credentials</span>
          <h2 className="text-2xl font-bold font-serif text-[var(--text-primary)] mt-1">
            Certifications ({CERTIFICATIONS.length})
          </h2>
          <p className="text-xs text-[var(--text-secondary)] mt-1 max-w-xl">
            Continuous professional upskilling across Apache Spark, Power BI Dashboarding, SQL Masterclass, Tableau, Linux, and Advanced Python.
          </p>
        </div>

        {/* Filter and Search controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
          {/* Provider buttons */}
          <div className="flex items-center gap-1 p-1 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-lg text-xs">
            {(['All', 'Coursera', 'Be10x', 'Udemy'] as const).map((p) => (
              <button
                key={p}
                onClick={() => setProviderFilter(p)}
                className={`px-2.5 py-1 rounded-md font-medium transition-all ${
                  providerFilter === p
                    ? 'bg-[var(--accent-pine)] text-white shadow-xs'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {p}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
            <input 
              type="text"
              placeholder="Search certs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 pr-3 py-1.5 text-xs rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-pine)] w-full sm:w-40"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {filteredCertifications.map((cert, index) => (
          <div 
            key={index}
            className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] flex items-start justify-between gap-4 transition-all"
          >
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-[var(--accent-pine)]/10 text-[var(--accent-pine)] shrink-0 mt-0.5">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs font-semibold text-[var(--text-primary)] leading-snug">
                  {cert.title}
                </h3>
                <div className="flex items-center gap-2 text-[11px] text-[var(--text-secondary)] mt-1 font-mono">
                  <span>{cert.provider}</span>
                  <span aria-hidden="true">·</span>
                  <span>{cert.category}</span>
                </div>
              </div>
            </div>

            <span className="text-xs font-mono font-medium text-[var(--text-secondary)] shrink-0">
              {cert.year}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
