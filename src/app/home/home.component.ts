import { Component } from "@angular/core";


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  title = ['Hi!', 'I\'m Jakub,', 'full-stack developer.']
    .map((text) => text.split(''));


  mouseIn(event): void {
    let target = $(event.target);
    target.addClass('animated rubberBand');
    target.bind("webkitAnimationEnd mozAnimationEnd animationEnd", () => {
      target.removeClass('animated rubberBand')
    })
  }
}

