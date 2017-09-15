import { SignupComponent } from '../signup/signup.component';
import { LoginComponent } from '../login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

export const LoginRoute = { path: 'user/login', component: LoginComponent };
export const SignupRoute = { path: 'user/signup', component: SignupComponent };

const usersRoutes: Routes = [
  LoginRoute,
  SignupRoute
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(usersRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class UserRoutingModule { }
