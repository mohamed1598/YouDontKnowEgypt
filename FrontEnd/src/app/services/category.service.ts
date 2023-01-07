import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICategory } from '../interfaces/icategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { }
  getAllCategories(){
    return this.httpClient.get(`${environment.api_url}/Categories`);
  }
  getCategoryById(id:number){
    return this.httpClient.get(`${environment.api_url}/Categories/${id}`);
  }
  postCategory(cat:ICategory){
    return this.httpClient.post(`${environment.api_url}/Categories`,cat );
  }
  deleteCategory(id:number){
    return this.httpClient.delete(`${environment.api_url}/Categories/${id}`);
  }
  editCategory(id:number,cat:ICategory){
    return this.httpClient.put(`${environment.api_url}/Categories/${id}`,cat);
  }
  getCategoryImageById(id:number){
    return this.httpClient.get(`${environment.api_url}/Categories/image/${id}`)
  }
  getCategoryLocationsById(id:number){
    return this.httpClient.get(`${environment.api_url}/Categories/locations/${id}`)
  }
}
