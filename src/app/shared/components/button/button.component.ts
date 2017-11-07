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

  ngOnInit() {
    this.enterText = 'Welcome';
  }

  enter(){
    this.introSkipped.emit(true);
    this.srs.changeStatusToOn();
  }
}
