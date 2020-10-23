import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerDialogContentComponent } from './container-dialog-content.component';

describe('ContainerDialogContentComponent', () => {
  let component: ContainerDialogContentComponent;
  let fixture: ComponentFixture<ContainerDialogContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerDialogContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerDialogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
