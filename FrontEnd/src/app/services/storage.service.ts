import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { IGovernrate } from '../interfaces/igovernrate';
import { ILocation } from '../interfaces/ilocation';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  readonly LocationbaseUrl="http://localhost:53773/api/Location";
  readonly GovernoratebaseUrl="http://localhost:53773/api/Governorates";
  list:ILocation[]=[];
  GovernorateList:IGovernrate[]=[];
  constructor(private http: HttpClient) { }
  postLocation(location: any) {
    this.http.post(
      'https://college-project-9fd76-default-rtdb.firebaseio.com/locations.json',
      location
    ).subscribe(responseData => {
    });
  }
  getLocations() {
    this.http.get(this.LocationbaseUrl).toPromise().then(res=>{
        this.list=res as ILocation[];})
  }
  //Governorates
  getGovernorates() {
    return this.http.get(this.GovernoratebaseUrl);
  }
}
