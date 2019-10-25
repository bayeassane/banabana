import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Article } from '../models/article';
import { Observable, throwError } from 'rxjs';
import { map,retry, catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private baseUrl = 'https://uadb-gainde.herokuapp.com/testApp/';
  private header = new HttpHeaders({'Content-Type' : 'application/json'});
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) { }

  getArticles() {
    return this._http.get<Article[]>(this.baseUrl + 'articles', this.httpOptions);
  }


  errorHandl(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
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
