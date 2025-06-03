// types/profile.ts

export interface Project {
  video?: string;
  title: string;
  duration: string;
  type: string;
  contribution: string;
}

export interface Employer {
  name: string;
  projects: Project[];
}

  export interface Profile {
    name: string;
    summary: string;
    profileImage: string;
    employers: Employer[];
    tags: string[];
  }
  

  export interface Job {
    id: string;
    title: string;
    company: string;
    tags: string[];
    description: string;
    matchScore?: number;
    matchedTags?: string[];
  }