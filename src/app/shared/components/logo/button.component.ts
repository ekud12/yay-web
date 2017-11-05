import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ON_OFF_ANIMATION } from '../../animations/on-off.animation';
import { BackendService } from '../../../core/backend.service';
import { Observable } from 'rxjs/Observable';
import { Point } from '../../models/point';

@Component({
  selector: 'app-logo',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  animations: [ON_OFF_ANIMATION]
})
export class PointsToolComponent implements OnInit {

  constructor(private pointsService: BackendService){}
  enterText: String;
  points: Point[];
  points$: Observable<Point[]>
  state = 'off';

  public ngOnInit() {
  }

  getPoints(){
    this.pointsService.getAllPoints()
    .subscribe((point) =>
      this.points = point);
  }

  addPoint(xCoor: Number, yCoor: Number){
    this.pointsService.addPoint(xCoor,yCoor);
  }


}
