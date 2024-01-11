import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mashgichim',
  templateUrl: './mashgichim.component.html',
  styleUrls: ['./mashgichim.component.css']
})
export class MashgichimComponent implements OnInit {

  @Input() count=0
  
  @Output() iGotYou:EventEmitter<null>=
  new EventEmitter(); 
  
  constructor() { }

  ngOnInit() {
  }

}
