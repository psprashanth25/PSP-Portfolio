import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';
import { certifications } from '../../data/certifications';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <Award size={15} />
            <span>Verified Credentials</span>
          </div>
          <h2 className="section-title">
            Industry & Academic <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Formal technical certifications validating cloud infrastructure, generative AI, distributed ledger systems, and practical software engineering.
          </p>
        </div>

        <div className="cert-grid">
          {certifications.map((cert) => (
            <div key={cert.id} className="cert-card">
              <div>
                <div className="cert-header">
                  <div
                    className="cert-badge-icon"
                    style={{
                      background: `${cert.badgeColor}18`,
                      borderColor: `${cert.badgeColor}40`,
                      color: cert.badgeColor
                    }}
                  >
                    <Award size={22} />
                  </div>
                  <span className="badge" style={{ borderColor: `${cert.badgeColor}40`, color: cert.badgeColor }}>
                    {cert.date}
                  </span>
                </div>

                <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', marginBottom: '0.4rem' }}>
                  {cert.issuer}
                </div>

                <h3 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '0.75rem', lineHeight: 1.4 }}>
                  {cert.title}
                </h3>

                <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {cert.description}
                </p>
              </div>

              <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#64748b' }}>
                  {cert.category}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--accent-emerald)', fontSize: '0.8rem', fontWeight: 600 }}>
                  <ShieldCheck size={14} />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
