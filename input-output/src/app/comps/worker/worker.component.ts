import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {

  @Input() count=0
  @Output() iGotYou:EventEmitter<null>=
  new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
