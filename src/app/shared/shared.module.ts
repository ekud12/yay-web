import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './components/intro/intro.component';
import { PointsToolComponent } from './components/logo/button.component';
import { RoutingModule } from '../routing/routing.module';
import { ParticlesModule } from 'angular-particle';
import { NavbarButtonComponent } from '../shared/components/ui/navbar-button/navbar-button.component';
import { BigLogoComponent } from '../shared/components/ui/big-logo/big-logo.component';

@NgModule({
  imports: [
    CommonModule,
    RoutingModule,
    ParticlesModule 
  ],
  declarations: [IntroComponent, PointsToolComponent, NavbarButtonComponent, BigLogoComponent],
  exports: [IntroComponent, PointsToolComponent, NavbarButtonComponent,BigLogoComponent]
})
export class SharedModule { }
