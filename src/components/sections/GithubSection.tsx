import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../../data/projects';
import { GithubIcon } from '../common/Icons';

export const GithubSection: React.FC = () => {
  return (
    <section id="github" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <GithubIcon size={15} />
            <span>Open Source & Version Control</span>
          </div>
          <h2 className="section-title">
            GitHub <span className="gradient-text">Activity & Architecture</span>
          </h2>
          <p className="section-subtitle">
            Transparent, open-source repositories demonstrating production-grade code structure, automated unit tests, and thorough documentation.
          </p>
        </div>

        <div className="glass-panel" style={{ padding: 'clamp(2rem, 4vw, 3rem)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '2px solid rgba(56, 189, 248, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  boxShadow: '0 0 20px rgba(56, 189, 248, 0.2)'
                }}
              >
                <GithubIcon size={32} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '0.2rem' }}>
                  psprashanth25
                </h3>
                <div style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                  P S PRASHANTH • Software Engineering Student & Full-Stack Developer
                </div>
              </div>
            </div>

            <a
              href="https://github.com/psprashanth25"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <GithubIcon size={16} />
              <span>Visit GitHub Profile</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.25rem',
              marginBottom: '2rem'
            }}
          >
            {projects.slice(0, 4).map((p) => (
              <a
                key={p.id}
                href={p.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all var(--transition-fast)'
                }}
                className="hover-bright"
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.65rem' }}>
                    <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#ffffff' }}>{p.title}</span>
                    <ArrowUpRight size={15} color="var(--accent-cyan)" />
                  </div>
                  <p style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.5, marginBottom: '1rem' }}>
                    {p.subtitle}
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.75rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
                  <span>{p.category}</span>
                  <span>•</span>
                  <span style={{ color: p.accentColor }}>{p.technologies[0]}</span>
                </div>
              </a>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)', fontSize: '0.85rem', color: '#64748b' }}>
            <div>
              <span>Verified Repositories: <strong>Mail-Manager</strong>, <strong>Pulse Analytics</strong>, <strong>BudgetBuddy</strong>, <strong>SchemeAI</strong>, <strong>Object Detection</strong></span>
            </div>
            <div style={{ color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span className="status-dot"></span>
              <span>All repositories active & public on GitHub</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
