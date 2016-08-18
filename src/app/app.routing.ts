import { Routes, RouterModule } from '@angular/router';

import { ArgumansComponent } from './argumans.component';

const appRoutes: Routes = [
  {
    path: 'arguman/:id',
    component: ArgumansComponent
  }
]
export const routing = RouterModule.forRoot(appRoutes);
