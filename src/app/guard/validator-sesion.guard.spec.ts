import { TestBed } from '@angular/core/testing';

import { ValidatorSesionGuard } from './validator-sesion.guard';

describe('ValidatorSesionGuard', () => {
  let guard: ValidatorSesionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidatorSesionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
