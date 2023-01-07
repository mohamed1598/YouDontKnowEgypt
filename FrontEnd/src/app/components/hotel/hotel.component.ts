import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IImage } from 'src/app/interfaces/i-image';
import { Icomment } from 'src/app/interfaces/icomment';
import { IGovernrate } from 'src/app/interfaces/igovernrate';
import { IhotelImages } from 'src/app/interfaces/ihotel-images';
import { AuthService } from 'src/app/services/auth.service';
import { GovernerateService } from 'src/app/services/governerate.service';
import { HotelService } from 'src/app/services/hotel.service';
import { LocationService } from 'src/app/services/location.service';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  @HostListener('document:keydown.ArrowLeft', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    this.goleft();
  }
  @HostListener('document:keydown.ArrowRight', ['$event']) onKeydownHandler2(event: KeyboardEvent) {
    this.goRight();
  }
  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler3(event: KeyboardEvent) {
    this.hide();
  }
  constructor(private hotelService:HotelService,private route:ActivatedRoute ,public authService:AuthService,private router :Router,private governerateService:GovernerateService,private userService:UserService
    ) { }
  id=0;
  hotel:any;
  locations:any;
  hotelImages:any;
  subscription:Subscription|any;
  postedComment="";
  category:any;
  governerate:any;
  comment:Icomment={};
  comments:Icomment[]|any=[];
  imagesrc='';
  count=0;
  start=0;
  end=0;
  show=false;
  selectedImage="";
  ngOnInit(): void {
    this.category="";
    this.governerate="";
    this.imagesrc=environment.imageUrl;
    this.id=+this.route.snapshot.queryParams['hotelId'];
    this.subscription=this.hotelService.getHotelByID(this.id).subscribe(res=>{
      this.hotel=res;
  
      this.governerateService.getGovernerteById(this.hotel.governorateId).subscribe((res:IGovernrate)=>this.governerate=res.name);
    });

    
    this.hotelService.getImages(this.id).subscribe(res=>{this.hotelImages=res;
      this.end=this.hotelImages.length;
      this.start=this.hotelImages[0].id;
    });
  
    
    
    
  }
ngOnChanges(){
}
delete(){
  this.hotelService.deleteHotel(this.id).subscribe(res=>{  this.router.navigate(['/']);
}
  );
}
  myFunc(image:IhotelImages|any){
    this.selectedImage=this.imagesrc+image.imagePath;
    this.count=image.id-this.start;
    this.show=true;
  }
  hide(){
    this.show=false;
  }
  goRight(){
    this.count++;
    if(this.count>=this.end){this.count=0;}
  }
  goleft(){
    this.count--;
    if(this.count<0){
      this.count=this.end-1;
    }
  }
  keydown(event:any){
    console.log(true);
    if(event.key==="ArrowLeft"){
      this.goleft();
    }
  }
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

}
