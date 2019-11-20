import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { PlusRecentService } from 'src/app/services/plus-recent/plus-recent.service';
import { JwtModule } from '@auth0/angular-jwt';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { CategorieComponent } from './components/categorie/categorie.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArticleService } from './services/articles/article.service';
import { Routes, RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ArticlesComponent } from './components/articles/articles.component';
import { LoumaComponent } from './components/louma/louma.component';
import { PlusRecentComponent } from './components/plus-recent/plus-recent.component';
import { LoginComponent } from './components/login/login.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ListArticleComponent } from './components/list-article/list-article.component';
import { AjoutArticleComponent } from './components/ajout-article/ajout-article.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';



const routes: Routes = [
  { path: '', component: PlusRecentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'search/:query', component: SearchResultComponent },
  { path: 'categories', component: CategorieComponent },
  { path: 'categorie/:nomCategorie', component: ArticlesComponent },
  { path: 'terms', component: CategorieComponent },
  { path: 'loumas', component: LoumaComponent },
  { path: 'logout', component: PlusRecentComponent },
  { path: '*', redirectTo: '/home', pathMatch: 'full' }
];

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    CategorieComponent,
    FooterComponent,
    ArticlesComponent,
    LoumaComponent,
    PlusRecentComponent,
    LoginComponent,
    ProductDetailComponent,
    SearchResultComponent,
    SpinnerComponent,
    ListArticleComponent,
    AjoutArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        // tslint:disable-next-line: object-literal-shorthand
        tokenGetter: tokenGetter,
        whitelistedDomains: ['https://uadb-gainde.herokuapp.com/testApp/'],
        blacklistedRoutes: ['https://uadb-gainde.herokuapp.com/testApp/login']
      }
    }),
    RouterModule.forRoot(routes),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [ArticleService, LoginService, PlusRecentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
