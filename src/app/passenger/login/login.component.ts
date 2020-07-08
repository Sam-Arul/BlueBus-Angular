import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { PassengerService } from '../passenger.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class PassengerLoginComponent implements OnInit {
passengerLoginForm;
  constructor(private passengerService:PassengerService,private router:Router) {
    this.passengerLoginForm = new FormGroup({
      email : new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required])
    })
   }

  ngOnInit(): void {
  }
sendPassengerDetails(){
  if(this.passengerLoginForm.valid){
    this.passengerService.passengerLogin(this.passengerLoginForm.value).subscribe((data)=>{
      console.log(data);
      if(data.message!='login failed'){
        this.router.navigate(['/passenger/home/'+ this.passengerLoginForm.value.email])
      }
      else{
        alert("Email or Password is Incorrect")
      }
    })
    
  }
  else{
    alert("Enter your Credentials");
  }
}
}
