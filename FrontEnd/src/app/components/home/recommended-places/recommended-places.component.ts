import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { ILocation } from 'src/app/interfaces/ilocation';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-recommended-places',
  templateUrl: './recommended-places.component.html',
  styleUrls: ['./recommended-places.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class RecommendedPlacesComponent implements OnInit,OnChanges {
  @Input() locations:ILocation[]|any;
  constructor(private locationService:LocationService) { }
  showNavigationArrows=true;
  showNavigationIndicators=false;
  locations1:ILocation[]=[];
  locations2:ILocation[]=[];
  locations3:ILocation[]=[];
  location1:ILocation|any;
  location2:ILocation|any;
  location3:ILocation|any;
  location4:ILocation|any;
  location5:ILocation|any;
  location6:ILocation|any;
  ngOnInit(): void {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    let j=0;
    if(this.locations[0]){this.location1 = this.locations[0];}
    if(this.locations[1]){this.location2 = this.locations[1];}
    if(this.locations[2]){this.location3 = this.locations[2];}
    if(this.locations[3]){this.location4 = this.locations[3];}
    if(this.locations[4]){this.location5 = this.locations[4];}
    if(this.locations[5]){this.location6 = this.locations[5];}
    for(var i=0;i<=3;i+=3){
      if(this.locations[i]){this.locations1[j]=this.locations[i];}
      if(this.locations[i+1]){this.locations2[j]=this.locations[i+1];}
      if(this.locations[i+2]){this.locations3[j]=this.locations[i+2];}
      j++;
    }
  }
}
