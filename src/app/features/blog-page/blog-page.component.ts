import { ActivatedRoute } from '@angular/router';
import { ApiService } from '@core/services/api.service';
import { Component, OnInit } from '@angular/core';
import { BlogEntry } from '@app/shared/models/blog-entry.model';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {
  blogEntry: BlogEntry;
  file: string;
  data: string;

  blogEntries: BlogEntry[];

  constructor(
    private route: ActivatedRoute,
    private api: ApiService
  ) { }

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('markdown');
    /* this.file = `${slug}.md`;
    this.api.getBlogEntries().subscribe(blogEntries => {
      this.blogEntry = blogEntries.find(entry => entry.slug === slug);
    }); */
    this.api.getStuff().subscribe(res => {
      const page = res.data.find(obj => {
        const titleSlug = (<string>obj.attributes.title).toLowerCase().replaceAll(' ', '-')
        return titleSlug === slug;
      });
      if(page) {
        this.data = page.attributes.content;
      }
    });
  }

}
