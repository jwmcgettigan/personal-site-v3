import { ApiService } from './../../core/services/api.service';
import { Project } from './../../shared/models/project.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {

  projects: Project[];

  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.api.getProjects().subscribe(projects => {
      this.projects = projects;
    });
  }

}
