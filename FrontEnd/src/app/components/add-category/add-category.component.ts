import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/interfaces/icategory';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  val:string="";
  categ:ICategory={};
  constructor(private cat:CategoryService , private router:Router) { }

  ngOnInit(): void {

  }

  addCategory(){
    this.categ.name=this.val;
      this.cat.postCategory(this.categ).subscribe(e=>this.router.navigate(['/admincatg'])
      );

  }
  
}
