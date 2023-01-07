import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ILocation } from 'src/app/interfaces/ilocation';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveComponent implements OnInit,OnDestroy {

  listOfLocs:any;
  subscription1:Subscription|any;
  subscription2:Subscription|any;
  subscription3:Subscription|any;
  constructor(private loc:LocationService) { }

  ngOnInit(): void {

    this.subscription1=this.loc.getPendingLocations().subscribe(res=>this.listOfLocs=res);


  }
  approve(id:number){
    this.subscription2=this.loc.approveLocation(id).subscribe(res=>window.location.reload());
    
  }
  delete(id:number){
    this.subscription3=this.loc.deleteLocation(id).subscribe(e=>window.location.reload());
    
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
  }

}
