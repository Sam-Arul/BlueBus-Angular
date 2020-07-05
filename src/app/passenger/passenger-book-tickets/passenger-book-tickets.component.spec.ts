import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerBookTicketsComponent } from './passenger-book-tickets.component';

describe('PassengerBookTicketsComponent', () => {
  let component: PassengerBookTicketsComponent;
  let fixture: ComponentFixture<PassengerBookTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengerBookTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerBookTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
