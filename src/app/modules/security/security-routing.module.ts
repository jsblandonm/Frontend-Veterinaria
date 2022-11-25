import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from '../administration/user/create-user/create-user.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
// importar los componestes de inicio y cierre de sesion
import { LogInComponent } from './log-in/log-in.component';
import { LogOutComponent } from './log-out/log-out.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';

const routes: Routes = [
  {
    path : 'log-in',
    component : LogInComponent
  },
  {
    path : 'log-out',
    component : LogOutComponent
  },
  {
    path : 'password-recovery',
    component : PasswordRecoveryComponent
  },
  {
    path : 'create-user',
    component : CreateUserComponent
  },
  {
    path : 'change-password',
    component : ChangePasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
