import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerNavbarComponent } from './passenger-navbar.component';

describe('PassengerNavbarComponent', () => {
  let component: PassengerNavbarComponent;
  let fixture: ComponentFixture<PassengerNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengerNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
