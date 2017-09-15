import { UserService } from '../user.service';
import { IUser } from 'models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user: IUser = {};

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  async onSubmit() {
    try {
      await this.userService.signUp(this.user);
    }
    catch (err) { }
  }

}
