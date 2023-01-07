import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IGovernrate } from 'src/app/interfaces/igovernrate';
import { GovernerateService } from 'src/app/services/governerate.service';

@Component({
  selector: 'app-governerates',
  templateUrl: './governerates.component.html',
  styleUrls: ['./governerates.component.css']
})
export class GoverneratesComponent implements OnInit,OnDestroy {

  constructor(private governerateService:GovernerateService) { }
  governerates:IGovernrate[]=[];
  subscription:Subscription|any;
  ngOnInit(): void {
    this.subscription=this.governerateService.getAllGovernrotes().subscribe((res:IGovernrate[]|any)=>{
      this.governerates=res
    })
  }
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
    
  }
}
