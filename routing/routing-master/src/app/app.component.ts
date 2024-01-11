import { Component } from '@angular/core';
import { LoginService } from './services/guards/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blaa';
  constructor(private login:LoginService){
    
  }
}
