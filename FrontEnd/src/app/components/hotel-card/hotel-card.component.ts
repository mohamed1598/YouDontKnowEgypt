import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotel } from 'src/app/interfaces/hotel';
import { IhotelImages } from 'src/app/interfaces/ihotel-images';
import { HotelService } from 'src/app/services/hotel.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.css']
})
export class HotelCardComponent implements OnInit {

  @Input() hotel:Hotel|any;
  constructor(private router:Router,private hotelService:HotelService) {
   }
  text='';
  imagePath:any;
  ngOnInit(): void {
  }
  ngOnChanges(){
    this.imagePath='';
    this.hotelService.getImage(this.hotel.id).subscribe((res:IhotelImages)=>{
      this.imagePath=environment.imageUrl;
        this.imagePath+=res.imagePath;
    })
    // make description
    if(this.hotel.description!=null){
      if(this.hotel.description.length>50){
        this.text=this.hotel.description.slice(0,49)+'...';
      }
      else if(this.hotel.description.length===0){}
      else{
        this.text=this.hotel.description.slice(0,this.hotel.description.length);
        let i=0;
        let x= 50-this.hotel.description.length;
        this.text=this.hotel.description;
        while(i<x){
          this.text=this.text+".";
          i+=1;
        }
      }
      
    }

  }

  goToLocation(){
    this.router.navigateByUrl('/product');
  }

}
