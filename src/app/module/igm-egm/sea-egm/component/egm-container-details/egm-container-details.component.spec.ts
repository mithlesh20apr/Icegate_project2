import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgmContainerDetailsComponent } from './egm-container-details.component';

describe('EgmContainerDetailsComponent', () => {
  let component: EgmContainerDetailsComponent;
  let fixture: ComponentFixture<EgmContainerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgmContainerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgmContainerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
