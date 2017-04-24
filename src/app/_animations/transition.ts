// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style } from '@angular/animations';
let time = '1s';

export const transitionAnimation =
  // trigger name for attaching this animation to an element using the [@triggerName] syntax
  trigger('transitionAnimation', [

    // end state styles for route container (host)
    state('*', style({
      position: 'fixed',
      width: '100%',
      height: 'calc(100% - 100px)'
      // transform: 'translate(-50%, -50%)'

    })),
    // route 'enter' transition
    transition(':enter', [
      style({
        right: '-400%'
      }),
      animate(`${time} ease-in-out`, style({
        right: '0%'
      }))
    ]),
    transition(':leave', [
      animate(`${time} ease-in-out`, style({
        opacity: '0'
      }))
    ])
  ]);
