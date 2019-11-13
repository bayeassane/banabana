import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategorieComponent } from './components/categorie/categorie.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { AjoutArticleComponent } from './components/ajout-article/ajout-article.component';
import { ListArticleComponent } from './components/list-article/list-article.component';


const routes: Routes = [
  { path: 'categorie',component: CategorieComponent},
  { path: 'articles',component: ArticlesComponent},
  { path: 'ajoutArticle',component: AjoutArticleComponent},
  { path: 'listArticle',component: ListArticleComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
