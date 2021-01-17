import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent  {
  public projectsMd:string;
  constructor(private http: HttpClient) {// and then:
    this.projectsMd=""
    this.http.get('assets/cheat_sheet.md', {responseType: 'text'})
    .subscribe((data) => this.handleData(data));

  }
  private handleData(data: string) {
    console.log(data);
    this.projectsMd= data;
    console.log(this.projectsMd);
  }    

}
