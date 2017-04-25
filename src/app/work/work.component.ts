import { Component, HostListener } from "@angular/core";
import { WORKS } from './works';
import { transitionAnimation } from "../_animations/transition";


@Component({
  selector: 'work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
  // make fade in animation available to this component
  animations: [transitionAnimation],

  // attach the fade in animation to the host (root) element of this component
  host: {'[@transitionAnimation]': ''}
})
export class WorkComponent {
  works = WORKS;
  size: number;

  constructor() {
    this.calculateSize();
  }

  private calculateSize() {
    let width = document.documentElement.clientWidth;
    document.documentElement.style.overflowX = 'hidden';
    if (width > 1000) {
      this.size = width / 5;
    }
    else if (width > 800) {
      this.size = width / 3;
    } else {
      this.size = width / 2;
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    this.calculateSize();
  }
}
