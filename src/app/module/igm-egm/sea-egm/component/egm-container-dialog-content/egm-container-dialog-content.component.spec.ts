import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgmContainerDialogContentComponent } from './egm-container-dialog-content.component';

describe('EgmContainerDialogContentComponent', () => {
  let component: EgmContainerDialogContentComponent;
  let fixture: ComponentFixture<EgmContainerDialogContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgmContainerDialogContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgmContainerDialogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
