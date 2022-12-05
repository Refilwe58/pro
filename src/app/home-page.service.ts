import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable,throwError } from 'rxjs'
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  constructor(private http:HttpClient) { }
 api='http://localhost:3100/api/v1/viewEvents';

  apis='http://localhost:3100/api/v1/viewNews'

  getAllEvents():Observable<any> {
    return this.http.get<any>(`${this.api}`)
    .pipe(catchError(this.handleError));;
  }

  getAllNews():Observable<any> {
    return this.http.get<any>(`${this.apis}`)
    .pipe(catchError(this.handleError));;
  }
  handleError(error:any){
    return throwError(error.message||"server error")
  }
}
