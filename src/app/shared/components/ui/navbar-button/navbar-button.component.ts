import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NAVBAR_BUTTON_EFFECT, NAVBAR_SVG_EFFECT } from '../../../animations/animations';

@Component({
  selector: 'app-navbar-button',
  templateUrl: './navbar-button.component.html',
  styleUrls: ['./navbar-button.component.css'],
  animations: [ NAVBAR_BUTTON_EFFECT,NAVBAR_SVG_EFFECT]
})
export class NavbarButtonComponent implements OnInit {
  pointerInReach = 'notInReach';
  pointerInReachSVG = 'notInReach';
  isActivated = false;
  @Input() button_text;
  @Input() color;
  @Input() set isClicked(value: string) {
    if(value === this.button_text){
      this.isActivated = true;
      this.pointerInReach = 'clicked';
      this.pointerInReachSVG = 'notInReach';
    }
    else{
      this.isActivated = false;
      this.pointerInReach= 'notInReach';
      this.pointerInReachSVG= 'notInReach';
    }
  }

  @Output() buttonClicked: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log(this.color);
  }
  toggleEffectON() {
    if(this.isActivated !== true){
      this.pointerInReachSVG = 'inReach';
      this.pointerInReach = 'inReach';
    }
    else{
      this.pointerInReachSVG = 'inReach';
    }
  }
  toggleEffectOFF() {
    if(this.isActivated !== true){
      this.pointerInReach = 'notInReach';
      this.pointerInReachSVG = 'notInReach';
    }
    else{
      this.pointerInReachSVG =  'notInReach';
    }
    

  }
  // toggleButtonPressed(){
  //   if (this.isClicked === this.button_text){
  //     console.log("-------------------------------------------------------")
  //     this.pointerInReach = 'clicked';
  //   }
  //   else{
  //     this.pointerInReach = 'notInReach';
  //   }
  // }
}
