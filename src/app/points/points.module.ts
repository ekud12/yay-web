import { PointService } from './points.service';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PointFormComponent } from '../points/components/point-form/point-form.component';
import { PointsSideBarComponent } from '../points/components/points-navbar/points-navbar.component';
import { SharedModule } from '../shared/shared.module';
import { ParticlesModule } from 'angular-particle';
import { MainViewComponent } from '../points/components/main-view/main-view.component';
import { RoutingModule } from '../routing/routing.module';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RoutingModule,
    FormsModule,
    ParticlesModule,
    ReactiveFormsModule
  ],
  providers: [PointService],
  declarations: [PointFormComponent, PointsSideBarComponent, MainViewComponent],
  exports:[PointFormComponent, PointsSideBarComponent,MainViewComponent]
})
export class PointsModule { }
