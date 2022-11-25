import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelProductsService } from '../model/datos.model';
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  
  url = 'http://localhost:3000';
  token : string = '';

  constructor(private http: HttpClient, private serviceSecurity : SecurityService) {

    this.token = this.serviceSecurity.GetToken();

  }

  GetRegisters(): Observable<ModelProductsService[]>{
    return this.http.get<ModelProductsService[]>(`${this.url}/productosy-servicios`);
  }

  GetRegistersForId(id : string): Observable<ModelProductsService>{
    return this.http.get<ModelProductsService>(`${this.url}/productosy-servicios/${id}`);
  }

  CreateProductService(productsServices : ModelProductsService): Observable<ModelProductsService>{
    return this.http.post<ModelProductsService>(`${this.url}/productosy-servicios`, productsServices,{
      headers : new HttpHeaders({
        'Autorization' : `Bearer ${this.token}`
      })
    });
  }

  EditProductService(productsServices : ModelProductsService): Observable<ModelProductsService>{
    return this.http.put<ModelProductsService>(`${this.url}/productosy-servicios/${productsServices.id}`, productsServices,{
      headers : new HttpHeaders({
        'Autorization' : `Bearer ${this.token}`
      })
    });
  }

  DeleteProductService(id : string): Observable<any>{
    return this.http.delete(`${this.url}/productosy-servicios/${id}`,{
      headers : new HttpHeaders({
        'Autorization' : `Bearer ${this.token}`
      })
    });
  }

}
