import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit,OnDestroy {

  constructor(private route:ActivatedRoute,private catgService:CategoryService) { 
  }
  categories:any;
  subscription1:Subscription|any;
  ngOnInit(): void {

    this.subscription1=this.catgService.getAllCategories().subscribe((res)=>{this.categories=res;})
  }
  ngOnDestroy(){
    if(this.subscription1){
      this.subscription1.unsubscribe();
    }
    
  }
}
