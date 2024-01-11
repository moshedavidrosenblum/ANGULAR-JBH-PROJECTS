import { Injectable } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn:boolean = false
  constructor(private router:Router) {
    console.log('LoginSuperGuardService start');
    
    this.router.events.subscribe(routerEvent =>{
      if (routerEvent instanceof NavigationEnd ) {
        console.log('routerEvent, isLoggedIn: ', 
          this.isLoggedIn, 
          this.router.url);

        if (this.router.url.includes('login') == false) {
          if (this.isLoggedIn == false) {
            this.router.navigateByUrl('/login')
          }
        }
      }
      //console.log('LoginSuperGuardService routerEvent', routerEvent);
    })
  }
   }

