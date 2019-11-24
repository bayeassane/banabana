import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/article/article';
import { ArticleService } from 'src/app/services/articles/article.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  resRec: Observable<Article[]>;
  isShow = true;
  isSubmitted = false;
  recForm: FormGroup;
  erorParam = false;
  element: HTMLElement;

  constructor(private loginService: LoginService, private router: Router,
              private formBuilder: FormBuilder, private toast: ToastrService) { }

  toggle() {
    this.isShow = !this.isShow;
  }

getToken(): boolean {
  return this.loginService.loggedIn();
}
logout() {
  this.loginService.logout();
  this.toast.warning('Vous êtes déconneté !');
  this.router.navigate(['/']);
}

initRec() {
  this.recForm  =  this.formBuilder.group({
    variable: ['', Validators.required]
});
}

get f() { return this.recForm.controls; }

redirection() {
  console.log(this.recForm.value);
  this.isSubmitted = true;
  if (this.recForm.invalid) {
    return;
  } else {
    this.isShow = true;

    this.router.navigate(['search/' + this.recForm.value.variable]);
  }
}

  ngOnInit() {
    this.initRec();
  }


}
