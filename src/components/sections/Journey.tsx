import React from 'react';
import { Milestone, Calendar, CheckCircle } from 'lucide-react';
import { journeyMilestones } from '../../data/journey';

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <Milestone size={15} />
            <span>Academic & Technical Milestones</span>
          </div>
          <h2 className="section-title">
            The Engineering <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle">
            A chronological timeline of academic achievements, technical growth, and software engineering milestones.
          </p>
        </div>

        <div className="timeline-track">
          {journeyMilestones.map((milestone, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-marker" />

              <div className="timeline-content-card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <div className="timeline-period">
                    <Calendar size={13} style={{ display: 'inline', marginRight: '4px', verticalAlign: '-1px' }} />
                    {milestone.period}
                  </div>
                  {milestone.grade && (
                    <span className="badge badge-emerald">{milestone.grade}</span>
                  )}
                </div>

                <h3 className="timeline-title">{milestone.title}</h3>
                <div className="timeline-org">
                  {milestone.organization} • <span style={{ color: '#64748b' }}>{milestone.location}</span>
                </div>

                <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: milestone.achievements ? '1.25rem' : 0 }}>
                  {milestone.description}
                </p>

                {milestone.achievements && milestone.achievements.length > 0 && (
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                    {milestone.achievements.map((ach, aIdx) => (
                      <li key={aIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.88rem', color: '#94a3b8' }}>
                        <CheckCircle size={15} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
