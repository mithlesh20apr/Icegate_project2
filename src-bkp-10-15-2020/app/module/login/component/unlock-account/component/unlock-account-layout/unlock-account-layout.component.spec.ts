import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlockAccountLayoutComponent } from './unlock-account-layout.component';

describe('UnlockAccountLayoutComponent', () => {
  let component: UnlockAccountLayoutComponent;
  let fixture: ComponentFixture<UnlockAccountLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnlockAccountLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnlockAccountLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
