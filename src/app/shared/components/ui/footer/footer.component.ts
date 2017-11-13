import { Component, OnInit } from '@angular/core';
import { FOOTER_APPEAR_ANIMATION,NAVBAR_BUTTON_SELECTED_FOOTER } from '../../../animations/animations';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  animations: [ FOOTER_APPEAR_ANIMATION,NAVBAR_BUTTON_SELECTED_FOOTER]
})
export class FooterComponent implements OnInit {

  constructor() { }
  currentStyle: string;
  ngOnInit() {
    this.currentStyle = 'notSelected'
  }

  changeStyle(a: any){
    this.currentStyle = a;
  }

}
