import type { Project, SkillCategory, EducationItem, CertificationItem, StatItem } from '../types';

export const personalInfo = {
  name: 'Ellendula Varshith',
  role: 'Information Technology Student & Aspiring Software Engineer',
  tagline: 'Passionate about building full-stack web applications, AI/ML solutions, and robust database architectures.',
  location: 'Hyderabad, India (Open to Relocation & Remote)',
  email: 'varshithellendula1@gmail.com',
  phone: '+91 9502332533',
  status: 'Seeking Entry-Level IT / Software Engineering Roles',
  summary: [
    "As an Information Technology student, I have gained strong practical knowledge in programming, web development, and database management.",
    "I am deeply passionate about learning new technologies and adapting to modern industry practices. I work well in collaborative team environments, enjoy sharing ideas, and take pride in structured problem-solving.",
    "Currently seeking an entry-level position where I can apply my technical skills in React, Spring Boot, Java, Python, and MySQL, gain hands-on industry experience, and contribute meaningfully to impactful software projects."
  ],
  socials: [
    { name: 'GitHub', url: 'https://github.com/Varshith2504', icon: 'Github' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/ellendula-varshith', icon: 'Linkedin' },
    { name: 'Email', url: 'mailto:varshithellendula1@gmail.com', icon: 'Mail' }
  ]
};

export const statsData: StatItem[] = [
  { label: 'B.Tech IT', value: '2023-Pres', numericValue: 2023, suffix: '', description: 'Anurag University' },
  { label: 'Core Projects', value: '2', numericValue: 2, suffix: '', description: 'React, Spring Boot & AI/ML' },
  { label: 'Industry Certifications', value: '3', numericValue: 3, suffix: '', description: 'Google Cloud, Infosys, Wipro' },
  { label: 'Intermediate Score', value: '81%', numericValue: 81, suffix: '%', description: 'Sri Chaitanya (MPC)' }
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Programming Languages',
    description: 'Languages for core software development, algorithmic logic, and web systems.',
    iconName: 'Code',
    skills: [
      { name: 'Java', description: 'Object-Oriented Development & Core Backend', icon: 'Coffee' },
      { name: 'Python', description: 'AI/ML, OCR Processing & Scripting', icon: 'Terminal' },
      { name: 'C Language', description: 'Low-level systems & Data Structures', icon: 'Cpu' },
      { name: 'HTML5 & CSS3', description: 'Semantic, Responsive Modern Web Layouts', icon: 'Layout' },
      { name: 'JavaScript & React', description: 'Dynamic User Interfaces & Component SPAs', icon: 'Atom' }
    ]
  },
  {
    category: 'Databases & Tools',
    description: 'Relational database systems, frameworks, and developer tooling.',
    iconName: 'Server',
    skills: [
      { name: 'MySQL', description: 'Relational Database Design & SQL Queries', icon: 'Database' },
      { name: 'Spring Boot (STS)', description: 'Enterprise REST APIs & JPA Backend', icon: 'Server' },
      { name: 'Git & GitHub', description: 'Version Control, Code Hosting & Team Workflow', icon: 'GitBranch' },
      { name: 'VS Code', description: 'Primary Development Environment', icon: 'Laptop' }
    ]
  },
  {
    category: 'Core Concepts',
    description: 'Computer science principles essential for clean, scalable, and optimized software.',
    iconName: 'Brain',
    skills: [
      { name: 'OOPs Concepts', description: 'Encapsulation, Inheritance, Polymorphism, Abstraction', icon: 'Boxes' },
      { name: 'DBMS', description: 'Database Schema, Normalization, Transactions & ACID', icon: 'Database' },
      { name: 'Data Structures', description: 'Arrays, Linked Lists, Trees, Graphs, Sorting & Searching', icon: 'Layers' },
      { name: 'REST APIs', description: 'Client-Server Architecture & HTTP Methods', icon: 'Zap' }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: 'collab-hub',
    title: 'Student Team Collaboration Portal (Collab Hub)',
    category: 'Full Stack & Web',
    tagline: 'A unified student project collaboration platform with real-time tracking and team management.',
    description: 'Built Collab Hub, a student collaboration platform using React and Spring Boot (STS) with MySQL for project creation, team formation, and member management.',
    longDescription: 'Collab Hub solves the challenge of finding team members and coordinating academic projects in university environments. Built with a responsive React frontend and a robust Spring Boot backend with JPA and MySQL, enabling seamless team registration, task assignment, role permissions, and project progress tracking.',
    tags: ['React', 'Spring Boot', 'Spring Tool Suite (STS)', 'JPA', 'MySQL', 'REST APIs', 'CSS3'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
    metrics: [
      { label: 'Backend Stack', value: 'Spring Boot' },
      { label: 'Database', value: 'MySQL + JPA' },
      { label: 'Frontend', value: 'React SPA' }
    ],
    features: [
      'Built Collab Hub, a student project collaboration platform using React and Spring Boot (STS)',
      'Developed features for seamless project creation, team joining, and member management',
      'Integrated REST APIs with Spring Boot, JPA, and MySQL for secure, reliable backend operations',
      'Designed a responsive, intuitive React user interface for smooth project collaboration and tracking'
    ],
    liveUrl: 'https://github.com/Varshith2504/collabhub',
    githubUrl: 'https://github.com/Varshith2504/collabhub',
    featured: true
  },
  {
    id: 'expense-vision',
    title: 'Expense Vision — OCR Receipt Processing & Fraud Detection',
    category: 'AI & Machine Learning',
    tagline: 'Intelligent financial document analyzer using OCR text extraction and AI-driven fraud detection.',
    description: 'Developed Expense Vision using React and Python for smart expense and financial document analysis, OCR-based data extraction, bill verification, and fraud detection.',
    longDescription: 'Expense Vision leverages optical character recognition (OCR) and machine learning heuristics to automatically parse receipts, invoices, and expense bills. The system verifies authenticity, detects tampered or duplicated receipts, analyzes spending trends, and generates structured expense reports for finance audits.',
    tags: ['Python', 'React', 'OCR', 'Machine Learning', 'Data Extraction', 'Fraud Detection', 'REST APIs'],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop',
    metrics: [
      { label: 'Core Engine', value: 'Python + OCR' },
      { label: 'Detection', value: 'AI Tamper Heuristics' },
      { label: 'Interface', value: 'Interactive React' }
    ],
    features: [
      'Developed Expense Vision using React and Python for smart expense and financial document analysis',
      'Built automated OCR-based data extraction, expense tracking, and verification of uploaded bills/documents',
      'Applied AI/ML techniques to detect tampering, analyze spending data, and improve fraud identification',
      'Designed an interactive user interface for bill upload, dynamic report generation, and analysis tracking'
    ],
    liveUrl: 'https://github.com/Varshith2504',
    githubUrl: 'https://github.com/Varshith2504',
    featured: true
  }
];

export const educationData: EducationItem[] = [
  {
    id: 'edu-1',
    institution: 'Anurag University',
    degree: 'Bachelor of Technology in Information Technology',
    period: '2023 — Present',
    score: '6.7 / 10',
    scoreLabel: 'CGPA',
    description: 'Pursuing Bachelor of Technology in Information Technology, focusing on software engineering principles, database systems, object-oriented programming, data structures, and web technologies.',
    highlights: [
      'Core coursework: Data Structures & Algorithms, Database Management Systems (DBMS), Object-Oriented Programming (Java/Python), Operating Systems, Computer Networks.',
      'Active developer building full-stack and AI-enabled projects such as Collab Hub and Expense Vision.'
    ]
  },
  {
    id: 'edu-2',
    institution: 'Sri Chaitanya Junior College',
    degree: 'Intermediate (SSC) — MPC (Mathematics, Physics, Chemistry)',
    period: '2021 — 2023',
    score: '81%',
    scoreLabel: 'Percentage',
    description: 'Completed higher secondary education with a strong foundation in Mathematics, Physics, and Chemistry, cultivating analytical and quantitative problem-solving abilities.',
    highlights: [
      'Achieved 81% aggregate score in Mathematics, Physics, and Chemistry.',
      'Developed strong analytical and computational foundations.'
    ]
  }
];

export const certificationsData: CertificationItem[] = [
  {
    id: 'cert-1',
    title: 'Fundamentals of Python Programming',
    issuer: 'INFOSYS',
    date: 'Certified',
    icon: 'Terminal',
    description: 'Comprehensive certification covering Python core syntax, data structures, functions, modules, file handling, and algorithmic problem solving.'
  },
  {
    id: 'cert-2',
    title: 'Artificial Intelligence & Machine Learning',
    issuer: 'WIPRO FUTURE SKILLS',
    date: 'Certified',
    icon: 'Cpu',
    description: 'Certified in fundamental concepts of AI and Machine Learning, covering supervised/unsupervised learning, data preprocessing, model evaluation, and predictive analytics.'
  },
  {
    id: 'cert-3',
    title: 'Introduction to Generative AI',
    issuer: 'GOOGLE CLOUD',
    date: 'Certified',
    icon: 'Sparkles',
    description: 'Foundational certification from Google Cloud covering Large Language Models (LLMs), Generative AI fundamentals, prompt design, and cloud AI application ecosystems.'
  }
];
