import React from 'react';
import { Code2, Layout, Server, Database, Cpu, Cloud, Wrench } from 'lucide-react';
import { skillCategories } from '../../data/skills';

export const Skills: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Languages':
        return <Code2 size={22} />;
      case 'Frontend':
        return <Layout size={22} />;
      case 'Backend & APIs':
        return <Server size={22} />;
      case 'Databases':
        return <Database size={22} />;
      case 'AI / ML':
        return <Cpu size={22} />;
      case 'Cloud / DevOps':
        return <Cloud size={22} />;
      case 'Tools':
        return <Wrench size={22} />;
      default:
        return <Code2 size={22} />;
    }
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <Code2 size={15} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Curated <span className="gradient-text">Engineering Stack</span>
          </h2>
          <p className="section-subtitle">
            Technologies and frameworks applied across verified projects, backend daemons, and full-stack cloud deployments.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((group, index) => (
            <div key={index} className="skill-category-card">
              <div className="skill-category-header">
                <div className="skill-category-icon">
                  {getCategoryIcon(group.category)}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', color: '#ffffff' }}>{group.category}</h3>
                  <p style={{ fontSize: '0.85rem', color: '#64748b' }}>{group.description}</p>
                </div>
              </div>

              <div className="skill-tags">
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className={`skill-tag ${skill.highlight ? 'highlight' : ''}`}
                    title={skill.level || skill.name}
                  >
                    {skill.highlight && (
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--accent-cyan)'
                        }}
                      />
                    )}
                    <span style={{ fontWeight: skill.highlight ? 600 : 400 }}>{skill.name}</span>
                    {skill.level && (
                      <span style={{ fontSize: '0.7rem', color: '#64748b', marginLeft: '0.2rem' }}>
                        • {skill.level}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
