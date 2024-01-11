import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-avrech',
  templateUrl: './avrech.component.html',
  styleUrls: ['./avrech.component.css']
})
export class AvrechComponent implements OnInit {
  
  @Input() count=0
  
  @Output() iGotYou:EventEmitter<null>=
  new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
