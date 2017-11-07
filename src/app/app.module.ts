import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { RoutingModule } from './routing/routing.module';
import { SharedModule } from './shared/shared.module';
import { PointsModule} from './points/points.module';
import { NgSpinKitModule } from 'ng-spin-kit';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
   RoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    PointsModule,
    FormsModule,
    ReactiveFormsModule,
    NgSpinKitModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
