import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidatorSesionGuard } from 'src/app/guard/validator-sesion.guard';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { DeleteUserComponent } from './user/delete-user/delete-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { SearchUserComponent } from './user/search-user/search-user.component';


const routes: Routes = [
  {
    path : 'create-user',
    component : CreateUserComponent,
    canActivate : [ValidatorSesionGuard]
  },
  {
    path: 'listUser',
    component : SearchUserComponent,
    canActivate : [ValidatorSesionGuard]
  },  
  {
    path : 'edit-user/:id',
    component : EditUserComponent,
    canActivate : [ValidatorSesionGuard]
  },
  {
    path : 'delete-user',
    component : DeleteUserComponent,
    canActivate : [ValidatorSesionGuard]
  },
  {
    path : 'search-user',
    component	 : SearchUserComponent,
    canActivate : [ValidatorSesionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
