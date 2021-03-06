import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { RouterModule } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { MarkdownModule } from 'ngx-markdown';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxSocialButtonModule, SocialServiceConfig} from "ngx-social-button";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component'
import { HttpClientModule } from '@angular/common/http';

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
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
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
