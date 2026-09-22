import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle, Cpu, AlertTriangle, Layers } from 'lucide-react';
import { Project } from '../../types';
import { GithubIcon } from './Icons';

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
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-project-title">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close Project Technical Architecture Modal"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '1.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
            <span className="project-category-badge">{project.category}</span>
            {project.status && (
              <span className="badge badge-emerald">
                <span className="status-dot"></span>
                {project.status}
              </span>
            )}
          </div>
          <h2 id="modal-project-title" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.35rem)', color: '#ffffff', marginBottom: '0.5rem' }}>
            {project.title}
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--accent-cyan)', fontWeight: 500 }}>
            {project.subtitle}
          </p>
        </div>

        {/* Stats Grid if Available */}
        {project.stats && project.stats.length > 0 && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '0.75rem',
              background: 'rgba(0, 0, 0, 0.35)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: '1rem',
              marginBottom: '2rem'
            }}
          >
            {project.stats.map((stat, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#64748b', textTransform: 'uppercase' }}>
                  {stat.label}
                </span>
                <span style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff' }}>
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Problem Statement Box */}
        <div
          style={{
            background: 'rgba(239, 68, 68, 0.05)',
            border: '1px solid rgba(239, 68, 68, 0.2)',
            borderRadius: 'var(--radius-md)',
            padding: '1.25rem',
            marginBottom: '1.5rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#f87171', fontWeight: 600, marginBottom: '0.5rem', fontSize: '0.95rem' }}>
            <AlertTriangle size={18} />
            <span>The Problem & Engineering Challenge</span>
          </div>
          <p style={{ color: '#e2e8f0', fontSize: '0.95rem', lineHeight: 1.6 }}>
            {project.problem}
          </p>
        </div>

        {/* Engineering Approach & Solution */}
        <div
          style={{
            background: 'rgba(16, 185, 129, 0.05)',
            border: '1px solid rgba(16, 185, 129, 0.2)',
            borderRadius: 'var(--radius-md)',
            padding: '1.25rem',
            marginBottom: '1.75rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#34d399', fontWeight: 600, marginBottom: '0.5rem', fontSize: '0.95rem' }}>
            <Cpu size={18} />
            <span>Engineering Approach & Solution</span>
          </div>
          <p style={{ color: '#e2e8f0', fontSize: '0.95rem', lineHeight: 1.6 }}>
            {project.solution}
          </p>
        </div>

        {/* Architectural Pillars */}
        {project.architecture && project.architecture.length > 0 && (
          <div style={{ marginBottom: '1.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ffffff', fontWeight: 700, marginBottom: '0.85rem', fontSize: '1.1rem' }}>
              <Layers size={18} color="var(--accent-cyan)" />
              <span>System Architecture & Highlights</span>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {project.architecture.map((arch, idx) => (
                <li
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    fontSize: '0.92rem',
                    color: '#cbd5e1',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid var(--border-subtle)',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-sm)'
                  }}
                >
                  <span style={{ color: 'var(--accent-cyan)', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                    0{idx + 1}.
                  </span>
                  <span>{arch}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Verified Key Features */}
        <div style={{ marginBottom: '1.75rem' }}>
          <h4 style={{ fontSize: '1.05rem', color: '#ffffff', marginBottom: '0.85rem' }}>
            Verified Key Capabilities
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.65rem' }}>
            {project.features.map((feat, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.5rem',
                  fontSize: '0.88rem',
                  color: '#94a3b8'
                }}
              >
                <CheckCircle size={16} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Badges */}
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ fontSize: '1rem', color: '#ffffff', marginBottom: '0.65rem' }}>
            Verified Technology Stack
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {project.technologies.map((tech, i) => (
              <span key={i} className="tech-badge" style={{ padding: '0.35rem 0.75rem', fontSize: '0.82rem', color: '#e2e8f0', background: 'rgba(255, 255, 255, 0.06)' }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions Footer */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <ExternalLink size={16} />
                <span>Open Live Deployment</span>
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <GithubIcon size={16} />
              <span>Inspect Source on GitHub</span>
            </a>
          </div>

          <button onClick={onClose} className="btn btn-outline">
            Close Modal
          </button>
        </div>
      </div>
    </div>
  );
};
