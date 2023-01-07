import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Hotel } from '../interfaces/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private httpClient:HttpClient) { }

  getHotelsinGovernorate(id:number){

    return this.httpClient.get(`${environment.api_url}/Hotels/Governorate/${id}`);

  }
  createHotel(hotel:Hotel){
    return this.httpClient.post(`${environment.api_url}/Hotels`,hotel);
  }
  getImage(id:number){
    return this.httpClient.get(`${environment.api_url}/Hotels/Image/${id}`);

  }
  getImages(id:number){
    return this.httpClient.get(`${environment.api_url}/Hotels/Images/${id}`);

  }

  getHotelByID(id:number){
    return this.httpClient.get(`${environment.api_url}/Hotels/${id}`);

  }
  deleteHotel(id:number){
    return this.httpClient.delete(`${environment.api_url}/Hotels/${id}`);
  }

}
