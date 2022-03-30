import { Component, Input, OnInit } from '@angular/core';
import { Media } from '@app/shared/models/media.model';
import { faImage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {
  @Input() media?: Media;
  @Input() src?: string;

  faImage = faImage;

  constructor() { }

  ngOnInit(): void {
    if(this.src != null) {
      this.media = {
        url: this.src,
        isVideo: false
      }
    }
  }

}
