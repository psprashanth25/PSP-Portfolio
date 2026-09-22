import React, { useState } from 'react';
import { ExternalLink, Layers, ArrowUpRight, AlertCircle, Wrench } from 'lucide-react';
import { projects } from '../../data/projects';
import { Project } from '../../types';
import { CardTilt } from '../common/CardTilt';
import { ProjectModal } from '../common/ProjectModal';
import { GithubIcon } from '../common/Icons';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    'All',
    'Full-Stack',
    'Systems & Automation',
    'AI & Computer Vision',
    'Distributed Systems'
  ];

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <Layers size={15} />
            <span>Verified Technical Work</span>
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Software Projects</span>
          </h2>
          <p className="section-subtitle">
            Engineered systems addressing real-world operational challenges. Every project is verified against authentic GitHub source repositories.
          </p>
        </div>

        {/* Category Filter Bar */}
        <div className="projects-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <CardTilt key={project.id} className="project-card-wrapper">
              <div
                className="project-card"
                onClick={() => setSelectedProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') setSelectedProject(project);
                }}
                aria-label={`View architecture details for ${project.title}`}
              >
                <div>
                  {/* Card Header: Category & Priority */}
                  <div className="project-card-header">
                    <span className="project-category-badge">{project.category}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                      {project.featured && (
                        <span className="badge badge-indigo">Featured</span>
                      )}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                        style={{ color: '#64748b', cursor: 'pointer', padding: '0.2rem' }}
                        aria-label="Expand project architecture"
                      >
                        <ArrowUpRight size={18} />
                      </button>
                    </div>
                  </div>

                  {/* 1. Project Name */}
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>

                  {/* 2. Problem Solved */}
                  <div
                    style={{
                      background: 'rgba(239, 68, 68, 0.05)',
                      border: '1px solid rgba(239, 68, 68, 0.15)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.75rem 0.9rem',
                      marginBottom: '0.85rem'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', fontWeight: 600, color: '#f87171', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                      <AlertCircle size={13} />
                      <span>Problem Solved</span>
                    </div>
                    <p style={{ fontSize: '0.86rem', color: '#e2e8f0', lineHeight: 1.5 }}>
                      {project.problem}
                    </p>
                  </div>

                  {/* 3. Important Technical Implementation */}
                  <div
                    style={{
                      background: 'rgba(56, 189, 248, 0.05)',
                      border: '1px solid rgba(56, 189, 248, 0.15)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.75rem 0.9rem',
                      marginBottom: '1rem'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--accent-cyan)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                      <Wrench size={13} />
                      <span>Technical Implementation</span>
                    </div>
                    <p style={{ fontSize: '0.86rem', color: '#cbd5e1', lineHeight: 1.5 }}>
                      {project.keyImplementation}
                    </p>
                  </div>

                  {/* Verified Stats Row if Available */}
                  {project.stats && project.stats.length > 0 && (
                    <div className="project-stats-row">
                      {project.stats.slice(0, 2).map((stat, i) => (
                        <div key={i} className="project-stat-item">
                          <span className="stat-label">{stat.label}</span>
                          <span className="stat-value">{stat.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* 4. Technology Stack */}
                  <div className="project-tech-badges">
                    {project.technologies.slice(0, 5).map((tech, tIdx) => (
                      <span key={tIdx} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="tech-badge">+{project.technologies.length - 5}</span>
                    )}
                  </div>
                </div>

                {/* 5, 6, 7. Footer: GitHub, Live Demo, and Architecture Modal Drawer */}
                <div className="project-card-footer" onClick={(e) => e.stopPropagation()}>
                  <div className="project-links">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-btn primary"
                        aria-label={`Open live demo of ${project.title}`}
                      >
                        <ExternalLink size={14} />
                        <span>Live Demo</span>
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn"
                      aria-label={`Open GitHub repository of ${project.title}`}
                    >
                      <GithubIcon size={14} />
                      <span>GitHub</span>
                    </a>
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    style={{
                      fontSize: '0.82rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--accent-cyan)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      padding: '0.35rem 0.65rem',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(56, 189, 248, 0.08)',
                      border: '1px solid rgba(56, 189, 248, 0.25)'
                    }}
                    aria-label={`Open Architecture Deep Dive for ${project.title}`}
                  >
                    <span>Architecture Deep Dive</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </CardTilt>
          ))}
        </div>
      </div>

      {/* Deep Architecture Modal Drawer */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
