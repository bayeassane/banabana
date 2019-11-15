import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { UserLogin } from 'src/app/models/user-login/user-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  boxForm: FormGroup;
  isSubmitted  =  false;
  onLoad = false;
  erorCon = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginService) { }


  connexion() {
    this.boxForm  =  this.formBuilder.group({
      username: ['', Validators.required],
      passeword: ['', Validators.required]
  });

  }



  get f() { return this.boxForm.controls; }

  login() {
    this.onLoad = true;
    this.erorCon = false;
    console.log(this.boxForm.value);
    this.isSubmitted = true;
    if (this.boxForm.invalid) {
      this.onLoad = false;
      return;
    }
    this.loginService.login(this.boxForm.value.username, this.boxForm.value.passeword)
        .subscribe(
            data => {
              localStorage.setItem('access_token', data.token);
              localStorage.setItem('user_connect', '' + data.user.id);
              this.router.navigate(['/']);
            },
            (error: HttpErrorResponse) => {
              this.isSubmitted = false;
              this.erorCon = true;
              this.onLoad = false;
              console.log(error.error);
            });

  }
  get formControls() { return this.boxForm.controls; }

  ngOnInit() {
    this.connexion();
  }
 // error
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
