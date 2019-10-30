import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  isShow = true;
  element: HTMLElement;

  constructor(private loginService: LoginService, private router: Router) { }

  toggle() {
    this.isShow = !this.isShow;
  }

getToken(): boolean {
  return this.loginService.loggedIn();
}
logout() {
  this.loginService.logout();
  this.router.navigate(['/']);
}

  ngOnInit() {

  }


}
