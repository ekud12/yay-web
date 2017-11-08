import { Component, OnInit } from '@angular/core';
import { FADE_ANIMATION, FADE_ANIMATION_BUTTON } from '../app/shared/animations/animations';
import { Router } from '@angular/router';
import { SharedRouterService } from '../app/routing/routerService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ FADE_ANIMATION, FADE_ANIMATION_BUTTON ]
})
export class AppComponent implements OnInit {

  constructor(private router: Router,
              private srs : SharedRouterService){}

  title = 'app';
  loading = true;
  appLoaded = false;
  color = 'orange';

  ngOnInit() {
    this.appLoaded = true;
    // setTimeout(()=> this.loading = false,5000);
  }

  isClicked() {
    this.loading = false;
  }
}
