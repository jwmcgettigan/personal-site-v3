import { Project2 } from '@shared/models/project.model';
import { StrapiMedia } from './strapi.models';
import { Project } from './project.model';
import { Media } from "./media.model";

export interface BlogEntry {
  title: string;
  media: Media;
  description: string;
  slug: string;
  markdown: string;
  project: Project;
}

export interface BlogEntry2 {
  title: string;
  media: StrapiMedia[];
  description: string;
  content: string;
  project: Project2;
}