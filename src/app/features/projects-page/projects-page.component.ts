import { ApiService } from '@core/services/api.service';
import { Project, Project2 } from '@shared/models/project.model';
import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {

  projects: Project2[];

  constructor(
    private api: ApiService,
    private apollo: Apollo
  ) { }

  ngOnInit(): void {
    /* this.api.getProjects().subscribe(projects => {
      this.projects = projects;
    }); */

    /* this.apollo.watchQuery({
      query: gql`
        query Projects {
          projects {
            data {
              id
              attributes {
                title
                description
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      `
    }).valueChanges.subscribe((result: any) => {
      console.log(result);
    }); */

    this.api.getProjects2().subscribe(projects => {
      this.projects = projects;
    });
  }

}
