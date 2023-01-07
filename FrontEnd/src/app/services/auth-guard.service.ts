import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService:AuthService,private router:Router) { }
  canActivate(route :ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean> |Promise<boolean>|boolean{
    return this.authService.isAuthenticated().then(
      (authenticated:boolean|any)=>{
          if(authenticated){return true;}
          else{
            localStorage.setItem("returnUrl",state.url);
            this.router.navigate(['/login']);
            return false;
        }
      }
  )
  }
}
