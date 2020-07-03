import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuardGuard } from './auth-guard.guard';
import {RouterTestingModule} from '@angular/router/testing';

describe('AuthGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuardGuard],
      imports: [ RouterTestingModule]
    });
  });

  it('should ...', inject([AuthGuardGuard], (guard: AuthGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
