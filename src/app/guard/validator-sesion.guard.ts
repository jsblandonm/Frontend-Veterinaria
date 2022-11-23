import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SecurityService } from '../service/security.service';

@Injectable({
  providedIn: 'root'
})
export class ValidatorSesionGuard implements CanActivate {

  constructor(private serviceSecurity : SecurityService, private router : Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.serviceSecurity.GetInformationSesion()) {
      return true;
    } else {
      this.router.navigate(['/home'])
      return false;
    }
  }
}
