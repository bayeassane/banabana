import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/articles/article.service';
import { Article } from 'src/app/models/article/article';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.sass']
})
export class SearchResultComponent implements OnInit {
  resultats: Article[];
  isShow = false;
  motCle = '';

  constructor(private route: ActivatedRoute, private articleService: ArticleService) { }

  resultSearch(nom: string) {
    return this.articleService.searchArticles(nom).subscribe((data => {
      this.resultats = data;
      console.log(data);
    }));
  }

  ngOnInit() {
    this.resultSearch(this.route.snapshot.params.query);
    this.motCle = this.route.snapshot.params.query;
  }

}
