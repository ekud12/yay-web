import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { FADE_ANIMATION ,NAVBAR_STAGGER_BUTTONS, NAVBAR_BUTTON_SELECTED} from '../../../shared/animations/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-points-side-bar',
  templateUrl: './points-navbar.component.html',
  styleUrls: ['./points-navbar.component.css'],
  animations: [FADE_ANIMATION, NAVBAR_STAGGER_BUTTONS, NAVBAR_BUTTON_SELECTED]
})

export class PointsSideBarComponent implements OnInit {
  buttons  = [{text:'About',color:'#38c3ff'},
              {text:'Profile',color:'#ff366c'},
              {text:'Showcase',color:'orange'},
              {text:'Pointer',color:'#7d8200'},
              {text:'Home',color:'#00934c'}];
  id = 0;
  particlesStyle: object = {};
  particlesParams: object = {};
  buttonClicked = 'notSelected';
  @Output() currentButtonStyle: EventEmitter<string> = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(event => console.log(event));
    this.particlesStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '8vh',
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    };

    this.particlesParams = {
          particles: {
              number: {
                  value: 1000,
              },
              color: {
                  value: '#ffb87f'
              },
              shape: {
                  type: 'circle'
              },
              opacity: {
                value: 0.8,
              },
              size: {
                'value': 1,
                'random': true,
                'anim': {
                  'enable': false,
                  'speed': 80,
                  'size_min': 0.1,
                  'sync': false
                },
              },
              line_linked: {
                'enable': false,
                'distance': 0.1,          
                'opacity': 0.3,
              },
              move: {
                'enable': true,
                'speed': 6,
                'direction': 'none',
                'random': false,
                'straight': false,
                'out_mode': 'out',
                'bounce': false,
                'attract': {
                  'enable': true,
                  'rotateX': 600,
                  'rotateY': 1200
                },
              },
            },
            'interactivity': {
              'detect_on': 'canvas',
              'events': {
                'onhover': {
                  'enable': false,
                  'mode': 'repulse'
                },
                'onclick': {
                  'enable': false,
                  'mode': 'push'
                },
                'resize': true
              },
              'modes': {
                'grab': {
                  'distance': 800,
                  'line_linked': {
                    'opacity': 1
                  }
                },
                'bubble': {
                  'distance': 800,
                  'size': 80,
                  'duration': 2,
                  'opacity': 0.8,
                  'speed': 3
                },
                'repulse': {
                  'distance': 400,
                  'duration': 0.4
                },
                'push': {
                  'particles_nb': 4
                },
                'remove': {
                  'particles_nb': 2
                }
              }
            },            
        }
      }

      redirect(a: any){
      this.id = a.text;
      this.buttonClicked = a.text;
      this.currentButtonStyle.emit(a.text);
    }
  }
