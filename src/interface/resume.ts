interface Profile {
  about: string;
  avatarUrl: string;
  contact: ContactInfo;
  education: EducationDetail[];
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

interface Project {
  // Define the structure of project items if available
}

interface WorkExperience {
  badges: string[];
  company: string;
  description: string;
  end: string;
  link: string;
  start: string;
  technologies: string;
  title: string;
}
