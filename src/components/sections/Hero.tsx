import React from 'react';
import { ArrowRight, FileText, Mail, ChevronDown } from 'lucide-react';
import { DeveloperWorkspace3D } from '../3d/DeveloperWorkspace3D';
import { GithubIcon, LinkedinIcon } from '../common/Icons';

interface HeroProps {
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section hero-immersive">
      {/* Full-Screen Immersive 3D Developer Workspace Background */}
      <DeveloperWorkspace3D />

      <div className="container hero-container">
        {/* Left-Aligned Hero Content with High Contrast Scrim */}
        <div className="hero-content hero-content-immersive">
          <div className="section-eyebrow">
            <span className="status-dot"></span>
            <span>Available for Software Engineering & Full-Stack Opportunities</span>
          </div>

          <h1 className="hero-title" style={{ marginBottom: '0.5rem' }}>
            P.S. <span className="gradient-text">Prashanth</span>
          </h1>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', marginBottom: '1.25rem' }}>
            <div style={{ fontSize: '1.35rem', fontWeight: 700, color: '#f8fafc', textShadow: '0 2px 12px rgba(0, 0, 0, 0.85)' }}>
              Software Engineering Student • Full-Stack Developer
            </div>
            <div style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', textShadow: '0 0 12px rgba(56, 189, 248, 0.4)' }}>
              Java / MERN / REST APIs / AI & Cloud
            </div>
          </div>

          <p className="hero-description" style={{ marginBottom: '2rem' }}>
            Integrated M.Tech Software Engineering student at <strong>VIT-AP University</strong> (CGPA 8.61/10, Class of 2027). Focused on building scalable full-stack applications, automation systems, AI-powered solutions, and reliable backend services.
          </p>

          {/* Professional CTAs */}
          <div className="hero-ctas" style={{ marginBottom: '2rem' }}>
            <button onClick={() => scrollToSection('projects')} className="btn btn-primary">
              <span>View Projects</span>
              <ArrowRight size={16} />
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              onClick={(e) => {
                if (onOpenResume) {
                  e.preventDefault();
                  onOpenResume();
                }
              }}
            >
              <FileText size={16} />
              <span>View Resume</span>
            </a>

            <button onClick={() => scrollToSection('contact')} className="btn btn-outline">
              <Mail size={16} />
              <span>Contact Me</span>
            </button>
          </div>

          {/* Social Links & Academic Badge */}
          <div className="hero-socials">
            <a
              href="https://github.com/psprashanth25"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-secondary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}
              aria-label="GitHub Profile"
            >
              <GithubIcon size={16} />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/p-s-prashanth-2988a7387/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-secondary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={16} />
              <span>LinkedIn</span>
            </a>

            <span className="hero-academic-badge">
              VIT-AP '27 • 8.61 CGPA
            </span>
          </div>

          {/* Bottom Scroll to Explore Indicator */}
          <div className="hero-scroll-cue" onClick={() => scrollToSection('about')}>
            <div className="mouse-icon">
              <div className="mouse-wheel" />
            </div>
            <span>Scroll to explore</span>
            <ChevronDown size={14} className="scroll-chevron" />
          </div>
        </div>
      </div>
    </section>
  );
};
