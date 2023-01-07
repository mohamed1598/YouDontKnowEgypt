import { Component, HostListener, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IImage } from 'src/app/interfaces/i-image';
import { ICategory } from 'src/app/interfaces/icategory';
import { Icomment } from 'src/app/interfaces/icomment';
import { IGovernrate } from 'src/app/interfaces/igovernrate';
import { IUser } from 'src/app/interfaces/iuser';
import { AuthService } from 'src/app/services/auth.service';
import { CategoryService } from 'src/app/services/category.service';
import { CommentService } from 'src/app/services/comment.service';
import { GovernerateService } from 'src/app/services/governerate.service';
import { LocationService } from 'src/app/services/location.service';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit,OnDestroy,OnChanges {
  @HostListener('document:keydown.ArrowLeft', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    this.goleft();
  }
  @HostListener('document:keydown.ArrowRight', ['$event']) onKeydownHandler2(event: KeyboardEvent) {
    this.goRight();
  }
  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler3(event: KeyboardEvent) {
    this.hide();
  }
  constructor(private locationService:LocationService,private route:ActivatedRoute ,public authService:AuthService,private router :Router,private commentService:CommentService,private categoryService:CategoryService,private governerateService:GovernerateService,private userService:UserService
    ) { }
  id=0;
  location:any;
  locations:any;
  locationImages:any;
  subscription:Subscription|any;
  postedComment="";
  category:any;
  governerate:any;
  comment:Icomment={};
  comments:Icomment[]|any=[];
  imagesrc='';
  count=0;
  start=0;
  end=0;
  show=false;
  selectedImage="";
  ngOnInit(): void {
    this.category="";
    this.governerate="";
    this.imagesrc=environment.imageUrl;
    this.id=+this.route.snapshot.queryParams['locationId'];
    this.subscription=this.locationService.getLocationById(this.id).subscribe(res=>{
      this.location=res;
      this.categoryService.getCategoryById(this.location.categoryId).subscribe((res:ICategory)=>{this.category=res.name;
      });
      this.governerateService.getGovernerteById(this.location.governorateId).subscribe((res:IGovernrate)=>this.governerate=res.name);
    });
    this.locationService.increaseCount(this.id).subscribe(res=>{}
    )
    this.locationService.getLocationImagesById(this.id).subscribe(res=>{this.locationImages=res;
      this.end=this.locationImages.length;
      this.start=this.locationImages[0].id;
    });
    this.commentService.getLocaionComments(this.id).subscribe((res:Icomment[]|any)=>{this.comments=res;
    }
    )
    
    
  }
ngOnChanges(){
}
  postComment(){
    this.comment.comment1=this.postedComment;
    this.comment.userId=this.authService.user.id;
    this.comment.locatoinId=this.location.id;
    this.commentService.postComment(this.comment).subscribe(res=>{
      this.postedComment="";
    window.location.reload();
    })
    
  }
  delete(){
    this.locationService.deleteLocation(this.id).subscribe(res=>{}
    );
    this.router.navigate(['/']);
  }
  myFunc(image:IImage|any){
    this.selectedImage=this.imagesrc+image.imagePath;
    this.count=image.id-this.start;
    this.show=true;
  }
  hide(){
    this.show=false;
  }
  goRight(){
    this.count++;
    if(this.count>=this.end){this.count=0;}
  }
  goleft(){
    this.count--;
    if(this.count<0){
      this.count=this.end-1;
    }
  }
  keydown(event:any){
    console.log(true);
    if(event.key==="ArrowLeft"){
      this.goleft();
    }
  }
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}

