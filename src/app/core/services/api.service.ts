import { BlogEntry2 } from '@shared/models/blog-entry.model';
import { Project2, ProjectLink2 } from './../../shared/models/project.model';
import { StrapiObject, StrapiResponse, StrapiMedia } from './../../shared/models/strapi.models';
import { Social } from '@shared/models/social.model';
import { Project } from '@shared/models/project.model';
import { projects } from '@shared/data/projects';
import { socialNetworks } from '@app/shared/data/socials';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BlogEntry } from '@app/shared/models/blog-entry.model';
import { blogEntries } from '@app/shared/data/blog-entries';
import { StrapiResponseSingle, StrapiResponseMulti } from '@app/shared/models/strapi.models';
import { map } from 'rxjs/operators';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl: string = environment.apiUrl + '/api';

  constructor(
    private http: HttpClient
  ) { }

  getStuff(): Observable<StrapiResponseMulti> {
    return this.http.get<StrapiResponseMulti>(`${this.apiUrl}/articles`);
  }

  getResume(): Observable<StrapiResponseSingle> {
    return this.http.get<StrapiResponseSingle>(`${this.apiUrl}/resume`);
  }

  getAboutPage(): Observable<StrapiResponseSingle> {
    return this.http.get<StrapiResponseSingle>(`${this.apiUrl}/about`);
  }

  getSocials(): Observable<Social[]> {
    return of(socialNetworks);
  }

  getProjects(): Observable<Project[]> {
    return of(projects);
  }

  getProjects2(): Observable<Project2[]> {
    return this.obsResponseToType<Project2>(
      this.http.get<StrapiResponse>(`${this.apiUrl}/projects?populate=*`)
    ) as Observable<Project2[]>;
  }

  getBlogEntries(): Observable<BlogEntry2[]> {
    //return of(blogEntries);
    return this.obsResponseToType<BlogEntry2>(
      this.http.get<StrapiResponse>(`${this.apiUrl}/articles?populate=*`)
    ) as Observable<BlogEntry2[]>;
  }

  getDocumentHTML(): Observable<any> {
    return this.http.get(
      "https://docs.google.com/document/d/1tSLgNUnsVOyIkVmC5L2CEkecOPpy9-5H4f3PoZ7U4e8/export?format=html",
      {responseType: "text"}
    );
  }

  obsResponseToType<T>(res: Observable<StrapiResponse>): Observable<T | T[]> {
    return res.pipe(map(res => this.responseToType<T>(res)))
  }

  objectToType<T>(obj: StrapiObject): T {
    const typeObject: T = {
      id: obj.id,
      ...obj.attributes
    };
    Object.keys(typeObject).forEach(key => {
      if(typeObject[key]?.hasOwnProperty('data')) {
        typeObject[key] = this.responseToType(typeObject[key]);
      }
    });
    return typeObject;
  }
  
  responseToType<T>(res: StrapiResponse): T | T[] {
    const data = res.data;

    if(data == null) {
      return null;
    }
    
    if(data instanceof Array) {
      return data.map((entry: StrapiObject) => this.objectToType<T>(entry))
    } else {
      return this.objectToType<T>(data);
    }
  }
}
