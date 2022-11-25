import { Component, OnInit } from '@angular/core';
import { ModelPets, ModelUser } from 'src/app/model/datos.model';
import { FormsService } from 'src/app/service/forms.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  listRegisterForms : ModelPets[] =[];
  ListRegisterUser : ModelUser[] = [];

  constructor(private formService : FormsService) { }

  ngOnInit(): void {
    this.GetListForms();
  }

  GetListForms(){
    this.formService.GetRegisters().subscribe((datos: ModelPets[]) =>{
      this.listRegisterForms = datos;
    })
  }
  GetListFormsUser(){
    this.formService.GetRegisters().subscribe((datos : ModelUser[]) =>{
      this.ListRegisterUser = datos
    })

  }

}
