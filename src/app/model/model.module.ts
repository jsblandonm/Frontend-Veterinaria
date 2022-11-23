import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/// importar Modelos
import { ModelDatos } from "./datos.model";


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ]
})


export class ModelIdentify {
  datos? : ModelDatos;
  tk? : string;
  IdentifyCorrect : boolean = false;
 }

