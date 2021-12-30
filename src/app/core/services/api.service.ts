import { Social } from './../../shared/models/social.model';
import { Project } from './../../shared/models/project.model';
import { projects } from './../../shared/data/projects';
import { socialNetworks } from '@app/shared/data/socials';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getSocials(): Observable<Social[]> {
    return of(socialNetworks);
  }

  getProjects(): Observable<Project[]> {
    return of(projects);
  }

  getDocumentHTML(): Observable<any> {
    return this.http.get(
      "https://docs.google.com/document/d/1tSLgNUnsVOyIkVmC5L2CEkecOPpy9-5H4f3PoZ7U4e8/export?format=html",
      {responseType: "text"}
    );
  }
}
