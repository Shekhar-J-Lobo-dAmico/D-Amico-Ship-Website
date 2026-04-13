import { TestBed } from '@angular/core/testing';

import { OurTeamServices } from './our-team-services';

describe('OurTeamServices', () => {
  let service: OurTeamServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OurTeamServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
