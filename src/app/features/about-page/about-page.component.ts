import { ApiService } from '@core/services/api.service';
import { Social } from '@shared/models/social.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  socialNetworks: Social[];
  pageContent: string;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.api.getSocials().subscribe(socials => {
      this.socialNetworks = socials;
    });
    this.api.getAboutPage().subscribe(res => {
      this.pageContent = res.data.attributes.content;
    });
  }

}
