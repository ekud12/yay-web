import { animate, state, style, transition, trigger, keyframes, query, stagger } from '@angular/animations';

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

export const NAVBAR_BUTTON_SELECTED =
trigger('navbarButtonSelectedTrigger', [
  state('notSelected', style({})),
  state('about', style({
    borderBottom:'2px solid blue',
  })),
  state('showcase', style({
    borderBottom:'2px solid orange',
  })),
  state('pointer', style({
    borderBottom:'2px solid yellow',
  })),
  state('home', style({
    borderBottom:'2px solid green',
  })),
  state('profile', style({
    borderBottom:'2px solid red',
  })),
  transition('* <=> *', animate('400ms ease-in' )),
]);

export const NAVBAR_BUTTON_EFFECT =
trigger('navbarButtontrigger', [
  state('notInReach', style({
    color: '#bcbcbc'
  })),
  state('inReach', style({
    color: 'white'
  })),
  state('clicked', style({
    color: "{{newColor}}"
  }), {params: { newColor: "white"}}),
  transition('* <=> *', animate('400ms ease-in')), 
]);

export const NAVBAR_SVG_EFFECT =
trigger('navbarSVGtrigger', [
  state('notInReach', style({
    transform : 'translateY(-100%)',
    opacity: '0'
  })),
  state('inReach', style({
    transform : 'translateY(-30%)',
    opacity: '0.8'
  })),
  state('clicked', style({
    transform : 'translateY(-100%)',
    opacity: '0'
  })),
  transition('* <=> *', animate('150ms ease-in' )),
]);

export const NAVBAR_STAGGER_BUTTONS =
trigger('listAnimation', [
  transition('* => *', [
    // this hides everything right away
    query('.col', style({ opacity: 0 , transform: 'translateY(-25%)'})),
    // starts to animate things with a stagger in between
    animate('2s'),
    query('.col', stagger('200ms', [
      animate('0.1s', style({ opacity: 1 , transform: 'translateY(0)'})),
    ]))
  ])
])


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

export const LOGO_LEFT_ANIMATION =
trigger('logoLeftAnimationTrigger', [
  state('Hovered', style({ transform: 'translateX(3%) translateY(-2%)',fill: '#FFA500'})),
  state('notHovered', style({ transform: 'translateX(0)'})),
  transition('notHovered <=> Hovered', animate('300ms ease-in'))
])

export const LOGO_RIGHT_ANIMATION =
trigger('logoRightAnimationTrigger', [
  state('Hovered', style({ transform: 'translateX(-4%)',fill: '#FFA500'})),
  state('notHovered', style({ transform: 'translateX(0)'})),
  transition('notHovered <=> Hovered', animate('300ms ease-in'))
])
export const LOGO_BOTTOM_ANIMATION =
trigger('logoBottomAnimationTrigger', [
  state('Hovered', style({ transform: 'translateY(8%) translateX(1%)',fill: '#FFA500'})),
  state('notHovered', style({ transform: 'translateY(0)'})),
  transition('notHovered <=> Hovered', animate('300ms ease-in'))
])
