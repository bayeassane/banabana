import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/articles/article.service';
import { Article } from 'src/app/models/article/article';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.sass']
})
export class ListArticleComponent implements OnInit {
  articles: Article[];
  constructor(private articleService: ArticleService) { }

articleUser() {
  const user = localStorage.getItem('user_connect');
  this.articleService.articleUser(user).subscribe((data) => {
    this.articles = data;
  });
}

  ngOnInit() {
    this.articleUser();
  }

}
