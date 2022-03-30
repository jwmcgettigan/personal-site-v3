import { ApiInterceptor } from './core/interceptors/api.interceptor';
import { NgModule, SecurityContext } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LargeProjectCardComponent } from '@app/shared/components/large-project-card/large-project-card.component';
import { ResumeComponent } from './features/resume/resume.component';
import { BlogPostComponent } from './features/blog/blog-post/blog-post.component';
import { BlogComponent } from './features/blog/blog.component';
import { HomePageComponent } from './features/home-page/home-page.component';
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
import { ProjectCardComponent } from './shared/components/project-card/project-card.component';
import { ProfileCardComponent } from './shared/components/profile-card/profile-card.component';
import { BlogPageComponent } from './features/blog-page/blog-page.component';
import { BlogPreviewCardComponent } from './shared/components/blog-preview-card/blog-preview-card.component';
import { MediaComponent } from './shared/components/media/media.component';
import { GraphQLModule } from './graphql.module';

@NgModule({
  declarations: [
    AppComponent,
    LargeProjectCardComponent,
    ResumeComponent,
    BlogPostComponent,
    BlogComponent,
    HomePageComponent,
    ProjectsPageComponent,
    ResumePageComponent,
    AboutPageComponent,
    ProjectPageComponent,
    RightColumnComponent,
    ProjectCardComponent,
    ProfileCardComponent,
    BlogPageComponent,
    BlogPreviewCardComponent,
    MediaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    PdfViewerModule,
    HttpClientModule,
    MarkdownModule.forRoot({ 
      loader: HttpClient, 
      sanitize: SecurityContext.NONE 
    }),
    GraphQLModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
