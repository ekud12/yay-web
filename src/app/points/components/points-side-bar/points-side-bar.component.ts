import { Component, OnInit } from '@angular/core';
import { FADE_ANIMATION } from '../../../shared/animations/animations';

@Component({
  selector: 'app-points-side-bar',
  templateUrl: './points-side-bar.component.html',
  styleUrls: ['./points-side-bar.component.css'],
  animations: [FADE_ANIMATION]
})

export class PointsSideBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
