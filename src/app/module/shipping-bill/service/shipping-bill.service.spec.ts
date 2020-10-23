import { TestBed } from '@angular/core/testing';

import { ShippingBillService } from './shipping-bill.service';

describe('ShippingBillService', () => {
  let service: ShippingBillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShippingBillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
