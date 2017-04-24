import { Component } from '@angular/core';
import { NavigationStart, Router } from "@angular/router";


@Component({
  selector: 'navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']
})
export class NavbarComponent {
  isIn = false;

  constructor(private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isIn = false;
      }
    })
  }

  toggleState(event) {
    this.isIn = !this.isIn;
    if (this.isIn) {
      console.log(event)
    }
  }
}
