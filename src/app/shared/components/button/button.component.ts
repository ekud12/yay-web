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
  myParams: object = {};
  width: number = 100;
  height: number = 100;
  ngOnInit () {
    this.enterText = 'Welcome';
    this.myStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0
  };

this.myParams = {
      particles: {
          number: {
              value: 100,
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
            "distance": 75,          
            "opacity": 0.5,  
          } 
  }
};
  }

  enter(){
    this.introSkipped.emit(true);
    this.srs.changeStatusToOn();
  }
}
