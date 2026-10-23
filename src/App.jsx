import React, { useState } from 'react';
import { PortfolioProvider } from './context/PortfolioContext';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { HeroHeader } from './components/HeroHeader';
import { DashboardMetrics } from './components/DashboardMetrics';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { IndustryExposureSection } from './components/IndustryExposureSection';
import { CertificatesSection } from './components/CertificatesSection';
import { TimelineSection } from './components/TimelineSection';
import { RoadmapSection } from './components/RoadmapSection';
import { ResearchSection } from './components/ResearchSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AdminModal } from './components/AdminModal';
import { ResumeModal } from './components/ResumeModal';
import { Toast } from './components/Toast';
import { useScrollReveal } from './hooks/useScrollReveal';

function PortfolioApp() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  useScrollReveal();

  return (
    <div className="min-h-screen flex flex-col bg-lavender-50/40 dark:bg-darkbg text-slate-800 dark:text-slate-100 transition-colors">
      {/* Top Navbar */}
      <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

      {/* Main Layout Area */}
      <div className="flex-1 flex">
        {/* Navigation Sidebar */}
        <Sidebar 
          isOpen={isSidebarOpen} 
          closeSidebar={() => setIsSidebarOpen(false)} 
        />

        {/* Content Body with Left Padding on Desktop */}
        <main className="flex-1 lg:pl-64 flex flex-col justify-between transition-all">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 space-y-12">
            {/* 1. Hero Profile Header */}
            <HeroHeader />

            {/* 2. Top Dashboard Overview */}
            <DashboardMetrics />

            {/* 3. About Me */}
            <AboutSection />

            {/* 4. Technical Skills */}
            <SkillsSection />

            {/* 5. Projects Showcase (Selected Projects) */}
            <ProjectsSection />

            {/* 6. Industry Exposure & Developer Communities */}
            <IndustryExposureSection />

            {/* 7. Certificates & Achievements */}
            <CertificatesSection />

            {/* 8. Events, Workshops & Campus Activities */}
            <TimelineSection />

            {/* 9. Machine Learning Career Roadmap */}
            <RoadmapSection />

            {/* 10. Research & Innovation */}
            <ResearchSection />

            {/* 11. Contact Me Section */}
            <ContactSection />
          </div>

          {/* Footer */}
          <Footer />
        </main>
      </div>

      {/* Global Modals & Notifications */}
      <AdminModal />
      <ResumeModal />
      <Toast />
    </div>
  );
}

export default function App() {
  return (
    <PortfolioProvider>
      <PortfolioApp />
    </PortfolioProvider>
  );
}
