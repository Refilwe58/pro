
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareerComponent } from './career/career.component';
import { EventsComponent } from './events/events.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrationComponent } from './registration/registration.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { AboutsingleComponent } from './aboutsingle/aboutsingle.component';
import { ContactComponent } from './contact/contact.component';
import { DonateComponent } from './donate/donate.component';
import { HomeComponent } from './home/home.component';
import { AdminmanagersvpComponent } from './adminmanagersvp/adminmanagersvp.component';
import { AddEventsComponent } from './add-events/add-events.component';
import { AddNewComponent } from './add-new/add-new.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

const routes: Routes = [
  {path:'view-profile',component:ViewProfileComponent},
{ path:'events',component:EventsComponent},
{path:'gallery',component:GalleryComponent},
{path:'login',component:LoginComponent},
{path: 'registration' ,component:RegistrationComponent},
{path: 'career',component:CareerComponent},
{path: 'home', component: HomeComponent},
{path: 'aboutsingle', component: AboutsingleComponent},
{path: 'contact', component: ContactComponent},
{path: 'donate', component: DonateComponent},
{path: 'adminmanagersvp' , component: AdminmanagersvpComponent},
{path:'add-events',component:AddEventsComponent},
{path:'add-news',component:AddNewComponent},
{path:'admin-login',component:AdminLoginComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
