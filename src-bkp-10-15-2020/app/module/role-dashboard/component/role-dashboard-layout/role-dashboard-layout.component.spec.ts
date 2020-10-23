import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleDashboardLayoutComponent } from './role-dashboard-layout.component';

describe('RoleDashboardLayoutComponent', () => {
  let component: RoleDashboardLayoutComponent;
  let fixture: ComponentFixture<RoleDashboardLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleDashboardLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleDashboardLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
