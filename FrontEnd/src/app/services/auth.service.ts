import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  loggedIn=false;
  user:IUser={};
    logIn(){
        this.loggedIn=true;
    }
    logOut(){
        this.loggedIn=false;
        this.user={};
    }
    isAuthenticated(){
        const promise = new Promise(
            (resolve,reject)=>{
                  resolve(this.loggedIn)
            }
        );
        return promise;
    }

    
}
