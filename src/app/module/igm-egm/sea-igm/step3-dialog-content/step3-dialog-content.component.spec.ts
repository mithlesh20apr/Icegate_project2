import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step3DialogContentComponent } from './step3-dialog-content.component';

describe('Step3DialogContentComponent', () => {
  let component: Step3DialogContentComponent;
  let fixture: ComponentFixture<Step3DialogContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step3DialogContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step3DialogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
