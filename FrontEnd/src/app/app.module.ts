import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SliderComponent } from './components/home/slider/slider.component';
import { RecommendedPlacesComponent } from './components/home/recommended-places/recommended-places.component';
import { ExploreDifferentPlacesComponent } from './components/home/explore-different-places/explore-different-places.component';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryCardComponent } from './components/categories/category-card/category-card.component';
import { AddLocationComponent } from './components/add-location/add-location.component';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { LocationComponent } from './components/location/location.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login-signup/login/login.component';
import { SignupComponent } from './components/login-signup/signup/signup.component';
import { GovernertComponent } from './components/governert/governert.component';
import { GovernertCardComponent } from './components/governert/governert-card/governert-card.component';
import { GoverneratesComponent } from './components/governerates/governerates.component';
import { SearchComponent } from './components/search/search.component';
import { AdminCategoryComponent } from './components/admin-category/admin-category.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';
import { AdminGovernratesComponent } from './components/admin-governrates/admin-governrates.component';
import { AddGovernratesComponent } from './components/add-governrates/add-governrates.component';
import { EditGovernrateComponent } from './components/edit-governrate/edit-governrate.component';
import { ApproveComponent } from './components/approve/approve.component';
import { CategoryComponent } from './components/categories/category/category.component';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// Import library module
import { NgxSpinnerModule } from "ngx-spinner";
import { HotelCardComponent } from './components/hotel-card/hotel-card.component';
import { AddHotelComponent } from './components/add-hotel/add-hotel.component';
import { HotelComponent } from './components/hotel/hotel.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SliderComponent,
    RecommendedPlacesComponent,
    ExploreDifferentPlacesComponent,
    HomeComponent,
    CardComponent,
    
    CategoriesComponent,
    CategoryCardComponent,
    AddLocationComponent,
    LocationComponent,
    LoginComponent,
    SignupComponent,
    GovernertComponent,
    GovernertCardComponent,
    GoverneratesComponent,
    SearchComponent,
    AdminCategoryComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    AdminGovernratesComponent,
    AddGovernratesComponent,
    EditGovernrateComponent,
    ApproveComponent,
    CategoryComponent,
    HotelCardComponent,
    AddHotelComponent,
    HotelComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    CustomFormsModule,
    FormsModule,
    NgxSpinnerModule
    
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
