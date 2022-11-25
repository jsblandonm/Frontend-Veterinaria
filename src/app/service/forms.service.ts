import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelPets } from '../model/datos.model';
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  url = 'http://localhost:3000';
  token : string = '';

  constructor(private http : HttpClient, private serviceSecurity : SecurityService) { 
    this.token = this.serviceSecurity.GetToken();
  }

  GetRegisters() : Observable<ModelPets[]>{
    return this.http.get<ModelPets[]>(`${this.url}/mascotas`);
  }

  GetRegistersForId(id : string) : Observable<ModelPets>{
    return this.http.get<ModelPets>(`${this.url}/mascotas/${id}`);
  }

  CreateForm( form : ModelPets) : Observable<ModelPets>{
    return this.http.post<ModelPets>(`${this.url}/mascotas`,form,{
      headers : new HttpHeaders({
        'Autorization' : `Bearer ${this.token}`
      })
    });
  }

  EditForm(form : ModelPets): Observable<ModelPets>{
    return this.http.put<ModelPets>(`${this.url}/mascotas/${form.id}`, form,{
      headers : new HttpHeaders({
        'Autorization' : `Bearer ${this.token}`
      })
    });
  }

  DeleteForm(id : string): Observable<any>{
    return this.http.delete(`${this.url}/mascotas/${id}`,{
      headers : new HttpHeaders({
        'Autorization' : `Bearer ${this.token}`
      })
    });
  }

}
