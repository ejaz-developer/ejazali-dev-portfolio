import data from '../data.json';

// Type definitions
export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  age: number;
  location: string;
  education: string;
  email: string;
  socialLinks: {
    github: string;
    linkedin: string;
  };
}

export interface TechnicalSkill {
  name: string;
  icon: string;
  level: string;
}

export interface ProfessionalSkill {
  name: string;
  percentage: number;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  githubUrl: string;
  liveUrl: string;
}

export interface Expertise {
  title: string;
  description: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  skills: {
    technical: TechnicalSkill[];
    professional: ProfessionalSkill[];
  };
  projects: Project[];
  expertise: Expertise[];
}

// Helper functions to get data
export const getPersonalInfo = (): PersonalInfo => {
  return data.personalInfo;
};

export const getTechnicalSkills = (): TechnicalSkill[] => {
  return data.skills.technical;
};

export const getProfessionalSkills = (): ProfessionalSkill[] => {
  return data.skills.professional;
};

export const getProjects = (): Project[] => {
  return data.projects;
};

export const getExpertise = (): Expertise[] => {
  return data.expertise;
};

// Function to get filtered projects
export const getFilteredProjects = (category: string): Project[] => {
  if (category === 'all') {
    return data.projects;
  }
  return data.projects.filter(project => project.category === category);
};

// Default export of all data
export default data as PortfolioData;
