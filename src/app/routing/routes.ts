import { Routes } from '@angular/router/router';
import { PointFormComponent } from '../points/components/point-form/point-form.component';
import { ButtonComponent } from '../shared/components/button/button.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
    },
    {
      path: 'main',
      component: ButtonComponent
    },
    {
      path: 'second',
      component: PointFormComponent
    }
    // { path: '**', component: PageNotFoundComponent }
];
