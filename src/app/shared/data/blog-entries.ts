import { BlogEntry } from '@app/shared/models/blog-entry.model';
import { projects } from './projects';

export const blogEntries: BlogEntry[] = [{
	title: "PhoenixHacks 2020",
	media: {
		url: "assets/project_images/features/phoenixhacks_live.mp4",
		isVideo: true
	},
	description: "",
	slug: "phoenixhacks-2020",
	markdown: "assets/blog-entries/phoenixhacks-2020.md",
	project: projects.find(p => p.name === "PhoenixHacks Live")
}, {
	title: "DIY Autonomous Vehicle",
	media: {
		url: "assets/project_images/features/Renegade.jpg"
	},
	description: "",
	slug: "diy-autonomous-vehicle",
	markdown: "assets/blog-entries/diy-autonomous-vehicle.md",
	project: projects.find(p => p.name === "Renegade")
}, {
	title: "Computational Challenges",
	media: {
		url: "assets/project_images/features/Project Euler.jpg"
	},
	description: "",
	slug: "computational-challenges",
	markdown: "assets/blog-entries/computational-challenges.md",
	project: projects.find(p => p.name === "Project Euler")
}];