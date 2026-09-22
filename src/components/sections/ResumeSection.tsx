import React from 'react';
import { FileText, Download, ExternalLink, CheckCircle2 } from 'lucide-react';

interface ResumeSectionProps {
  onOpenResume?: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResume }) => {
  return (
    <section id="resume" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <FileText size={15} />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="section-title">
            Engineering <span className="gradient-text">Resume</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive overview of academic background, core competencies, verified projects, and cloud certifications.
          </p>
        </div>

        <div className="resume-preview-box">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <div
              style={{
                width: '54px',
                height: '54px',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(56, 189, 248, 0.12)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-cyan)'
              }}
            >
              <FileText size={28} />
            </div>
            <div style={{ textAlign: 'left' }}>
              <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '0.2rem' }}>
                P.S. Prashanth — Resume
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                Updated September 2026 • Verified PDF Document
              </p>
            </div>
          </div>

          <p style={{ color: '#cbd5e1', maxWidth: '640px', margin: '0 auto 2rem', lineHeight: 1.65, fontSize: '0.96rem' }}>
            Highlights my education at <strong>VIT-AP University</strong> (8.61 CGPA), core proficiency across <strong>Java, JavaScript, React.js, Node.js, Express.js, and SQL</strong>, verified projects including <strong>Government Scheme Checker (AI & RAG)</strong>, <strong>Budget Buddy (MERN)</strong>, and <strong>YOLOv5 Object Detection</strong>, and industry internship at <strong>RINEX AI</strong>.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              onClick={(e) => {
                if (onOpenResume) {
                  e.preventDefault();
                  onOpenResume();
                }
              }}
            >
              <ExternalLink size={16} />
              <span>View Full Resume</span>
            </a>

            <a
              href="/resume.pdf"
              download="Prashanth_PS_Resume.pdf"
              className="btn btn-secondary"
            >
              <Download size={16} />
              <span>Download PDF</span>
            </a>
          </div>

          <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', fontSize: '0.85rem', color: '#64748b' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={16} color="var(--accent-emerald)" />
              <span>Standard Recruiter-Friendly Format</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={16} color="var(--accent-emerald)" />
              <span>100% Authentic Project Record</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
