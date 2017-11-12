import { Routes } from '@angular/router/router';
import { PointFormComponent } from '../points/components/point-form/point-form.component';
import { IntroComponent } from '../shared/components/intro/intro.component';
import { BigLogoComponent } from '../shared/components/ui/big-logo/big-logo.component';

export const AppRoutes: Routes = [
    {
      path: 'main',
      component: IntroComponent,
    },
    {
      path: 'about',
      component: PointFormComponent
    },
    {
      path: 'profile',
      component: BigLogoComponent
    },
    {
      path: 'showcase',
      component: BigLogoComponent
    },
    {
      path: 'pointer',
      component: BigLogoComponent
    },
    {
      path: '',
      redirectTo: 'main',
      pathMatch: 'full'
    },
    // { 
    //   path: '**', 
    //   component: PointFormComponent 
    // }
];