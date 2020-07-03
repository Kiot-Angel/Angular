import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { MyserviceService } from './myservice.service';

describe('MyserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, HttpClientModule],
    providers: [MyserviceService]
  }));

  it('should be created', () => {
    const service: MyserviceService = TestBed.get(MyserviceService);
    expect(service).toBeTruthy();
  });
});
