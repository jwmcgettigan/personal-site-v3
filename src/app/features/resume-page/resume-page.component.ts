import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ApiService } from './../../core/services/api.service';
import { Social } from './../../shared/models/social.model';
import { Component, OnInit } from '@angular/core';
import { faFileCode, faFilePdf } from '@fortawesome/free-solid-svg-icons';

interface DownloadFormat {
  format: string;
  icon: IconDefinition
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
      icon: faFilePdf
    },
    {
      format: 'html',
      icon: faFileCode
    }
  ];

  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.api.getSocials().subscribe(socials => {
      this.socialNetworks = socials;
    });
  }

}
