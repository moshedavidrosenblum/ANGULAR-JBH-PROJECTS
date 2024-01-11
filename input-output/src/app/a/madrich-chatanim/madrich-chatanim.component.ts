import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-madrich-chatanim',
  templateUrl: './madrich-chatanim.component.html',
  styleUrls: ['./madrich-chatanim.component.css']
})
export class MadrichChatanimComponent implements OnInit {

  @Input() count=0
  
  @Output() iGot:EventEmitter<null>=
  new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
