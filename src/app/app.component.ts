import { Project } from './shared/models/project.model';
import { Component, OnInit, SecurityContext, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { faDev, faFreeCodeCamp, faGithubAlt, faLinkedinIn, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { PdfViewerComponent } from 'ng2-pdf-viewer';
//import htmlResume from '../assets/Resume.html';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(PdfViewerComponent, {static: false})
  private pdfComponent!: PdfViewerComponent;

  pageRendered() {
    this.pdfComponent.pdfViewer.currentScaleValue = 'page-fit';
  }

  title = 'personal-website-v3';

  socialNetworks = [
    {
      name: 'LinkedIn',
      icon: faLinkedinIn,
      url: 'https://www.linkedin.com/in/jwmcgettigan/'
    },
    {
      name: 'GitHub',
      icon: faGithubAlt,
      url: 'https://github.com/jwmcgettigan'
    },
    {
      name: 'Stack Overflow',
      icon: faStackOverflow,
      url: 'https://stackoverflow.com/users/11342791/jwmcgettigan'
    },
    /* {
      name: 'freeCodeCamp',
      icon: faFreeCodeCamp,
      url: 'https://www.freecodecamp.org/jwmcgettigan'
    }, */
    {
      name: 'DEV Community',
      icon: faDev,
      url: 'https://dev.to/jwmcgettigan'
    },
  ];

  pdfSrc = "/assets/Resume 4.2.pdf";
  //projects = new Array(6);

  htmlResume: any;

  faGithubAlt = faGithubAlt;

  projects: Project[] = [{
    name: "Project Euler",
    tags: ["python", "javascript", "math"],
    description: "My answers to the <a href=\"https://projecteuler.net\">Project Euler</a> problems.",
    links: [{
      icon: faGithubAlt,
      text: "Github",
      href: "https://github.com/jwmcgettigan/project-euler-solutions"
    }],
    media: {
      url: "assets/project_images/Project_Euler.jpg"
    }
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
      url: "assets/project_images/Renegade.jpg"
    }
  }, {
    name: "PhoenixHacks Live",
    tags: ['javascript', 'nodejs', 'reactjs', 'HTML/CSS'],
    description: "The live site for <a href=\"http://phoenixhacks.com\">PhoenixHacks</a> 2020.",
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
      url: "assets/project_images/phoenixhacks_live.mp4",
      isVideo: true
    }
  }];

  constructor(
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    /* let resume = htmlResume;
    resume = resume.replaceAll("https://www.google.com/url?q=", "");
    resume = resume.replaceAll(/(?!href="https(.*))&amp;(?! )(.*?)"/g, "\"");
    resume = resume.replace("(352) 585-9655&#8236;", "<a href=\"tel:+13525859655;\">(352) 585-9655&#8236;</a>");
    this.htmlResume = { __html: resume }; */
  }
}
