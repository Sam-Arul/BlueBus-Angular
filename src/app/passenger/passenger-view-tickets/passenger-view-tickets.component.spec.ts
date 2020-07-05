import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerViewTicketsComponent } from './passenger-view-tickets.component';

describe('PassengerViewTicketsComponent', () => {
  let component: PassengerViewTicketsComponent;
  let fixture: ComponentFixture<PassengerViewTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengerViewTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerViewTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
