import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IGovernrate } from 'src/app/interfaces/igovernrate';
import { GovernerateService } from 'src/app/services/governerate.service';

@Component({
  selector: 'app-admin-governrates',
  templateUrl: './admin-governrates.component.html',
  styleUrls: ['./admin-governrates.component.css']
})
export class AdminGovernratesComponent implements OnInit,OnDestroy {

  
  listOfCategory:any;
  subscription1:Subscription|any;
  subscription2:Subscription|any;
  constructor(private gov:GovernerateService,private router:Router) { }

  ngOnInit(): void {
    this.subscription1=this.gov.getAllGovernrotes().subscribe(res=>this.listOfCategory=res);
  }

  delete(id:number){
    this.subscription2=this.gov.deletegov(id).subscribe(e=>window.location.reload()
    );
  }
  edit(id:any,item:IGovernrate){
    localStorage.setItem("govIdEdited",id);
    this.router.navigate(["/editGov"]);
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
