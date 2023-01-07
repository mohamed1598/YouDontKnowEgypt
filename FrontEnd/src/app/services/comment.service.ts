import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient:HttpClient) { }
  getLocaionComments(id:number){
    return this.httpClient.get(`${environment.api_url}/Comments/Locations/${id}`);
  }
  getCommentById(id:number){
    return this.httpClient.get(`${environment.api_url}/Comments/${id}`);
  }
  postComment(comment:any){
    return this.httpClient.post(`${environment.api_url}/Comments`,comment);
  }
}
