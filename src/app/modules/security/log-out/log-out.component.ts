import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/service/security.service';



@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  constructor(private serviceSecurity : SecurityService, private router : Router) { }

  ngOnInit(): void {
    this.serviceSecurity.DeleteInformationSesion();
    this.router.navigate(['/home'])
  }

}
