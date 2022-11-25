import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelProsepcto, ModelSucursal } from '../model/datos.model';
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class ProspectoService {

  
  url = 'http://localhost:3000';
  token : string = '';

  constructor(private http: HttpClient, private serviceSecurity : SecurityService) {

    this.token = this.serviceSecurity.GetToken();

  }

  GetRegisters(): Observable<ModelProsepcto[]>{
    return this.http.get<ModelProsepcto[]>(`${this.url}/prospectos`);
  }

  GetRegistersForId(id : string): Observable<ModelProsepcto>{
    return this.http.get<ModelProsepcto>(`${this.url}/prospectos/${id}`);
  }

  CreateProspecto(prospecto : ModelProsepcto): Observable<ModelProsepcto>{
    return this.http.post<ModelProsepcto>(`${this.url}/prospectos`, prospecto,{
      headers : new HttpHeaders({
        'Autorization' : `Bearer ${this.token}`
      })
    });
  }

  EditProspecto(prospecto : ModelProsepcto): Observable<ModelProsepcto>{
    return this.http.put<ModelProsepcto>(`${this.url}/prospectos/${prospecto.id}`, prospecto,{
      headers : new HttpHeaders({
        'Autorization' : `Bearer ${this.token}`
      })
    });
  }

  DeleteProspecto(id : string): Observable<any>{
    return this.http.delete(`${this.url}/prospectos/${id}`,{
      headers : new HttpHeaders({
        'Autorization' : `Bearer ${this.token}`
      })
    });
  }
}
