import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IGovernrate } from 'src/app/interfaces/igovernrate';
import { GovernerateService } from 'src/app/services/governerate.service';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-governert',
  templateUrl: './governert.component.html',
  styleUrls: ['./governert.component.css']
})
export class GovernertComponent implements OnInit,OnDestroy {

  constructor(private governrateService:GovernerateService,private route:ActivatedRoute,private hotelService:HotelService) { }
  id=0;
  hotels:any;
  locations:any;
  subscription:Subscription|any;
  subscription1:Subscription|any;
  governorate:IGovernrate|any;
  ngOnInit(): void {
    this.id=+this.route.snapshot.queryParams['governrateId'];
    
    this.subscription1=this.governrateService.getGovernerteById(this.id).subscribe(res=>this.governorate=res
    )
    this.subscription=this.governrateService.getGovernerateLocations(this.id).subscribe(res=>{
      this.locations=res;
    });

    this.hotelService.getHotelsinGovernorate(this.id).subscribe(res=>this.hotels=res);

  }
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
    
  }
}
