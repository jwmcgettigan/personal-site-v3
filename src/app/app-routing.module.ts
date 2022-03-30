import { BlogPageComponent } from './features/blog-page/blog-page.component';
import { ProjectPageComponent } from './features/project-page/project-page.component';
import { AboutPageComponent } from './features/about-page/about-page.component';
import { ResumePageComponent } from './features/resume-page/resume-page.component';
import { ProjectsPageComponent } from './features/projects-page/projects-page.component';
import { HomePageComponent } from './features/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: HomePageComponent
	},
	{
		path: 'projects',
		component: ProjectsPageComponent
	},
	{
		path: 'resume',
		component: ResumePageComponent
	},
	{
		path: 'about',
		component: AboutPageComponent
	},
	{
		path: 'blog/:markdown',
		component: BlogPageComponent
	},
	{
		path: 'project/:markdown',
		component: ProjectPageComponent
	},
	/* {
		path: '**',
		component: HomePageComponent
	} */
].map((route: Route) => {
	route.pathMatch = 'full';
	return route;
});

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
