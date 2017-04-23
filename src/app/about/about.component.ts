import { Component } from "@angular/core";
import { ABOUT } from './text';
import { rubberAnimation } from "../rubber-animation";
import { transitionAnimation } from '../_animations/transition';


@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  // make fade in animation available to this component
  animations: [transitionAnimation],

  // attach the fade in animation to the host (root) element of this component
  host: {'[@transitionAnimation]': ''}
})
export class AboutComponent {
  about = ABOUT;
  title = 'About me'.split('');

  mouseIn(event): void {
    let target = $(event.target);
    rubberAnimation(target);
  }
}
