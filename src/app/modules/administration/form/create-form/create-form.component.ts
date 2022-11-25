import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModelPets, ModelUser } from 'src/app/model/datos.model';
import { FormsService } from 'src/app/service/forms.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  fgValidator : FormGroup = this.fb.group({
    'nombre': ['',[Validators.required]],
    'apellido' : ['',[Validators.required]],
    'identificacion' : ['',[Validators.required]],
    'correo' : ['',[Validators.required]],
    'telefono' : ['',[Validators.required]],
    // 'sucursal' : ['',[Validators.required]],
    'estado' : ['',[Validators.required]],
    'foto' : ['',[Validators.required]],
  })

  constructor(private fb : FormBuilder, private formService : FormsService, private router : Router) { }

  ngOnInit(): void {
  }

  SaveFormUser(){
    const nombre = this.fgValidator.controls['nombre'].value;
    const apellido = this.fgValidator.controls['apellido'].value;
    const identificacion = this.fgValidator.controls['identificacion'].value;
    const correo = this.fgValidator.controls['correo'].value;
    const telefono = this.fgValidator.controls['telefono'].value;
    // const sucursal = this.fgValidator.controls['sucursal'].value;
    const per = new ModelUser();
    per.nombre = nombre;
    per.apellido = apellido;
    per.identificacion = identificacion;
    per.correo = correo;
    per.telefono = telefono;

    this.formService.CreateForm(per).subscribe((datos : ModelUser) => {
      alert('formulario creado con exito')
    },(err : any) => {
      alert('error creando el formulario')
    })
  }

  SaveFormPets(){
    const estado = this.fgValidator.controls['estado'].value;
    const foto = this.fgValidator.controls['foto'].value;
    const p = new ModelPets();
    p.estado = estado;
    p.foto = foto;
    this.formService.CreateForm(p).subscribe((datos : ModelPets) => {
      alert('formulario creado con exito')
    },(err : any) => {
      alert('error creando el formulario')
    })
  }


}
