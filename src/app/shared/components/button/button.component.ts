import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ON_OFF_ANIMATION } from '../../animations/on-off.animation';
import { Router, ActivatedRoute, RoutesRecognized } from '@angular/router';
import { SharedRouterService } from '../../../routing/routerService';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  constructor(private router: Router,
              private srs : SharedRouterService){}
  enterText: String;
  @Output() introSkipped :EventEmitter<boolean> = new EventEmitter();

  myStyle: object = {};
  myStyle2: object = {};
  myParams: object = {};
  myParams2: object = {};
  width: number = 100;
  height: number = 100;

  ngOnInit () {
    this.enterText = 'Welcome';
    this.myStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '40%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0
  };

  this.myStyle2 = {
    'position': 'fixed',
    'width': '100%',
    'height': '40%',
    'z-index': -1,
    'top': 50,
    'left': 0,
    'right': 0,
    'bottom': 0
};

this.myParams = {
      particles: {
          number: {
              value: 200,
          },
          color: {
              value: '#ff870f'
          },
          shape: {
              type: 'triangle'
          },
          opacity: {
            value: 0.55,
          },
          size: {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 80,
              "size_min": 0.1,
              "sync": false
            }
          },
          line_linked: {
            "enable": true,
            "distance": 80,          
            "opacity": 0.4,  
          },
          move: {
            "enable": true,
            "speed": 1,
            "direction": "top",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": true,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
  }
};

this.myParams2 = {
  particles: {
      number: {
          value: 200,
      },
      color: {
          value: '#ff870f'
      },
      shape: {
          type: 'triangle'
      },
      opacity: {
        value: 0.55,
      },
      size: {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 80,
          "size_min": 0.1,
          "sync": false
        }
      },
      line_linked: {
        "enable": true,
        "distance": 80,          
        "opacity": 0.4,  
      },
      move: {
        "enable": true,
        "speed": 1,
        "direction": "bottom",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": true,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
}
};
  }

  enter(){
    this.introSkipped.emit(true);
    this.srs.changeStatusToOn();
  }
}
