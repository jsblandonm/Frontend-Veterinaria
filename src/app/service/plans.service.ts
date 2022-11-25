import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelPlan } from '../model/datos.model';
import { SecurityService } from './security.service';


@Injectable({
  providedIn: 'root'
})
export class PlansService {

  url = 'http://localhost:3000';
  token : string = '';
  
  constructor(private http: HttpClient, private serviceSecurity : SecurityService) {

    this.token = this.serviceSecurity.GetToken();

  }

  GetRegisters(): Observable<ModelPlan[]>{
    return this.http.get<ModelPlan[]>(`${this.url}/plans`);
  }

  GetRegistersForId(id : string): Observable<ModelPlan>{
    return this.http.get<ModelPlan>(`${this.url}/plans/${id}`);
  }

  CreatePlan(planes : ModelPlan): Observable<ModelPlan>{
    return this.http.post<ModelPlan>(`${this.url}/plans`, planes,{
      headers : new HttpHeaders({
        'Autorization' : `Bearer ${this.token}`
      })
    });
  }

  EditPlan(planes : ModelPlan): Observable<ModelPlan>{
    return this.http.put<ModelPlan>(`${this.url}/plans/${planes.id}`, planes,{
      headers : new HttpHeaders({
        'Autorization' : `Bearer ${this.token}`
      })
    });
  }

  DeletePlan(id : string): Observable<any>{
    return this.http.delete(`${this.url}/plans/${id}`,{
      headers : new HttpHeaders({
        'Autorization' : `Bearer ${this.token}`
      })
    });
  }
}
