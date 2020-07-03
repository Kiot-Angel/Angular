import { TestBed } from '@angular/core/testing';

import { MyserviceService } from './myservice.service';
import {HttpClientModule} from '@angular/common/http';

describe('MyserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule]
  }));

  it('should be created', () => {
    const service: MyserviceService = TestBed.get(MyserviceService);
    expect(service).toBeTruthy();
  });
});
