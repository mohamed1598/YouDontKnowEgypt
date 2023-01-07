import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IUser } from '../interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user:IUser={};
  constructor(private httpclient:HttpClient) { 

  }
  login(authentication:IUser){
    return this.httpclient.post(`${environment.api_url}/UserAuthentication`,authentication);
  }
  signup(user:IUser){
    return this.httpclient.post(`${environment.api_url}/User`,user);
  }
  getName(id:number){
    return this.httpclient.get(`${environment.api_url}/User/information/${id}`);
  }
}
