import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
adminEmail;
operatorList;
hasOperatorApproved;
hasOperatorRejected;
  constructor(private adminService:AdminService, private route:ActivatedRoute) {
    this.hasOperatorApproved = false;
    this.hasOperatorRejected = false;
this.adminEmail = this.route.snapshot.params.email;
this.adminService.listPendingOperator().subscribe((data)=>{
this.operatorList = data;
console.log(this.operatorList);
})
   }

  ngOnInit(): void {
  }
approveOperator(busOperatorEmail){
  this.adminService.actionPendingOperator(this.adminEmail,busOperatorEmail,'approved').subscribe((data)=>{
    console.log(data);
    if(data.message=='status updated'){
      this.hasOperatorApproved = true;
    }
  })
}
rejectOperator(busOperatorEmail,name){
  this.adminService.deleteRejectedOperator(busOperatorEmail,name).subscribe((data)=>{
    console.log(data);
    if(data.message=='operator deleted'){
      this.hasOperatorRejected = true;
    }
  })
}
}
