import { Component } from "@angular/core";
import { ABOUT } from './text';
import { rubberAnimation } from "../rubber-animation";
import { fadeInAnimation } from '../_animations/fade-in';


@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  // make fade in animation available to this component
  animations: [fadeInAnimation],

  // attach the fade in animation to the host (root) element of this component
  host: {'[@fadeInAnimation]': ''}
})
export class AboutComponent {
  about = ABOUT;
  title = 'About me'.split('');

  mouseIn(event): void {
    let target = $(event.target);
    rubberAnimation(target);
  }
}
