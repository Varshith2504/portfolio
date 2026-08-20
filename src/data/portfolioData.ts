import type { PersonalInfo, SkillCategory, Project, EducationItem, CertificationItem, StatItem } from '../types';
import collabHubImg from '../assets/collab_hub.jpg';
import aiTripPlannerImg from '../assets/ai_trip_planner.png';
import expenseVisionImg from '../assets/expense_vision.png';

export const personalInfo: PersonalInfo = {
  name: 'Ellendula Varshith',
  title: 'Ellendula Varshith — Information Technology Student & Developer',
  role: 'Information Technology Student',
  status: 'Available for Entry-Level Roles & Internships',
  location: 'Hyderabad, India',
  email: 'varshithellendula1@gmail.com',
  phone: '+91 9502332533',
  github: 'https://github.com/Varshith2504',
  linkedin: 'https://linkedin.com/in/ellendula-varshith',
  tagline: 'Passionate B.Tech IT student at Anurag University with hands-on experience in Java, Python, React, Spring Boot, MySQL, and AI/ML applications.',
  summary: [
    'I am an Information Technology undergraduate student at Anurag University, Hyderabad, dedicated to building reliable software applications and exploring AI-driven solutions.',
    'My practical portfolio spans end-to-end full-stack web applications with React and Spring Boot, OCR document processing, machine learning heuristics, and relational database systems.',
    'I thrive in collaborative team environments, bring strong problem-solving skills, and am actively seeking entry-level IT engineering roles and development internships.'
  ]
};

export const statsData: StatItem[] = [
  { value: '6.7', label: 'B.Tech CGPA', description: 'Information Technology at Anurag University' },
  { value: '4+', label: 'Verified Certifications', description: 'Google Cloud AI, Infosys & Wipro' },
  { value: '3+', label: 'Practical Projects', description: 'Collab Hub, AI Trip Planner & OCR Expense Vision' },
  { value: '81%', label: 'Intermediate MPC', description: 'Sri Chaitanya Junior College' }
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
    image: collabHubImg,
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
    id: 'ai-trip-planner',
    title: 'AI Trip Planner — Smart Travel Itinerary Generator',
    category: 'AI & Machine Learning',
    tagline: 'Personalized AI-powered travel itinerary planning system with smart trip recommendations.',
    description: 'Developed an AI Trip Planner using React and Python that generates customized travel itineraries, destination recommendations, and daily activity schedules.',
    longDescription: 'AI Trip Planner leverages artificial intelligence to create automated, personalized travel plans. Users input destination preferences, budget constraints, travel dates, and interests, and the system dynamically generates comprehensive day-by-day itineraries, hotel options, local attractions, and route guidance.',
    tags: ['Python', 'React', 'AI/ML', 'REST APIs', 'Tailwind CSS', 'Travel Tech'],
    image: aiTripPlannerImg,
    metrics: [
      { label: 'Engine', value: 'AI Recommendation' },
      { label: 'Output', value: 'Dynamic Itineraries' },
      { label: 'Interface', value: 'React + Tailwind' }
    ],
    features: [
      'Built an AI Trip Planner using React and Python for intelligent travel itinerary generation',
      'Implemented smart recommendation logic for destination planning, budget estimation, and daily schedules',
      'Integrated dynamic map routes, hotel recommendations, and attraction highlights',
      'Designed a clean, responsive UI allowing travelers to customize and export trip plans seamlessly'
    ],
    liveUrl: 'https://github.com/Varshith2504',
    githubUrl: 'https://github.com/Varshith2504',
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
    image: expenseVisionImg,
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
      'Active developer building full-stack and AI-enabled projects such as Collab Hub, AI Trip Planner, and Expense Vision.'
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
    title: 'Certificate Program in Cloud Computing Engineering (Azure / AWS)',
    issuer: 'WIPRO FUTURE SKILLS',
    date: 'Certified',
    icon: 'Cloud',
    description: 'Specialized program covering Cloud Computing Architecture, AWS & Azure core services, virtual networking, cloud security, and scalable infrastructure.'
  },
  {
    id: 'cert-2',
    title: 'Fundamentals of Python Programming',
    issuer: 'INFOSYS',
    date: 'Certified',
    icon: 'Terminal',
    description: 'Comprehensive certification covering Python core syntax, data structures, functions, modules, file handling, and algorithmic problem solving.'
  },
  {
    id: 'cert-3',
    title: 'Artificial Intelligence & Machine Learning',
    issuer: 'WIPRO FUTURE SKILLS',
    date: 'Certified',
    icon: 'Cpu',
    description: 'In-depth program on Machine Learning algorithms, predictive modeling, data preprocessing, and artificial intelligence fundamentals.'
  },
  {
    id: 'cert-4',
    title: 'Introduction to Generative AI',
    issuer: 'GOOGLE CLOUD',
    date: 'Certified',
    icon: 'Sparkles',
    description: 'Google Cloud credential covering Large Language Models (LLMs), Generative AI fundamentals, prompt engineering, and AI applications.'
  }
];
