import React, { useState } from 'react';
import { Navbar } from './components/common/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Journey } from './components/sections/Journey';
import { Certifications } from './components/sections/Certifications';
import { GithubSection } from './components/sections/GithubSection';
import { ResumeSection } from './components/sections/ResumeSection';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/common/Footer';
import { ResumeModal } from './components/common/ResumeModal';
import { CustomCursor } from './components/common/CustomCursor';

export const App: React.FC = () => {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="portfolio-app">
      {/* Custom Cyber Drone Navigator */}
      <CustomCursor />

      {/* Sticky Navigation */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      <main>
        {/* Hero Section with 3D Core */}
        <Hero onOpenResume={() => setResumeModalOpen(true)} />

        {/* Section Divider */}
        <div className="section-divider" />

        {/* About Section with Terminal Profile */}
        <About />

        {/* Section Divider */}
        <div className="section-divider" />

        {/* Technical Skills Matrix */}
        <Skills />

        {/* Section Divider */}
        <div className="section-divider" />

        {/* Projects Section with 3D Tilt Cards & Deep Architecture Drawers */}
        <Projects />

        {/* Section Divider */}
        <div className="section-divider" />

        {/* Academic & Engineering Journey */}
        <Journey />

        {/* Section Divider */}
        <div className="section-divider" />

        {/* Verified Industry Certifications */}
        <Certifications />

        {/* Section Divider */}
        <div className="section-divider" />

        {/* Open-Source GitHub Presence */}
        <GithubSection />

        {/* Section Divider */}
        <div className="section-divider" />

        {/* Resume Preview & Download */}
        <ResumeSection onOpenResume={() => setResumeModalOpen(true)} />

        {/* Section Divider */}
        <div className="section-divider" />

        {/* Contact & Message Composer */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Instant Resume PDF Preview Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
};

export default App;
