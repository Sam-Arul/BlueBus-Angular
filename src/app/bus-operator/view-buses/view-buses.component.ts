import { Component, OnInit } from '@angular/core';
import { BusOperatorService } from '../bus-operator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-buses',
  templateUrl: './view-buses.component.html',
  styleUrls: ['./view-buses.component.css']
})
export class ViewBusesComponent implements OnInit {
busOperatorName;
busCollections;
  constructor(private busOperatorService: BusOperatorService,private activatedRoute:ActivatedRoute) {
    this.busOperatorName = this.activatedRoute.snapshot.params.name;
    this.busOperatorService.viewBuses(this.busOperatorName).subscribe((data)=>{
      console.log(data);
      if(data.message!='No Bus Found'){
        this.busCollections = data;
        console.log(this.busCollections);
      }
    })
   }

  ngOnInit(): void {
  }

}
