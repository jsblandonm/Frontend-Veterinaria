import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { CreateProductServicesComponent } from './products-services/create-product-services/create-product-services.component';
import { EditProductServicesComponent } from './products-services/edit-product-services/edit-product-services.component';
import { DeleteProductServicesComponent } from './products-services/delete-product-services/delete-product-services.component';
import { SearchProductServicesComponent } from './products-services/search-product-services/search-product-services.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { DeleteUserComponent } from './user/delete-user/delete-user.component';
import { SearchUserComponent } from './user/search-user/search-user.component';
import { CreatePlanComponent } from './planes/create-plan/create-plan.component';
import { EditPlanComponent } from './planes/edit-plan/edit-plan.component';
import { DeletePlanComponent } from './planes/delete-plan/delete-plan.component';
import { SearchPlanComponent } from './planes/search-plan/search-plan.component';
import { CreatePetsComponent } from './pets/create-pets/create-pets.component';
import { EditPetsComponent } from './pets/edit-pets/edit-pets.component';
import { DeletePetsComponent } from './pets/delete-pets/delete-pets.component';
import { SearchPetsComponent } from './pets/search-pets/search-pets.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateProductServicesComponent,
    EditProductServicesComponent,
    DeleteProductServicesComponent,
    SearchProductServicesComponent,
    CreateUserComponent,
    EditUserComponent,
    DeleteUserComponent,
    SearchUserComponent,
    CreatePlanComponent,
    EditPlanComponent,
    DeletePlanComponent,
    SearchPlanComponent,
    CreatePetsComponent,
    EditPetsComponent,
    DeletePetsComponent,
    SearchPetsComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class AdministrationModule { }
