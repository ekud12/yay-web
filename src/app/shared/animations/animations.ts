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

export const FOOTER_APPEAR_ANIMATION =
trigger('popFooterTrigger', [
  state('void', style({position: 'absolute',transform: 'translateY(500%)',opacity : '0.1'})),
  state('*', style({position: 'absolute',transform: 'translateY(0)',opacity : '0.8'})),
  transition('void <=> *', animate('1000ms ease-in')),
]);


export const NAVBAR_BUTTON_SELECTED =
trigger('navbarButtonSelectedTrigger', [
  state('notSelected', style({})),
  state('About', style({
    borderBottom:'3px solid #38c3ff',
  })),
  state('Showcase', style({
    borderBottom:'3px solid orange',
  })),
  state('Pointer', style({
    borderBottom:'3px solid #7d8200',
  })),
  state('Home', style({
    borderBottom:'3px solid #00934c',
  })),
  state('Profile', style({
    borderBottom:'3px solid #ff366c',
  })),
  transition('* <=> *', animate('400ms ease-in' )),
]);


export const NAVBAR_BUTTON_SELECTED_FOOTER =
trigger('navbarButtonSelectedFooterTrigger', [
  state('notSelected', style({})),
  state('About', style({
    borderTop:'2px solid #38c3ff',
  })),
  state('Showcase', style({
    borderTop:'2px solid orange',
  })),
  state('Pointer', style({
    borderTop:'2px solid #7d8200',
  })),
  state('Home', style({
    borderTop:'2px solid #00934c',
  })),
  state('Profile', style({
    borderTop:'2px solid #ff366c',
  })),
  transition('* <=> *', animate('400ms ease-in' )),
]);

export const NAVBAR_BUTTON_EFFECT =
trigger('navbarButtontrigger', [
  state('notInReach', style({
    color: 'rgb(102, 102, 102)'
  })),
  state('inReach', style({
    color: 'black'
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

export const FOOTER_STAGGER_SOCIAL =
trigger('listAnimation', [
  transition('* => *', [
    // this hides everything right away
    query('.col', style({ opacity: 0 , transform: 'translateY(25%)'})),
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
  state('Hovered', style({ fill: 'rgb(208, 255, 0)'})),
  state('notHovered', style({ fill: 'black'})),
  transition('notHovered <=> Hovered', animate('300ms ease-in'))
])

export const LOGO_RIGHT_ANIMATION =
trigger('logoRightAnimationTrigger', [
  state('Hovered', style({ opacity: '1'})),
  state('notHovered', style({ opacity: '1'})),
  transition('notHovered <=> Hovered', animate('300ms ease-in'))
])

export const LOGO_BOTTOM_ANIMATION =
trigger('logoBottomAnimationTrigger', [
  state('Hovered', style({ transform: 'translateX(0)',opacity: 1})),
  state('notHovered', style({ transform: 'translateX(-100%)',opacity: 0})),
  transition('notHovered <=> Hovered', animate('300ms ease-in'))
])
