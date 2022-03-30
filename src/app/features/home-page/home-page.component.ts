import { BlogEntry2 } from '@shared/models/blog-entry.model';
import { Project } from '@shared/models/project.model';
import { Social } from '@shared/models/social.model';
import { ApiService } from '@core/services/api.service';
import { Component, OnInit } from '@angular/core';
import { BlogEntry } from '@app/shared/models/blog-entry.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  socialNetworks: Social[];
  projects: Project[];

  blogEntries: BlogEntry2[];

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
    this.api.getBlogEntries().subscribe(blogEntries => {
      this.blogEntries = blogEntries;
    });
  }

}
