import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(public auth: LoginService, public router: Router) {}
  canActivate(): boolean {
    if (!this.auth.loggedIn()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
