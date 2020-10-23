import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonDashboardRegistrationComponent } from './common-dashboard-registration.component';

describe('CommonDashboardRegistrationComponent', () => {
  let component: CommonDashboardRegistrationComponent;
  let fixture: ComponentFixture<CommonDashboardRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonDashboardRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonDashboardRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
