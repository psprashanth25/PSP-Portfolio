import React, { useState } from 'react';
import { GraduationCap, Copy, Check } from 'lucide-react';

export const About: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const developerJson = `{
  "developer": "P. S. Prashanth",
  "program": "Integrated M.Tech in Software Engineering",
  "university": "VIT-AP University",
  "graduationYear": 2027,
  "cgpa": "8.61 / 10",
  "specialization": "Full-Stack Development & Distributed APIs",
  "interests": ["AI & Machine Learning", "Cloud Infrastructure", "Scalable Systems"],
  "focus": "Practical, production-tested software engineering"
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(developerJson);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <GraduationCap size={15} />
            <span>Developer Background</span>
          </div>
          <h2 className="section-title">
            About <span className="gradient-text">P.S. Prashanth</span>
          </h2>
          <p className="section-subtitle">
            Software Engineering student at VIT-AP University focused on full-stack web platforms, scalable backend services, and practical AI applications.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Focused Narrative */}
          <div>
            <h3 style={{ marginBottom: '1.25rem', color: '#ffffff' }}>
              Software Engineering Student & Full-Stack Developer
            </h3>
            
            <p style={{ color: '#cbd5e1', marginBottom: '1rem', fontSize: '1.02rem', lineHeight: 1.7 }}>
              I am an Integrated M.Tech Software Engineering student at <strong>VIT-AP University</strong> (2022–2027) with an academic record of <strong>8.61 / 10 CGPA</strong>. My core technical foundation centers on <strong>Java</strong>, the <strong>MERN stack</strong>, and modern <strong>RESTful API architectures</strong>.
            </p>

            <p style={{ color: '#94a3b8', marginBottom: '1rem', lineHeight: 1.7 }}>
              My engineering interests center on <strong>scalable software systems</strong>, <strong>cloud infrastructure</strong>, and applied <strong>AI & machine learning</strong>. Rather than following generic tutorials, I focus on practical project-building experience that solves tangible operational challenges.
            </p>

            <p style={{ color: '#94a3b8', marginBottom: '2rem', lineHeight: 1.7 }}>
              Through end-to-end projects like <em>Pulse Analytics</em> (client-side DOM virtualization for 60k+ records), <em>PlacementMonitor</em> (dual Gmail daemon with Excel parsing and Telegram alerts), and <em>BudgetBuddy</em> (MERN hostel ledger), I build software with production-level testing, clean architectural patterns, and real-world resilience.
            </p>

            <div className="about-highlights-grid">
              <div className="highlight-item">
                <div className="highlight-value gradient-text">8.61</div>
                <div className="highlight-label">Current CGPA / 10 (VIT-AP)</div>
              </div>
              <div className="highlight-item">
                <div className="highlight-value" style={{ color: 'var(--accent-emerald)' }}>95+</div>
                <div className="highlight-label">Automated Unit Tests Passing</div>
              </div>
              <div className="highlight-item">
                <div className="highlight-value" style={{ color: 'var(--accent-indigo)' }}>6+</div>
                <div className="highlight-label">Public Technical Repositories</div>
              </div>
              <div className="highlight-item">
                <div className="highlight-value" style={{ color: 'var(--accent-cyan)' }}>2027</div>
                <div className="highlight-label">Expected Graduation Year</div>
              </div>
            </div>
          </div>

          {/* Right Column: Terminal Profile Card */}
          <div className="terminal-card">
            <div className="terminal-header">
              <div className="terminal-controls">
                <div className="terminal-dot dot-red" />
                <div className="terminal-dot dot-yellow" />
                <div className="terminal-dot dot-green" />
              </div>
              <div className="terminal-title">prashanth@developer: ~/profile.json</div>
              <button
                onClick={handleCopy}
                style={{ color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.75rem', cursor: 'pointer' }}
                aria-label="Copy developer JSON"
              >
                {copied ? <Check size={14} color="var(--accent-emerald)" /> : <Copy size={14} />}
                <span>{copied ? 'Copied' : 'Copy JSON'}</span>
              </button>
            </div>

            <div className="terminal-body">
              <pre style={{ overflowX: 'auto', color: '#e2e8f0' }}>
                <code>
                  <span className="code-comment">// Verified Academic & Technical Identity</span>
                  {'\n'}
                  <span className="code-prompt">$</span> cat profile.json
                  {'\n\n'}
                  {developerJson}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
