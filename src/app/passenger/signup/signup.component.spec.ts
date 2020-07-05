import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerSignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: PassengerSignupComponent;
  let fixture: ComponentFixture<PassengerSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengerSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
