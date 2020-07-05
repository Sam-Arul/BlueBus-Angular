import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusNavbarComponent } from './bus-navbar.component';

describe('BusNavbarComponent', () => {
  let component: BusNavbarComponent;
  let fixture: ComponentFixture<BusNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
