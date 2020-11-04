import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlineIgmComponent } from './airline-igm.component';

describe('AirlineIgmComponent', () => {
  let component: AirlineIgmComponent;
  let fixture: ComponentFixture<AirlineIgmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirlineIgmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirlineIgmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
