import { Project2 } from '@shared/models/project.model';
import { Media } from '@app/shared/models/media.model';
import { Component, Input, OnInit } from '@angular/core';
import { environment } from '@env/environment';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() project: Project2;

  media: Media;
  slug: string;

  constructor() { }

  ngOnInit(): void {
    if(this.project?.image) {
      this.media = {
        url: environment.apiUrl + this.project?.image?.url,
        isVideo: false
      };
    }
    this.slug = this.project.title.toLowerCase().replaceAll(' ', '-');
  }

}
