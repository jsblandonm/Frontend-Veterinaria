import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModelPlan } from 'src/app/model/datos.model';
import { PlansService } from 'src/app/service/plans.service';

@Component({
  selector: 'app-create-plan',
  templateUrl: './create-plan.component.html',
  styleUrls: ['./create-plan.component.css']
})
export class CreatePlanComponent implements OnInit {

  fgValidator : FormGroup = this.fb.group({
    'Tipodeplan': ['',[Validators.required]],
    'fechaCreacion': ['',[Validators.required]],
    'nombre': ['',[Validators.required]],
    'descripcion': ['',[Validators.required]],
    'precio': ['',[Validators.required]],

  })

  constructor(private fb : FormBuilder, private servicePlans: PlansService, private router: Router) { }

  ngOnInit(): void {
  }

  SavePlan(){
    const Tipodeplan = this.fgValidator.controls['Tipodeplan'].value;
    const fechaCreacion = this.fgValidator.controls['fechaCreacion'].value;
    const nombre = this.fgValidator.controls['nombre'].value;
    const descripcion = this.fgValidator.controls['descripcion'].value;
    const precio = this.fgValidator.controls['precio'].value;
    const p = new ModelPlan();
    p.nombre = nombre;
    p.fechaCreacion = fechaCreacion;
    p.nombre = nombre;
    p.descripcion = descripcion;
    p.precio = precio;
    this.servicePlans.CreatePlan(p).subscribe((datos : ModelPlan) => {
      alert('Plan creado con exito')
      this.router.navigate(['/administration/listPlan'])
    },(err : any) =>{
      alert('erro creando al Plan')
    })


  }

}
