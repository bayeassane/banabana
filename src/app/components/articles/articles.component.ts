import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article/article';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/services/articles/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.sass']
})
export class ArticlesComponent implements OnInit {
  resultats: Article[];
  isShow = false;
  nomCat = '';
  constructor(private route: ActivatedRoute, private articleService: ArticleService, private router: Router) { }

  articleCategorie(nom: string) {
    return this.articleService.getArticlesCategorie(nom).subscribe((data => {
      this.resultats = data;
      console.log(data);
    }));
  }

  ngOnInit() {
    let nom = this.route.snapshot.params.nomCategorie;
    // tslint:disable-next-line: no-unused-expression
    nom = nom[0].toUpperCase() +  nom.slice(1);
    this.articleCategorie(nom);
    this.nomCat = nom;
  }

  plusRecentArticle(id: number) {

    console.log(id);
    this.router.navigate(['/products', id]);

  }


}
