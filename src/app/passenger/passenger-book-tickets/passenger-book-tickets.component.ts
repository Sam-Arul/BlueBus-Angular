import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PassengerService } from '../passenger.service';

@Component({
  selector: 'app-passenger-book-tickets',
  templateUrl: './passenger-book-tickets.component.html',
  styleUrls: ['./passenger-book-tickets.component.css']
})
export class PassengerBookTicketsComponent implements OnInit {
busRegNo;
userName;
passengerEmail;
busDetails;
isSelected:Array<boolean> = [];
selected:Array<number> = [];
seatList:Array<any>;
ticketDetails;
hasBookedTickets;
dummySeatList:Array<any> = [];
  constructor(private activatedRoute: ActivatedRoute,private passengerService:PassengerService) {
 this.busRegNo = this.activatedRoute.snapshot.params.regNo;
 this.userName = this.activatedRoute.snapshot.params.userName;
this.passengerEmail = this.activatedRoute.snapshot.params.email;
console.log(this.passengerEmail);
this.hasBookedTickets = false;
 this.passengerService.getBusDetails(this.busRegNo).subscribe((data)=>{
  this.busDetails = data;
  console.log(this.busDetails);
  this.seatList = this.busDetails.tickets;
  for(let i=0;i<this.seatList.length;i++){
    this.dummySeatList.push(this.seatList[i]);
  }
  console.log(this.seatList);
  for(let i=0;i<this.seatList.length;i++){
    this.isSelected.push(false);
    
  }
  
 })
 
   }

  ngOnInit(): void {
  }
   path1 = "/assets/blue.png";
   path2 = "/assets/green.png";
   temp;
   
change(seat){
  
  alert("seat selected");
  if(this.isSelected[parseInt(seat)-1]==false){
    (document.getElementById("image"+seat) as HTMLImageElement).src = this.path2;
    this.isSelected[seat-1] = true;
    this.selected.push(seat);
  }
  else if(this.isSelected[parseInt(seat)-1]==true){
    (document.getElementById("image"+seat) as HTMLImageElement).src = this.path1;
    this.isSelected[seat-1] = false;
    let index = this.selected.indexOf(seat);
    this.selected.splice(index,1);
  }
   console.log(this.selected);
   
}
book(){
  if(this.selected.length!= 0){
    
      let result           = '';
      let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let charactersLength = characters.length;
      for ( var i = 0; i < 10; i++ ) {
         result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
   
    this.ticketDetails = {
      ticketId:result,
      regNo: this.busDetails.regNo,
      noOfTickets:this.selected.length,
      price:this.busDetails.price*this.selected.length,
      date:this.busDetails.date,
      time:this.busDetails.time,
      source:this.busDetails.source,
      destination:this.busDetails.destination,
      name:this.busDetails.name,
      driverName:this.busDetails.driverName,
      driverNo:this.busDetails.driverNo,
      busType:this.busDetails.busType,
      status:'upcoming',
      seatNo:this.selected
    }

    this.passengerService.bookTicket(this.ticketDetails,this.passengerEmail).subscribe((data)=>{
      console.log(data);
      this.hasBookedTickets = true;
    })
    for(let i=0;i<this.dummySeatList.length;i++){
      if(this.selected.includes(i+1)){
        this.dummySeatList[i].status = 'booked'
      }
    }
    let updatedTickets = {
      seatList:this.dummySeatList,
      bookedTickets:this.selected.length
    }
    console.log(this.seatList);
    console.log(this.dummySeatList);
    this.passengerService.changeBusTicket(updatedTickets,this.busRegNo).subscribe((data)=>{
      console.log(data);
    })
  }
  else{
    alert('please select seats')
  }
}
}
