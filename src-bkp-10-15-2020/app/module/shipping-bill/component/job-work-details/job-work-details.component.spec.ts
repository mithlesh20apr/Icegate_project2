import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobWorkDetailsComponent } from './job-work-details.component';

describe('JobWorkDetailsComponent', () => {
  let component: JobWorkDetailsComponent;
  let fixture: ComponentFixture<JobWorkDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobWorkDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobWorkDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
