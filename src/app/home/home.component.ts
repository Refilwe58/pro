import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { HomePageService } from '../home-page.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private home:HomePageService) { }
  readNews:any;
  readEvents:any;
  ngOnInit(): void {
    this.events()
  }

  events(){
    //to update deleted data
    this.home.getAllEvents().subscribe((res)=>{
      console.log(res,"res==>");
      this.readEvents=res;
      console.log(this.readEvents,"==")
    },(error)=>{
      console.log(error)
    })
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
