import { LOGO_LEFT_ANIMATION, LOGO_RIGHT_ANIMATION, LOGO_BOTTOM_ANIMATION } from './../../../animations/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-logo',
  templateUrl: './big-logo.component.html',
  styleUrls: ['./big-logo.component.css'],
  animations: [LOGO_LEFT_ANIMATION, LOGO_RIGHT_ANIMATION, LOGO_BOTTOM_ANIMATION]
})
export class BigLogoComponent implements OnInit {
  logo_activated = 'notHovered';
  constructor() { }

  ngOnInit() {
  }
  
  ToggleLogoAnim(){
    this.logo_activated = 'Hovered';
  }
  ToggleLogoAnimOff(){
    this.logo_activated = 'notHovered';
  }

}
