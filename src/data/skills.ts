import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    category: 'Languages',
    description: 'Core languages utilized for system architecture, backend logic, and algorithms.',
    skills: [
      { name: 'Java', level: 'Core / OOP / Academic', highlight: true },
      { name: 'JavaScript (ES6+)', level: 'Advanced / Full-Stack', highlight: true },
      { name: 'TypeScript', level: 'Strict Typing / Modern', highlight: true },
      { name: 'Python', level: 'FastAPI / Automation / ML', highlight: true },
      { name: 'SQL', level: 'Relational Queries & DDL', highlight: false },
      { name: 'C / C++', level: 'Systems & Data Structures', highlight: false }
    ]
  },
  {
    category: 'Frontend',
    description: 'Modern component architectures, state management, and high-performance UI engines.',
    skills: [
      { name: 'React.js (React 19)', level: 'Component Hierarchy / Hooks', highlight: true },
      { name: 'Vite', level: 'Build Tooling & Fast HMR', highlight: true },
      { name: 'HTML5 & Semantic Web', level: 'Accessible Markup', highlight: false },
      { name: 'CSS3 & Vanilla CSS', level: 'Custom Design Systems', highlight: true },
      { name: 'Tailwind CSS', level: 'Utility-First Styling', highlight: true },
      { name: 'TanStack Virtual', level: 'DOM Windowing / 60k+ Rows', highlight: true },
      { name: 'Recharts', level: 'Data Visualizations', highlight: false },
      { name: 'Three.js', level: '3D WebGL Graphics', highlight: true }
    ]
  },
  {
    category: 'Backend & APIs',
    description: 'Scalable server microservices, RESTful design, authentication, and background engines.',
    skills: [
      { name: 'Node.js', level: 'Runtime & Asynchronous I/O', highlight: true },
      { name: 'Express.js', level: 'REST APIs & Middleware', highlight: true },
      { name: 'Python FastAPI', level: 'High-Performance Microservices', highlight: true },
      { name: 'RESTful API Architecture', level: 'Resource Contracts & Statuses', highlight: true },
      { name: 'Google Gmail API (v1)', level: 'OAuth 2.0 & Email Automation', highlight: true },
      { name: 'JWT & Nodemailer', level: 'Session Tokens & OTP Auth', highlight: false },
      { name: 'Telegram Bot API', level: 'Mobile Notification Pipelines', highlight: false }
    ]
  },
  {
    category: 'Databases',
    description: 'Document databases, cloud database clusters, and ORM abstractions.',
    skills: [
      { name: 'MongoDB & Mongoose', level: 'Schema Design & Aggregations', highlight: true },
      { name: 'MongoDB Atlas', level: 'Cloud Replica Sets', highlight: false },
      { name: 'PostgreSQL', level: 'Relational Integrity', highlight: true },
      { name: 'Supabase', level: 'Cloud Postgres & Auth', highlight: false },
      { name: 'Prisma ORM', level: 'Type-Safe Data Modeling', highlight: false }
    ]
  },
  {
    category: 'AI / ML',
    description: 'Applied machine learning, neural networks, and automated inference.',
    skills: [
      { name: 'PyTorch', level: 'Deep Learning & Tensors', highlight: true },
      { name: 'YOLOv5 (Ultralytics)', level: 'Object Detection & Tracking', highlight: true },
      { name: 'OpenCV (cv2)', level: 'Image & Video Frame Processing', highlight: true },
      { name: 'XGBoost Classifier', level: 'Structured Data Classification', highlight: true },
      { name: 'OpenAI API & RAG', level: 'LLM Prompting & Embeddings', highlight: false },
      { name: 'Streamlit', level: 'ML Interactive Interfaces', highlight: false }
    ]
  },
  {
    category: 'Cloud / DevOps',
    description: 'Cloud hosting, containerization principles, and deployment pipelines.',
    skills: [
      { name: 'Vercel', level: 'Frontend Edge Deployments', highlight: true },
      { name: 'Render', level: 'Backend Cloud Services', highlight: true },
      { name: 'Docker Fundamentals', level: 'Containerization', highlight: false },
      { name: 'Linux / Shell Scripting', level: 'PowerShell & Bash Automation', highlight: false },
      { name: 'CI/CD Pipelines', level: 'Automated Workflows', highlight: false }
    ]
  },
  {
    category: 'Tools',
    description: 'Developer tooling, version control, and automated test runners.',
    skills: [
      { name: 'Git & GitHub', level: 'Version Control & Workflows', highlight: true },
      { name: 'Postman', level: 'API Testing & Documentation', highlight: true },
      { name: 'Vitest & pytest', level: 'Automated Unit Test Suites', highlight: true },
      { name: 'VS Code & Tooling', level: 'Developer Environment', highlight: false }
    ]
  }
];
