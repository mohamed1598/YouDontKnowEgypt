import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IGovernrate } from 'src/app/interfaces/igovernrate';
import { GovernerateService } from 'src/app/services/governerate.service';

@Component({
  selector: 'app-add-governrates',
  templateUrl: './add-governrates.component.html',
  styleUrls: ['./add-governrates.component.css']
})
export class AddGovernratesComponent implements OnInit,OnDestroy {
  val:string="";
  gov:IGovernrate={};
  subscription:Subscription|any;
  constructor(private govs:GovernerateService , private router:Router) { }

  ngOnInit(): void {

  }

  addGov(){
    this.gov.name=this.val;
      this.govs.postGov(this.gov).subscribe(e=>this.router.navigate(['/admingov']));
     

  }
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

}
