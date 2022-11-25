import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModelProductsService } from 'src/app/model/datos.model';
import { ProductsServiceService } from 'src/app/service/products-service.service';

@Component({
  selector: 'app-edit-product-services',
  templateUrl: './edit-product-services.component.html',
  styleUrls: ['./edit-product-services.component.css']
})
export class EditProductServicesComponent implements OnInit {

  id : string = '';

  fgValidator : FormGroup = this.fb.group({
    'id' : ['',[Validators.required]],
    'tipo': ['',[Validators.required]],
    'nombre': ['',[Validators.required]],
    'descripcion': ['',[Validators.required]],
    'precio': ['',[Validators.required]],
  })

  constructor(private fb : FormBuilder, private servicePorudctsService: ProductsServiceService, private router: Router,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.SearchProductS();
  }

  SearchProductS(){
    this.servicePorudctsService.GetRegistersForId(this.id).subscribe((datos : ModelProductsService)=>{
      this.fgValidator.controls['id'].setValue(this.id);
      this.fgValidator.controls['tipo'].setValue(datos.tipo);
      this.fgValidator.controls['nombre'].setValue(datos.nombre);
      this.fgValidator.controls['descripcion'].setValue(datos.descripcion);
      this.fgValidator.controls['precio'].setValue(datos.precio);
    })
  }


  EditProductService(){
    const tipo = this.fgValidator.controls['tipo'].value;
    const nombre = this.fgValidator.controls['nombre'].value;
    const descripcion = this.fgValidator.controls['descripcion'].value;
    const precio = this.fgValidator.controls['precio'].value;
    const p = new ModelProductsService();
    p.tipo = tipo;
    p.nombre = nombre;
    p.descripcion = descripcion;
    p.precio = precio;
    p.id = this.id
    this.servicePorudctsService.EditProductService(p).subscribe((datos : ModelProductsService) => {
      alert('Producto actulizado con exito')
      this.router.navigate(['/administration/listProductS'])
    },(err : any) =>{
      alert('erro actualiazando al producto')
    })


  }

}
