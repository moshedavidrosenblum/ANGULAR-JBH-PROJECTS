import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'
import { LoginService } from '../../services/guards/login.service';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private loginSvc:LoginService, private router:Router) { }

  ngOnInit() {
  }
  login(){
    //ajasx and subscirbe
    this.loginSvc.isLoggedIn = true
    this.router.navigateByUrl('')
  }

}
