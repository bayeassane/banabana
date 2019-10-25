import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/article';
import { tap, map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.sass']
})
export class CategorieComponent implements OnInit {
  articles: Article [];

  constructor(public articleService: ArticleService) { }

  ngOnInit() {
    this.getItems();
    console.log(this.articles)
  }

  getItems() {
    this.articleService.getArticles().subscribe((data)=>{
      this.articles = data;
      console.log(data)
    });
  }

}
