import {  inject } from '@angular/core';
import {  CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from '../auth-service/login.service';


  export const isAuthenticated: CanActivateFn  = () => {
    const loginService = inject( LoginService);
    const router = inject(Router)
      if (loginService.isAuthenticated()) {
        return true;
      } else {
        alert('You are not authorized');
        router.navigate(['/login']);
        return false;
      }
 }



  

