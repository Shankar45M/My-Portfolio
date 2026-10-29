import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Achievements from './components/sections/Achievements';
import ResumeSection from './components/sections/ResumeSection';
import SectionHeading from './components/ui/SectionHeading';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Accessible skip to main content */}
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>

      {/* Global Header & Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content" className="main-content">
        {/* Hero Section */}
        <Hero />

        {/* About Me Section */}
        <About />

        {/* Technical Skills Section */}
        <Skills />

        {/* Featured Projects Section */}
        <Projects />

        {/* Education Section */}
        <Education />

        {/* Achievements & Certifications */}
        <Achievements />

        {/* Dedicated Resume Download Section */}
        <ResumeSection />

        {/* Contact Section Placeholder (To be implemented in Phase 6) */}
        <section id="contact" className="section">
          <div className="container">
            <SectionHeading eyebrow="Connect" title="Get in Touch" subtitle="Let's discuss opportunities, collaborations, or technical projects." />
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

export default App;
