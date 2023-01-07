import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ICategory } from 'src/app/interfaces/icategory';
import { ILocation } from 'src/app/interfaces/ilocation';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit,OnDestroy {

  constructor(private categoryService:CategoryService,private route:ActivatedRoute) { }
  id=0;
  category:any|ICategory;
  subscription:Subscription|any;
  locations:ILocation[]|any;
  ngOnInit(): void {
    this.id=+this.route.snapshot.queryParams['categoryId'];


    this.subscription=this.categoryService.getCategoryLocationsById(this.id).subscribe((res:ILocation)=>{
      this.locations=res;
    });
  }
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
    
  }
}
