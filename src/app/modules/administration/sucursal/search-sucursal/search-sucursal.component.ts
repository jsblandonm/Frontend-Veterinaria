import { Component, OnInit } from '@angular/core';
import { ModelSucursal } from 'src/app/model/datos.model';
import { SucursalService } from 'src/app/service/sucursal.service';

@Component({
  selector: 'app-search-sucursal',
  templateUrl: './search-sucursal.component.html',
  styleUrls: ['./search-sucursal.component.css']
})
export class SearchSucursalComponent implements OnInit {

  ListRegistersSucursal : ModelSucursal[] = [];

  constructor(private servieSucursal: SucursalService) { }

  ngOnInit(): void {
    this.GetlistSucursal();
  }

  GetlistSucursal(){
    this.servieSucursal.GetRegisters().subscribe((datos : ModelSucursal[]) => {
      this.ListRegistersSucursal = datos;
    })
  }

}
