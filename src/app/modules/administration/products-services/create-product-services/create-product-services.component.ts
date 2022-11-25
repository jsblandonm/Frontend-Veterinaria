import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModelProductsService } from 'src/app/model/datos.model';
import { ProductsServiceService } from 'src/app/service/products-service.service';

@Component({
  selector: 'app-create-product-services',
  templateUrl: './create-product-services.component.html',
  styleUrls: ['./create-product-services.component.css']
})
export class CreateProductServicesComponent implements OnInit {

  fgValidator : FormGroup = this.fb.group({
    'tipo': ['',[Validators.required]],
    'nombre': ['',[Validators.required]],
    'descripcion': ['',[Validators.required]],
    'precio': ['',[Validators.required]],
  })

  constructor(private fb : FormBuilder, private servicePorudctsService: ProductsServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  SaveProdcutService(){
    const tipo = this.fgValidator.controls['tipo'].value;
    const nombre = this.fgValidator.controls['nombre'].value;
    const descripcion = this.fgValidator.controls['descripcion'].value;
    const precio = parseInt(this.fgValidator.controls['precio'].value);
    const p = new ModelProductsService();
    p.tipo = tipo;
    p.nombre = nombre;
    p.descripcion = descripcion;
    p.precio = precio;
    this.servicePorudctsService.CreateProductService(p).subscribe((datos : ModelProductsService) => {
      alert('Producto creado con exito')
      this.router.navigate(['/administration/listProductS'])
    },(err : any) =>{
      alert('erro creando al Producto')
    })


  }

}
