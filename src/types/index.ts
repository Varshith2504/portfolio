export interface PersonalInfo {
  name: string;
  title: string;
  role: string;
  status: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  tagline: string;
  summary: string[];
}

export interface Project {
  id: string;
  title: string;
  category: 'Full Stack & Web' | 'AI & Machine Learning';
  tagline: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  metrics: { label: string; value: string }[];
  features: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
}

export interface SkillCategory {
  category: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    description: string;
    icon: string;
  }[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  score: string;
  scoreLabel: string;
  description: string;
  highlights: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  icon: string;
  description: string;
}

export interface StatItem {
  label: string;
  value: string;
  numericValue?: number;
  suffix?: string;
  description: string;
}
