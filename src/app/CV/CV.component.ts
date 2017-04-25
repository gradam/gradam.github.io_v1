import { Component } from "@angular/core";
import { rubberAnimation } from "../rubber-animation";
import { transitionAnimation } from "../_animations/transition";


@Component({
  selector: 'CV',
  templateUrl: './CV.component.html',
  styleUrls: ['./CV.component.css'],
  animations: [transitionAnimation],
  host: {'[@transitionAnimation]': ''}
})
export class CVComponent {

  mouseIn(event): void {
    let target = $(event.target);
    rubberAnimation(target);
  }
}
