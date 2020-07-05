import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms'
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class AdminLoginComponent implements OnInit {
adminLoginForm;
  constructor(private adminService:AdminService,private router:Router) { 
    this.adminLoginForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',Validators.required)
    })
  }
  ngOnInit(): void {
  }
sendAdminDetails(){
  if(this.adminLoginForm.valid){
    this.adminService.adminLogin(this.adminLoginForm.value).subscribe((data)=>{
      console.log(data);
      if(data.message!='login failed'){
        this.router.navigate(['/admin/home/' + this.adminLoginForm.value.email]);
      }
    })
  }

}
}
