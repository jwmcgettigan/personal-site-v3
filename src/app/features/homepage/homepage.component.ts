import { Project } from './../../shared/models/project.model';
import { Social } from './../../shared/models/social.model';
import { ApiService } from './../../core/services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  socialNetworks: Social[];
  projects: Project[];

  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.api.getSocials().subscribe(socials => {
      this.socialNetworks = socials;
    });
    this.api.getProjects().subscribe(projects => {
      this.projects = projects;
    });
  }

}
