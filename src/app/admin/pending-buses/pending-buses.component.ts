import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pending-buses',
  templateUrl: './pending-buses.component.html',
  styleUrls: ['./pending-buses.component.css']
})
export class PendingBusesComponent implements OnInit {
busList;
hasBusApproved;
busRegNo;
adminEmail;
hasBusRejected;
  constructor(private adminService:AdminService,private route:ActivatedRoute) {
    this.hasBusApproved = false;
    this.hasBusRejected = false;
    this.adminService.listPendingBuses().subscribe((data)=>{
      console.log(data);
      if(data.message!='no pending approval'){
        this.busList = data;
      }
    })
   }

  ngOnInit(): void {
  }
  approveBus(busRegNo){
    this.adminService.actionPendingBuses(this.busList,busRegNo,'approved').subscribe((data)=>{
      console.log(data);
      console.log(busRegNo);
      if(data.message=='status updated'){
        this.hasBusApproved = true;
      }
    })
  }
  rejectBus(busRegNo){
    this.adminService.deleteRejectedBus(busRegNo).subscribe((data)=>{
      console.log(data)
      if(data.message=='bus deleted'){
        this.hasBusRejected = true;
      }
    })
  }
}
