import { Component, OnInit } from '@angular/core';
import { ModelPets } from 'src/app/model/datos.model';
import { PetsService } from 'src/app/service/pets.service';

@Component({
  selector: 'app-search-pets',
  templateUrl: './search-pets.component.html',
  styleUrls: ['./search-pets.component.css']
})
export class SearchPetsComponent implements OnInit {

  ListRegistersPets : ModelPets[] = [];

  constructor(private petsService : PetsService) { }

  ngOnInit(): void {
    this.GetListPets();
  }

  GetListPets(){
    this.petsService.GetRegisters().subscribe((datos : ModelPets[]) => {
      this.ListRegistersPets = datos;
    })
  }

}
