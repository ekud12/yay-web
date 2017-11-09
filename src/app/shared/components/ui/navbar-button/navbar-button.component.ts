import { Component, OnInit } from '@angular/core';
import { NAVBAR_BUTTON_EFFECT } from '../../../animations/animations';

@Component({
  selector: 'app-navbar-button',
  templateUrl: './navbar-button.component.html',
  styleUrls: ['./navbar-button.component.css'],
  animations: [ NAVBAR_BUTTON_EFFECT]
})
export class NavbarButtonComponent implements OnInit {
  pointerInReach = 'notInReach';
  constructor() { }

  ngOnInit() {

  }
  toggleEffectON() {
    this.pointerInReach = 'inReach';
  }
  toggleEffectOFF() {
    this.pointerInReach = 'notInReach';
  }
}
