import { Component, EventEmitter, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { IGovernrate } from 'src/app/interfaces/igovernrate';
import { ILocation } from 'src/app/interfaces/ilocation';
import { ICategory } from 'src/app/interfaces/icategory';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/interfaces/iuser';
import { stringify } from '@angular/compiler/src/util';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit,OnDestroy{
  id:any;
  formData:any;
  filesArr:any[]=[];
  loc:ILocation={};
  cat:ICategory[]=[];
  gav:IGovernrate[]=[];
  selectedCatg:any;
  selectedGov:any;
  public progress: number=0;
  public message: string="";

  userID:any= JSON.parse((String(localStorage.getItem("userInfo")) )); 
  @Output() public onUploadFinished = new EventEmitter();
  subscription1:Subscription|any;
  subscription2:Subscription|any;
  subscription3:Subscription|any;
  subscription4:Subscription|any;
  constructor(private location :LocationService,private http:HttpClient ,private authService:AuthService,private router:Router) { 
  }



  ngOnInit(){

    this.loc.userId=this.userID.id;


    this.subscription1=this.location.getAllCategories().pipe(map(res=>res as ICategory[])).subscribe(res=>this.cat=res);
    
    this.subscription2=this.location.getAllGovernrotes().pipe(map(res=>res as IGovernrate[])).subscribe(res=>this.gav=res);

    // this.location.getAllLocation().subscribe((locs)=>{
    // })

  }

  
  public uploadFile = (files:any) => {
    if (files.length === 0) {
      return;
    }
    
    let index = 0 ;
    while(index<files.length){
      let fileToUpload = <File>files[index];
      this.formData = new FormData();
      this.formData.append('file', fileToUpload, fileToUpload.name);
      this.filesArr.push(this.formData);
      index++;
    }
  }
  onChangeCat(val:any) {
    this.loc.categoryId=val;
  }
  
  onChangeGav(val:any) {
    this.loc.governorateId=val;
  }
 
  create(){ 

    if(this.authService.user.isAdmin){
      this.subscription3=this.location.createLocationForAdmin(this.loc).subscribe((res:ILocation)=>{
        this.id=res.id;
        let index=0;
        while(index<this.filesArr.length){
          this.subscription4=this.http.post(`${environment.api_url}/upload/${this.id}`, this.filesArr[index], {reportProgress: true, observe: 'events'})
        .subscribe(event => {
          if (event.type === HttpEventType.UploadProgress)
            this.progress = Math.round(100 * (event.loaded/ Number(event.total)));
          else if (event.type === HttpEventType.Response) {
            this.message = 'Upload success.';
            this.onUploadFinished.emit(event.body);
          }
        });
          index++;
        }
        this.router.navigate(["/"]);
      });
    }
    else{
      this.subscription3=this.location.createLocation(this.loc).subscribe((res:ILocation)=>{
        this.id=res.id;
        let index=0;
        while(index<this.filesArr.length){
          this.subscription4=this.http.post(`${environment.api_url}/upload/${this.id}`, this.filesArr[index], {reportProgress: true, observe: 'events'})
        .subscribe(event => {
          if (event.type === HttpEventType.UploadProgress)
            this.progress = Math.round(100 * (event.loaded/ Number(event.total)));
          else if (event.type === HttpEventType.Response) {
            this.message = 'Upload success.';
            this.onUploadFinished.emit(event.body);
          }
        });
          index++;
        }
        window.alert("your request has been submitted and  waited for approve by admin  ")
        this.router.navigate(["/"]);
      });
    }
    

  }
  ngOnDestroy(){
    if(this.subscription1){
      this.subscription1.unsubscribe();
    }
    if(this.subscription2){
      this.subscription2.unsubscribe();
    }
    if(this.subscription3){
      this.subscription3.unsubscribe();
    }
    if(this.subscription4){
      this.subscription4.unsubscribe();
    }
  }
}