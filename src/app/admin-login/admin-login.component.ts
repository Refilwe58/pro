import { Component, OnInit } from '@angular/core';

import {FormGroup, FormControl,Validators} from '@angular/forms';
import { Token } from '@angular/compiler';
import {Observable, pipe, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import {loginService} from '../login.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  formGroup!: FormGroup;
  responsedata:any;

constructor(private loginService:loginService, private route:Router){
  localStorage.clear();
  
}
  ngOnInit(): void {
    this.initForm();
   }

  initForm(){
    this.formGroup=new FormGroup({
email: new FormControl('',[Validators.required]),
password: new FormControl('',[Validators.required])
    })
  }
  
  loginProcess(){
   
    if(this.formGroup.valid){
      this.loginService.loginUser(this.formGroup.value).subscribe(result=>{
        
          console.log(result);
        this.loginService.saveToken(result.token);
         //localStorage.setItem('token',result.toString());
          this.route.navigate(['add-events']);
      },
      (error: any)=>{
        console.log(error)
      }
        
      )
    }
    }
}
