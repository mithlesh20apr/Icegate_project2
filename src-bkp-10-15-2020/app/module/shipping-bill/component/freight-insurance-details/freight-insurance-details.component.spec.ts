import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreightInsuranceDetailsComponent } from './freight-insurance-details.component';

describe('FreightInsuranceDetailsComponent', () => {
  let component: FreightInsuranceDetailsComponent;
  let fixture: ComponentFixture<FreightInsuranceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreightInsuranceDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreightInsuranceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
