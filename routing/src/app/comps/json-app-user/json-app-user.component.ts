import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-json-app-user',
  templateUrl: './json-app-user.component.html',
  styleUrls: ['./json-app-user.component.css']
})
export class JsonAppUserComponent implements OnInit {
y
  API = 'https://jsonplaceholder.typicode.com/users/'

  public user: any

  constructor(public http: HttpClient, public active: ActivatedRoute) { }

  ngOnInit() {

     this.active.params.subscribe(data => {
      let id = data.moo
       this.http.get(this.API +id).subscribe(d => this.user = d)
    })
  }

}
