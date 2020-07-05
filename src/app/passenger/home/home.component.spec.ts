import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerHomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: PassengerHomeComponent;
  let fixture: ComponentFixture<PassengerHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengerHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
