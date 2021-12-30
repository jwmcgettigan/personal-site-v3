import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface ProjectMedia {
  url: string;
  isVideo?: boolean;
}

export interface ProjectLink {
  icon: IconDefinition;
  text: string;
  href: string;
}

export interface Project {
  name: string;
  tags: string[];
  description: string;
  links: ProjectLink[];
  media: ProjectMedia;
  markdown: string;
}