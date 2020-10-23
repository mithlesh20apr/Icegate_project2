import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonDashboardBannerComponent } from './common-dashboard-banner.component';

describe('CommonDashboardBannerComponent', () => {
  let component: CommonDashboardBannerComponent;
  let fixture: ComponentFixture<CommonDashboardBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonDashboardBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonDashboardBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
