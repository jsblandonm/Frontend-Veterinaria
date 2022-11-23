import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SecurityService } from 'src/app/service/security.service';
import * as CryptoJS from "crypto-js";
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  
  fgValidator : FormGroup = this.fb.group({
    'usuario' : ['',[Validators.required, Validators.email]],
    'clave' : ['',[Validators.required]],
  });

  constructor(private fb : FormBuilder, private serviceSecurity : SecurityService, private router : Router) { }

  ngOnInit(): void {
  }

  IdentifyUser(){
    const usuario = this.fgValidator.controls['usuario'].value;
    const clave = this.fgValidator.controls['clave'].value;
    const claveCifrada = CryptoJS.MD5(clave).toString();
    this.serviceSecurity.Indetify(usuario,claveCifrada).subscribe((datos : any) => {
      this.serviceSecurity.StockSesion(datos);
      this.router.navigate(['/home'])
    },(err : any) =>{
      //ko
      alert('Todo mal')
    })
  }

}
