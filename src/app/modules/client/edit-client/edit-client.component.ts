import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModelUser } from 'src/app/model/datos.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  id : string = '';

  fgValidator : FormGroup = this.fb.group({
    'id': ['',[Validators.required]],
    'nombre': ['',[Validators.required]],
    'apellido': ['',[Validators.required]],
    'identificacion': ['',[Validators.required]],
    'correo': ['',[Validators.required]],
    'telefono': ['',[Validators.required]],
    'rol': ['Cliente',[Validators.required]],


  })

  constructor(private fb : FormBuilder, private serviceUser: UserService, private router: Router,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.SearchUser();
  }

  SearchUser(){
    this.serviceUser.GetRegistersForId(this.id).subscribe((datos : ModelUser)=>{
      this.fgValidator.controls['id'].setValue(this.id);
      this.fgValidator.controls['nombre'].setValue(datos.nombre);
      this.fgValidator.controls['apellido'].setValue(datos.apellido);
      this.fgValidator.controls['identificacion'].setValue(datos.identificacion);
      this.fgValidator.controls['correo'].setValue(datos.correo);
      this.fgValidator.controls['telefono'].setValue(datos.telefono);
      this.fgValidator.controls['rol'].setValue(datos.rol);

    })
  }


  EditUser(){
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
    p.id = this.id
    this.serviceUser.EditUser(p).subscribe((datos : ModelUser) => {
      alert('Ususario actulizado con exito')
      this.router.navigate(['/client/listClient'])
    },(err : any) =>{
      alert('erro actualiazando al usuario')
    })


  }
}
