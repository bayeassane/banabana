import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Article } from 'src/app/models/article/article';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlusRecentService {

  private baseUrl = 'https://banabanaapi.herokuapp.com/testApp/';
  private header = new HttpHeaders({'Content-Type' : 'application/json'});
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) { }

  getArticles() {
    return this._http.get<Article[]>(this.baseUrl + 'articleLimit', this.httpOptions);
  }


  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }

}
