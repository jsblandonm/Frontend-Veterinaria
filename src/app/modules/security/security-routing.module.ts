import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// importar los componestes de inicio y cierre de sesion
import { LogInComponent } from './log-in/log-in.component';
import { LogOutComponent } from './log-out/log-out.component';

const routes: Routes = [
  {
    path : 'log-in',
    component : LogInComponent
  },
  {
    path : 'log-out',
    component : LogOutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
