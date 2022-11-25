import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModelSucursal } from 'src/app/model/datos.model';
import { SucursalService } from 'src/app/service/sucursal.service';

@Component({
  selector: 'app-create-sucursal',
  templateUrl: './create-sucursal.component.html',
  styleUrls: ['./create-sucursal.component.css']
})
export class CreateSucursalComponent implements OnInit {

  fgValidator : FormGroup = this.fb.group({
    'departamento': ['',[Validators.required]],
    'ciudad': ['',[Validators.required]],
    'direccion': ['',[Validators.required]],
    'telefono': ['',[Validators.required]],
    'numeroempleados': ['',[Validators.required]],
    'numerosede': ['',[Validators.required]],


  })

  constructor(private fb : FormBuilder, private servieSucursal: SucursalService, private router: Router) { }

  ngOnInit(): void {
  }

  SaveSucursal(){
    const departamento = this.fgValidator.controls['departamento'].value;
    const ciudad = this.fgValidator.controls['ciudad'].value;
    const direccion = this.fgValidator.controls['direccion'].value;
    const telefono = this.fgValidator.controls['telefono'].value;
    const numeroempleados = parseInt(this.fgValidator.controls['numeroempleados'].value);
    const numerosede = parseInt(this.fgValidator.controls['numerosede'].value);
    const p = new ModelSucursal();
    p.departamento = departamento;
    p.ciudad = ciudad;
    p.direccion = direccion;
    p.telefono = telefono;
    p.numeroempleados = numeroempleados;
    p.numerosede = numerosede;
    this.servieSucursal.CreateSucursal(p).subscribe((datos : ModelSucursal) => {
      alert('Sucursal creado con exito')
      this.router.navigate(['/administration/listSucursal'])
    },(err : any) =>{
      alert('erro creando la Sucursal')
    })


  }

}
