export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  client: string;
  services: string[];
  role: string;
  summary: string;
  description: string;
  image: string; // We will use high quality images or stylish patterns
  subImages?: string[];
  techSpec?: string[];
  challenges?: string[];
  results?: string[];
}

export interface ServiceItem {
  id: string;
  index: string;
  title: string;
  description: string;
  capabilities: string[];
}

export interface StudioStat {
  label: string;
  value: string;
  index: string;
}

export interface ClientLog {
  id: string;
  name: string;
  project: string;
  year: string;
  service: string;
}
