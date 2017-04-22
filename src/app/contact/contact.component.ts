import { Component } from "@angular/core";
import { STYLE } from "./map-styles.component";
import { rubberAnimation } from "../rubber-animation";


@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  lat = 52.407884;
  lng = 16.933114;
  zoom = 5;
  styles = STYLE;
  email = 'kuba.semik@gmail.com';
  emailLink: string;

  constructor() {
    this.emailLink = `mailto:${this.email}`
  }

  mouseIn(event): void {
    let target = $(event.target);
    rubberAnimation(target);
  }

}
