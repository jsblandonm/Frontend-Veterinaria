import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModelPets } from 'src/app/model/datos.model';
import { PetsService } from 'src/app/service/pets.service';
import { SecurityService } from 'src/app/service/security.service';

@Component({
  selector: 'app-create-pets',
  templateUrl: './create-pets.component.html',
  styleUrls: ['./create-pets.component.css']
})
export class CreatePetsComponent implements OnInit {

  fgValidator : FormGroup = this.fb.group({
    'nombre': ['',[Validators.required]],
    'foto' : ['',[Validators.required]],
    'caracteristicas' : ['',[Validators.required]],
    'estado' : ['',[Validators.required]],
    'edad' : ['',[Validators.required]],
    'especie' : ['',[Validators.required]],
    'Raza' : ['',[Validators.required]],
    'comentario' : ['',[Validators.required]],
  })

  constructor(private fb : FormBuilder, private servicePets : PetsService , private router : Router) { }

  ngOnInit(): void {
  }

  SavePet(){
    const nombre = this.fgValidator.controls['nombre'].value;
    const foto = this.fgValidator.controls['foto'].value;
    const caracteristicas = this.fgValidator.controls['caracteristicas'].value;
    const estado = this.fgValidator.controls['estado'].value;
    const edad = parseInt(this.fgValidator.controls['edad'].value);
    const especie = this.fgValidator.controls['especie'].value;
    const Raza = this.fgValidator.controls['Raza'].value;
    const comentario = this.fgValidator.controls['comentario'].value;
    const p = new ModelPets();
    p.nombre = nombre;
    p.foto = foto;
    p.caracteristicas = caracteristicas;
    p.estado = estado;
    p.edad = edad;
    p.especie = especie;
    p.Raza = Raza;
    p.comentario = comentario;

    this.servicePets.CreatePet(p).subscribe((datos : ModelPets) => {
      alert('Mascota creado con exito')
      this.router.navigate(['/administration/listPets'])
    },(err : any) =>{
      alert('erro creando la mascota')
    })


  }

}
