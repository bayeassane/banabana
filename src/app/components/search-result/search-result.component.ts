import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/articles/article.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.sass']
})
export class SearchResultComponent implements OnInit {

  constructor(articleService: ArticleService) { }

  

  ngOnInit() {
  }

}
