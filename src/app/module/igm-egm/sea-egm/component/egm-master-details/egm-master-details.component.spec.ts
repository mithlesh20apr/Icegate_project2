import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgmMasterDetailsComponent } from './egm-master-details.component';

describe('EgmMasterDetailsComponent', () => {
  let component: EgmMasterDetailsComponent;
  let fixture: ComponentFixture<EgmMasterDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgmMasterDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgmMasterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
