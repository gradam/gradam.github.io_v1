import { Component } from "@angular/core";
import { rubberAnimation } from "../rubber-animation";
import { fadeInAnimation } from "../_animations/fade-in";


@Component({
  selector: 'CV',
  templateUrl: './CV.component.html',
  styleUrls: ['./CV.component.css'],
    // make fade in animation available to this component
  animations: [fadeInAnimation],

  // attach the fade in animation to the host (root) element of this component
  host: {'[@fadeInAnimation]': ''}
})
export class CVComponent {

  mouseIn(event): void {
    let target = $(event.target);
    rubberAnimation(target);
  }
}
