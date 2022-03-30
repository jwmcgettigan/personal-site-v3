import { environment } from '@env/environment';
import { BlogEntry, BlogEntry2 } from '@shared/models/blog-entry.model';
import { Component, Input, OnInit } from '@angular/core';
import { Media } from '@app/shared/models/media.model';

@Component({
  selector: 'app-blog-preview-card',
  templateUrl: './blog-preview-card.component.html',
  styleUrls: ['./blog-preview-card.component.scss']
})
export class BlogPreviewCardComponent implements OnInit {
  @Input() blogEntry: BlogEntry2;

  link: string;
  media: Media;

  constructor() { }

  ngOnInit(): void {
    //this.link = '/blog/' + this.blogEntry.slug;

    if(this.blogEntry?.media?.length > 0) {
      this.media = {
        url: environment.apiUrl + this.blogEntry?.media[0]?.url,
        isVideo: this.blogEntry?.media[0]?.mime?.includes('video')
      };
    }

    this.link = '/blog/' + this.blogEntry.title.toLowerCase().replaceAll(' ', '-');
  }

}
