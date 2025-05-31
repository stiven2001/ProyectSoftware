import { TestBed } from '@angular/core/testing';

import { ServiceHomePublicService } from './service-home-public.service';

describe('ServiceHomePublicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceHomePublicService = TestBed.get(ServiceHomePublicService);
    expect(service).toBeTruthy();
  });
});
