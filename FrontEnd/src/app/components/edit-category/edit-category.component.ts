import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ICategory } from 'src/app/interfaces/icategory';
import { CategoryService } from 'src/app/services/category.service';
import { AdminCategoryComponent } from '../admin-category/admin-category.component';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit,OnDestroy{

  value:ICategory|any;
  subscription1:Subscription|any;
  subscription2:Subscription|any;
  constructor(private cat:CategoryService,private router:Router) { }

  ngOnInit(): void {
    console.log(Number(localStorage.getItem("editId")));
    // this.value.id=Number(localStorage.getItem("editId"));
    this.subscription1=this.cat.getCategoryById(Number(localStorage.getItem("editId"))).subscribe((res:ICategory) =>this.value=res
    );
    
  }


  update(){
    this.subscription2=this.cat.editCategory(Number(localStorage.getItem("editId")),this.value).subscribe(res=>    this.router.navigate(["/admincatg"])
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
