import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerViewProfileComponent } from './passenger-view-profile.component';

describe('PassengerViewProfileComponent', () => {
  let component: PassengerViewProfileComponent;
  let fixture: ComponentFixture<PassengerViewProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengerViewProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerViewProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
