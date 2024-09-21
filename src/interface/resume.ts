interface Profile {
  about: string;
  avatarUrl: string;
  contact: ContactInfo;
  education: EducationDetail[];
  certifications: CertificateDetail[];
  initials: string;
  location: string;
  locationLink: string;
  name: string;
  personalWebsiteUrl: string;
  projects: Project[];
  skills: string[];
  summary: string;
  work: WorkExperience[];
}

interface ContactInfo {
  email: string;
  social: SocialLink[];
  tel: string;
}

interface SocialLink {
  icon: string;
  name: string;
  url: string;
}

interface EducationDetail {
  degree: string;
  end: string;
  school: string;
  start: string;
}

interface CertificateDetail {
  name: string;
  organization?: string;
  start: string;
  end?: string;
}

interface Project {
  name: string;
  role: string;
  description: string;
  responsibilities: string[];
  technicalContributions: string[];
  technologies: readonly string[];
}

interface WorkExperience {
  badges: string[];
  company: string;
  description: string[];
  achievements: string[];
  end: string;
  link: string;
  start: string;
  technologies: string;
  title: string;
}
