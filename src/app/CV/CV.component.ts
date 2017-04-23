import { Component } from "@angular/core";
import { rubberAnimation } from "../rubber-animation";
import { transitionAnimation } from "../_animations/transition";


@Component({
  selector: 'CV',
  templateUrl: './CV.component.html',
  styleUrls: ['./CV.component.css'],
    // make fade in animation available to this component
  animations: [transitionAnimation],

  // attach the fade in animation to the host (root) element of this component
  host: {'[@transitionAnimation]': ''}
})
export class CVComponent {

  mouseIn(event): void {
    let target = $(event.target);
    rubberAnimation(target);
  }
}
