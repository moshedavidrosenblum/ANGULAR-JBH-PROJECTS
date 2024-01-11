import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album } from '../models/album';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(public http:HttpClient) { }
  selectedPhoto:Album
  API = 'https://jsonplaceholder.typicode.com/photos/'
  usersAPI= 'https://jsonplaceholder.typicode.com/photos/'



  getPostByselectedUser():Observable<Album[]>{
  return this.http   
  .get<Album[]>(this.API)
}



getLastphotos():Observable<Album[]>{
  this.API+='?'
  for (let index = 4990; index <= 5000; index++) {
   this.API+='id='+index+"&"
    
  }
  return this.http.get<Album[]>(this.API)



}



}

// get(id:number):Observable<Album>{
//   return this.http.get<Album>(this.API+id)
// }


