import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-talmidim',
  templateUrl: './talmidim.component.html',
  styleUrls: ['./talmidim.component.css']
})
export class TalmidimComponent implements OnInit {

  @Input() count=0
  
  @Output() iGotYou:EventEmitter<null>=
  new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
