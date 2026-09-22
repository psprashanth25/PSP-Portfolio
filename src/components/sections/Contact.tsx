import React, { useState } from 'react';
import { Mail, Send, Copy, Check, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const emailAddress = 'p.s.prashanth25@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailSubject = encodeURIComponent(subject || 'Inquiry from Portfolio');
    const mailBody = encodeURIComponent(
      `Hi Prashanth,\n\n${message}\n\nBest regards,\n${senderName}`
    );
    window.location.href = `mailto:${emailAddress}?subject=${mailSubject}&body=${mailBody}`;
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <Mail size={15} />
            <span>Get in Touch</span>
          </div>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text">Meaningful</span>
          </h2>
          <p className="section-subtitle">
            Whether you have an engineering opportunity, a software project collaboration, or want to discuss systems architecture, I'd love to connect.
          </p>
        </div>

        {/* Channels Grid */}
        <div className="contact-card-grid">
          {/* Email Channel */}
          <div className="contact-channel-card">
            <div className="contact-channel-icon">
              <Mail size={24} />
            </div>
            <h3 style={{ fontSize: '1.15rem', color: '#ffffff' }}>Direct Email</h3>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
              {emailAddress}
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a
                href={`mailto:${emailAddress}`}
                className="btn btn-primary btn-sm"
              >
                <span>Compose Mail</span>
              </a>
              <button
                onClick={handleCopyEmail}
                className="btn btn-secondary btn-sm"
                aria-label="Copy email address"
              >
                {copiedEmail ? <Check size={14} color="var(--accent-emerald)" /> : <Copy size={14} />}
                <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* LinkedIn Channel */}
          <div className="contact-channel-card">
            <div className="contact-channel-icon" style={{ background: 'rgba(99, 102, 241, 0.1)', borderColor: 'rgba(99, 102, 241, 0.25)', color: 'var(--accent-indigo)' }}>
              <LinkedinIcon size={24} />
            </div>
            <h3 style={{ fontSize: '1.15rem', color: '#ffffff' }}>LinkedIn</h3>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
              P S PRASHANTH
            </p>
            <div style={{ marginTop: '0.5rem' }}>
              <a
                href="https://www.linkedin.com/in/p-s-prashanth-2988a7387/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>

          {/* GitHub Channel */}
          <div className="contact-channel-card">
            <div className="contact-channel-icon" style={{ background: 'rgba(168, 85, 247, 0.1)', borderColor: 'rgba(168, 85, 247, 0.25)', color: 'var(--accent-violet)' }}>
              <GithubIcon size={24} />
            </div>
            <h3 style={{ fontSize: '1.15rem', color: '#ffffff' }}>GitHub</h3>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
              github.com/psprashanth25
            </p>
            <div style={{ marginTop: '0.5rem' }}>
              <a
                href="https://github.com/psprashanth25"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <span>Explore Code</span>
              </a>
            </div>
          </div>
        </div>

        {/* Quick Email Composer Box */}
        <div className="glass-panel" style={{ maxWidth: '680px', margin: '0 auto', padding: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', color: '#ffffff' }}>
            <MessageSquare size={20} color="var(--accent-cyan)" />
            <h3 style={{ fontSize: '1.25rem' }}>Quick Message Composer</h3>
          </div>

          <form onSubmit={handleSendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                  Your Name / Organization
                </label>
                <input
                  type="text"
                  required
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="e.g. Alex (Engineering Recruiter)"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(0, 0, 0, 0.3)',
                    border: '1px solid var(--border-subtle)',
                    color: '#ffffff',
                    fontFamily: 'inherit',
                    fontSize: '0.95rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. Software Engineering Opportunity"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(0, 0, 0, 0.3)',
                    border: '1px solid var(--border-subtle)',
                    color: '#ffffff',
                    fontFamily: 'inherit',
                    fontSize: '0.95rem',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                Message
              </label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message here..."
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(0, 0, 0, 0.3)',
                  border: '1px solid var(--border-subtle)',
                  color: '#ffffff',
                  fontFamily: 'inherit',
                  fontSize: '0.95rem',
                  outline: 'none',
                  resize: 'vertical'
                }}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}
            >
              <Send size={16} />
              <span>Send Message (via Email Client)</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
