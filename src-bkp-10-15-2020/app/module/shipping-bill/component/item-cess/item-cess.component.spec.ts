import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCessComponent } from './item-cess.component';

describe('ItemCessComponent', () => {
  let component: ItemCessComponent;
  let fixture: ComponentFixture<ItemCessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemCessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
