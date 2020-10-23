import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonDashboardTicketManagementComponent } from './common-dashboard-ticket-management.component';

describe('CommonDashboardTicketManagementComponent', () => {
  let component: CommonDashboardTicketManagementComponent;
  let fixture: ComponentFixture<CommonDashboardTicketManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonDashboardTicketManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonDashboardTicketManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
