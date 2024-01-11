import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/models/album';
import { AlbumsService } from 'src/app/services/albums.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
album:Album[]
  constructor(public albumSvc:AlbumsService) { }

  ngOnInit() {
    this.albumSvc.getPostByselectedUser().subscribe(data=>this.album=data)
  }

}
