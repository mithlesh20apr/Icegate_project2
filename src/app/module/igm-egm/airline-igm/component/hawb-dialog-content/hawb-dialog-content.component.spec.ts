import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HawbDialogContentComponent } from './hawb-dialog-content.component';

describe('HawbDialogContentComponent', () => {
  let component: HawbDialogContentComponent;
  let fixture: ComponentFixture<HawbDialogContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HawbDialogContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HawbDialogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
