import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerLoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: PassengerLoginComponent;
  let fixture: ComponentFixture<PassengerLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengerLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
