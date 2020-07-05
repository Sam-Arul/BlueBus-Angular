import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PassengerLoginComponent } from './passenger/login/login.component';
import { HomeComponent } from './home/home.component';
import { PassengerSignupComponent } from './passenger/signup/signup.component';
import { BusLoginComponent} from './bus-operator/bus-login/login.component'
import { BusSignupComponent } from './bus-operator/signup/signup.component';
import {PassengerHomeComponent } from './passenger/home/home.component';
import { BusHomeComponent } from './bus-operator/bus-home/bus-home.component';
import { ViewBusesComponent } from './bus-operator/view-buses/view-buses.component';
import { AdminLoginComponent } from './admin/login/login.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { PendingBusesComponent } from './admin/pending-buses/pending-buses.component';
import { PassengerViewBusComponent } from './passenger/passenger-view-bus/passenger-view-bus.component';
import { PassengerBookTicketsComponent } from './passenger/passenger-book-tickets/passenger-book-tickets.component';
import { PassengerViewTicketsComponent } from './passenger/passenger-view-tickets/passenger-view-tickets.component';
import { PassengerViewProfileComponent } from './passenger/passenger-view-profile/passenger-view-profile.component';


const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:'passenger/login',
    component:PassengerLoginComponent
  },
  {
    path:'passenger/signup',
    component:PassengerSignupComponent
  },
  {
    path:'passenger/home/:email',
    component: PassengerHomeComponent
  },
  {
    path:'passenger/viewbus/:source/:destination/:date/:passengerUserName/:email',
    component: PassengerViewBusComponent
  },
  {
    path:'passenger/booktickets/:regNo/:userName/:email',
    component:PassengerBookTicketsComponent
  },
  {
    path:'passenger/viewtickets/:userEmail/:userName',
    component:PassengerViewTicketsComponent
  },
  {
    path:'passenger/viewprofile/:email',
    component:PassengerViewProfileComponent
  },
  {
    path:'busoperator/login',
    component: BusLoginComponent
  },
  {
    path:'busoperator/signup',
    component: BusSignupComponent
  },
  {
    path: 'busoperator/home/:email',
    component: BusHomeComponent
  },
  {
    path:'busoperator/view/:name',
    component:ViewBusesComponent
  },
  {
    path: 'admin/login',
    component:AdminLoginComponent
  },
  {
    path: 'admin/home/:email',
    component:AdminHomeComponent
  },
  {
    path:'admin/pendingbus',
    component:PendingBusesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
