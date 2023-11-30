import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
})
export class NavigationMenuComponent implements OnInit {
  isMobile: boolean = false;

  constructor() {
    this.checkScreenSize();
  }

  ngOnInit() {}

  checkScreenSize() {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width <= 600) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    }
  }
}
