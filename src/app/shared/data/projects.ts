import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { Project } from './../models/project.model';

export const projects: Project[] = [{
	name: "Project Euler",
	tags: ["python", "javascript", "math"],
	description: "My answers to the Project Euler problems.",
	links: [{
		icon: faGithubAlt,
		text: "Github",
		href: "https://github.com/jwmcgettigan/project-euler-solutions"
	}],
	media: {
		url: "assets/project_images/thumbnails/Project_Euler.jpg"
	},
	markdown: ""
}, {
	name: "Renegade",
	tags: ['computer vision', 'python', 'opencv', 'sensor fusion', 'autonomous systems'],
	description: "Renegade is a level 3 autonomous vehicle built for my A.S. course.",
	links: [{
		icon: faGithubAlt,
		text: "Github",
		href: "https://github.com/jwmcgettigan/renegade"
	}],
	media: {
		url: "assets/project_images/thumbnails/Renegade.jpg"
	},
	markdown: ""
}, {
	name: "PhoenixHacks Live",
	tags: ['javascript', 'nodejs', 'reactjs', 'HTML/CSS'],
	description: "The live site for PhoenixHacks 2020.",
	links: [{
		icon: faDesktop,
		text: "Live Site",
		href: "https://live.phoenixhacks.com"
	}, {
		icon: faGithubAlt,
		text: "Github",
		href: "https://github.com/PhoenixHacks/2020-live-web"
	}],
	media: {
		url: "assets/project_images/thumbnails/phoenixhacks.png"
	},
	markdown: "assets/projects/phoenixhacks-live.md"
}];