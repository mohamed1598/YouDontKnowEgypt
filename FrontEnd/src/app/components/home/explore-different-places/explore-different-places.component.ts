import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { IGovernrate } from 'src/app/interfaces/igovernrate';
import { ILocation } from 'src/app/interfaces/ilocation';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-explore-different-places',
  templateUrl: './explore-different-places.component.html',
  styleUrls: ['./explore-different-places.component.css']
})
export class ExploreDifferentPlacesComponent implements OnInit {

  @Input() Governrates:IGovernrate[]|any;
  constructor(private locationService:LocationService) { }
  showNavigationArrows=true;
  showNavigationIndicators=false;
  Governrates1:IGovernrate[]=[];
  Governrates2:IGovernrate[]=[];
  Governrates3:IGovernrate[]=[];
  Governrate1:IGovernrate|any;
  Governrate2:IGovernrate|any;
  Governrate3:IGovernrate|any;
  Governrate4:IGovernrate|any;
  Governrate5:IGovernrate|any;
  Governrate6:IGovernrate|any;
  ngOnInit(): void {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    let j=0;
    let i=0;
    while(i<2&&j<this.Governrates.length){
        this.Governrates1[i]=this.Governrates[j];
        i++;
      j++;
    }
    i=0;
    while(i<2&&j<this.Governrates.length){
        this.Governrates2[i]=this.Governrates[j];
        i++;
      j++;
    }
    i=0;
    while(i<2&&j<this.Governrates.length){
        this.Governrates3[i]=this.Governrates[j];
        i++;
      j++;
    }
    if(this.Governrates1[0]){this.Governrate1 = this.Governrates1[0];}
    if(this.Governrates1[1]){this.Governrate2 = this.Governrates1[1];}
    if(this.Governrates2[0]){this.Governrate3 = this.Governrates2[0];}
    if(this.Governrates2[1]){this.Governrate4 = this.Governrates2[1];}
    if(this.Governrates3[0]){this.Governrate5 = this.Governrates3[0];}
    if(this.Governrates3[1]){this.Governrate6 = this.Governrates3[1];}
  }
}