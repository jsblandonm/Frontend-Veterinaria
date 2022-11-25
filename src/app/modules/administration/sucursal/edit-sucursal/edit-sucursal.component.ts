import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModelSucursal } from 'src/app/model/datos.model';
import { SucursalService } from 'src/app/service/sucursal.service';

@Component({
  selector: 'app-edit-sucursal',
  templateUrl: './edit-sucursal.component.html',
  styleUrls: ['./edit-sucursal.component.css']
})
export class EditSucursalComponent implements OnInit {

  id : string = '';

  fgValidator : FormGroup = this.fb.group({
    'id': ['',[Validators.required]],
    'departamento': ['',[Validators.required]],
    'ciudad': ['',[Validators.required]],
    'direccion': ['',[Validators.required]],
    'telefono': ['',[Validators.required]],
    'numeroempleados': ['',[Validators.required]],
    'numerosede': ['',[Validators.required]],


  })

  constructor(private fb : FormBuilder, private servieSucursal: SucursalService, private router: Router,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.SearchSucursal();
  }

  SearchSucursal(){
    this.servieSucursal.GetRegistersForId(this.id).subscribe((datos : ModelSucursal)=>{
      this.fgValidator.controls['id'].setValue(this.id);
      this.fgValidator.controls['departamento'].setValue(datos.departamento);
      this.fgValidator.controls['ciudad'].setValue(datos.ciudad);
      this.fgValidator.controls['direccion'].setValue(datos.direccion);
      this.fgValidator.controls['telefono'].setValue(datos.telefono);
      this.fgValidator.controls['numeroempleados'].setValue(datos.numeroempleados);
      this.fgValidator.controls['numerosede'].setValue(datos.numerosede);
    })
  }


  EditSucursal(){
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
