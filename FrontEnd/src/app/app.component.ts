import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit {
  title = 'college-project';
  
  constructor(private authService:AuthService , private spinner: NgxSpinnerService){


    
  }
  ngOnInit(){

    // this.spinner.show();
    // setTimeout(() =>{
    //   this.spinner.hide()
    // }, 5000);



    
    var user = JSON.parse(localStorage.getItem("userInfo")||'null');
    if(user!=null){
      this.authService.user=user;
      this.authService.logIn();
    }
    else{
      this.authService.user={};
      this.authService.logOut();
    }


  }
}
