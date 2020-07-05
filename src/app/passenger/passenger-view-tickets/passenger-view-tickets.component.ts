;import { Component, OnInit } from '@angular/core';
import { PassengerService } from '../passenger.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-passenger-view-tickets',
  templateUrl: './passenger-view-tickets.component.html',
  styleUrls: ['./passenger-view-tickets.component.css']
})
export class PassengerViewTicketsComponent implements OnInit {
userEmail;
userName;
ticketList;
hasTicketCancelled;
  constructor(private passengerService:PassengerService,private activatedRoute:ActivatedRoute) {
    this.userEmail = this.activatedRoute.snapshot.params.userEmail;
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.passengerService.viewTickets(this.userEmail).subscribe((data)=>{
this.ticketList = data.tickets;
console.log(data);
console.log(this.ticketList)
    })
    this.hasTicketCancelled = false;
   }

  ngOnInit(): void {
  }
cancelTicket(id,seat,regNo){
  console.log(id);
  console.log(seat);
  this.passengerService.cancelTicket(this.ticketList,this.userEmail,id).subscribe((data)=>{
    console.log(data);
    this.hasTicketCancelled = true;
  })
  this.passengerService.cancelBusTicket(seat,regNo).subscribe((data)=>{
    console.log(data);
  })
}
}
