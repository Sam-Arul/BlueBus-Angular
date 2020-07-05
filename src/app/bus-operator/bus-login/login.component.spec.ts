import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusLoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: BusLoginComponent;
  let fixture: ComponentFixture<BusLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
