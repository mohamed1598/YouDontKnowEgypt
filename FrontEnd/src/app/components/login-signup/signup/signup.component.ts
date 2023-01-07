import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/interfaces/iuser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit ,OnDestroy{
  height = screen.height;
  user:IUser={};
  subscription:Subscription|any;
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.subscription=this.userService.signup(this.user).subscribe(Response=>{
      this.router.navigate(['/login']);
    });
  }
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
    
  }
}
