import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(public userSvc:UsersService) { }

  usersList:User[]=[];

   curentUser:User

  ngOnInit() {
    this.userSvc.getUsers().subscribe(d => this.usersList=d)
  }

  selectAuser(u:User){
    this.userSvc.selectUser= u 
    this. curentUser=u
    console.log(this.userSvc.getUser(u.id));
    
  }

}
