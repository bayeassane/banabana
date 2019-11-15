import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArticleService } from 'src/app/services/articles/article.service';
import { throwError, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { CategorieService } from 'src/app/services/categories/categorie.service';
import { Louma } from 'src/app/models/louma/louma';
import { Categorie } from 'src/app/models/categorie/categorie';

@Component({
  selector: 'app-ajout-article',
  templateUrl: './ajout-article.component.html',
  styleUrls: ['./ajout-article.component.sass']
})
export class AjoutArticleComponent implements OnInit {
  boxForm: FormGroup;
  isSubmitted  =  false;
  onLoad = false;
  erorCon = false;
  loumas: Louma[];
  categories: Observable<Categorie[]>;

  constructor(private categorieService: CategorieService, private formBuilder: FormBuilder,
              private router: Router, private articleService: ArticleService) { }

  initial() {
    this.boxForm  =  this.formBuilder.group({
      nom: ['yup', Validators.required],
      louma: ['', Validators.required],
      cat: ['', Validators.required],
      prix: ['', Validators.required],
      image: [''],
      description: ['', Validators.required],
  });

  }

  onChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.boxForm.get('image').setValue(file);
    }
  }

  ajouter() {
    this.onLoad = true;
    this.erorCon = false;
    // console.log(this.boxForm.value);
    this.isSubmitted = true;
    if (this.boxForm.invalid) {
      this.onLoad = false;
      return;
    }
    const formData = new FormData();
    formData.append('image', this.boxForm.value.image);
    formData.append('nom', this.boxForm.value.nom);
    formData.append('desc', this.boxForm.value.description);
    formData.append('louma', this.boxForm.value.louma);
    formData.append('categorie', this.boxForm.value.cat);
    formData.append('prix', this.boxForm.value.prix);
    formData.append('created_by', localStorage.getItem('user_connect'));
    // formData.append('file', this.boxForm.get('description').value);
    console.log('daata');
    console.log(this.boxForm.value);
    const token = localStorage.getItem('access_token');
    this.articleService.upload(formData, token).subscribe(
      (res) => {
        console.log('ok');
        this.router.navigate(['listArticle']);
      },
      (err) => {
        console.log(err);
      }
    );

  }

  getLoumas() {
    this.categorieService.getLoumas().subscribe((data) => {
      this.loumas = data;
      console.log(data);
    });
  }
  getCategorie() {
    this.categorieService.getCategorie().subscribe((data) => {
      this.categories = data;
    });
  }
  ngOnInit() {
    this.initial();
    this.getLoumas();
    this.getCategorie();
  }

}
