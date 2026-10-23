import React, { useRef } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  X, 
  Download, 
  Printer, 
  Upload, 
  FileText, 
  ExternalLink, 
  GraduationCap, 
  Code2, 
  Award, 
  Briefcase, 
  Mail, 
  Github, 
  Linkedin, 
  CheckCircle2 
} from 'lucide-react';

export const ResumeModal = () => {
  const { 
    isResumeModalOpen, 
    setIsResumeModalOpen, 
    profile, 
    skills, 
    projects, 
    certificates, 
    uploadResumeFile, 
    showToast 
  } = usePortfolio();

  const fileInputRef = useRef(null);

  if (!isResumeModalOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      uploadResumeFile(file);
    }
  };

  const downloadDefaultTextResume = () => {
    const resumeText = `
SUJITHA GURUMOORTHY
${profile.tagline}
Location: ${profile.location}
Email: ${profile.email} | GitHub: ${profile.githubUrl} ${profile.linkedinUrl ? `| LinkedIn: ${profile.linkedinUrl}` : ''}

EDUCATION:
${profile.educationLevel}
${profile.institution}

CAREER OBJECTIVE:
Dedicated Computer Science student with practical hands-on experience in Machine Learning, Generative AI, and Autonomous AI Agents. Aiming to leverage strong software fundamentals and continuous learning towards a career as a Machine Learning Engineer.

TECHNICAL SKILLS:
- AI & Machine Learning: Machine Learning Fundamentals, Generative AI, AI Agents, Prompt Engineering, Gemini API, IBM Granite
- Programming & Web: Python, HTML, CSS, JavaScript, Git & GitHub
- Data & Analytics: Google Analytics, Microsoft Power BI, Exploratory Data Analysis
- Cloud & Dev Tools: Google Cloud Learning, NVIDIA Developer Ecosystem, VS Code, Colab

KEY PROJECTS:
1. Fake or Real URL Detection Using Machine Learning
   - Engineered 15+ lexical/domain features and evaluated classification models (Random Forest, Logistic Regression) on phishing datasets.
2. Smart AI Care & SmartCare AI using Gemini API
   - Integrated Google Gemini API for medical symptom guidance, conversational triage, and patient note simplification with strict disclaimer framing.
3. Gemini Research Agent
   - Autonomous multi-step research agent breaking complex queries into structured summaries with verified citations.
4. Finance AI using IBM Granite
   - Financial document reasoning and metric parsing assistant leveraging IBM Granite foundation models.
5. Cooperative Bank Leave Management System
   - Role-based portal for employee leave requests, manager approvals, and balance auditing.

VERIFIED CERTIFICATES & ACHIEVEMENTS:
- Google Python Coding & Developer Learning
- Google Internship Training and Selection
- Google Analytics Certification
- NVIDIA Developer Program Member
- HP LIFE Critical Thinking & Interview Training
- Microsoft Power BI Beginners
- HCL GUVI Blockchain Fundamentals
- Simplilearn Prompt Engineering Applications
- National Symposium 'English in Digital World' — 2nd Prize Winner
- Regional Science Expo 'Wireless Power Transfer' — 3rd Prize Winner
- State Hackathon Selection at M. Kumarasamy College of Engineering
    `.trim();

    const element = document.createElement("a");
    const file = new Blob([resumeText], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `${profile.name.replace(/\s+/g, '_')}_Resume.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    showToast('Resume downloaded in text format');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in print:p-0 print:bg-white">
      <div className="relative w-full max-w-4xl rounded-3xl bg-white dark:bg-darkbg-card border border-lavender-200 dark:border-darkbg-border shadow-2xl overflow-hidden max-h-[92vh] flex flex-col print:border-none print:shadow-none print:max-h-full print:rounded-none">
        
        {/* Actions Bar (hidden during browser print) */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-lavender-100/90 via-white to-lavender-50/70 dark:from-darkbg-surface dark:via-darkbg-card dark:to-darkbg-surface border-b border-lavender-200/70 dark:border-darkbg-border flex flex-wrap items-center justify-between gap-3 shrink-0 print:hidden">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-lavender-700 text-white">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                Resume & Profile Document
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Current File: <span className="font-mono text-lavender-800 dark:text-lavender-300 font-semibold">{profile.resumeFileName}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Custom file upload button */}
            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white dark:bg-darkbg-surface text-slate-700 dark:text-slate-200 border border-lavender-200 dark:border-darkbg-border hover:bg-lavender-50 transition-colors"
              title="Replace or attach your own PDF resume"
            >
              <Upload className="w-3.5 h-3.5 text-lavender-600" />
              <span>Upload Custom PDF</span>
            </button>
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              accept=".pdf,.doc,.docx" 
              className="hidden" 
            />

            {/* Print / Save as PDF */}
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-lavender-700 text-white hover:bg-lavender-800 shadow-soft-purple transition-all"
              title="Print formatted resume or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            {/* Download Text Version */}
            <button
              onClick={downloadDefaultTextResume}
              className="p-1.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-lavender-100 dark:hover:bg-darkbg-surface transition-colors"
              title="Download text file version"
            >
              <Download className="w-4 h-4" />
            </button>

            {/* Close */}
            <button
              onClick={() => setIsResumeModalOpen(false)}
              className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-lavender-100 dark:hover:bg-darkbg-surface transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Surface */}
        <div className="overflow-y-auto p-6 sm:p-10 bg-white text-slate-900 print:overflow-visible print:p-8 space-y-6">
          
          {/* Header */}
          <div className="border-b-2 border-slate-900 pb-4 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-slate-900">
                {profile.name}
              </h1>
              <p className="text-sm font-semibold text-purple-900 mt-1">
                {profile.tagline}
              </p>
              <p className="text-xs text-slate-600 mt-1">
                {profile.educationLevel} • {profile.institution}
              </p>
            </div>

            <div className="text-xs text-slate-700 space-y-1 sm:text-right font-mono">
              <div>{profile.location}</div>
              <div>{profile.email}</div>
              <div>github.com/{profile.githubUsername}</div>
              {profile.linkedinUrl && <div>{profile.linkedinUrl.replace('https://', '')}</div>}
            </div>
          </div>

          {/* Career Objective */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-mono">
              Professional Summary & Career Objective
            </h2>
            <p className="text-xs leading-relaxed text-slate-700">
              {profile.bio}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-mono">
              Education
            </h2>
            <div className="flex items-start justify-between text-xs">
              <div>
                <strong className="font-bold text-slate-900">{profile.educationLevel}</strong>
                <p className="text-slate-600">{profile.institution}, {profile.location}</p>
              </div>
              <span className="font-mono text-slate-500">2024 – 2026</span>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-mono">
              Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-800">
              <div>
                <span className="font-bold">AI & Machine Learning:</span> Machine Learning fundamentals, Generative AI, AI Agents, Prompt Engineering, Gemini API, IBM Granite
              </div>
              <div>
                <span className="font-bold">Languages & Web:</span> Python, HTML5, CSS3, JavaScript (ES6+), Git & GitHub
              </div>
              <div>
                <span className="font-bold">Data & Analytics:</span> Google Analytics, Microsoft Power BI, Exploratory Data Analysis
              </div>
              <div>
                <span className="font-bold">Cloud & Ecosystem:</span> Google Cloud Learning, NVIDIA Developer Ecosystem, VS Code, Google Colab
              </div>
            </div>
          </div>

          {/* Selected Technical Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-mono">
              Selected Technical Projects
            </h2>
            <div className="space-y-3 text-xs">
              
              <div>
                <div className="flex items-center justify-between font-bold text-slate-900">
                  <span>Fake or Real URL Detection Using Machine Learning</span>
                  <span className="font-mono font-normal text-slate-500">Status: Completed</span>
                </div>
                <p className="text-slate-700 mt-0.5 leading-relaxed">
                  Trained ML classification models (Random Forest, Logistic Regression) on 15+ engineered lexical and domain features to identify fraudulent phishing links with high accuracy.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between font-bold text-slate-900">
                  <span>Smart AI Care & SmartCare AI using Gemini API</span>
                  <span className="font-mono font-normal text-slate-500">Status: In Progress</span>
                </div>
                <p className="text-slate-700 mt-0.5 leading-relaxed">
                  Engineered an assistive AI care guidance platform utilizing Google Gemini API, designing strict medical guardrails, symptom triage flows, and patient note simplification.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between font-bold text-slate-900">
                  <span>Gemini Research Agent & AutoDev AI</span>
                  <span className="font-mono font-normal text-slate-500">Status: In Progress / Concept</span>
                </div>
                <p className="text-slate-700 mt-0.5 leading-relaxed">
                  Architected multi-step autonomous agent workflows for literature synthesis and automated software task decomposition using LLM tool calling.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between font-bold text-slate-900">
                  <span>Cooperative Bank Leave Management System</span>
                  <span className="font-mono font-normal text-slate-500">Status: Completed</span>
                </div>
                <p className="text-slate-700 mt-0.5 leading-relaxed">
                  Built a role-based digital administration system for bank branch employee leave workflows, manager approval logs, and entitlement tracking.
                </p>
              </div>

            </div>
          </div>

          {/* Certifications & Achievements */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-mono">
              Verified Certifications & Honors
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-800 list-disc list-inside">
              <li>Google Python Coding / Developer Learning Track</li>
              <li>Google Internship Training & Program Selection</li>
              <li>Google Analytics Certified Learning</li>
              <li>NVIDIA Developer Program Community Member</li>
              <li>HP LIFE Resume, Interview & Critical Thinking Training</li>
              <li>Microsoft Power BI Beginners Training</li>
              <li>HCL GUVI Blockchain Fundamentals</li>
              <li>Simplilearn Prompt Engineering Applications</li>
              <li>National Symposium: English in Digital World — 2nd Prize Winner</li>
              <li>Regional Science Expo: Wireless Power Transfer — 3rd Prize Winner</li>
              <li>Hackathon Selection at M. Kumarasamy College of Engineering</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};
