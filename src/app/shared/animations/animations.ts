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

export const FADE_ANIMATION =
trigger('fadeComponentTrigger', [
  state('void', style({opacity : '0'})),
  state('*', style({opacity : '1'})),
  transition('void <=> *', animate('.5s 600ms ease-in' )),
]);


export const FADE_ANIMATION_BUTTON =
trigger('fadeIntroButtonTrigger', [
  transition('* => void', [
    style({
      opacity: '1',
    }),
    animate('400ms ease-in', style({
      opacity: '0',
    }))
  ]),
  transition('void => *', [
    style({
      opacity: '0',
    }),
    animate('400ms ease-in', style({
      opacity: '1',
    }))
  ])
])
