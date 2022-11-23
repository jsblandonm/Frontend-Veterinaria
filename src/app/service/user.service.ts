import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelUser } from '../model/datos.model';
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:3000';
  token : string = '';

  constructor(private http: HttpClient, private serviceSecurity : SecurityService) {

    this.token = this.serviceSecurity.GetToken();

  }

  GetRegisters(): Observable<ModelUser[]>{
    return this.http.get<ModelUser[]>(`${this.url}/usuarios`);
  }

  GetRegistersForId(id : string): Observable<ModelUser>{
    return this.http.get<ModelUser>(`${this.url}/usuarios/${id}`);
  }

  CreateUser(user : ModelUser): Observable<ModelUser>{
    return this.http.post<ModelUser>(`${this.url}/usuarios`, user,{
      headers : new HttpHeaders({
        'Autorization' : `Bearer ${this.token}`
      })
    });
  }

  EditUser(user : ModelUser): Observable<ModelUser>{
    return this.http.put<ModelUser>(`${this.url}/usuarios/${user.id}`, user,{
      headers : new HttpHeaders({
        'Autorization' : `Bearer ${this.token}`
      })
    });
  }

  DeleteUser(id : string): Observable<any>{
    return this.http.delete(`${this.url}/usuarios/${id}`,{
      headers : new HttpHeaders({
        'Autorization' : `Bearer ${this.token}`
      })
    });
  }

}
