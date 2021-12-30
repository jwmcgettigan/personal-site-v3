import { Project } from './shared/models/project.model';
import { Component, OnInit, SecurityContext, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { faDev, faFreeCodeCamp, faGithubAlt, faGithubSquare, faLinkedinIn, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { PdfViewerComponent } from 'ng2-pdf-viewer';
//import htmlResume from '../assets/Resume.html';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'personal-website-v3';

  //htmlResume: any;

  faGithubAlt = faGithubAlt;

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
