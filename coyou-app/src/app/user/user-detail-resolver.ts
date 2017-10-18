import { UserService } from './user.service';
import { IUser } from 'models';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Injectable } from '@angular/core';
import {
    Router, Resolve,
    ActivatedRouteSnapshot
} from '@angular/router';

@Injectable()
export class UserDetailResolver implements Resolve<IUser> {
    constructor(private userService: UserService, private router: Router) { }

    async resolve() {
        try {
            return this.userService.self();
        } catch (err) {
            this.router.navigate(['/user/login']);
        }
        return null;
    }
}
