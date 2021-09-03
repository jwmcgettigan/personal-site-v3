import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../shared/models/project.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() project?: Project;

  faGithubAlt = faGithubAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
