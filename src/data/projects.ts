import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'pulse-analytics',
    slug: 'pulse-analytics',
    title: 'Pulse Analytics',
    subtitle: 'High-Performance Client-Side Telemetry & Data Visualization Platform',
    category: 'Full-Stack',
    featured: true,
    priority: 1,
    description:
      'A performance-focused client-side analytics platform engineered to explore, filter, aggregate, and visualize tens of thousands of records (60,000+ default dataset) entirely within the browser while maintaining a smooth 60fps interaction lifecycle.',
    problem:
      'Processing large datasets in client memory traditionally leads to UI freezing and dropped frames due to multi-pass array iterations (.filter, .map, .reduce), unthrottled DOM node bloat, and coupled context state that forces re-computations upon visual setting changes.',
    solution:
      'Designed an O(N) single-pass combined filtering and reduction algorithm with O(1) hash-map aggregators, integrated TanStack Virtual to mount only ~25 visible rows into the DOM, segregated context states (Settings, Filters, Data), added 300ms debounced searching, and built a live in-browser benchmark suite profiling real client CPU execution using native window.performance.now() and V8 heap telemetry.',
    keyImplementation:
      'Single-pass O(N) combined reduction algorithm with O(1) hash map accumulators, DOM virtualization mounting ~25 rows, and live V8 heap telemetry.',
    architecture: [
      'Single-Pass Combined Traversal: Simultaneous calculation of KPIs, time series, and distributions in a single pass',
      'Virtual DOM Windowing: TanStack Virtual mounts only ~25 visible rows in memory for 60,000+ records',
      'Decoupled Context Segregation: Independent SettingsContext, FilterContext, and DataContext prevent cascading re-renders',
      'Telemetry Engine: Real-time V8 heap footprint (performance.memory) and microsecond loop profiling'
    ],
    technologies: [
      'React 19',
      'TypeScript 5.9',
      'Vite 8.2',
      'Tailwind CSS 3.4',
      'TanStack Table',
      'TanStack Virtual',
      'Recharts',
      'Vitest (29 Passing Tests)'
    ],
    features: [
      'Executive KPI Grid with true mathematical period-over-period delta indicators',
      'Interactive gradient area charts, regional breakdown bars, and device share donuts',
      'Virtualized data explorer rendering 60,000+ records with density switching and CSV export',
      'Coordinated elevated z-index filter controls with multi-select chips and zero clipping',
      'Live client-side benchmarking runner comparing naive multi-pass vs single-pass reduction',
      'Full style parity dark and light mode themes'
    ],
    githubUrl: 'https://github.com/psprashanth25/pulse-analytics',
    demoUrl: 'https://pulse-analytics-wine.vercel.app',
    stats: [
      { label: 'Dataset Scale', value: '60,000+ Records' },
      { label: 'Unit Tests', value: '29/29 Passing' },
      { label: 'Target Frame Rate', value: '60 FPS' },
      { label: 'DOM Mounted Rows', value: '~25 Rows' }
    ],
    status: 'Production Live Demo',
    tags: ['React 19', 'TypeScript', 'Data Visualization', 'DOM Virtualization', 'Performance Profiling'],
    accentColor: '#38bdf8'
  },
  {
    id: 'mail-manager',
    slug: 'mail-manager',
    title: 'Mail-Manager / PlacementMonitor',
    subtitle: 'Dual-Mailbox Gmail Monitoring Engine & Automated Telegram Alert Dispatcher',
    category: 'Systems & Automation',
    featured: true,
    priority: 2,
    description:
      'An automated, dual-mailbox Gmail monitoring engine designed to track time-critical placement eligibility notices, shortlist updates, and recruitment drive schedules using the official Google Gmail API and Telegram Bot API.',
    problem:
      'Placement and recruitment notifications can be distributed across multiple Gmail accounts, while important shortlist information may be buried inside Excel attachments. Missing an email or being offline can result in missed opportunities.',
    solution:
      'An automated dual-mailbox Gmail-to-Telegram monitoring system that performs catch-up scanning, persistent checkpointing, Excel attachment parsing, deterministic placement relevance classification, duplicate prevention, and structured Telegram alerts.',
    keyImplementation:
      'Intelligent startup catch-up scan across multi-day offline periods, cell-by-cell .xlsx/.xls parsing, deterministic two-stage relevance filtering, and Telegram Bot push dispatch.',
    architecture: [
      'OAuth 2.0 Desktop Authorization with official read-only Gmail API v1 scope (gmail.readonly)',
      'Intelligent Startup Catch-Up Scanner recovering all messages received while the host system was offline',
      'Atomic JSON Checkpoint State: data/monitor_state.json and data/processed_messages.json preventing duplicates',
      'Deep Spreadsheet Attachment Extractor: downloads and inspects .xlsx and .xls tables cell-by-cell',
      'Two-Stage Deterministic Classifier isolating authentic placement drives from administrative noise',
      'Continuous 60-Second Polling Loop with overlap query buffers and IST timestamped structured logging'
    ],
    technologies: [
      'Python 3.10+',
      'Official Google Gmail API (v1)',
      'Telegram Bot API',
      'OAuth 2.0',
      'openpyxl',
      'xlrd',
      'pytest (24 Passing Tests)',
      'python-dotenv'
    ],
    features: [
      'Dual Gmail mailbox concurrent monitoring (personal eligibility + college shortlists)',
      'Automatic offline recovery: dynamically calculates checkpoint window up to current time',
      'Direct cell-by-cell spreadsheet inspection across multi-sheet workbooks without Microsoft Excel',
      'Elimination of false-positive alerts from security warnings or administrative circulars',
      'Automated extraction of company names, reporting dates, interview slots, venues, and contact links',
      'Instant structured mobile push alerts formatted with emojis directly to Telegram',
      '24 automated unit tests verifying multi-day recovery, deduplication, and error isolation'
    ],
    githubUrl: 'https://github.com/psprashanth25/Mail-Manager',
    stats: [
      { label: 'Mailboxes Monitored', value: '2 Concurrently' },
      { label: 'Polling Interval', value: '60 Seconds' },
      { label: 'Automated Tests', value: '24 Passing' },
      { label: 'Spreadsheet Support', value: '.xlsx & .xls' }
    ],
    status: 'Active Backend Engine',
    tags: ['Python', 'Gmail API', 'Telegram Bot', 'OAuth 2.0', 'Automation', 'pytest'],
    accentColor: '#10b981'
  },
  {
    id: 'budgetbuddy',
    slug: 'budgetbuddy',
    title: 'BudgetBuddy',
    subtitle: 'Student-Centric Hostel Expense & Pocket Money Ledger (MERN Stack)',
    category: 'Full-Stack',
    featured: true,
    priority: 3,
    description:
      'A modern, full-stack personal finance and pocket-money management web application tailored specifically for college and hostel students to manage living expenses, prevent overdrafting, and protect their bank reserves.',
    problem:
      'Hostel students balance irregular parental pocket-money transfers against recurring mess, travel, and campus living expenses. Traditional personal finance tools assume fixed corporate salaries, have rigid enterprise workflows, and fail to differentiate spendable allowance from total bank balance safety buffers.',
    solution:
      'Engineered a student-centric financial ledger featuring dual-mode analytics (Spendable Pocket Money vs Total Bank Balance buffer), hierarchical expense categorization with protected defaults and custom subcategories, strict date-restricted entry validation (blocking future dates), printable client-side executive A4 PDF statement generation, and secure JWT authentication with 6-digit email OTP verification via Nodemailer.',
    keyImplementation:
      'Dual-mode ledger mathematics protecting bank balance reserves, protected category hierarchies, client-side jsPDF A4 statement engine, and JWT email OTP verification.',
    architecture: [
      'Decoupled Cloud Architecture: React 19 SPA deployed on Vercel communicating with Express REST API on Render',
      'Cloud MongoDB Atlas Cluster with strict Mongoose schemas for users, expenses, categories, and audit trails',
      'Dual-Mode Ledger Engine separating dynamic monthly pocket allowance from permanent bank safety reserves',
      'Client-Side Executive Statement Engine rendering printable A4 PDF statements via jsPDF',
      'Secure Authentication Pipeline: JWT token generation paired with 6-digit email OTP delivery',
      'Continuous Production Health Monitoring at API root verifying database connection and SMTP readiness'
    ],
    technologies: [
      'React 19',
      'Vite',
      'Tailwind CSS',
      'Recharts',
      'jsPDF',
      'Node.js 20+',
      'Express.js',
      'MongoDB Atlas',
      'JWT Auth',
      'Nodemailer',
      '42 Automated Tests'
    ],
    features: [
      'Dual-mode financial dashboard tracking spendable pocket money alongside core bank balance',
      'Hierarchical category management with protected system defaults and user-defined subcategories',
      'Real-time search, multi-column sorting, and category-filtered expense transaction history',
      'Date validation barrier preventing accidental future transaction entry',
      'Client-side executive A4 PDF statement export with formatted audit totals',
      'Email OTP verification and pre-seeded instant demo account credentials',
      'Recharts category distributions and monthly spending trend visualizations'
    ],
    githubUrl: 'https://github.com/psprashanth25/budgetbuddy',
    demoUrl: 'https://budgetbuddy-khaki-nine.vercel.app',
    stats: [
      { label: 'Automated Tests', value: '42 Passing' },
      { label: 'Frontend Host', value: 'Vercel' },
      { label: 'Backend Host', value: 'Render' },
      { label: 'Database', value: 'MongoDB Atlas' }
    ],
    status: 'Production Live App',
    tags: ['React 19', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
    accentColor: '#6366f1'
  },
  {
    id: 'government-scheme-checker',
    slug: 'government-scheme-checker',
    title: 'SchemeAI — Government Scheme Checker',
    subtitle: 'Full-Stack Civic Tech Platform with Dual XGBoost & Deterministic Eligibility Engine',
    category: 'Full-Stack',
    featured: true,
    priority: 4,
    description:
      'A full-stack AI-enabled web application designed to help Indian citizens discover, evaluate, and apply for government welfare schemes, scholarships, subsidies, and social programs tailored to their socioeconomic profile.',
    problem:
      'Over 115+ Central and State welfare programs exist in India, but citizens face severe information asymmetry, fragmented ministerial portals, complex qualification criteria (caste, income caps, landholding, age), and language barriers that exclude non-English speakers.',
    solution:
      'Built a three-tier microservice architecture: a guided 6-step questionnaire with auto-saving localStorage drafts, a dual eligibility engine pairing a high-performance Python FastAPI microservice running an XGBoost classification model (trained on 345,000 synthetic profiles with 99.86% test accuracy) with a client-side TypeScript rule evaluation engine for offline resilience, a context-aware OpenAI API chatbot (ChatGPT-4o-mini), multilingual support across 6 Indian languages, and one-click PDF report generation.',
    keyImplementation:
      'Dual eligibility engine combining a trained XGBoost microservice (345k profiles, 99.86% accuracy) with client-side fallback rule execution and RAG chatbot assistance.',
    architecture: [
      'Frontend Client: React 19, TypeScript, Vite, Tailwind CSS v4, and i18next multilingual engine',
      'Backend REST API: Node.js and Express server handling scheme catalogs, auth, and OpenAI proxying',
      'Machine Learning Microservice: Python FastAPI service running a trained XGBoost Classifier (345k profiles)',
      'Resilient Offline Rule Engine: TypeScript client-side multi-criteria constraint solver as an automatic fallback',
      'Persistence: MongoDB database storing verified scheme criteria, user accounts, and feedback analytics',
      'Document Generation: jsPDF creating structured eligibility certificates with official application links'
    ],
    technologies: [
      'React 19',
      'TypeScript 5.6',
      'Vite',
      'Tailwind CSS v4',
      'Node.js',
      'Express.js',
      'Python 3.11',
      'FastAPI',
      'XGBoost Classifier',
      'MongoDB',
      'OpenAI API Proxy',
      'i18next (6 Languages)'
    ],
    features: [
      '6-step guided eligibility flow capturing demographics, income, education, and location',
      'Dual eligibility evaluation combining ML predictions with deterministic constraint checking',
      'Context-aware AI Scheme Assistant chatbot with quick topic pills for farmers, scholarships, and loans',
      'Comprehensive scheme catalog of 115+ programs with categorized match scores',
      'Multilingual localization across English, Hindi, Telugu, Kannada, Malayalam, and Tamil',
      'Single-click downloadable PDF eligibility reports with direct portal application links',
      'Full administrative dashboard for scheme authoring, FAQ moderation, and platform statistics'
    ],
    githubUrl: 'https://github.com/psprashanth25/Government-Scheme-Checker',
    stats: [
      { label: 'ML Model Scale', value: '345,000 Profiles' },
      { label: 'Model Test Accuracy', value: '99.86%' },
      { label: 'Schemes Cataloged', value: '115+ Welfare Schemes' },
      { label: 'Languages Supported', value: '6 Indian Languages' }
    ],
    status: 'Verified Repository',
    tags: ['React 19', 'FastAPI', 'XGBoost', 'Python', 'TypeScript', 'AI Assistant'],
    accentColor: '#f59e0b'
  },
  {
    id: 'object-detection-system',
    slug: 'object-detection-system',
    title: 'Real-Time Object Detection System',
    subtitle: 'Computer Vision Inference Pipeline with Dynamic Hyperparameter Tuning',
    category: 'AI & Computer Vision',
    featured: false,
    priority: 5,
    description:
      'An end-to-end computer vision application designed for multi-class object localization, classification, and tracking across static images, video files, and live webcam feeds using YOLOv5 and PyTorch.',
    problem:
      'Real-time object localization across varied media streams typically requires complicated deep learning deployment pipelines, manual model reloading when adjusting threshold parameters, and lacks real-time performance telemetry for inference latency.',
    solution:
      'Engineered an interactive Streamlit application integrating Ultralytics YOLOv5s neural network weights (14.1 MB) pre-trained on Microsoft COCO (80 classes). Built multi-source pipelines supporting images (.jpg, .png), videos (.mp4, .avi, .mov), and live webcam streams with dynamic sidebar sliders to adjust Confidence and IoU thresholds on the fly without service restarts, along with real-time telemetry (detection count, FPS, inference latency in ms) and coordinate tabular exports.',
    keyImplementation:
      'Multi-source ingestion pipeline running YOLOv5s weights on Microsoft COCO (80 classes) with real-time dynamic slider hyperparameter controls and millisecond latency timers.',
    architecture: [
      'Inference Engine: PyTorch 2.0+ running YOLOv5s deep convolutional neural network checkpoint',
      'Computer Vision Pipeline: OpenCV (cv2) and Pillow (PIL) for frame extraction and bounding box drawing',
      'User Interface: Streamlit web framework with reactive sidebar parameter state binding',
      'Dataset Baseline: Microsoft COCO 2017 dataset covering 80 standard common object categories',
      'Inference Telemetry: Dynamic latency timer calculating ms per frame and detection frequency'
    ],
    technologies: [
      'Python 3.11+',
      'PyTorch 2.0+',
      'YOLOv5 (Ultralytics)',
      'Streamlit',
      'OpenCV (cv2)',
      'Pillow (PIL)',
      'Pandas',
      'NumPy',
      'MS COCO 2017 Dataset'
    ],
    features: [
      'Multi-source ingestion pipeline for uploaded images, pre-recorded video files, and live webcams',
      'Dynamic Confidence and IoU threshold tuning via reactive sidebar without reloading model weights',
      'Real-time telemetry calculating total detections, distinct classes, average confidence, and latency',
      'Tabular export of normalized bounding box coordinates (xmin, ymin, xmax, ymax)',
      'One-click download for processed annotated images and video output files',
      'Local offline model weight caching with automated remote fallback'
    ],
    githubUrl: 'https://github.com/psprashanth25/Object-Detection-System',
    stats: [
      { label: 'Object Classes', value: '80 COCO Classes' },
      { label: 'Model Weights', value: '14.1 MB (yolov5s)' },
      { label: 'Input Channels', value: 'Images, Video, Webcam' }
    ],
    status: 'Verified Repository',
    tags: ['Python', 'PyTorch', 'YOLOv5', 'OpenCV', 'Streamlit', 'Computer Vision'],
    accentColor: '#ec4899'
  },
  {
    id: 'allo-assignment',
    slug: 'allo-assignment',
    title: 'Multi-Warehouse Inventory Reservation System',
    subtitle: 'Distributed E-Commerce Stock Allocation & Reservation Engine',
    category: 'Distributed Systems',
    featured: false,
    priority: 6,
    description:
      'A backend inventory reservation architecture engineered for multi-warehouse e-commerce platforms to manage stock availability, prevent overselling, and process reservations across regional fulfillment centers.',
    problem:
      'High-velocity e-commerce checkouts across distributed warehouses often suffer from race conditions, inventory overselling, and lack of stock isolation when multiple customers purchase the same SKU simultaneously.',
    solution:
      'Implemented clean REST APIs and database constraints using Next.js, Prisma ORM, PostgreSQL, and Supabase. The system validates stock availability per warehouse, transitions inventory states atomically to reserved status, and rolls back transactions if inventory thresholds are violated.',
    keyImplementation:
      'Multi-warehouse stock allocation endpoints with Prisma schema constraints and atomic inventory state transitions on PostgreSQL/Supabase.',
    architecture: [
      'Framework: Next.js API route handlers with TypeScript typing',
      'Database ORM: Prisma ORM with strict schema models for Warehouses, Products, and Stock Reservations',
      'Storage Layer: PostgreSQL hosted on Supabase cloud infrastructure',
      'State Transitions: Atomic stock reservation decrement and release logic'
    ],
    technologies: [
      'Next.js',
      'TypeScript',
      'Prisma ORM',
      'PostgreSQL',
      'Supabase',
      'REST APIs'
    ],
    features: [
      'Multi-warehouse inventory distribution and regional stock tracking',
      'Atomic stock reservation endpoints with capacity validation',
      'Automatic reserved stock tracking preventing overselling during traffic bursts',
      'Clean schema models and error isolation for insufficient inventory'
    ],
    githubUrl: 'https://github.com/psprashanth25/allo-assignment',
    stats: [
      { label: 'Architecture', value: 'Multi-Warehouse' },
      { label: 'ORM Layer', value: 'Prisma' },
      { label: 'Database', value: 'PostgreSQL / Supabase' }
    ],
    status: 'Verified Repository',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Supabase', 'REST APIs'],
    accentColor: '#a855f7'
  }
];
