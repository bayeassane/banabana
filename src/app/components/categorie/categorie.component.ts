import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/articles/article.service';
import { Article } from 'src/app/models/article/article';
import { tap, map, filter } from 'rxjs/operators';
import { CategorieService } from 'src/app/services/categories/categorie.service';
import { Categorie } from 'src/app/models/categorie/categorie';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.sass']
})
export class CategorieComponent implements OnInit {
  categories: Observable<Categorie[]>;

  constructor(public categorieService: CategorieService) { }

  ngOnInit() {
    this.getItems();
    console.log(this.categories);
  }

  getItems() {
    this.categorieService.getCategorie().pipe(
      map((data) => {
        this.categories = data;
      })
    );
  }

}
