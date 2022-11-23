import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Components
import { HomeComponent } from './template/home/home.component';
import { ErrorComponent } from './template/error/error.component';




const routes: Routes = [
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path: '',
    pathMatch : 'full',
    redirectTo: '/home'
  },
  {
    path: 'security',
    loadChildren : () => import('./modules/security/security.module').then(x => x.SecurityModule)
  },
  {
    path : 'administration',
    loadChildren: () => import('./modules/administration/administration.module').then(x => x.AdministrationModule)
  },
  {
    path : 'client',
    loadChildren: () => import('./modules/client/client.module').then(x => x.ClientModule)
  },
  {
    path: '**',
    component : ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
