import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-candys',
  templateUrl: './candys.component.html',
  styleUrls: ['./candys.component.css']
})
export class CandysComponent implements OnInit {

 @Input() can

 @Output() candysOutput:EventEmitter<null>=
 new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
