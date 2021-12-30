import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {

  file: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    /* const file = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        console.log(params);
        return `${params.get('markdown')}.md`;
      })
    );
    console.log(file); */

    this.file = `${this.route.snapshot.paramMap.get('markdown')}.md`;
    console.log(this.file);
  }

}
