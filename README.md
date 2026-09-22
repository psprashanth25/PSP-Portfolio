# P.S. Prashanth — Premium 3D Developer Portfolio

> An interactive, production-grade 3D personal software engineering portfolio engineered for **P.S. Prashanth** (`psprashanth25`). Built with **React 19**, **TypeScript**, **Vite**, **Three.js**, and a custom dark-mode glassmorphic design system.

[![Deployment Ready](https://img.shields.io/badge/Production-Ready-emerald?style=flat-square&logo=vercel)](https://github.com/psprashanth25)
[![React 19](https://img.shields.io/badge/React-19.0-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript 5.7](https://img.shields.io/badge/TypeScript-5.7-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-0.174-black?style=flat-square&logo=three.js)](https://threejs.org/)
[![Vite 6](https://img.shields.io/badge/Vite-6.2-purple?style=flat-square&logo=vite)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-slate?style=flat-square)](LICENSE)

---

## 🌐 Overview & Engineering Philosophy

This portfolio transforms standard developer showcases into an immersive, technically credible, and recruiter-friendly experience. Designed from the ground up to reflect actual software engineering rigor rather than generic student templates:

- **100% Authentic Technical Data**: Every project description, architectural diagram, and dataset citation is derived directly from verified GitHub source repositories.
- **Interactive 3D WebGL Core**: An interactive digital software architecture matrix with real-time pointer parallax, orbiting technology satellites, and ambient data particle fields.
- **Micro-Interaction System**: 3D card tilt with specular glare, smooth section navigation with active scrollspy, and deep-dive architectural modals for complex projects.
- **Instant Resume Integration**: Verified `resume.pdf` available for one-click in-browser viewing or direct download.

---

## ✨ Key Portfolio Sections

1. **Hero**: Animated typography, status indicator for internship opportunities, interactive 3D WebGL canvas, social handles, and direct CTAs.
2. **About**: Academic record at **VIT-AP University** (8.61 / 10 CGPA), engineering principles, key metrics, and an interactive terminal developer profile (`identity.json`).
3. **Skills Matrix**: Categorized across Programming Languages, Frontend, Backend & APIs, Databases & Storage, AI/ML & Computer Vision, and DevOps/Testing. Zero fake percentage meters.
4. **Verified Projects**: Interactive 3D tilt cards with category filtering (*Full-Stack*, *Systems & Automation*, *AI & Computer Vision*, *Distributed Systems*) and deep architectural drill-down drawers.
5. **Academic & Engineering Journey**: Interactive timeline highlighting academic milestones (Integrated M.Tech VIT-AP, Class XII MPC with 861/1000, Class X with 577/600) and major engineering milestones.
6. **Industry Certifications**: Validated credentials from **Oracle** (*Generative AI Professional 2025*, *Foundations Associate 2025*), **Hedera**, and **Rinex Technologies**.
7. **GitHub Ecosystem**: Verified public repository activity, architectural highlights, and direct source links.
8. **Resume & PDF Viewer**: In-browser document viewer with instant PDF download functionality.
9. **Contact & Message Composer**: Verified communication channels (Email, LinkedIn, GitHub) and an interactive client-side email composer.

---

## 🚀 Featured GitHub Projects

| Project | Primary Stack | Highlights | Repository / Demo |
| :--- | :--- | :--- | :--- |
| **Pulse Analytics** | React 19, TypeScript, TanStack Virtual, Recharts | Single-pass O(N) client-side data engine rendering 60,000+ records at 60fps with live V8 heap telemetry and 29 passing tests. | [GitHub](https://github.com/psprashanth25/pulse-analytics) • [Live Demo](https://pulse-analytics-wine.vercel.app) |
| **Mail-Manager** | Python 3.10+, Gmail API v1, Telegram Bot API, openpyxl | Automated dual Gmail monitoring daemon with multi-day offline catch-up scanning, deep Excel attachment parsing, and 24 passing unit tests. | [GitHub](https://github.com/psprashanth25/Mail-Manager) |
| **BudgetBuddy** | React 19, Node.js, Express, MongoDB Atlas, jsPDF | Full-stack MERN hostel expense tracker with dual-mode balance protection, printable A4 PDF statements, and 42 passing tests. | [GitHub](https://github.com/psprashanth25/budgetbuddy) • [Live Demo](https://budgetbuddy-khaki-nine.vercel.app) |
| **SchemeAI** | React 19, FastAPI, XGBoost, MongoDB, OpenAI API | Civic tech microservice platform pairing an XGBoost ML model (345k synthetic profiles, 99.86% accuracy) with client-side fallback. | [GitHub](https://github.com/psprashanth25/Government-Scheme-Checker) |
| **Object Detection** | Python 3.11, PyTorch, YOLOv5s, Streamlit, OpenCV | Multi-source computer vision pipeline (images, videos, live webcam) with real-time sidebar hyperparameter tuning across 80 COCO classes. | [GitHub](https://github.com/psprashanth25/Object-Detection-System) |
| **Allo Assignment** | Next.js, TypeScript, Prisma ORM, PostgreSQL | Multi-warehouse inventory reservation system with atomic state transitions and overselling protection. | [GitHub](https://github.com/psprashanth25/allo-assignment) |

---

## 🛠️ Technology Stack

- **Core & Runtime**: [React 19](https://react.dev/), [TypeScript 5.7](https://www.typescriptlang.org/)
- **Bundler & Tooling**: [Vite 6](https://vitejs.dev/) with Rollup chunk splitting
- **3D Graphics**: [Three.js 0.174](https://threejs.org/) (Custom WebGL particle matrix & polyhedral core)
- **Styling**: Vanilla CSS Design System with CSS variables, Glassmorphism, and responsive grid layouts
- **Icons**: [Lucide React](https://lucide.dev/) & Custom SVG icons
- **Fonts**: Google Fonts (`Outfit`, `JetBrains Mono`, `Inter`)

---

## 📁 Project Structure

```text
psp-portfolio/
├── public/
│   ├── avatar.jpg                 # Profile photo asset
│   ├── favicon.svg                # Custom geometric brand monogram
│   └── resume.pdf                 # Verified resume document
├── src/
│   ├── components/
│   │   ├── 3d/
│   │   │   ├── ArchitectureCore3D.tsx   # Three.js interactive 3D WebGL core
│   │   │   └── Fallback3D.tsx           # CSS fallback for non-WebGL/reduced-motion
│   │   ├── common/
│   │   │   ├── CardTilt.tsx             # 3D tilt micro-interaction with specular glare
│   │   │   ├── Footer.tsx               # Footer with links and scroll-to-top
│   │   │   ├── Icons.tsx                # Brand SVG icons (GitHub, LinkedIn)
│   │   │   ├── Navbar.tsx               # Sticky glassmorphic navbar with scrollspy
│   │   │   ├── ProjectModal.tsx         # Deep technical architecture drawer
│   │   │   └── ResumeModal.tsx          # Dedicated in-browser PDF viewer modal
│   │   └── sections/
│   │       ├── About.tsx                # Academic history & interactive terminal
│   │       ├── Certifications.tsx       # Oracle, Hedera & Rinex credentials
│   │       ├── Contact.tsx              # Contact info & message composer
│   │       ├── GithubSection.tsx        # Open-source repository activity
│   │       ├── Hero.tsx                 # Hero stage with 3D canvas and CTAs
│   │       ├── Journey.tsx              # Milestone timeline
│   │       ├── Projects.tsx             # Filterable project grid with 3D cards
│   │       └── Skills.tsx               # Categorized technology stack
│   ├── data/
│   │   ├── certifications.ts        # Strongly-typed certifications data
│   │   ├── journey.ts               # Strongly-typed milestone timeline
│   │   ├── projects.ts              # Strongly-typed verified project database
│   │   └── skills.ts                # Categorized skill definitions
│   ├── types/
│   │   └── index.ts                 # TypeScript interfaces
│   ├── App.tsx                      # Root application layout
│   ├── index.css                    # Master CSS design system & tokens
│   └── main.tsx                     # React 19 application mount
├── index.html                       # SEO metadata, Open Graph tags & Google Fonts
├── package.json                     # Dependencies and scripts
├── tsconfig.json                    # Strict TypeScript configuration
├── tsconfig.node.json
└── vite.config.ts                   # Optimized Vite bundler configuration
```

---

## 💻 Local Development & Setup

### Prerequisites
- **Node.js**: Version `20.x` or later (tested on Node v24)
- **npm**: Version `10.x` or later

### Installation
Clone the repository and install the dependencies:
```bash
git clone https://github.com/psprashanth25/PSP-Portfolio.git
cd PSP-Portfolio
npm install
```

### Start Development Server
```bash
npm run dev
```
The local server will start at `http://localhost:3000`.

### Typecheck & Lint
```bash
npm run typecheck
```

### Build for Production
```bash
npm run build
```
Generates an optimized production bundle in the `dist/` directory with vendor code-splitting (`vendor-three`, `vendor-react`, `vendor-icons`).

### Preview Production Build
```bash
npm run preview
```

---

## 🚀 Deployment

The project is configured for one-click deployment on **Vercel** or **Netlify**:

### Deploy to Vercel
1. Push code to your GitHub repository.
2. Import repository on [Vercel](https://vercel.com).
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`.
5. Output Directory: `dist`.
6. Click **Deploy**.

---

## 👤 Author & Contact

**P. S. Prashanth**
- **Degree**: Integrated M.Tech in Software Engineering, VIT-AP University (2022–2027)
- **CGPA**: 8.61 / 10
- **Email**: [p.s.prashanth25@gmail.com](mailto:p.s.prashanth25@gmail.com)
- **LinkedIn**: [linkedin.com/in/p-s-prashanth-2988a7387](https://www.linkedin.com/in/p-s-prashanth-2988a7387/)
- **GitHub**: [github.com/psprashanth25](https://github.com/psprashanth25)

---

## 📄 License
This project is open source and available under the [MIT License](LICENSE).
