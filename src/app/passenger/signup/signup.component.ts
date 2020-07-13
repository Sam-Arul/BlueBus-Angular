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
confirmPassword:FormControl
flag;
  constructor(private passengeService:PassengerService,private router:Router) {
    this.passengerSignUpForm = new FormGroup({
      name: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',Validators.required),
      phone: new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)]))
    })
    this.confirmPassword = new FormControl('',Validators.required)
    this.flag = false;
    
   }

  ngOnInit(): void {
    
  }

  
  
  sendPassengerSignUpDetails(){
    if(this.confirmPassword.value==this.passengerSignUpForm.value.password){
      this.flag = true;
    }
    if(this.passengerSignUpForm.valid && this.flag){
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
    else{
      alert('Password and Confirm Password do not match');
    }
  }
}
