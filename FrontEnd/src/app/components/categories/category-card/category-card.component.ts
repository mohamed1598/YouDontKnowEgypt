import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IImage } from 'src/app/interfaces/i-image';
import { CategoryService } from 'src/app/services/category.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent implements OnInit {
  @Input() category:any;
  constructor(private router:Router,private categoryService:CategoryService) { }
  imagePath:any;
  defaultImg =environment.imageUrl;
  ngOnInit(): void {
    this.imagePath=environment.imageUrl;
    this.categoryService.getCategoryImageById(this.category.id).subscribe((res:IImage)=>{
        this.imagePath+=res.imagePath;
    })
  }
  goToCategory(){
    this.router.navigate(['/category'], { queryParams: { categoryId: this.category.id } });
  }
}
