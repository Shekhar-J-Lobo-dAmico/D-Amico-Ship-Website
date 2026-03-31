import { TestBed } from '@angular/core/testing';

import { StartPgServices } from './start-pg-services';

describe('StartPgServices', () => {
  let service: StartPgServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StartPgServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
