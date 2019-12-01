import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';

import { tap } from 'rxjs/operators';
import { UserLogin } from 'src/app/models/user-login/user-login';
import { User } from 'src/app/models/user/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient, private jwtHelper: JwtHelperService) { }

  // Connection
  login(username: string, password: string) {
    return this.httpClient.post<UserLogin>('https://banabanaapi.herokuapp.com/testApp/login', {username, password});
    }

// Deconnection
logout() {
  localStorage.removeItem('access_token');
}

// l'utilisateur est il connecté
public  loggedIn(): boolean {
  return localStorage.getItem('access_token') !==  null;
  // const token = localStorage.getItem('access_token');
    // Check whether the token is expired and return
    // true or false
  // return !this.jwtHelper.isTokenExpired(token);
}

getUser(id: number) {
  return this.httpClient.get<User>('https://banabanaapi.herokuapp.com/testApp/users/' + id);
}

}
