import { Social } from './../models/social.model';
import { faGithubSquare, faLinkedinIn, faStackOverflow, faDev } from '@fortawesome/free-brands-svg-icons';

export const socialNetworks: Social[] = [
	{
		name: 'LinkedIn',
		icon: faLinkedinIn,
		url: 'https://www.linkedin.com/in/jwmcgettigan/'
	},
	{
		name: 'GitHub',
		icon: faGithubSquare,
		url: 'https://github.com/jwmcgettigan'
	},
	{
		name: 'Stack Overflow',
		icon: faStackOverflow,
		url: 'https://stackoverflow.com/users/11342791/jwmcgettigan'
	},
	{
		name: 'DEV Community',
		icon: faDev,
		url: 'https://dev.to/jwmcgettigan'
	},
];