import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ON_OFF_ANIMATION } from '../../animations/animations';
import { Router, ActivatedRoute, RoutesRecognized } from '@angular/router';
import { SharedRouterService } from '../../../routing/routerService';

@Component({
  selector: 'app-intro',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class IntroComponent implements OnInit {
  constructor(private router: Router,
              private srs : SharedRouterService){}
  introButtonText: String;

  @Output() introSkipped :EventEmitter<boolean> = new EventEmitter();

  particlesStyle: object = {};
  particlesParams: object = {};
  width: number = 100;
  height: number = 100;

  ngOnInit () {
    this.introButtonText = 'WELCOME';
    this.particlesStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0
    };

    this.particlesParams = {
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
                "value": 2,
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
                "distance": 85,          
                "opacity": 0.3,  
              },
              move: {
                "enable": true,
                "speed": 5,
                "direction": "none",
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
