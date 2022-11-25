import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelPets } from '../model/datos.model';
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  url = 'http://localhost:3000';
  token : string = '';

  constructor(private http: HttpClient, private serviceSecurity : SecurityService) {

    this.token = this.serviceSecurity.GetToken();

  }

  GetRegisters(): Observable<ModelPets[]>{
    return this.http.get<ModelPets[]>(`${this.url}/mascotas`);
  }

  GetRegistersForId(id : string): Observable<ModelPets>{
    return this.http.get<ModelPets>(`${this.url}/mascotas/${id}`);
  }

  CreatePet(pets : ModelPets): Observable<ModelPets>{
    return this.http.post<ModelPets>(`${this.url}/mascotas`, pets,{
      headers : new HttpHeaders({
        'Autorization' : `Bearer ${this.token}`
      })
    });
  }

  EditPet(pets : ModelPets): Observable<ModelPets>{
    return this.http.put<ModelPets>(`${this.url}/mascotas/${pets.id}`, pets,{
      headers : new HttpHeaders({
        'Autorization' : `Bearer ${this.token}`
      })
    });
  }

  DeletePet(id : string): Observable<any>{
    return this.http.delete(`${this.url}/mascotas/${id}`,{
      headers : new HttpHeaders({
        'Autorization' : `Bearer ${this.token}`
      })
    });
  }
}
