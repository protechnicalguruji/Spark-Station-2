export interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  iconName: string;
  color: string;
  benefits: string[];
  useCases: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  experience: string;
  contact: string | null;
  skills: string[];
  color: string;
  avatarUrl: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface ProjectCategory {
  id: string;
  name: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  desc: string;
  tags: string[];
  liveUrl?: string;
  image: string;
}

export type PageRoute = 'home' | 'services' | 'portfolio' | 'team' | 'contact';
