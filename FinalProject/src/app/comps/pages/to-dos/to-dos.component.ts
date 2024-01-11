import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {

todo:Todo[]=[];

gentnum:number
gentnum2:number

  constructor(public todoSvc:TodoService) { 
    console.log("to do Works");
    
  }

  ngOnInit() {
   this.todoSvc.getUsers().subscribe(data=>this.todo=data)


  }
  myfilter(){
    this.todoSvc.getUsersFilter(this.gentnum,this.gentnum2).subscribe(data=>this.todo=data)
   
  }


}
