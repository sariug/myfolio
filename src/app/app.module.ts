import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { RouterModule } from '@angular/router';
import { ResumeComponent } from './resume/resume.component'
import { MarkdownModule } from 'ngx-markdown'
import {MatButtonModule} from '@angular/material/button'
import { NgxSocialButtonModule, SocialServiceConfig} from "ngx-social-button";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component'
export function getAuthServiceConfigs() {
  let config = new SocialServiceConfig()
      .addFacebook("Your-Facebook-app-id")
      .addGoogle("Your-Google-Client-Id")
      .addLinkedIn("Your-LinkedIn-Client-Id");
  return config;
}
@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ResumeComponent,
    ProjectsComponent,
    ResumeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    NgxSocialButtonModule,
    RouterModule.forRoot([
      { path:'', component: HomeComponent },
      { path: 'resume', component:ResumeComponent},
      { path: 'projects', component:ProjectsComponent}
    ]),
    MarkdownModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [{        provide: SocialServiceConfig,
    useFactory: getAuthServiceConfigs
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
