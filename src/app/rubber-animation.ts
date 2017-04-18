export function rubberAnimation(target): void {
  target.addClass('animated rubberBand');
  target.bind("webkitAnimationEnd mozAnimationEnd animationEnd", () => {
    target.removeClass('animated rubberBand')
  })
}
