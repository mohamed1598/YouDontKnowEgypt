import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/interfaces/iuser';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {
  height = screen.height;
  imgSrc: string = "../../../../assets/1209103735.png"


  constructor(private user:UserService,private authService:AuthService,private router:Router ) { }
  u:IUser={};
  email="";
  password="";
  subscription:Subscription|any;
  message:String="";
  ngOnInit(): void {
  }
  onSubmit(){
    this.u.email=this.email;
    this.u.password=this.password;
    this.subscription=this.user.login(this.u)
    .subscribe(
      Response=>{
        if(Response){
          this.authService.user=Response;
          localStorage.setItem("userInfo",JSON.stringify(this.authService.user));
          this.authService.logIn();
          if(localStorage.getItem("returnUrl")==null){
            this.router.navigate(["/"]);
          }
          else{
            this.router.navigate([localStorage.getItem("returnUrl")]);
          }
          
        }
        else{
          this.message="wrong email or password"
        }
      }
      
    )
  }
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}
