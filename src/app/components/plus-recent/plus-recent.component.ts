import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article/article';
import { PlusRecentService } from 'src/app/services/plus-recent/plus-recent.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CategorieService } from 'src/app/services/categories/categorie.service';
import { Observable } from 'rxjs';
import { Categorie } from 'src/app/models/categorie/categorie';

@Component({
  selector: 'app-plus-recent',
  templateUrl: './plus-recent.component.html',
  styleUrls: ['./plus-recent.component.sass']
})
export class PlusRecentComponent implements OnInit {

  plArticles: Article [];
  categories: Categorie[] ;


  constructor(public plService: PlusRecentService, private router: Router, private route: ActivatedRoute,
              private categorieService: CategorieService) { }

  ngOnInit() {
    this.getItems();
    console.log(this.plArticles);
    
   
  }


  getItems() {
    this.plService.getArticles().subscribe((data) => {
      this.plArticles = data;
      console.log(data);
    });
  }

  plusRecentArticle(id: number) {

    console.log(id);
    this.router.navigate(['/products', id]);

  }

 
 
  

  
}
