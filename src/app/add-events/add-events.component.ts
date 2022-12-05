import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from '../admin-auth.service';
import {HttpClient} from '@angular/common/http';
import{HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import {Observable, pipe, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-events',
  templateUrl: './add-events.component.html',
  styleUrls: ['./add-events.component.css']
})
export class AddEventsComponent  implements OnInit{
	formGroup!: FormGroup;
  constructor(private AdminAuth:AdminAuthService) { }
  ngOnInit(): void {
    this.initForm();
   }

  initForm(){
  this.formGroup=new FormGroup({
	event_name: new FormControl('',[Validators.required]),
	event_description: new FormControl('',[Validators.required]),
	event_date: new FormControl('',[Validators.required]),
  event_time: new FormControl('',[Validators.required]),
	event_location: new FormControl('',[Validators.required])
  })}


  onUsers(){

	if(this.formGroup.valid){

    this.AdminAuth.onUsers(this.formGroup.value)
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
