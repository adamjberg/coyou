import { HttpClient } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  describe('unit', () => {
    it('should not load testbed', () => {

    });
  });

  describe('testbed', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          UserService,
          {
            provide: HttpClient,
            useValue: {}
          }
        ]
      });
    });

    it('should be created', inject([UserService], (service: UserService) => {
      expect(service).toBeTruthy();
    }));
  });
});
