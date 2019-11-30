import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Article } from '../../models/article/article';
import { Observable, throwError } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';
import { User } from 'src/app/models/user/user';



@Injectable({
  providedIn: 'root'
})
export class ArticleService {
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
    return this._http.get<Article[]>(this.baseUrl + 'articles', this.httpOptions);
  }

  getArticlesCategorie(nomCat: string) {
    return this._http.get<Article[]>(this.baseUrl + 'articlesCategorie?nomCategorie=' + nomCat, this.httpOptions);
  }

  getArticle(numero: number) {
    const  params = new  HttpParams({fromString:  'id=' + numero});

    return this._http.get<Article>(this.baseUrl + 'articles/' + numero);
  }

  searchArticles(param: string) {
    return this._http.get<Article[]>(this.baseUrl + 'articless?nom=' + param);
  }

  articleUser(user) {
    console.log(user);
    return this._http.get<Article[]>(this.baseUrl + 'articlesUser?id=' + user);
  }

  deleteArticle(id: number) {
    return this._http.delete(this.baseUrl + 'articles/' + id);
  }

  public upload(formData, token) {
    console.log(token);
    return this._http.post<any>(this.baseUrl + 'articles/', formData);
  }
  public update(id, formData) {
    console.log(this.baseUrl + 'articles/' + id);
    return this._http.put<any>(this.baseUrl + 'articles/' + id, formData, this.httpOptions);
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
