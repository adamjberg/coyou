import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from 'models';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  public async signUp(user: IUser) {
    const { token } = await this.http.post<{ token: string }>('/api/users', user).toPromise();
    localStorage.setItem('token', token);
    return token;
  }

  public async logIn(user: IUser) {
    const { token } = await this.http.post<{ token: string }>('/api/users/login', user).toPromise();
    localStorage.setItem('token', token);
    return token;
  }

  public logOut() {
    localStorage.removeItem('token');
  }

  public self() {
    return this.http.get<IUser>(`/api/users/${this.getToken()}`).toPromise();
  }

  public getToken() {
    return localStorage.getItem('token');
  }

  public isLoggedIn() {
    try {
      const token = this.getToken();
      return !!token;
    } catch (err) {
      console.error(err);
    }
    return false;
  }

}
