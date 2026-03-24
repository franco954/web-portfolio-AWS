// types/index.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
  current?: boolean;
}

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone?: string;
  linkedin?: string;
  github?: string;
  about: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  current?: boolean;
  description?: string;
  coursework?: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  url?: string;
  important?: boolean;
}

export interface Course {
  id: string;
  name: string;
  platform: string;
  date: string;
  url?: string;
}

export interface Language {
  code: 'es' | 'en';
  name: string;
  flag: string;
}

export interface Translations {
  nav: {
    about: string;
    experience: string;
    education: string;
    contact: string;
  };
  hero: {
    greeting: string;
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    subtitle: string;
    skillsTitle: string;
  };
  experience: {
    title: string;
    subtitle: string;
    current: string;
  };
  education: {
    title: string;
    subtitle: string;
    education: string;
    certifications: string;
    courses: string;
    currentBadge: string;
    featured: string;
    credential: string;
    currentSubjects: string;
  };
  contact: {
    title: string;
    subtitle: string;
    description: string;
    form: {
      name: string;
      email: string;
      message: string;
      send: string;
    };
  };
  footer: {
    rights: string;
    madeWith: string;
  };
}
