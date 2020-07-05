import { Component, OnInit } from '@angular/core';
import { PassengerService } from '../passenger.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class PassengerHomeComponent implements OnInit {
passengerEmail;
passengerUserName;
bookTicketsForm;
  constructor(private passengerService:PassengerService,private activatedRoute:ActivatedRoute,private router:Router) {
    this.passengerEmail = this.activatedRoute.snapshot.params.email;
    console.log(this.passengerEmail);
    this.passengerService.getUserName(this.passengerEmail).subscribe((data)=>{
      this.passengerUserName = data;
      console.log(this.passengerUserName.name);
    })

      this.bookTicketsForm = new FormGroup({
        source:new FormControl('',Validators.required),
        destination: new FormControl('',Validators.required),
        date: new FormControl('',Validators.required)
      })
  }

  ngOnInit(): void {
  }
searchBus(){
  console.log("hello");
  console.log(this.bookTicketsForm.value.date);
  if(this.bookTicketsForm.valid){
    console.log(this.bookTicketsForm.value.date);
    this.router.navigate(['/passenger/viewbus/'+this.bookTicketsForm.value.source + '/' + this.bookTicketsForm.value.destination + '/' + this.bookTicketsForm.value.date +'/' + this.passengerUserName.name + '/' + this.passengerEmail]);
  }
}
}
