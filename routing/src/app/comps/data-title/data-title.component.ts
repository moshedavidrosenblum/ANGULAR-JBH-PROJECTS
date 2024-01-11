import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-data-title',
  templateUrl: './data-title.component.html',
  styleUrls: ['./data-title.component.css']
})
export class DataTitleComponent implements OnInit {
   titleFromRouth:string
  constructor(
    public activateRouth:ActivatedRoute,
    public router:Router
  ) { }

  ngOnInit() {
    this.activateRouth.data.subscribe(data=>{
      this.titleFromRouth=data.title
    })
  }

}
