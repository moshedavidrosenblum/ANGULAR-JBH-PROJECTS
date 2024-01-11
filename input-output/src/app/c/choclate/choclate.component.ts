import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-choclate',
  templateUrl: './choclate.component.html',
  styleUrls: ['./choclate.component.css']
})
export class ChoclateComponent implements OnInit {

  @Input() chock
  @Output() outputChoclate:EventEmitter<null>=
  new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
