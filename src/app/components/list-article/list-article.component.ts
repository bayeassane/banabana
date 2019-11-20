import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/articles/article.service';
import { Article } from 'src/app/models/article/article';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.sass']
})
export class ListArticleComponent implements OnInit {
  articles: Article[];
  constructor(private articleService: ArticleService, private router: Router) { }

articleUser() {
  const user = localStorage.getItem('user_connect');
  this.articleService.articleUser(user).subscribe((data) => {
    console.log(data);
    this.articles = data;
  });
}

  ngOnInit() {
    this.articleUser();
  }

  detailArticle(id: number) {
    this.router.navigate(['/products', id]);
  }

}
