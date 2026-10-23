# Sujitha Gurumoorthy — Premium AI/ML Engineer Portfolio & Dashboard

A personalized, responsive portfolio dashboard engineered with **React**, **Vite**, and **Tailwind CSS**. Designed specifically around Sujitha Gurumoorthy's academic background at Sir Issac Newton College of Engineering and Technology, hands-on AI projects, verified certifications, industry community exposure (Google & NVIDIA ecosystems), and career roadmap toward becoming a Machine Learning Engineer.

---

## 🌟 Visual Identity & Design Highlights

- **Aesthetic Color Palette**: Soft light lavender (`#FAF8FF`, `#F4F0FF`, `#EDE9FE`), crisp white, and subtle dark-purple accents (`#4C1D95`, `#6332DC`, `#7E53EE`).
- **Dark Mode & Light Mode**: Smooth theme transitions with dark violet-slate background (`#0B0914`, `#131024`) and glowing accents.
- **Dynamic Metrics Dashboard**: Automatic real-time totals computed directly from portfolio state — no fake stats or arbitrary completion percentages.
- **Glassmorphic Cards & Professional Spacing**: Modern cards with subtle lavender shadows, Lucide icons, and responsive desktop sidebar + mobile drawer.
- **In-Browser Portfolio Studio (Admin Mode)**: Update profile details, upload photos, add/edit/delete projects, manage skills, and export/import JSON backups locally in the browser without rewriting code.

---

## 🚀 Quick Start (Run Locally)

### Prerequisites
- Node.js (v18 or higher recommended, verified with v24)
- npm

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```

Open your browser and navigate to:
```
http://localhost:5173
```

### 3. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

### 4. Preview the Production Build Locally
```bash
npm run preview
```

---

## 🛠️ Portfolio Features & Content Structure

1. **Profile Header (`HeroHeader.jsx`)**:
   - Name: Sujitha Gurumoorthy
   - Education: 2nd Year, B.E. Computer Science and Engineering
   - Institution: Sir Issac Newton College of Engineering and Technology, Nagapattinam
   - Career Goal: Machine Learning Engineer
   - Technical Interests: AI, Machine Learning, AI Agents, Generative AI, Cloud Computing
   - Interactive profile photo upload with local preview and persistence
   - Downloadable formatted resume (with print to PDF and custom PDF upload)
   - GitHub (`https://github.com/Suji436`) and editable LinkedIn button

2. **Dashboard Overview (`DashboardMetrics.jsx`)**:
   - Welcome banner: *"Welcome, Sujitha — Your AI/ML Career Journey"*
   - 5 real-time metrics cards:
     - Technical Projects count (with in-progress and completed breakdowns)
     - Tracked skills count across 5 domains
     - Verified certifications & honors count
     - ML Career Roadmap progress percentage (computed dynamically from completed milestones)
     - Industry & community programs count

3. **About Me (`AboutSection.jsx`)**:
   - Concise introduction highlighting learning new technologies, project-based learning, real-world societal impact, and ML Engineer aspiration.
   - 4 core engineering pillars.
   - Editable in Admin Mode.

4. **Technical Skills (`SkillsSection.jsx`)**:
   - 5 professional categories with category filter tabs:
     1. *Programming and Development* (Python, HTML, CSS, JavaScript, Git & GitHub)
     2. *AI and Machine Learning* (ML fundamentals, Generative AI, AI Agents, Prompt Engineering, Gemini API, IBM Granite)
     3. *Data and Analytics* (Google Analytics, Microsoft Power BI, Data analysis fundamentals)
     4. *Cloud and Developer Technologies* (Google Cloud learning, NVIDIA developer ecosystem, AI dev tools)
     5. *Additional Learning* (Blockchain fundamentals, Digital marketing fundamentals including SEO, AEO, and GEO)
   - Realistic proficiency indicators ("Proficient", "Learning & Applying", "Practicing", "Certified").
   - Editable confidence percentages.

5. **Projects Portfolio (`ProjectsSection.jsx` & `ProjectDetailModal.jsx`)**:
   - Includes all 12 projects:
     1. Smart AI Care
     2. Gemini Research Agent
     3. Finance AI using IBM Granite
     4. SmartCare AI using Gemini API
     5. Fake or Real URL Detection Using Machine Learning
     6. AutoDev AI — Autonomous Software Engineer Agent
     7. A2Z Nexus — AI-Powered Multi-Agent Platform
     8. Food Scanner — AI-Assisted Food Condition Assessment Concept
     9. Smart LPG Cylinder Monitoring — Patent/Research Idea
     10. Ambulance Traffic Management — AI and IoT Concept
     11. Cooperative Bank Leave Management System
     12. EHV 400/220 kV Substation — Hackathon Concept
   - Category filters: All, AI, Machine Learning, Generative AI, AI Agents, Web Applications, Research Ideas.
   - Comprehensive detail modal: Problem statement, proposed solution, technologies, Sujitha's personal contribution, status tag, GitHub link, demo link, key learning outcomes.

6. **Industry Exposure & Developer Communities (`IndustryExposureSection.jsx`)**:
   - Dedicated prominent cards for **Google** and **NVIDIA** developer programs.
   - Learning highlights for IBM Granite, HP LIFE, Microsoft Power BI, HCL GUVI, and Simplilearn.
   - Honest, accurate labels: *"Developer Community Participant & Course Learner"*, explicitly avoiding employee claims or company endorsements.

7. **Certificates & Achievements (`CertificatesSection.jsx` & `CertificateModal.jsx`)**:
   - Verified gallery with credential IDs, issuing organization, dates, modal inspector, and verification links:
     - Google Python coding/developer learning
     - Google internship training and selection
     - Google Analytics learning
     - NVIDIA developer learning and activities
     - HP resume, interview, and critical-thinking training
     - Microsoft Power BI Beginners
     - HCL GUVI Blockchain
     - Simplilearn Prompt Engineering Applications
     - National Symposium: English in Digital World — 2nd Prize
     - Science Expo: Wireless Power Transfer — 3rd Prize
     - Hackathon selection at M. Kumarasamy College of Engineering

8. **Workshops, Events & Activities (`TimelineSection.jsx`)**:
   - Chronological timeline featuring Codespace AI workshop, intercollegiate hackathons, hardware science expo, paper presentations, Skill Development Cell, and IPR Ignite Hub patent awareness.

9. **Machine Learning Career Roadmap (`RoadmapSection.jsx`)**:
   - Interactive milestones with checkable boxes.
   - Progress bar and percentage update automatically when milestones are checked.
   - Realistic target dates and study notes.

10. **Research & Innovation (`ResearchSection.jsx` & `ResearchModal.jsx`)**:
    - Highlights: Smart LPG Cylinder Monitoring, Fake URL Detection paper study, Ambulance Green Corridor Traffic Preemption, and EHV Substation anomaly detection.
    - Clear distinction between Research Idea, Experimental Study, and Smart City Proposal.
    - Abstract preview modal and downloadable document references.

---

## ✏️ How to Edit Your Portfolio Information

You can edit your portfolio in two ways:

### Method 1: Using the Built-In Admin Studio (No Code Needed)
1. Click the **"Edit Mode"** button in the top navbar.
2. The Studio modal will open with tabs:
   - **Profile & Bio**: Change your name, headline, education, college, email, GitHub/LinkedIn links, and bio.
   - **Projects**: Add a new project or delete existing projects.
   - **Skills**: Add new tools or adjust confidence levels.
   - **Certifications**: Add new verified credentials.
   - **Roadmap**: Add or check off career goals.
   - **Backup & Restore**: Export your data to a `.json` backup file or import a saved backup.
3. All changes are saved instantly to your browser's `localStorage`.

### Method 2: Editing the Source Data File
If you want to permanently update the default code data for git commits:
- Open `src/data/portfolioData.js`.
- Modify any object or field directly (all structured with clean comments).

---

## 📷 How to Upload Your Profile Photo, Certificates & Resume

### Profile Photo
1. Click the camera icon on the profile avatar card in the header (or in the Admin Studio under "Profile & Bio").
2. Select your photo (`.png`, `.jpg`, `.jpeg`, `.webp`).
3. The image is converted into a base64 data string and saved immediately.

### Custom Resume
1. Click the **"Resume"** button in the top navbar.
2. In the modal, click **"Upload Custom PDF"** to select your actual PDF resume file.
3. You can also click **"Print / Save PDF"** to use the built-in printable resume layout.

---

## 🌐 How to Deploy Online (Free)

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Sujitha's Portfolio"
   git branch -M main
   git remote add origin https://github.com/Suji436/<your-repo-name>.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **"New Project"**, select your repository, leave defaults (Framework Preset: Vite), and click **Deploy**.
4. Your portfolio will be live on a fast global URL like `https://sujitha-portfolio.vercel.app` in under 1 minute!

### Deploy to Netlify
1. Go to [netlify.com](https://netlify.com) and import your GitHub repository.
2. Set Build command to `npm run build` and Publish directory to `dist`.
3. Click **Deploy Site**.

### Deploy to GitHub Pages
1. In `vite.config.js`, set `base: '/<your-repo-name>/'`.
2. Run `npm run build`.
3. Deploy the `dist` folder to the `gh-pages` branch using `gh-pages` npm package.
