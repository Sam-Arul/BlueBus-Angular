import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusLoginComponent } from './bus-login/login.component';
import { BusSignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { BusNavbarComponent } from './bus-navbar/bus-navbar.component';
import { BusHomeComponent } from './bus-home/bus-home.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewBusesComponent } from './view-buses/view-buses.component';



@NgModule({
  declarations: [BusLoginComponent, BusSignupComponent, BusNavbarComponent, BusHomeComponent, ViewBusesComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ]
})
export class BusOperatorModule { }
