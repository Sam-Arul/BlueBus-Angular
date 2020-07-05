import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-passenger-navbar',
  templateUrl: './passenger-navbar.component.html',
  styleUrls: ['./passenger-navbar.component.css']
})
export class PassengerNavbarComponent implements OnInit {
@Input() userName;
@Input() userEmail;
  constructor() { }

  ngOnInit(): void {
  }

}
