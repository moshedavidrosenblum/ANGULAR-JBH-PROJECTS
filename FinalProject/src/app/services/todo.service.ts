import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {



  API = 'https://jsonplaceholder.typicode.com/todos/'
  
 
  
  constructor(public http:HttpClient) { }

 
 getUsers():Observable<Todo[]>{
  
        return this.http.get<Todo[]>(this.API)
      }

      getUsersFilter(a,b):Observable<Todo[]>{
     let url:string=""
     for (let i = a; i <=b; i++) {
      url+=`id=${i}&`//"id="+i+
       
     }
     console.log(this.API+"?"+url);
        return this.http.get<Todo[]>(this.API+"?"+url)
        
      }

  
}
