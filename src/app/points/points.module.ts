import { PointService } from './points.service';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PointFormComponent } from '../points/components/point-form/point-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PointService],
  declarations: [PointFormComponent],
  exports:[PointFormComponent]
})
export class PointsModule { }
