import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

selectUser:User

API = 'https://jsonplaceholder.typicode.com/users/'

usersAPI= 'https://jsonplaceholder.typicode.com/users/'


  constructor(public http:HttpClient) { }
  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.API)
  }

  getUser(id:number):Observable<User>{
    return this.http.get<User>(this.usersAPI+id)
  }


}
