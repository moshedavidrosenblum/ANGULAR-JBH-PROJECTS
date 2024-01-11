import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-func-pipe',
  templateUrl: './get-func-pipe.component.html',
  styleUrls: ['./get-func-pipe.component.css']
})
export class GetFuncPipeComponent implements OnInit {

  shmuel:string ;
  yosi:string;
  mm=new Date()
  hallo:string;
  incr:number;
  dec:number;

  public top:string[]=["1","2","3","4","5"
  ,"6","7","8","9","10","11","12","13","14","15","16","17","18","19"
  ,"20","21"];

  constructor() { }

  ngOnInit() {
  }

}
