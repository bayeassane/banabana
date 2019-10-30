import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  boxForm: FormGroup;
  isSubmitted  =  false;
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
    console.log(this.boxForm.value);
    this.isSubmitted = true;
    if (this.boxForm.invalid) {
      return;
    }
    this.loginService.login(this.boxForm.value.username, this.boxForm.value.passeword);
    if (localStorage.getItem('access_token')) {
      this.router.navigateByUrl('/loumas');
    } else {
        this.erorCon = true;
        console.log(this.erorCon);
        this.router.navigate(['/login']);
    }

  }
  get formControls() { return this.boxForm.controls; }

  ngOnInit() {
    this.connexion();
  }



}
