import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(public http:HttpClient) { }


API = 'https://jsonplaceholder.typicode.com/posts/'




 
  getPostByselectedUser():Observable<Post[]>{
    return this.http
    .get<Post[]>(this.API)
  }



  getLastPost():Observable<Post[]>{
    this.API+='?'
    for (let index = 91; index <= 100; index++) {
     this.API+='id='+index+"&"
      
    }
    return this.http.get<Post[]>(this.API)



  }

}


 // get(id:number):Observable<Post>{
  //   return this.http.get<Post>(this.API+id)
  // }
