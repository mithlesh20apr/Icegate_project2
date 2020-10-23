import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonDashboardServiceComponent } from './common-dashboard-service.component';

describe('CommonDashboardServiceComponent', () => {
  let component: CommonDashboardServiceComponent;
  let fixture: ComponentFixture<CommonDashboardServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonDashboardServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonDashboardServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
