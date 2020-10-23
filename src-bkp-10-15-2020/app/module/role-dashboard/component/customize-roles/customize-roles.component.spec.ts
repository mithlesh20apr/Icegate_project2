import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeRolesComponent } from './customize-roles.component';

describe('CustomizeRolesComponent', () => {
  let component: CustomizeRolesComponent;
  let fixture: ComponentFixture<CustomizeRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizeRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizeRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
