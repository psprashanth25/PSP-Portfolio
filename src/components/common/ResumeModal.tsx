import React, { useEffect } from 'react';
import { X, Download, ExternalLink, FileText } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="resume-modal-title">
      <div
        className="modal-container"
        style={{ maxWidth: '960px', width: '95vw', height: '90vh', display: 'flex', flexDirection: 'column', padding: '1.5rem' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <FileText size={22} color="var(--accent-cyan)" />
            <h3 id="resume-modal-title" style={{ fontSize: '1.25rem', color: '#ffffff' }}>
              P.S. Prashanth — Resume Viewer
            </h3>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a
              href="/resume.pdf"
              download="Prashanth_PS_Resume.pdf"
              className="btn btn-secondary btn-sm"
              aria-label="Download Resume PDF"
            >
              <Download size={15} />
              <span>Download</span>
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
              aria-label="Open Resume in new tab"
            >
              <ExternalLink size={15} />
              <span>New Tab</span>
            </a>
            <button
              onClick={onClose}
              className="modal-close-btn"
              style={{ position: 'static', width: '34px', height: '34px' }}
              aria-label="Close Resume Modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Embedded PDF Frame */}
        <div
          style={{
            flex: 1,
            width: '100%',
            background: '#0a0d14',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            border: '1px solid var(--border-subtle)'
          }}
        >
          <iframe
            src="/resume.pdf#toolbar=1"
            title="P.S. Prashanth Resume"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
          />
        </div>
      </div>
    </div>
  );
};
