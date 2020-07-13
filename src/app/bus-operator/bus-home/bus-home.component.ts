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
selectedSource:any
selectedDestination:any
source = ['Chennai','Madurai','Salem'];
destination = ['Chennai','Madurai','Salem'];
index;
dd;
mm;
yyyy;
today;
  constructor(private busoperatorService:BusOperatorService,private route:ActivatedRoute) {
    this.busOperatorEmail = this.route.snapshot.params.email;
    console.log(this.busOperatorEmail)
    this.isBusAddedSuccessfully = false;
    this.busoperatorService.getOperatorName(this.busOperatorEmail).subscribe((data)=>{
      console.log(data);
      this.busOperatorName = data.name;
      console.log(this.busOperatorName);
      var today = new Date();
 this.dd = today.getDate();
 this.mm = today.getMonth()+1; //January is 0!
 this.yyyy = today.getFullYear();
 if(this.dd<10){
        this.dd='0'+this.dd
    } 
    if(this.mm<10){
        this.mm='0'+this.mm
    } 

this.today = this.yyyy+'-'+this.mm+'-'+this.dd;
document.getElementById("datefield").setAttribute("min", this.today);
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

test(){
  this.destination = ['Chennai','Madurai','Salem'];
  this.index = this.destination.indexOf(this.selectedSource)
  this.destination.splice(this.index,1);

}
}
