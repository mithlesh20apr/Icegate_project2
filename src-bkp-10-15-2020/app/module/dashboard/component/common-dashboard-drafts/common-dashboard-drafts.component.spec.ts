import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonDashboardDraftsComponent } from './common-dashboard-drafts.component';

describe('CommonDashboardDraftsComponent', () => {
  let component: CommonDashboardDraftsComponent;
  let fixture: ComponentFixture<CommonDashboardDraftsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonDashboardDraftsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonDashboardDraftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
