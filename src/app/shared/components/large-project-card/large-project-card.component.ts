import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { Media } from '@app/shared/models/media.model';
import { Project2 } from '@shared/models/project.model';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';
import { environment } from '@env/environment';

@Component({
  selector: 'app-large-project-card',
  templateUrl: './large-project-card.component.html',
  styleUrls: ['./large-project-card.component.scss']
})
export class LargeProjectCardComponent implements OnInit {
  @Input() project?: Project2;

  media: Media;
  slug: string;

  faIcon = {
    'faGithubAlt': faGithubAlt,
    'faDesktop': faDesktop
  }

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
