import { BackendService } from './../core/backend.service';
import { Injectable } from '@angular/core';

@Injectable()
export class PointService{
    //observables

    constructor(private be: BackendService){}

    addPoint(x: Number, y: Number){
        this.be.addPoint(x,y).subscribe();
    }
}