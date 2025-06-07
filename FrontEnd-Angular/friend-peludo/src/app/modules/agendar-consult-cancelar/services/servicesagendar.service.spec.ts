import { TestBed } from '@angular/core/testing';

import { ServicesagendarService } from './servicesagendar.service';

describe('ServicesagendarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicesagendarService = TestBed.get(ServicesagendarService);
    expect(service).toBeTruthy();
  });
});
