import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { CategorieComponent } from './components/categorie/categorie.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { AjoutArticleComponent } from './components/ajout-article/ajout-article.component';
import { ListArticleComponent } from './components/list-article/list-article.component';

import { AuthGuardService as AuthGuard } from 'src/app/services/auth-guard/auth-guard.service';
import { EditArticleComponent } from './components/edit-article/edit-article.component';


const routes: Routes = [
  { path: 'categorie', component: CategorieComponent},
  { path: 'articles', component: ArticlesComponent},
  { path: 'ajoutArticle', component: AjoutArticleComponent,  canActivate: [AuthGuard] },
  { path: 'liste-de-mes-articles', component: ListArticleComponent,  canActivate: [AuthGuard] },
  { path: 'articles/edit/:id', component: EditArticleComponent,  canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
