import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  isShow = true;
  element: HTMLElement;

  constructor() { }

  toggle() {
    this.isShow = !this.isShow;
  }

  ngOnInit() {
  }

}
