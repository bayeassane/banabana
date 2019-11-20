import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article/article';
import { ArticleService } from 'src/app/services/articles/article.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass']
})
export class ProductDetailComponent implements OnInit {
  product: Article;

  constructor(private route: ActivatedRoute, private articleService: ArticleService, private router: Router) { }

  ngOnInit() {
    this.getItem(this.route.snapshot.params.id);
    console.log(this.route);

    console.log(this.product);
  }

  getItem(numero: number) {
    this.articleService.getArticle(numero).subscribe((data => {
      this.product = data;
    }));
  }

  onBack() {
    this.router.navigate(['']);
  }





}
