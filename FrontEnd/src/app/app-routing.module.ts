import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { AddGovernratesComponent } from './components/add-governrates/add-governrates.component';
import { AddHotelComponent } from './components/add-hotel/add-hotel.component';
import { AddLocationComponent } from './components/add-location/add-location.component';
import { AdminCategoryComponent } from './components/admin-category/admin-category.component';
import { AdminGovernratesComponent } from './components/admin-governrates/admin-governrates.component';
import { ApproveComponent } from './components/approve/approve.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryComponent } from './components/categories/category/category.component';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';
import { EditGovernrateComponent } from './components/edit-governrate/edit-governrate.component';
import { GoverneratesComponent } from './components/governerates/governerates.component';
import { GovernertComponent } from './components/governert/governert.component';
import { HomeComponent } from './components/home/home.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { LocationComponent } from './components/location/location.component';
import { LoginComponent } from './components/login-signup/login/login.component';
import { SignupComponent } from './components/login-signup/signup/signup.component';
import { SearchComponent } from './components/search/search.component';
import { AdminAuthGuardServiceService } from './services/admin-auth-guard-service.service';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'categories',component:CategoriesComponent},
  {path:'category',component:CategoryComponent},
  {path:'addLocation',component:AddLocationComponent,canActivate:[AuthGuardService]},
  {path:'location',component:LocationComponent},
  {path:'governrate',component:GovernertComponent},
  {path:'governrates',component:GoverneratesComponent},
  {path:'login' , component:LoginComponent},
  {path:'signup' , component:SignupComponent},
  {path:'search' , component:SearchComponent},
  {path:'hotel' , component:HotelComponent},

  {path:'admincatg' , component:AdminCategoryComponent,canActivate:[AdminAuthGuardServiceService]},
  {path:'addcategory' , component:AddCategoryComponent,canActivate:[AdminAuthGuardServiceService]},
  {path:'admingov' , component:AdminGovernratesComponent,canActivate:[AdminAuthGuardServiceService]},
  {path:'addgov' , component:AddGovernratesComponent,canActivate:[AdminAuthGuardServiceService]},
  {path:'editCatg' , component:EditCategoryComponent,canActivate:[AdminAuthGuardServiceService]},
  {path:'editGov' , component:EditGovernrateComponent,canActivate:[AdminAuthGuardServiceService]},
  {path:'approve' , component:ApproveComponent,canActivate:[AdminAuthGuardServiceService]},
  {path:'addhotel' , component:AddHotelComponent,canActivate:[AdminAuthGuardServiceService]},


  {path:'**',component:HomeComponent},





  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
