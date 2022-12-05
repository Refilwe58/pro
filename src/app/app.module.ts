import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import{HttpHeaders} from '@angular/common/http';
import { PostService } from './service/post.service';
import { EventsComponent } from './events/events.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { LoginServiceService } from './services/login-service.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { CareerComponent } from './career/career.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { AboutComponent } from './about/about.component';
import { AboutsingleComponent } from './aboutsingle/aboutsingle.component';
import { AdminmanagersvpComponent } from './adminmanagersvp/adminmanagersvp.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ContactComponent } from './contact/contact.component';
import { DonateComponent } from './donate/donate.component';
import { NewsComponent } from './news/news.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ViewnewsComponent } from './viewnews/viewnews.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AddEventsComponent } from './add-events/add-events.component';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { AddNewComponent } from './add-new/add-new.component';









@NgModule({
  declarations: [
    
    AppComponent,
    ViewProfileComponent,
    FooterComponent,
    NavbarComponent,
    EventsComponent,
    GalleryComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    CareerComponent,
    UpdatePasswordComponent,
    AboutComponent,
    AboutsingleComponent,
    AdminmanagersvpComponent,
    CarouselComponent,
    ContactComponent,
    DonateComponent,
    NewsComponent,
    SidenavComponent,
    ViewnewsComponent,
    AdminLoginComponent,
    AddEventsComponent,
    AddNewComponent,
  
   
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
 
    MdbFormsModule,
    MdbCarouselModule,
    MdbValidationModule,
  
    
  
  ],
  providers: [PostService,
  LoginServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
