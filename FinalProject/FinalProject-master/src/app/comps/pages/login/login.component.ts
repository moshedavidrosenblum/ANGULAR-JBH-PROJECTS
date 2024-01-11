import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // user="";
  // pass="";
 

  constructor(public loc:LocationService) { }

  ngOnInit() {
  }
  logIn(){
    console.log("strt")
    this.loc.location="homePage"

  }

}
