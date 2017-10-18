import { TestBed, inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { OrganizationService } from './organization.service';

describe('OrganizationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        OrganizationService,
        {
          provide: HttpClient,
          useValue: {}
        }]
    });
  });

  it('should be created', inject([OrganizationService], (service: OrganizationService) => {
    expect(service).toBeTruthy();
  }));
});
