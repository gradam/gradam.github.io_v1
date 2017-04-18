import { Component } from "@angular/core";
import { ABOUT } from './text';
import { rubberAnimation } from "../rubber-animation";


@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  about = ABOUT;
  title = 'About me'.split('');
  title2 = 'About me';
  showTitle = false;

  mouseIn(event): void {
    let target = $(event.target);
    rubberAnimation(target);
  }
}
