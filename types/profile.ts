// types/profile.ts
export interface Employer {
    name: string;
    videos: string[];
    title: string;
    duration: string;
    type: string;
    contribution: string;
  }
  
  export interface Profile {
    name: string;
    summary: string;
    profileImage: string;
    employers: Employer[];
  }
  