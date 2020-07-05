import { Component, OnInit } from '@angular/core';
import { PassengerService } from '../passenger.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-passenger-view-profile',
  templateUrl: './passenger-view-profile.component.html',
  styleUrls: ['./passenger-view-profile.component.css']
})
export class PassengerViewProfileComponent implements OnInit {
userEmail;
editForm;
passengerDetails;
hasEdit;
  constructor(private passengerService:PassengerService,private activatedRoute:ActivatedRoute) {
    this.userEmail = this.activatedRoute.snapshot.params.email;
    console.log(this.userEmail);
    this.hasEdit = false;
    this.editForm = new FormGroup({
      'name': new FormControl('',Validators.required),
      'email': new FormControl('',[Validators.email,Validators.required]),
      'phone': new FormControl('',Validators.required)
    })
    this.passengerService.viewProfile(this.userEmail).subscribe((data)=>{
      this.passengerDetails = {
        'name': data.name,
        'email':data.email,
        'phone': data.phone
      }
      console.log(this.passengerDetails,this.passengerDetails.name);

      this.editForm.setValue(this.passengerDetails)
    })
   }

  ngOnInit(): void {
  }
editPassengerDetails(){
  if(this.editForm.valid){
    this.passengerService.editProfile(this.editForm.value,this.userEmail).subscribe((data)=>{
      if(data.message=='Success'){
        this.hasEdit  = true;
      }
    })
  }
}
}
