import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article/article';
import { PlusRecentService } from 'src/app/services/plus-recent/plus-recent.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CategorieService } from 'src/app/services/categories/categorie.service';
import { Observable } from 'rxjs';
import { Categorie } from 'src/app/models/categorie/categorie';
import { LoginService } from 'src/app/services/login/login.service';
import { User } from 'src/app/models/user/user';

@Component({
  selector: 'app-plus-recent',
  templateUrl: './plus-recent.component.html',
  styleUrls: ['./plus-recent.component.sass']
})
export class PlusRecentComponent implements OnInit {
  categories: Observable<Categorie[]>;
  plArticles: Article [];
  users: User[];
  names: any[]  = [
  
  ];


  constructor(public plService: PlusRecentService, private router: Router, private route: ActivatedRoute,
              private categorieService: CategorieService,
              private user: LoginService) { }

  ngOnInit() {
    this.getItems();
    this.getOwner();
    this.getCategories();
  }

  getCategories() {
    this.categorieService.getCategorie().subscribe((data => {
      this.categories = data;
    }));
  }

  getOwner() {
    this.categorieService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }


  getNameUser(id: number) {
    this.user.getUser(id).subscribe(
      (user: User) => {
        console.log(user);
        return user.username
      }, (error) => {
        console.log('Une erreur'+error);
        return ''
      }, () => {
        console.log('Complete')
      }
    )
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
