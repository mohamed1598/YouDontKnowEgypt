import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit,OnDestroy {

  constructor(private route:ActivatedRoute,private Search:SearchService) { }
  name="";
  
  SearchedLocations:any;
  SearchedCategories:any;
  SearchedGovernrates:any;
  paramsObject:any;
  subscription:Subscription|any;
  ngOnInit(): void {
    this.subscription=this.route.queryParamMap
      .subscribe((params) => {
        this.paramsObject = { ...params.keys, ...params };
        this.name=this.paramsObject.params.name;
        this.Search.searchByLocation(this.name).subscribe(res=>{
          this.SearchedLocations=res;
        });
        this.Search.searchByGovernerate(this.name).subscribe(res=>{
          this.SearchedGovernrates=res;
        });
        this.Search.searchByCategory(this.name).subscribe(res=>{
          this.SearchedCategories=res;
        });
      }
    );
  }
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
    
  }
}
