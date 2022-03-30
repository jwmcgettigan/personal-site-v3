import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ApiService } from '@core/services/api.service';
import { Social } from '@shared/models/social.model';
import { Component, OnInit } from '@angular/core';
import { faFileAlt, faFileCode, faFilePdf, faFileWord } from '@fortawesome/free-solid-svg-icons';
import { faGoogleDrive } from '@fortawesome/free-brands-svg-icons';

interface DownloadFormat {
  format: string;
  icon: IconDefinition;
  color: string;
}

@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.scss']
})
export class ResumePageComponent implements OnInit {

  socialNetworks: Social[];
  googleDocLink: string = "https://docs.google.com/document/d/1tSLgNUnsVOyIkVmC5L2CEkecOPpy9-5H4f3PoZ7U4e8";

  downloadFormats: DownloadFormat[] = [
    {
      format: 'pdf',
      icon: faFilePdf,
      color: '#ff4133'
    },
    {
      format: 'docx',
      icon: faFileWord,
      color: '#5d91d5'
    },
    {
      format: 'html',
      icon: faFileCode,
      color: '#e54c21'
    }
  ];

  faGoogleDrive = faGoogleDrive;

  resumeContent: string;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.api.getSocials().subscribe(socials => {
      this.socialNetworks = socials;
    });
    this.api.getResume().subscribe(res => {
      this.resumeContent = res.data.attributes.content;
    })
  }

}
