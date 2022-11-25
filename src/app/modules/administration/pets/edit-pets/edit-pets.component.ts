import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModelPets } from 'src/app/model/datos.model';
import { PetsService } from 'src/app/service/pets.service';

@Component({
  selector: 'app-edit-pets',
  templateUrl: './edit-pets.component.html',
  styleUrls: ['./edit-pets.component.css']
})
export class EditPetsComponent implements OnInit {

  id: string = '';

  fgValidator: FormGroup = this.fb.group({
    'id' : ['',[Validators.required]],
    'nombre': ['', [Validators.required]],
    'foto': ['', [Validators.required]],
    'caracteristicas': ['', [Validators.required]],
    'estado': ['', [Validators.required]],
    'edad': ['', [Validators.required]],
    'especie': ['', [Validators.required]],
    'Raza': ['', [Validators.required]],
    'comentario': ['', [Validators.required]],
  })

  constructor(private fb: FormBuilder, private servicePets: PetsService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.SearchPets();
  }

  SearchPets() {
    this.servicePets.GetRegistersForId(this.id).subscribe((datos: ModelPets) => {
      this.fgValidator.controls['id'].setValue(this.id);
      this.fgValidator.controls['nombre'].setValue(datos.nombre);
      // this.fgValidator.controls['foto'].setValue(datos.foto);
      this.fgValidator.controls['caracteristicas'].setValue(datos.caracteristicas);
      this.fgValidator.controls['estado'].setValue(datos.estado);
      this.fgValidator.controls['edad'].setValue(datos.edad);
      this.fgValidator.controls['especie'].setValue(datos.especie);
      this.fgValidator.controls['Raza'].setValue(datos.Raza);
      this.fgValidator.controls['comentario'].setValue(datos.comentario);
    })
  }


  EditPet() {

    const nombre = this.fgValidator.controls['nombre'].value;
    const foto = this.fgValidator.controls['foto'].value;
    const caracteristicas = this.fgValidator.controls['caracteristicas'].value;
    const estado = this.fgValidator.controls['estado'].value;
    const edad = this.fgValidator.controls['edad'].value;
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
    p.id = this.id
    this.servicePets.EditPet(p).subscribe((datos: ModelPets) => {
      alert('Mascota actulizado con exito')
      this.router.navigate(['/administration/listPets'])
    }, (err: any) => {
      alert('erro actualiazando a la mascota')
    })


  }

}
