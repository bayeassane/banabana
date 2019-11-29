import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article/article';
import { ArticleService } from 'src/app/services/articles/article.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategorieService } from 'src/app/services/categories/categorie.service';
import { Louma } from 'src/app/models/louma/louma';
import { Categorie } from 'src/app/models/categorie/categorie';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.sass']
})
export class EditArticleComponent implements OnInit {
  public article: Article;
  isSubmitted  =  false;
  onLoad = false;
  erorCon = false;
  loumas: Louma[];
  categories: Observable<Categorie[]>;

  constructor(private router: Router, 
              private activatedRoute: ActivatedRoute, 
              private articleService: ArticleService,
              private formBuilder: FormBuilder,
              private categorieService: CategorieService,
              private toast: ToastrService) { }

  editForm: FormGroup;
  ngOnInit() {
    this.article = new Article();
    this.getLoumas();
    this.getCategorie();
    const idArticle = this.activatedRoute.snapshot.params['id'];
    this.articleService.getArticle(+idArticle).subscribe(
      (article: Article) => {
        this.article = article;
      }
    );
    // console.log(this.article);

    this.initForm();
    this.articleService.getArticle(idArticle).subscribe((data) => {
      // console.log(data);
      this.editForm.setValue(data);
      console.log(this.editForm);
    });
  }

  onChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.editForm.get('image').setValue(file);
    }
  }

  ajouter() {
    this.onLoad = true;
    this.erorCon = false;
    // console.log(this.boxForm.value);
    this.isSubmitted = true;
    if (this.editForm.invalid) {
      this.onLoad = false;
      return;
    }
    const formData = new FormData();
    formData.append('image', this.editForm.value.image);
    formData.append('nom', this.editForm.value.nom);
    formData.append('desc', this.editForm.value.description);
    formData.append('louma', this.editForm.value.louma);
    formData.append('categorie', this.editForm.value.cat);
    formData.append('prix', this.editForm.value.prix);
    formData.append('created_by', localStorage.getItem('user_connect'));
    formData.append('file', this.editForm.get('desc').value);
    console.log(this.editForm.value.id);
    const id = this.activatedRoute.snapshot.params['id'];
    this.articleService.upload(id, formData).subscribe(
      (res) => {
        this.toast.success('Modifié avec succès !');
        this.router.navigate(['liste-de-mes-articles']);
      },
      (err) => {
        console.log(err);
      }
    );

  }



  initForm() {
    this.editForm = this.formBuilder.group({
      nom: ['', Validators.required],
      louma: ['', Validators.required],
      categorie: ['', Validators.required],
      prix: ['', Validators.required],
      image: [''],
      desc: ['', Validators.required],
      id: ['', Validators.required],
      created_by: ['', Validators.required],
      created_at: ['', Validators.required],
      lastmodified_at: ['', Validators.required]
    });
  }

  onEdit() {
    console.log('Edit')
  }

  getLoumas() {
    this.categorieService.getLoumas().subscribe((data) => {
      this.loumas = data;
      // console.log(data);
    });
  }
  getCategorie() {
    this.categorieService.getCategorie().subscribe((data) => {
      this.categories = data;
    });
  }


  onBack() {
    this.router.navigate(['/liste-de-mes-articles'])
  }

}
