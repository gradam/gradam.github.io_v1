import { Component } from "@angular/core";
import { STYLE } from "./map-styles.component";
import { rubberAnimation } from "../rubber-animation";
import { fadeInAnimation } from "../_animations/fade-in";


@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  // make fade in animation available to this component
  animations: [fadeInAnimation],

  // attach the fade in animation to the host (root) element of this component
  host: {'[@fadeInAnimation]': ''}
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
