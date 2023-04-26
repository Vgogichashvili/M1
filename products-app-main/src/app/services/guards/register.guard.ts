import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterService } from '../auth-service/register.service';

// export class RegisterGuard implements CanActivate {

//   constructor(private registerService:RegisterService,
//                     private router:Router){}

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
//     if(this.registerService.isRegister()){
//       return true
//     } return false
//   }
// }



  export const isRegister: CanActivateFn =() => {
    const registerService = inject(RegisterService)
    
    if(registerService.isRegister()){
        return true
      } 
        return false
 }




