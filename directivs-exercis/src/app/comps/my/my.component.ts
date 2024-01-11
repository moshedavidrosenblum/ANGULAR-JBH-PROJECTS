import { Component, OnInit } from '@angular/core';
import { SerlectServiseService } from 'src/app/srv/serlect-servise.service';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent implements OnInit {

  constructor(public svc:SerlectServiseService) { }

  ngOnInit() {
  }

}
