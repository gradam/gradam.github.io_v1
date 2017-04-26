import { Component } from "@angular/core";
import { rubberAnimation } from "../rubber-animation";
import { transitionAnimation } from "../_animations/transition";


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [transitionAnimation],
  // attach the fade in animation to the host (root) element of this component
  host: {'[@transitionAnimation]': ''}
})
export class HomeComponent {
  title = ['Hi!', 'I\'m Jakub,', 'full stack developer.']
    .map((text) => text.split(' ')
      .map((word) => {
        word = word + ' ';
        return word.split('')
      })
    );

  constructor() {
    let counter = 0;
    for (let line of this.title) {
      let secondIndex = line.length - 1;
      let thirdIndex = this.title[counter][secondIndex].length - 1;
      this.title[counter][secondIndex].splice(thirdIndex, 1);
      counter++;
    }
  }


  mouseIn(event): void {
    let target = $(event.target);
    rubberAnimation(target);
  }
}

