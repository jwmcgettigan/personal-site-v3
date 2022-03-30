import { BlogEntry2 } from '@shared/models/blog-entry.model';
import { ApiService } from '@core/services/api.service';
import { Project, Project2 } from '@shared/models/project.model';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { BlogEntry } from '@app/shared/models/blog-entry.model';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {
  project: Project2;
  file: string;

  projects: Project2[];
  blogEntries: BlogEntry2[];

  constructor(
    private route: ActivatedRoute,
    private api: ApiService
  ) { }

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('markdown');
    //this.file = `${slug}.md`;
    this.api.getProjects2().subscribe(projects => {
      this.project = projects.find(project => project.title.toLowerCase().replaceAll(' ', '-') === slug);
      this.api.getBlogEntries().subscribe(blogEntries => {
        this.blogEntries = blogEntries.filter(entry => entry.project.id === this.project.id);
      });
    });
  }

}
