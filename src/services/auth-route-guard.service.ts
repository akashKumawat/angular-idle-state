import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthRouteGuard implements CanActivate {
  constructor(private authService: AuthService) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    this.authService.getLoginStatus().subscribe(status => {
      return status;
    });
  }
}
