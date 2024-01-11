import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-makak',
  templateUrl: './makak.component.html',
  styleUrls: ['./makak.component.css']
})
export class MakakComponent implements OnInit {

  @Input() count=0
  
  @Output() iGot:EventEmitter<null>=
  new EventEmitter(); 
  
  constructor() { }

  ngOnInit() {
  }

}
