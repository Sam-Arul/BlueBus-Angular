import { Component, OnInit } from '@angular/core';
import { BusOperatorService } from '../bus-operator.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-bus-home',
  templateUrl: './bus-home.component.html',
  styleUrls: ['./bus-home.component.css']
})
export class BusHomeComponent implements OnInit {
busOperatorName;
busOperatorEmail;
addBusForm;
isBusAddedSuccessfully;
  constructor(private busoperatorService:BusOperatorService,private route:ActivatedRoute) {
    this.busOperatorEmail = this.route.snapshot.params.email;
    console.log(this.busOperatorEmail)
    this.isBusAddedSuccessfully = false;
    this.busoperatorService.getOperatorName(this.busOperatorEmail).subscribe((data)=>{
      console.log(data);
      this.busOperatorName = data.name;
      console.log(this.busOperatorName);
    }) 
    
    this.addBusForm = new FormGroup({
      name: new FormControl('',Validators.required),
      source: new FormControl('',Validators.required),
      destination: new FormControl('',Validators.required),
      date: new FormControl('',Validators.required),
      time: new FormControl('',Validators.required),
      totalTickets: new FormControl('',Validators.required),
      price: new FormControl('',Validators.required),
      busType: new FormControl('',Validators.required),
      regNo: new FormControl('',Validators.required),
      driverNo: new FormControl('',Validators.required),
      driverName: new FormControl('',Validators.required)
    })
  }

  ngOnInit(): void {
  }
addBus(){
  if(this.addBusForm.valid){
    this.busoperatorService.addBus(this.addBusForm.value).subscribe((data)=>{
      console.log(data);
      if(data.message!= 'bus already exists'){
        this.isBusAddedSuccessfully = true;
        this.addBusForm.setValue(null);
      }
    })
  }
}
}
