import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengerHomeComponent } from './home/home.component';
import { PassengerLoginComponent } from './login/login.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { PassengerSignupComponent } from './signup/signup.component';
import { PassengerNavbarComponent } from './passenger-navbar/passenger-navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { PassengerViewBusComponent } from './passenger-view-bus/passenger-view-bus.component';
import { PassengerBookTicketsComponent } from './passenger-book-tickets/passenger-book-tickets.component';
import { PassengerViewTicketsComponent } from './passenger-view-tickets/passenger-view-tickets.component';
import { PassengerViewProfileComponent } from './passenger-view-profile/passenger-view-profile.component';



@NgModule({
  declarations: [PassengerHomeComponent, PassengerLoginComponent, PassengerSignupComponent, PassengerNavbarComponent, PassengerViewBusComponent, PassengerBookTicketsComponent, PassengerViewTicketsComponent, PassengerViewProfileComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ]
})
export class PassengerModule { }
