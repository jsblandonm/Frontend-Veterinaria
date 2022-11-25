import { Component, OnInit } from '@angular/core';
import { ModelProductsService } from 'src/app/model/datos.model';
import { ProductsServiceService } from 'src/app/service/products-service.service';

@Component({
  selector: 'app-search-product-services',
  templateUrl: './search-product-services.component.html',
  styleUrls: ['./search-product-services.component.css']
})
export class SearchProductServicesComponent implements OnInit {

  ListRegistersProducts : ModelProductsService[] = [];

  constructor(private servicePorudctsService: ProductsServiceService) { }

  ngOnInit(): void {
    this.GetListProdcutS();
  }

  GetListProdcutS(){
    this.servicePorudctsService.GetRegisters().subscribe((datos : ModelProductsService[]) => {
      this.ListRegistersProducts = datos;
    })
  }

}
