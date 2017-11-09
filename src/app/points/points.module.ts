import { PointService } from './points.service';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PointFormComponent } from '../points/components/point-form/point-form.component';
import { PointsSideBarComponent } from '../points/components/points-side-bar/points-side-bar.component';
import { SharedModule } from '../shared/shared.module';
import { ParticlesModule } from 'angular-particle';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ParticlesModule,
    ReactiveFormsModule
  ],
  providers: [PointService],
  declarations: [PointFormComponent, PointsSideBarComponent],
  exports:[PointFormComponent,PointsSideBarComponent]
})
export class PointsModule { }
