import { ApiService } from './../../services/api.service';
import { Project } from './../../../shared/models/project.model';
import { Social } from './../../../shared/models/social.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-column',
  templateUrl: './right-column.component.html',
  styleUrls: ['./right-column.component.scss']
})
export class RightColumnComponent implements OnInit {

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
