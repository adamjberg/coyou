import { UserService } from '../../user/user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

interface NavLink {
  label: string;
  link: string;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {

  public navLinks: NavLink[];
  private routerSubscription: Subscription;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.routerSubscription = this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        this.updateLinks();
      }
    });
    this.updateLinks();
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }

  updateLinks() {
    const isLoggedIn = this.userService.isLoggedIn();
    if (isLoggedIn === false) {
      this.navLinks = [
        {
          label: 'Login',
          link: 'user/login'
        },
        {
          label: 'Sign Up',
          link: 'user/signup'
        }
      ];
    } else {
      this.navLinks = [
        {
          label: 'Dashboard',
          link: 'dashboard'
        },
        {
          label: 'Organizations',
          link: 'organizations/list'
        },
        {
          label: 'Logout',
          link: 'user/logout'
        }
      ];
    }
  }

}
