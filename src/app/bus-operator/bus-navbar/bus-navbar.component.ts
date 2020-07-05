import { Component, OnInit, Input } from '@angular/core';
import { BusOperatorService } from '../bus-operator.service';

@Component({
  selector: 'app-bus-navbar',
  templateUrl: './bus-navbar.component.html',
  styleUrls: ['./bus-navbar.component.css']
})
export class BusNavbarComponent implements OnInit {
@Input() userName;
  constructor() {
   }

  ngOnInit(): void {
  }

}
