import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardServiceService {
  constructor(private authService:AuthService,private router:Router) { }
  canActivate(route :ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean> |Promise<boolean>|boolean{
    return this.authService.isAuthenticated().then(
      (authenticated:boolean|any)=>{
          if(authenticated){
            if(this.authService.user.isAdmin){
              return true;
            }
            this.router.navigate(['/']);
            return false;
          }
          else{
            localStorage.setItem("returnUrl",state.url);
            this.router.navigate(['/login']);
            return false;
        }
      }
  )
  }
}
