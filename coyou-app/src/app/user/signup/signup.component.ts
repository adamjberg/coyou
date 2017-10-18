import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { IUser } from 'models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user: IUser = {};

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  async onSubmit() {
    try {
      await this.userService.signUp(this.user);
      this.router.navigate(['/dashboard']);
    } catch (err) { }
  }

}
