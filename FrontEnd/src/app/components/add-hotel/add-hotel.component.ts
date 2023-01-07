import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Hotel } from 'src/app/interfaces/hotel';
import { IGovernrate } from 'src/app/interfaces/igovernrate';
import { AuthService } from 'src/app/services/auth.service';
import { HotelService } from 'src/app/services/hotel.service';
import { LocationService } from 'src/app/services/location.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent implements OnInit {
  id:any;
  formData:any;
  filesArr:any[]=[];
  hotel:Hotel={};
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
  constructor(private location:LocationService,private hotelService:HotelService,private http:HttpClient ,private authService:AuthService,private router:Router) { 
  }



  ngOnInit(){

    // this.loc.userId=this.userID.id;


    
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
    console.log("5");
    console.log(this.filesArr);
    
  }

  
  onChangeGav(val:any) {
    this.hotel.governorateId=val;
  }
 
  create(){ 

    if(this.authService.user.isAdmin){
      this.subscription3=this.hotelService.createHotel(this.hotel).subscribe((res:Hotel)=>{
        console.log(res);
        this.id=res.id;
        let index=0;
        while(index<this.filesArr.length){
          this.subscription4=this.http.post(`${environment.api_url}/Upload/Hotel/${this.id}`, this.filesArr[index], {reportProgress: true, observe: 'events'})
        .subscribe(event => {
          console.log(event);
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
  
    

  }
  ngOnDestroy(){
    if(this.subscription1){
      this.subscription1.unsubscribe();
    }
    if(this.subscription2){
      this.subscription2.unsubscribe();
    }
    // if(this.subscription3){
    //   this.subscription3.unsubscribe();
    // }
    // if(this.subscription4){
    //   this.subscription4.unsubscribe();
    // }
  }

}
