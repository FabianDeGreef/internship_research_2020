import { TestBed } from '@angular/core/testing';

import { CheckCartItemService } from './check-cart-item.service';

describe('CheckCartItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckCartItemService = TestBed.get(CheckCartItemService);
    expect(service).toBeTruthy();
  });
});
