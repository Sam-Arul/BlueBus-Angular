import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'
import { BusOperatorService } from '../bus-operator.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class BusLoginComponent implements OnInit {
  busOperatorLoginForm;
  constructor(private busoperatorService:BusOperatorService,private router:Router) {
    this.busOperatorLoginForm = new FormGroup({
      email : new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required])
    })
   }

  ngOnInit(): void {
  }
sendbusOperatorDetails(){
  if(this.busOperatorLoginForm.valid){
    alert('success');
    this.busoperatorService.operatorLogin(this.busOperatorLoginForm.value).subscribe((data)=>{
      console.log(data);
      if(data.message!='login failed'){
        this.router.navigate(['/busoperator/home/'+ this.busOperatorLoginForm.value.email])
      }
    })
    
  }
}

}
