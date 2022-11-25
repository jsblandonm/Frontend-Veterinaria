import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModelIdentify } from '../model/model.module';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ModelPets } from '../model/datos.model';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {


  url = 'http://localhost:3000';
  datesUserSesion = new BehaviorSubject<ModelIdentify>(new ModelIdentify());

  constructor(private http: HttpClient) {
    this.VerifyUserCurrent();
  }

  VerifyUserCurrent(){
    const datos = this.GetInformationSesion();
    if(datos){
      this.RefreshDatesSesion(datos);
    }
  }

  RefreshDatesSesion(datos : ModelIdentify){
    this.datesUserSesion.next(datos);
  }

  GetDatesInformationSesion(){
    return this.datesUserSesion.asObservable()
  }

  Indetify(usuario : string, clave : string) : Observable<ModelIdentify>{
    return this.http.post<ModelIdentify>(`${this.url}/identificarUsuario`,{
      Usuario : usuario,
      Contrasena : clave
    },{
      headers : new HttpHeaders({

      })
    })
  }

  StockSesion(datos : ModelIdentify){
    datos.IdentifyCorrect = true;
    const stringDatos = JSON.stringify(datos);
    localStorage.setItem('datosSesion',stringDatos);
    this.RefreshDatesSesion(datos);
  }

  GetInformationSesion(){
    const datosString = localStorage.getItem('datosSesion');
    if (datosString) {
      const datos =JSON.parse(datosString)
      return datos;
    } else {
      return null;
    }
  }

  DeleteInformationSesion(){
    localStorage.removeItem('datosSesion');
    this.RefreshDatesSesion(new ModelIdentify());
  }

  SesionStarted(){
    const datosString = localStorage.getItem('datosSesion');
    return datosString;
  }

  GetToken(){
    const datosString = localStorage.getItem('datosSesion');
    if(datosString){
      const datos = JSON.parse(datosString)
      return datos.tk;
    }else{
      return '';
    }

  }

}
