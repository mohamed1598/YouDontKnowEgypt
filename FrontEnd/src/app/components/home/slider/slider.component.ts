import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }
  images = ['../../../../assets/3.jpg',
            '../../../../assets/7.jpg',
            '../../../../assets/23.jpg',
            '../../../../assets/56.jpg'
            ];
  x =screen.height;
  ngOnInit(): void {
    this.x-=200;
  }

}
