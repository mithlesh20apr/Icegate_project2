import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonDashboardProfileComponent } from './common-dashboard-profile.component';

describe('CommonDashboardProfileComponent', () => {
  let component: CommonDashboardProfileComponent;
  let fixture: ComponentFixture<CommonDashboardProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonDashboardProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonDashboardProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
