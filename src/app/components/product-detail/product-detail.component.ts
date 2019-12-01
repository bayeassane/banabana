import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article/article';
import { ArticleService } from 'src/app/services/articles/article.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CategorieService } from 'src/app/services/categories/categorie.service';
import { User } from 'src/app/models/user/user';
import { Louma } from 'src/app/models/louma/louma';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass']
})
export class ProductDetailComponent implements OnInit {
  product: Article;
  owner: User[];
  loumas: Louma[];

  constructor(private categorieService: CategorieService, private route: ActivatedRoute,
              private articleService: ArticleService, private router: Router) { }

  ngOnInit() {
    this.getItem(this.route.snapshot.params.id);
    this.getOwner();
    this.getLoumas();
  }

  getItem(numero: number) {
    this.articleService.getArticle(numero).subscribe((data => {
      this.product = data;
    }));
  }

  getOwner() {
    this.categorieService.getUsers().subscribe((data) => {
      this.owner = data;
    });
  }

  getLoumas() {
    this.categorieService.getLoumas().subscribe((data) => {
      this.loumas = data;
    });
  }

  onBack() {
    this.router.navigate(['']);
  }





}
