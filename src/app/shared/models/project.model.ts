import { Entity } from './entity.model';
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Media } from "./media.model";
import { StrapiMedia } from './strapi.models';

export interface ProjectLink {
  icon: IconDefinition;
  text: string;
  href: string;
}

export interface Project {
  name: string;
  slug: string;
  tags: string[];
  description: string;
  links: ProjectLink[];
  media: Media;
  markdown: string;
}

export interface ProjectLink2 {
  title: string;
  url: string;
  icon: string;
}

export class Project2 extends Entity {
  title: string;
  description: string;
  image: StrapiMedia;
  links: ProjectLink2[];

  /* get slug(): string {
    return this.title.toLowerCase().replaceAll(' ', '-');
  } */
}