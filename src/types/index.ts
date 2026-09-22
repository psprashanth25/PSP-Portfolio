export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack' | 'Systems & Automation' | 'AI & Computer Vision' | 'Distributed Systems';
  featured: boolean;
  priority: number;
  description: string;
  problem: string;
  architecture: string[];
  solution: string;
  keyImplementation: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  demoUrl?: string;
  stats?: { label: string; value: string }[];
  status?: string;
  tags: string[];
  accentColor: string; // Hex or gradient key
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    icon?: string;
    highlight?: boolean;
  }[];
}

export interface JourneyMilestone {
  period: string;
  title: string;
  organization: string;
  location: string;
  description: string;
  grade?: string;
  achievements?: string[];
  type: 'education' | 'project' | 'certification' | 'experience';
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verificationUrl?: string;
  category: string;
  description: string;
  badgeColor: string;
}
