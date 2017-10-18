import { DashboardRoute } from '../../dashboard/dashboard-routing/dashboard-routing.module';
import { UserService } from '../user.service';
import { IUser } from 'models';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public user: IUser = {};
  public error: Error;

  constructor(private router: Router, private userService: UserService) { }

  public async onSubmit() {
    try {
      await this.userService.logIn(this.user);
      this.router.navigate([DashboardRoute.path]);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        const httpError = err as HttpErrorResponse;
        this.error = JSON.parse(httpError.error);
      } else {
        this.error = err;
      }
    }
  }

}
