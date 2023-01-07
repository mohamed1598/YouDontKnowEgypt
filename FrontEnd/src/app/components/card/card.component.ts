import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IImage } from 'src/app/interfaces/i-image';
import { ILocation } from 'src/app/interfaces/ilocation';
import { LocationService } from 'src/app/services/location.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit,OnChanges {
  @Input() location:ILocation|any;
  constructor(private router:Router,private locationService:LocationService) {
   }
  text='';
  imagePath:any;
  ngOnInit(): void {
  }
  ngOnChanges(){
    this.imagePath='';
    this.locationService.getLocationImageById(this.location.id).subscribe((res:IImage)=>{
      this.imagePath=environment.imageUrl;
        this.imagePath+=res.imagePath;
    })
    // make description
    if(this.location.description!=null){
      if(this.location.description.length>50){
        this.text=this.location.description.slice(0,49)+'...';
      }
      else if(this.location.description.length===0){}
      else{
        this.text=this.location.description.slice(0,this.location.description.length);
        let i=0;
        let x= 50-this.location.description.length;
        this.text=this.location.description;
        while(i<x){
          this.text=this.text+".";
          i+=1;
        }
      }
      
    }

  }

  goToLocation(){
    this.router.navigateByUrl('/product');
  }

}
