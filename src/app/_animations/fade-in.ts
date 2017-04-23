// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style } from '@angular/animations';
let time = '1s';

export const fadeInAnimation =
  // trigger name for attaching this animation to an element using the [@triggerName] syntax
  trigger('fadeInAnimation', [

    // end state styles for route container (host)
    state('*', style({
      position: 'fixed',
      width: '100%',
      height: '100%'
      // transform: 'translate(-50%, -50%)'

    })),
    // route 'enter' transition
    transition(':enter', [
      style({
        opacity: '0',
      }),
      animate(`${time} ease-in-out`, style({
        opacity: '1',
      }))
    ]),
    transition(':leave', [
      animate(`${time} ease-in-out`, style({
        opacity: '0'
      }))
    ])
  ]);
