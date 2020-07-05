import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PassengerService } from '../passenger.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class PassengerSignupComponent implements OnInit {
passengerSignUpForm;
  constructor(private passengeService:PassengerService,private router:Router) {
    this.passengerSignUpForm = new FormGroup({
      name: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',Validators.required),
      phone: new FormControl('',Validators.required)
    })
   }

  ngOnInit(): void {
  }
  sendPassengerSignUpDetails(){
    if(this.passengerSignUpForm.valid){
      alert('Signup success')
      console.log(this.passengerSignUpForm.value);
      this.passengeService.passengerSignup(this.passengerSignUpForm.value).subscribe((data)=>{
          console.log(data);
          if(data.message!='user already exists')
          {
            this.router.navigate(['/passenger/home/'+this.passengerSignUpForm.value.email])
          }
      })
    }
  }
}
