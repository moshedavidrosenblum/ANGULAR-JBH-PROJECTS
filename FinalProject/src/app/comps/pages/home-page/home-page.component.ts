import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/models/post';
import { AlbumsService } from 'src/app/services/albums.service';
import { Album } from 'src/app/models/album';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  posts:Post[]=[]
  album:Album[]
  index=0;

  constructor(public postSvc:PostsService,public albumSvc:AlbumsService) { 
    console.log("home page cost");
    /* this.myInterval() */
    
  }

  ngOnInit() {
    this.postSvc.getLastPost().subscribe(data=>{
      this.posts=data
    })
   this.albumSvc.getLastphotos().subscribe(d=>{
     this.album=d
     /* this.changeClass() */
    })
         this.myInterval();

  }

  changeClass(){
  let one = document.querySelectorAll('.photos')[this.index]
  one.className= "photos";
  if(this.index==9){
    this.index=0
  }
  let to= document.querySelectorAll('.photos')[++this.index]
  to.className="photos show"

  }

  myInterval(){
    window.setInterval(()=>{this.changeClass()},3000)

}
}

