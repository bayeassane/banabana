import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { JwtModule } from '@auth0/angular-jwt';

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

const routes: Routes = [
  { path: '', component: CategorieComponent },
  { path: 'about', component: CategorieComponent },
  { path: 'privacy', component: CategorieComponent },
  { path: 'terms', component: CategorieComponent },
  { path: '*', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    CategorieComponent,
    FooterComponent,
    ArticlesComponent,
    LoumaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),

    JwtModule.forRoot({
      config: {
        tokenGetter: function  tokenGetter() {
             return     localStorage.getItem('access_token'); },
        whitelistedDomains: ['https://uadb-gainde.herokuapp.com/testApp'],
        blacklistedRoutes: ['https://uadb-gainde.herokuapp.com/testApp/login']
      }
    })
  ],
  providers: [ArticleService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
