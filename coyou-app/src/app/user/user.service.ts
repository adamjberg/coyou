import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from 'models';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  public signUp(user: IUser) {
    return this.http.post('/api/users', user).toPromise();
  }

  public async logIn(user: IUser) {
    const { token } = await this.http.post('/api/users/login', user).toPromise() as { token: string };
    localStorage.setItem('token', token);
    return token;
  }

  public logOut() {
    localStorage.removeItem('token');
  }

  public isLoggedIn() {
    try {
      const token = localStorage.getItem('token');
      return !!token;
    } catch (err) {
      console.error(err);
    }
    return false;
  }

}
