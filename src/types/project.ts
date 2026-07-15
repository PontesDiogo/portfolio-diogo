export type ProjectCategory =
  | "Produto digital"
  | "Solução profissional"
  | "Análise de processos"
  | "Lógica e algoritmos";

export interface ProjectLink {
  label: string;
  url: string;
  external?: boolean;
}

export interface ProjectHighlight {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  index: string;
  category: ProjectCategory;
  title: string;
  headline: string;
  description: string;
  technologies: string[];
  image?: string;
  imageAlt?: string;
  highlights: ProjectHighlight[];
  links: ProjectLink[];
  status?: string;
  attribution?: string;
}