import { Component, Input, OnInit } from '@angular/core';
import { IImage } from 'src/app/interfaces/i-image';
import { IGovernrate } from 'src/app/interfaces/igovernrate';
import { GovernerateService } from 'src/app/services/governerate.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-governert-card',
  templateUrl: './governert-card.component.html',
  styleUrls: ['./governert-card.component.css']
})
export class GovernertCardComponent implements OnInit {
  @Input() governart:IGovernrate|any;
  constructor(private governerateService:GovernerateService) { }
  imagePath:any;
  ngOnInit(): void {
    this.imagePath='';
    this.governerateService.getGovernerateImageById(this.governart.id).subscribe((res:IImage)=>{
      if(res==null){this.imagePath=""}
      else{
        this.imagePath=environment.imageUrl;
        this.imagePath+=res.imagePath;
      }
    });
  }

}
