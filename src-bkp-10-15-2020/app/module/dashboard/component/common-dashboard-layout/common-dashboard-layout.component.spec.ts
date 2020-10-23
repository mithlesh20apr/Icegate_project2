import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonDashboardLayoutComponent } from './common-dashboard-layout.component';

describe('CommonDashboardLayoutComponent', () => {
  let component: CommonDashboardLayoutComponent;
  let fixture: ComponentFixture<CommonDashboardLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonDashboardLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonDashboardLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
