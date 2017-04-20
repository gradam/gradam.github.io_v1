import { Component } from "@angular/core";
import { rubberAnimation } from "../rubber-animation";


@Component({
  selector: 'CV',
  templateUrl: './CV.component.html',
  styleUrls: ['./CV.component.css']
})
export class CVComponent {

  mouseIn(event): void {
    let target = $(event.target);
    rubberAnimation(target);
  }
}
