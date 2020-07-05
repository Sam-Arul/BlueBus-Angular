import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms'
import { BusOperatorService } from '../bus-operator.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class BusSignupComponent implements OnInit {

  busOperatorSignUpForm;
  constructor(private busoperatorService:BusOperatorService,private router:Router) {
    this.busOperatorSignUpForm = new FormGroup({
      email : new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required]),
      name: new FormControl('',Validators.required),
      phone: new FormControl('',Validators.required)
    })
   }

  ngOnInit(): void {
  }
sendbusOperatorSignUpDetails(){
  if(this.busOperatorSignUpForm.valid){
    alert('success');
    this.busoperatorService.operatorSignup(this.busOperatorSignUpForm.value).subscribe((data)=>{
      console.log(data);
      if(data.message!='bus operator already exists'){
        this.router.navigate(['/busoperator/home/'+ this.busOperatorSignUpForm.value.email])
      }
    })
    
  }
}

}
