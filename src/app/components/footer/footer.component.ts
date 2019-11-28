import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CategorieService } from 'src/app/services/categories/categorie.service';
import { Observable } from 'rxjs';
import { Categorie } from 'src/app/models/categorie/categorie';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
  categories: Observable<Categorie[]> ;

  constructor(private categorieService: CategorieService) { }

  ngOnInit() {
    this.categorieService.getCategorie().subscribe(
      (cats) => {
        this.categories = cats;
        console.log(cats)
      }
    )
  }

  

  essaie = new Date();



}


