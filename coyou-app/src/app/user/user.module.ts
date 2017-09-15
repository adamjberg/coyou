import { UserService } from './user.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserRoutingModule } from './user-routing/user-routing.module';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';

console.log(SignupComponent);
console.log(LoginComponent);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule,
  ],
  declarations: [LoginComponent, SignupComponent],
  providers: [UserService]
})
export class UserModule { }
