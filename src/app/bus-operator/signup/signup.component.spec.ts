import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusSignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: BusSignupComponent;
  let fixture: ComponentFixture<BusSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
