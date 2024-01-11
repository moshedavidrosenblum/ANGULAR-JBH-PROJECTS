import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-maneger',
  templateUrl: './maneger.component.html',
  styleUrls: ['./maneger.component.css']
})
export class ManegerComponent implements OnInit {

  @Input() count=0
  
  @Output() iGotYou:EventEmitter<null>=
  new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
