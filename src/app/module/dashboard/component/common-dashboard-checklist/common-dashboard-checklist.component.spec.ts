import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonDashboardChecklistComponent } from './common-dashboard-checklist.component';

describe('CommonDashboardChecklistComponent', () => {
  let component: CommonDashboardChecklistComponent;
  let fixture: ComponentFixture<CommonDashboardChecklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonDashboardChecklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonDashboardChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
