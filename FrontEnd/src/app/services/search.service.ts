import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient:HttpClient) { }
  searchByLocation(name:string){
    return this.httpClient.get(`${environment.api_url}/Location/Search/${name}`)
  }
  searchByGovernerate(name:string){
    return this.httpClient.get(`${environment.api_url}/Governorates/Search/${name}`)
  }
  searchByCategory(name:string){
    return this.httpClient.get(`${environment.api_url}/Categories/Search/${name}`)
  }
}
