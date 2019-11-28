import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Categorie } from 'src/app/models/categorie/categorie';
import { throwError, Observable } from 'rxjs';
import { Louma } from 'src/app/models/louma/louma';
import { Zone } from 'src/app/models/zone/zone';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private baseUrl = 'https://banabanaapi.herokuapp.com/testApp/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) { }

  getCategorie() {
    return this._http.get<Observable<Categorie[]>>(this.baseUrl + 'categorie', this.httpOptions);
  }

  

  getLoumas() {
    return this._http.get<Louma[]>(this.baseUrl + 'louma', this.httpOptions);
  }

  getZone(id: number) {
    return this._http.get<Observable<Zone>>(this.baseUrl + 'zone/' + id, this.httpOptions);
  }

  getZones() {
    return this._http.get<Observable<Zone>>(this.baseUrl + 'zone/', this.httpOptions);
  }

  getNameCategorie(id: number) {
    return this._http.get<Observable<Zone>>(this.baseUrl + 'categorie/' + id, this.httpOptions);
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
