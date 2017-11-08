import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './components/button/button.component';
import { PointsToolComponent } from './components/logo/button.component';
import { RoutingModule } from '../routing/routing.module';
import { ParticlesModule } from 'angular-particle';

@NgModule({
  imports: [
    CommonModule,
    RoutingModule,
    ParticlesModule 
  ],
  declarations: [IntroComponent, PointsToolComponent],
  exports: [IntroComponent, PointsToolComponent]
})
export class SharedModule { }
