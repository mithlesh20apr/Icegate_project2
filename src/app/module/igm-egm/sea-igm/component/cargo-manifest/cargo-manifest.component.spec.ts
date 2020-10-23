import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoManifestComponent } from './cargo-manifest.component';

describe('CargoManifestComponent', () => {
  let component: CargoManifestComponent;
  let fixture: ComponentFixture<CargoManifestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargoManifestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargoManifestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
