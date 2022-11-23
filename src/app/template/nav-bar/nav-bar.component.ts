import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModelIdentify } from 'src/app/model/model.module';
import { SecurityService } from 'src/app/service/security.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  LogginOn : boolean = false;

  subs : Subscription = new Subscription();

  constructor(private serviceSecurity : SecurityService) { }

  ngOnInit(): void {
    this.subs = this.serviceSecurity.GetDatesInformationSesion().subscribe((datos : ModelIdentify) => {
      this.LogginOn = datos.IdentifyCorrect
    })
  }

}
