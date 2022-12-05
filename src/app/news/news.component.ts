import { Component, OnInit } from '@angular/core';
import { HomePageService } from '../home-page.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private home:HomePageService) { }
  readNews:any;
  ngOnInit(): void {
    this.news()
  }

  news(){

    this.home.getAllNews().subscribe((res)=>{
      console.log(res,"res==>");
      this.readNews=res;
      console.log(this.readNews,"==")
    },(error)=>{
      console.log(error)
    })
  }
}
