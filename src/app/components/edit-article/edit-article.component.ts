import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article/article';
import { ArticleService } from 'src/app/services/articles/article.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategorieService } from 'src/app/services/categories/categorie.service';
import { Louma } from 'src/app/models/louma/louma';
import { Categorie } from 'src/app/models/categorie/categorie';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.sass']
})
export class EditArticleComponent implements OnInit {
  public article: Article;
  loumas: Louma[];
  categories: Observable<Categorie[]>;

  constructor(private router: Router, 
              private activatedRoute: ActivatedRoute, 
              private articleService: ArticleService,
              private formBuilder: FormBuilder,
              private categorieService: CategorieService) { }

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
    console.log(this.article);

    this.initForm();
  }

  initForm() {
    
    this.editForm = this.formBuilder.group({
      nom: ['', Validators.required],
      louma: ['', Validators.required],
      cat: ['', Validators.required],
      prix: ['', Validators.required],
      image: [''],
      description: ['', Validators.required],
    })
  }

  onEdit() {
    console.log('Edit')
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


  onBack() {
    this.router.navigate(['/liste-de-mes-articles'])
  }

}
