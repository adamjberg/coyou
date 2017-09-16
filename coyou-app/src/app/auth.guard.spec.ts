import { UserService } from './user/user.service';
import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';

const UserServiceStub = {

};

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        {
          provide: UserService, useValue: UserServiceStub
        }
      ]
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
