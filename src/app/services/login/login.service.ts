import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  // Connection
  login(email: string, password: string) {
    return this.httpClient.post<{access_token: string}>('http://www.your-server.com/auth/login', {email, password}).pipe(tap(res => {
    localStorage.setItem('access_token', res.access_token);
}));
}

// Deconnection
logout() {
  localStorage.removeItem('access_token');
}

// l'utilisateur est il connecté
public get loggedIn(): boolean {
  return localStorage.getItem('access_token') !==  null;
}
}
