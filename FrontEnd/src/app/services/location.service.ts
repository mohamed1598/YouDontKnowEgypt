import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ILocation } from '../interfaces/ilocation';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor( private httpClient:HttpClient) { }

  
  getAllLocation(){
    return this.httpClient.get(`${environment.api_url}/Location/Paging/1`);
  }
  getRecommendedPlaces(){
    return this.httpClient.get(`${environment.api_url}/Location/Recommended`);
  }
  getLocationById(id:number){
    return this.httpClient.get(`${environment.api_url}/Location/${id}`);
  }
  increaseCount(id:number){
    return this.httpClient.get(`${environment.api_url}/Location/increaseCounter/${id}`);
  }
  createLocation(location:ILocation){
    return this.httpClient.post(`${environment.api_url}/Location`,location);
  }
  createLocationForAdmin(location:ILocation){
    return this.httpClient.post(`${environment.api_url}/Location/admin`,location);
  }
  getAllCategories(){
    return this.httpClient.get(`${environment.api_url}/Categories`);
  }
  getAllGovernrotes(){
    return this.httpClient.get(`${environment.api_url}/Governorates`);
  }
  getPendingLocations(){
    return this.httpClient.get(`${environment.api_url}/Location/pending`)
  }
  approveLocation(id:number){
    return this.httpClient.get(`${environment.api_url}/Location/approved/${id}`)

  }
  deleteLocation(id:number){
    return this.httpClient.delete(`${environment.api_url}/Location/${id}`)
  }
  getLocationImageById(id:number){
    return this.httpClient.get(`${environment.api_url}/Location/image/${id}`)
  }
  getLocationImagesById(id:number){
    return this.httpClient.get(`${environment.api_url}/Location/images/${id}`)
  }
}
