import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PassengerService } from '../passenger.service';

@Component({
  selector: 'app-passenger-view-bus',
  templateUrl: './passenger-view-bus.component.html',
  styleUrls: ['./passenger-view-bus.component.css']
})
export class PassengerViewBusComponent implements OnInit {
source;
destination;
date;
busList;
noBus;
userName;
passengerEmail;
  constructor(private activatedRoute:ActivatedRoute,private passengerService:PassengerService,private router:Router) {
    this.source = this.activatedRoute.snapshot.params.source;
    console.log(this.source)
    this.destination = this.activatedRoute.snapshot.params.destination;
    this.date = this.activatedRoute.snapshot.params.date;
    this.userName = this.activatedRoute.snapshot.params.passengerUserName;
    this.passengerEmail = this.activatedRoute.snapshot.params.email;
    this.noBus = true;
    this.passengerService.searchBus(this.source,this.destination,this.date).subscribe((data)=>{
      console.log(data);
      if(data.message!='no buses found'){
        this.busList = data;
        this.noBus = false;
      }
    })
   }

  ngOnInit(): void {
  }
bookTickets(regNo){
  this.router.navigate(['/passenger/booktickets/'+ regNo + '/' + this.userName + '/' + this.passengerEmail]);
}
}
