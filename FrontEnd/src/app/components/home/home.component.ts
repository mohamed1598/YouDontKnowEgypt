import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IGovernrate } from 'src/app/interfaces/igovernrate';
import { ILocation } from 'src/app/interfaces/ilocation';
import { LocationService } from 'src/app/services/location.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {


  constructor(private storage:StorageService,private locationService:LocationService ) { }
locations:ILocation[]|any=[];
governrats:IGovernrate[]|any=[];
subscription:Subscription|any;
subscription2:Subscription|any;
  ngOnInit(): void {






    this.subscription=this.locationService.getRecommendedPlaces().subscribe((res)=>
    {
      this.locations=res;
    });
    this.subscription2=this.locationService.getAllGovernrotes().subscribe((res:IGovernrate[]|any)=>
    {
      this.governrats=res;
    });
  }
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
    if(this.subscription2){
      this.subscription2.unsubscribe();
    }
  }
}
