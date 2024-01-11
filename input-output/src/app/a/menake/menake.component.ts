import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menake',
  templateUrl: './menake.component.html',
  styleUrls: ['./menake.component.css']
})
export class MenakeComponent implements OnInit {

  @Input() count=0
  
  @Output() iGotYou:EventEmitter<null>=
  new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
