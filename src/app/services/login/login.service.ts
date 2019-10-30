import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

import { tap } from 'rxjs/operators';
import { UserLogin } from 'src/app/models/user-login/user-login';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  // Connection
  login(username: string, password: string) {
    return this.httpClient.post<UserLogin>('https://uadb-gainde.herokuapp.com/testApp/login', {username, password}).subscribe((data)=>{
      console.log(data.token);
      localStorage.setItem('access_token', data.token);

    });
    }

// Deconnection
logout() {
  localStorage.removeItem('access_token');
}

// l'utilisateur est il connecté
public  loggedIn(): boolean {
  return localStorage.getItem('access_token') !==  null;
}
}
