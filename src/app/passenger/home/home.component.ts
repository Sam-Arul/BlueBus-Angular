import { Component, OnInit } from '@angular/core';
import { PassengerService } from '../passenger.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class PassengerHomeComponent implements OnInit {
  passengerEmail;
  passengerUserName;
  bookTicketsForm;
  selectedSource: any
  selectedDestination: any
  source = ['Chennai', 'Madurai', 'Salem'];
  destination = ['Chennai', 'Madurai', 'Salem'];
  index;
  dd;
  mm;
  yyyy;
  today;
  defaultSource = "Choose Source";
  defaultDestination = "Choose Destination";
  constructor(private passengerService: PassengerService, private activatedRoute: ActivatedRoute, private router: Router) {
   
if(sessionStorage.getItem("email")==null){
  this.router.navigate(['/passenger/login/'])
}
   
    
  
}

ngOnInit(): void {

  this.passengerEmail = this.activatedRoute.snapshot.params.email;
  console.log(this.passengerEmail);
  this.passengerService.getUserName(this.passengerEmail).subscribe((data) => {
    this.passengerUserName = data;
    console.log(this.passengerUserName.name);
    var today = new Date();
  this.dd = today.getDate();
  this.mm = today.getMonth() + 1;
  this.yyyy = today.getFullYear();
  if (this.dd < 10) {
    this.dd = '0' + this.dd
  }
  if (this.mm < 10) {
    this.mm = '0' + this.mm
  }

  this.today = this.yyyy + '-' + this.mm + '-' + this.dd;
  document.getElementById("datefield").setAttribute("min", this.today);
  })

  this.bookTicketsForm = new FormGroup({
    source: new FormControl('', Validators.required),
    destination: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required)
  })

}
searchBus(){
  console.log("hello");
  console.log(this.bookTicketsForm.value.date);
  if (this.bookTicketsForm.valid) {
    console.log(this.bookTicketsForm.value.date);
    this.router.navigate(['/passenger/viewbus/' + this.bookTicketsForm.value.source + '/' + this.bookTicketsForm.value.destination + '/' + this.bookTicketsForm.value.date + '/' + this.passengerUserName.name + '/' + this.passengerEmail]);
  }
}

test(){
  this.destination = ['Chennai', 'Madurai', 'Salem'];
  this.index = this.destination.indexOf(this.selectedSource)
  this.destination.splice(this.index, 1);

}
}
