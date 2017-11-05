import { animate, state, style, transition, trigger, keyframes } from '@angular/animations';

export const ON_OFF_ANIMATION =
trigger('onOffTrigger', [
    state('off', style({
      color: 'white',
    })),
    state('on', style({
      color:'red',
    })),
    transition('off => on', animate('.4s 50ms ease-in' )),
    transition('on => off', animate('.4s 50ms ease-out'))
]);
