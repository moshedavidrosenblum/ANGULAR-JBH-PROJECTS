import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public loc:LocationService) { }

  ngOnInit() {
  }
  changeLocation(name:string){
    console.log( this.loc.location);
     this.loc.location=name
    
    
    /*  'Droid Sans Mono', 'monospace', monospace, 'Droid Sans Fallback' */
  }

}
