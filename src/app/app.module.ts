import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectCardComponent } from '@features/project-card/project-card.component';
import { ResumeComponent } from './features/resume/resume.component';
import { BlogPostComponent } from './features/blog/blog-post/blog-post.component';
import { BlogComponent } from './features/blog/blog.component';
import { HomepageComponent } from './features/homepage/homepage.component';
import { ProjectsPageComponent } from './features/projects-page/projects-page.component';
import { ResumePageComponent } from './features/resume-page/resume-page.component';
import { AboutPageComponent } from './features/about-page/about-page.component';
import { ProjectPageComponent } from './features/project-page/project-page.component';
import { RightColumnComponent } from './core/layouts/right-column/right-column.component';
import { MarkdownModule } from 'ngx-markdown';

import 'prismjs';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/components/prism-json.min.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';

@NgModule({
  declarations: [
    AppComponent,
    ProjectCardComponent,
    ResumeComponent,
    BlogPostComponent,
    BlogComponent,
    HomepageComponent,
    ProjectsPageComponent,
    ResumePageComponent,
    AboutPageComponent,
    ProjectPageComponent,
    RightColumnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    PdfViewerModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
