import { Component, OnInit } from '@angular/core';
import { CategorieService } from 'src/app/services/categories/categorie.service';
import { Louma } from 'src/app/models/louma/louma';
import { Observable } from 'rxjs';
import { Zone } from 'src/app/models/zone/zone';


@Component({
  selector: 'app-louma',
  templateUrl: './louma.component.html',
  styleUrls: ['./louma.component.sass']
})
export class LoumaComponent implements OnInit {
  loumas: Louma[];
  zone: Observable<Zone>;
  zonee: Zone[] = [];

  constructor(private categorieService: CategorieService) { }

  getLoumas() {
    this.categorieService.getLoumas().subscribe((data) => {
      this.loumas = data;
      console.log(data);
    });
  }

  getZones() {
    this.categorieService.getZones().subscribe((data) => {
      /*data.forEach(res => {
        this.zonee.push(res);
        console.log(this.zonee);
        });*/
        this.zone = data;
        console.log(data);
    });
  }

  getZone(id: number) {
    this.categorieService.getZone(id).subscribe((data) => {
      console.log(data);
      return data;
    });
  }

  ngOnInit() {
    this.getLoumas();
    this.getZones();
  }

}
