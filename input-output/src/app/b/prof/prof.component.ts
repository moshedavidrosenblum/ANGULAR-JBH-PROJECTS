import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-prof',
  templateUrl: './prof.component.html',
  styleUrls: ['./prof.component.css']
})
export class ProfComponent implements OnInit {
@Input() profInput
@Output() profOutput:EventEmitter<null>=
  new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
