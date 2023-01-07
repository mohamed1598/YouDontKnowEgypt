import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IGovernrate } from 'src/app/interfaces/igovernrate';
import { GovernerateService } from 'src/app/services/governerate.service';

@Component({
  selector: 'app-edit-governrate',
  templateUrl: './edit-governrate.component.html',
  styleUrls: ['./edit-governrate.component.css']
})
export class EditGovernrateComponent implements OnInit,OnDestroy {

  value:IGovernrate={};
  constructor(private gov:GovernerateService,private router:Router) { }
  subscription1:Subscription|any;
  subscription2:Subscription|any;
  ngOnInit(): void {
    this.subscription1=this.gov.getGovernerteById(Number(localStorage.getItem("govIdEdited"))).subscribe((res:IGovernrate) =>this.value=res)
    this.value.id=Number(localStorage.getItem("govIdEdited"));
  }

  update(){
    this.subscription2=this.gov.editGov(Number(localStorage.getItem("govIdEdited")),this.value).subscribe(res=>{
    this.router.navigate(["/admingov"]);
    }
    );
    
  }
  ngOnDestroy(){
    if(this.subscription1){
      this.subscription1.unsubscribe();
    }
    if(this.subscription2){
      this.subscription2.unsubscribe();
    }
    
  }

}
