import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingBusesComponent } from './pending-buses.component';

describe('PendingBusesComponent', () => {
  let component: PendingBusesComponent;
  let fixture: ComponentFixture<PendingBusesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingBusesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingBusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
