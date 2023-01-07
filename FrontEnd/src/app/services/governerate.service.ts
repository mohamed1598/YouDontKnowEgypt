import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IGovernrate } from '../interfaces/igovernrate';

@Injectable({
  providedIn: 'root'
})
export class GovernerateService {

  constructor(private httpClient:HttpClient) { }
  getAllGovernrotes(){
    return this.httpClient.get(`${environment.api_url}/Governorates`);
  }
  getGovernerteById(id:number){
    return this.httpClient.get(`${environment.api_url}/Governorates/${id}`);
  }
  deletegov(id:number){
    return this.httpClient.delete(`${environment.api_url}/Governorates/${id}`);
  }
  postGov(gov:IGovernrate){
    return this.httpClient.post(`${environment.api_url}/Governorates`,gov );
  }
  editGov(id:number,gov:IGovernrate){
    return this.httpClient.put(`${environment.api_url}/Governorates/${id}`,gov);
  }
  getGovernerateImageById(id:number){
    return this.httpClient.get(`${environment.api_url}/Governorates/image/${id}`)
  }
  getGovernerateLocations(id:number){
    return this.httpClient.get(`${environment.api_url}/Governorates/locations/${id}`)
  }
}
