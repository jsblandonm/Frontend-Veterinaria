import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModelPlan } from 'src/app/model/datos.model';
import { PlansService } from 'src/app/service/plans.service';

@Component({
  selector: 'app-edit-plan',
  templateUrl: './edit-plan.component.html',
  styleUrls: ['./edit-plan.component.css']
})
export class EditPlanComponent implements OnInit {


  id : string = '';

  fgValidator : FormGroup = this.fb.group({
    'id': ['',[Validators.required]],
    'Tipodeplan': ['',[Validators.required]],
    'fechaCreacion': ['',[Validators.required]],
    'nombre': ['',[Validators.required]],
    'descripcion': ['',[Validators.required]],
    'precio': ['',[Validators.required]],

  })

  constructor(private fb : FormBuilder, private servicePlans: PlansService, private router: Router,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.SearchPlans();
  }

  SearchPlans(){
    this.servicePlans.GetRegistersForId(this.id).subscribe((datos : ModelPlan)=>{
      this.fgValidator.controls['id'].setValue(this.id);
      this.fgValidator.controls['Tipodeplan'].setValue(datos.Tipodeplan);
      this.fgValidator.controls['fechaCreacion'].setValue(datos.fechaCreacion);
      this.fgValidator.controls['nombre'].setValue(datos.nombre);
      this.fgValidator.controls['descripcion'].setValue(datos.descripcion);
      this.fgValidator.controls['precio'].setValue(datos.precio);
    })
  }


  EditPlans(){
    const Tipodeplan = this.fgValidator.controls['Tipodeplan'].value;
    const fechaCreacion = this.fgValidator.controls['fechaCreacion'].value;
    const nombre = this.fgValidator.controls['nombre'].value;
    const descripcion = this.fgValidator.controls['descripcion'].value;
    const precio = parseInt(this.fgValidator.controls['precio'].value);
    const p = new ModelPlan();
    p.Tipodeplan = Tipodeplan;
    p.fechaCreacion = fechaCreacion;
    p.nombre = nombre;
    p.descripcion = descripcion;
    p.precio = precio;
    p.id = this.id
    this.servicePlans.EditPlan(p).subscribe((datos : ModelPlan) => {
      alert('plan actulizado con exito')
      this.router.navigate(['/administration/listPlan'])
    },(err : any) =>{
      alert('erro actualiazando al plan')
    })


  }
}
