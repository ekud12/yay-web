import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from '../routing/routes';
import { SharedRouterService } from './routerService';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      AppRoutes,
      // { enableTracing: true }
    )
  ],
  providers: [SharedRouterService],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule { }
