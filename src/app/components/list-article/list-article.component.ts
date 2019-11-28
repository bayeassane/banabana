import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/articles/article.service';
import { Article } from 'src/app/models/article/article';
import { Router } from '@angular/router';
import { CategorieService } from 'src/app/services/categories/categorie.service';
import { Categorie } from 'src/app/models/categorie/categorie';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.sass']
})
export class ListArticleComponent implements OnInit {
  articles: Article[]=[];
  categories: Observable<Categorie[]> ;
  constructor(private articleService: ArticleService, private router: Router, private categorieService: CategorieService, private toastr: ToastrService) { }

  articleUser() {
    const user = localStorage.getItem('user_connect');
    this.articleService.articleUser(user).subscribe((data) => {
      console.log(data);
      this.articles = data;
    });
  }

  ngOnInit() {
    this.articleUser();
    this.getCategories();
    
  }

  detailArticle(id: number) {
    this.router.navigate(['/products', id]);
  }

  getCategories() {
    this.categorieService.getCategorie().subscribe(
      (data) => {
        console.log(data);
        this.categories= data;
      }
    )
  }

  onRemoveArticle(article: Article) {
    this.articleService.deleteArticle(article.id).subscribe(
      (res) => {
        console.log(res)
      }, (error) => {
        console.log('Une erreur de suppression '+ error)
      },
      () => {
        console.log('Complete !')
        this.toastr.success('Suppression avec succès !', 'Suppression');
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate(['liste-de-mes-articles']));
      }
    )

    
  }

 

  

}
