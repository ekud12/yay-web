import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { PointsToolComponent } from './components/logo/button.component';
import { RoutingModule } from '../routing/routing.module';

@NgModule({
  imports: [
    CommonModule,
    RoutingModule
  ],
  declarations: [ButtonComponent, PointsToolComponent],
  exports: [ButtonComponent, PointsToolComponent]
})
export class SharedModule { }
