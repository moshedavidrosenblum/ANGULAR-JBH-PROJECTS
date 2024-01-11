import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
myPost:Post[]=[];
  constructor(public postSvc:PostsService) { }

  ngOnInit() {
    this.postSvc.getPostByselectedUser().subscribe(data=>this.myPost=data)
  }

}
