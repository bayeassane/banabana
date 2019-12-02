import { Component } from '@angular/core';
import { SwPush, SwUpdate } from '@angular/service-worker';
import push from 'push.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'BanaBana';

  constructor(private updates: SwUpdate) {
    this.updates.available.subscribe(
      (event) => {
        if(confirm('Voulez vous installer la mise à jour !')) {
          document.location.reload();
        }
        push.create('Mise à jour', {
          body: 'Vous avez une nouvelle mise à jour du site !',
          icon: 'https://www.zupimages.net/up/19/48/2b9q.png',
          onClick() {
              window.focus();
              this.close();
          }
      });
      }
    );
  }
}
