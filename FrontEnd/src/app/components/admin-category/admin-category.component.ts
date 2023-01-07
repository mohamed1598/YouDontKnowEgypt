import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ICategory } from 'src/app/interfaces/icategory';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css']
})
export class AdminCategoryComponent implements OnInit,OnDestroy {

  listOfCategory:any;
  subscription1:Subscription|any;
  subscription2:Subscription|any;
  constructor(private cate:CategoryService,private router:Router) { }

  ngOnInit(): void {
    this.subscription2=this.cate.getAllCategories().subscribe(res=>this.listOfCategory=res);
  }

  delete(id:number){
    this.subscription1=this.cate.deleteCategory(id).subscribe(e=>window.location.reload()
    );
  }

  edit(id:any,item:ICategory){
    localStorage.setItem("editId",id);
    console.log(id);
    console.log(localStorage.getItem("editId"));
    
    this.router.navigate(["/editCatg"]);

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
