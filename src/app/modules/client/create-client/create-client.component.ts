import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModelUser } from 'src/app/model/datos.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {
  
  fgValidator : FormGroup = this.fb.group({
    'nombre': ['',[Validators.required]],
    'apellido': ['',[Validators.required]],
    'identificacion': ['',[Validators.required]],
    'correo': ['',[Validators.required]],
    'telefono': ['',[Validators.required]],
    'rol': ['Cliente',[Validators.required]],


  })

  constructor(private fb : FormBuilder, private serviceUser: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  SaveUser(){
    const nombre = this.fgValidator.controls['nombre'].value;
    const apellido = this.fgValidator.controls['apellido'].value;
    const identificacion = this.fgValidator.controls['identificacion'].value;
    const correo = this.fgValidator.controls['correo'].value;
    const telefono = this.fgValidator.controls['telefono'].value;
    const rol = this.fgValidator.controls['rol'].value;
    const p = new ModelUser();
    p.nombre = nombre;
    p.apellido = apellido;
    p.identificacion = identificacion;
    p.correo = correo;
    p.telefono = telefono;
    p.rol = rol;
    this.serviceUser.CreateUser(p).subscribe((datos : ModelUser) => {
      alert('Ususario creado con exito')
      this.router.navigate(['/administration/listUser'])
    },(err : any) =>{
      alert('erro creando al usuario')
    })


  }
}
