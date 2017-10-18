import { UserService } from './user/user.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.userService.isLoggedIn();
  }
}
