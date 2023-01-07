import { TestBed } from '@angular/core/testing';

import { ProductDetailsComponentService } from './product-details.component.service';

describe('ProductDetailsComponentService', () => {
  let service: ProductDetailsComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductDetailsComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
