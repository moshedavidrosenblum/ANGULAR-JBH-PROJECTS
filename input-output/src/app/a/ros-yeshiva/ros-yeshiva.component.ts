import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ros-yeshiva',
  templateUrl: './ros-yeshiva.component.html',
  styleUrls: ['./ros-yeshiva.component.css']
})
export class RosYeshivaComponent implements OnInit {

  @Input() count=0
  
  @Output() iGotYou:EventEmitter<null>=
  new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
