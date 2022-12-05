import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, pipe, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class loginService {
  private loginUrl = 'http://localhost:3100/api/v1/admin';


  getToken():string{
   return window.localStorage['jwt'];
  }

saveToken(token: string){
  window.localStorage['jwt']=token;
}


  constructor(private http:HttpClient) {
    const jwtToken=this.getToken();
  }
loginUser(user: any):Observable <any>{
  return this.http.post(this.loginUrl,user)
  .pipe(catchError(this.handleError));
}
handleError(error:any){
  return throwError(error.message || "server error")
}
}
