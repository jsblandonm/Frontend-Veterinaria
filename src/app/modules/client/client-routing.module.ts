import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidatorSesionGuard } from 'src/app/guard/validator-sesion.guard';
import { SearchUserComponent } from '../administration/user/search-user/search-user.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { EditClientComponent } from './edit-client/edit-client.component';

const routes: Routes = [
  {
    path : 'create-client',
    component : CreateClientComponent
  },
  {
    path : 'listClient',
    component : SearchUserComponent,
    canActivate : [ValidatorSesionGuard]
  },
  {
    path : 'edit-client',
    component : EditClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
