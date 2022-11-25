import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidatorSesionGuard } from 'src/app/guard/validator-sesion.guard';
import { CreateFormComponent } from './form/create-form/create-form.component';
import { SearchFormComponent } from './form/search-form/search-form.component';
import { CreatePetsComponent } from './pets/create-pets/create-pets.component';
import { DeletePetsComponent } from './pets/delete-pets/delete-pets.component';
import { EditPetsComponent } from './pets/edit-pets/edit-pets.component';
import { SearchPetsComponent } from './pets/search-pets/search-pets.component';
import { CreatePlanComponent } from './planes/create-plan/create-plan.component';
import { EditPlanComponent } from './planes/edit-plan/edit-plan.component';
import { SearchPlanComponent } from './planes/search-plan/search-plan.component';
import { CreateProductServicesComponent } from './products-services/create-product-services/create-product-services.component';
import { DeleteProductServicesComponent } from './products-services/delete-product-services/delete-product-services.component';
import { EditProductServicesComponent } from './products-services/edit-product-services/edit-product-services.component';
import { SearchProductServicesComponent } from './products-services/search-product-services/search-product-services.component';
import { CreateSucursalComponent } from './sucursal/create-sucursal/create-sucursal.component';
import { DeleteSucursalComponent } from './sucursal/delete-sucursal/delete-sucursal.component';
import { EditSucursalComponent } from './sucursal/edit-sucursal/edit-sucursal.component';
import { SearchSucursalComponent } from './sucursal/search-sucursal/search-sucursal.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { DeleteUserComponent } from './user/delete-user/delete-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { SearchUserComponent } from './user/search-user/search-user.component';


const routes: Routes = [
  // usuarios
  {
    path : 'create-user',
    component : CreateUserComponent,
    // canActivate : [ValidatorSesionGuard]
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
  },
  // Mascotas
  {
    path : 'create-pets',
    component : CreatePetsComponent,
  },
  {
    path : 'listPets',
    component : SearchPetsComponent
  },
  {
    path : 'edit-pets/:id',
    component : EditPetsComponent,
  },
  {
    path : 'search-pets',
    component : SearchPetsComponent,
  },
  {
    path : 'delete-pets',
    component : DeletePetsComponent
  },
  // Formulario
  {
    path : 'create-forms',
    component : CreateFormComponent
  },
  {
    path : 'search-forms',
    component : SearchFormComponent
  },
  // Planes
  {
    path : 'create-plans',
    component : CreatePlanComponent
  },
  {
    path : 'listPlan',
    component : SearchPlanComponent
  },
  {
    path : 'edit-plans/:id',
    component : EditPlanComponent
  },
  {
    path : 'search-plans',
    component : SearchPlanComponent
  },
  // productos y servicios
  {
    path : 'create-product-services',
    component : CreateProductServicesComponent
  },
  {
    path : 'listProductS',
    component : SearchProductServicesComponent
  },
  {
    path : 'edit-product-services/:id',
    component : EditProductServicesComponent
  },
  {
    path : 'search-product-services',
    component : SearchProductServicesComponent
  },
  {
    path : 'delete-product-services',
    component : DeleteProductServicesComponent
  },
  // Sucursal
  {
    path : 'create-sucursal',
    component : CreateSucursalComponent
  },
  {
    path : 'listSucursal',
    component : SearchSucursalComponent
  },
  {
    path : 'edit-sucursal/:id',
    component : EditSucursalComponent
  },
  {
    path : 'search-sucursal',
    component : SearchSucursalComponent
  },
  {
    path : 'delete-sucursal',
    component : DeleteSucursalComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
