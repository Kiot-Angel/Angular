import { TestBed } from '@angular/core/testing';

import { ProductServiceService } from './product-service.service';
import {HttpClientModule} from '@angular/common/http';

describe('ProductServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule]
  }));

  it('should be created', () => {
    const service: ProductServiceService = TestBed.get(ProductServiceService);
    expect(service).toBeTruthy();
  });
});
