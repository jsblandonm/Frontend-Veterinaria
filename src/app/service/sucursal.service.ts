import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelSucursal } from '../model/datos.model';
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {

  
  url = 'http://localhost:3000';
  token : string = '';

  constructor(private http: HttpClient, private serviceSecurity : SecurityService) {

    this.token = this.serviceSecurity.GetToken();

  }

  GetRegisters(): Observable<ModelSucursal[]>{
    return this.http.get<ModelSucursal[]>(`${this.url}/sucursals`);
  }

  GetRegistersForId(id : string): Observable<ModelSucursal>{
    return this.http.get<ModelSucursal>(`${this.url}/sucursals/${id}`);
  }

  CreateSucursal(sucursal : ModelSucursal): Observable<ModelSucursal>{
    return this.http.post<ModelSucursal>(`${this.url}/sucursals`, sucursal,{
      headers : new HttpHeaders({
        'Autorization' : `Bearer ${this.token}`
      })
    });
  }

  EditSucursal(sucursal : ModelSucursal): Observable<ModelSucursal>{
    return this.http.put<ModelSucursal>(`${this.url}/sucursals/${sucursal.id}`, sucursal,{
      headers : new HttpHeaders({
        'Autorization' : `Bearer ${this.token}`
      })
    });
  }

  DeleteSucursal(id : string): Observable<any>{
    return this.http.delete(`${this.url}/sucursals/${id}`,{
      headers : new HttpHeaders({
        'Autorization' : `Bearer ${this.token}`
      })
    });
  }
}
