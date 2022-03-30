import { ApiService } from '@core/services/api.service';
import { Project, Project2 } from '@shared/models/project.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-column',
  templateUrl: './right-column.component.html',
  styleUrls: ['./right-column.component.scss']
})
export class RightColumnComponent implements OnInit {

  projects: Project2[];

  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.api.getProjects2().subscribe(projects => {
      this.projects = projects.slice(0, 3);
    });
  }

}
