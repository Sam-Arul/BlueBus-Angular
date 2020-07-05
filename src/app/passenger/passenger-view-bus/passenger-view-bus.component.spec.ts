import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerViewBusComponent } from './passenger-view-bus.component';

describe('PassengerViewBusComponent', () => {
  let component: PassengerViewBusComponent;
  let fixture: ComponentFixture<PassengerViewBusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengerViewBusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerViewBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
