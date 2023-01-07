import { state } from '@angular/animations';
import { Component, HostListener, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { AuthService } from 'src/app/services/auth.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,OnChanges {
  keycode:number=13;
@HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.key=== "Enter") {

      this.search();
    }
}
  constructor(public authService:AuthService,private router:Router,private auth:AuthService) { }
  isOpen=false;
  ngOnInit(): void {
  }
  toggleNavbar(){
    this.isOpen=!this.isOpen;
  }
  ngOnChanges(){
  }
  Logout(){
    this.authService.logOut();
    localStorage.clear();
  }
  name="";
  search(){
    this.router.navigate(['/search'],{queryParams:{name:this.name}})
  }

  admin() {
    if(this.auth.user.isAdmin){
      return true;
    }
    return false;
  }
}
