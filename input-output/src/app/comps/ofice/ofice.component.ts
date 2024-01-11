import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ofice',
  templateUrl: './ofice.component.html',
  styleUrls: ['./ofice.component.css']
})
export class OficeComponent implements OnInit {

  manegerCount=0
  workerCount=0
  secreteryCount=0

  constructor() { }

  ngOnInit() {
  }

}
