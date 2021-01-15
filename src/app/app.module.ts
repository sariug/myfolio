import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { RouterModule } from '@angular/router';
import { ResumeComponent } from './resume/resume.component'
import { MarkdownModule } from 'ngx-markdown'
@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ResumeComponent,
    ProjectsComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path:'', component: HomeComponent },
      { path: 'resume', component:ResumeComponent},
      { path: 'projects', component:ProjectsComponent}
    ]),
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
