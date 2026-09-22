import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div className="nav-brand-monogram">PSP</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.1rem', color: '#ffffff' }}>P.S. Prashanth</div>
              <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Software Engineering Student & Full-Stack Developer</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              href="https://github.com/psprashanth25"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/p-s-prashanth-2988a7387/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href="mailto:p.s.prashanth25@gmail.com"
              className="social-icon-btn"
              aria-label="Send Email"
            >
              <Mail size={18} />
            </a>
            <button
              onClick={scrollToTop}
              className="social-icon-btn"
              aria-label="Scroll to top of page"
              style={{ background: 'rgba(56, 189, 248, 0.08)', borderColor: 'rgba(56, 189, 248, 0.3)', color: 'var(--accent-cyan)' }}
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        <div className="section-divider" />

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', fontSize: '0.88rem', color: '#64748b' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span>Designed & Built by P.S. Prashanth with React 19, TypeScript & Three.js</span>
          </div>

          <div>
            <span>&copy; {new Date().getFullYear()} P.S. Prashanth. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
