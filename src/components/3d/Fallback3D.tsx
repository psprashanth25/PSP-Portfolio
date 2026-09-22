import React from 'react';

export const Fallback3D: React.FC = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}
      aria-label="Software Architecture Geometric Visual"
    >
      <div
        style={{
          width: '280px',
          height: '280px',
          borderRadius: '50%',
          border: '2px dashed rgba(56, 189, 248, 0.4)',
          position: 'absolute',
          animation: 'spin 20s linear infinite'
        }}
      />
      <div
        style={{
          width: '210px',
          height: '210px',
          borderRadius: '24px',
          border: '2px solid rgba(99, 102, 241, 0.5)',
          transform: 'rotate(45deg)',
          position: 'absolute',
          background: 'rgba(99, 102, 241, 0.05)',
          backdropFilter: 'blur(8px)'
        }}
      />
      <div
        style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #38bdf8 0%, #6366f1 70%, transparent 100%)',
          filter: 'blur(12px)',
          opacity: 0.8
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '1rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          color: '#94a3b8',
          background: 'rgba(10, 15, 25, 0.8)',
          padding: '0.35rem 0.85rem',
          borderRadius: '9999px',
          border: '1px solid rgba(255, 255, 255, 0.08)'
        }}
      >
        <span>Digital Architecture Core</span>
      </div>
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
