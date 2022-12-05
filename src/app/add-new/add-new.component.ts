import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminAuthService } from '../admin-auth.service';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {
  newsGroup!: FormGroup;
  constructor(private AdminAuth:AdminAuthService) { }
  ngOnInit(): void {
    this.initForm()
  }
  initForm(){
    this.newsGroup=new FormGroup({
      news_title: new FormControl('',[Validators.required]),
      news_description: new FormControl('',[Validators.required]),

      })
  }



  news(){
    console.log(this.newsGroup.value)
    if(this.newsGroup.valid){

      this.AdminAuth.createNews(this.newsGroup.value)
      .subscribe(result=>{
        console.log(result);
      this.AdminAuth.saveToken(result.token);
    },
      (error)=>{
        console.log(error)
      }

      )
    }
  }
  url:any;
  //Angular 11, for stricter type
   msg = "";

   //selectFile(event) { //Angular 8
   selectFile(event: any) { //Angular 11, for stricter type
     if(!event.target.files[0] || event.target.files[0].length == 0) {
       this.msg = 'You must select an image';
       return;
     }

     var mimeType = event.target.files[0].type;


     if(event.target.files && event.target.files[0]){
     var reader = new FileReader();
     reader.readAsDataURL(event.target.files[0]);

     reader.onload = (_event) => {
       this.msg = "";
       this.url = reader.result;

     }
   }
}
}
