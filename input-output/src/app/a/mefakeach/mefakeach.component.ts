import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mefakeach',
  templateUrl: './mefakeach.component.html',
  styleUrls: ['./mefakeach.component.css']
})
export class MefakeachComponent implements OnInit {

  @Input() count=0
  
  @Output() iGotYou:EventEmitter<null>=
  new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
