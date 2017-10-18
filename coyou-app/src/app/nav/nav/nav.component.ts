import { UserService } from '../../user/user.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

interface NavLink {
  label: string;
  link: string;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public navLinks: NavLink[];

  constructor(private user: UserService, private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        this.updateLinks();
      }
    });
    this.navLinks = [
      {
        label: 'Dashboard',
        link: 'dashboard'
      },
      {
        label: 'Login',
        link: 'user/login'
      }
    ];
  }

  updateLinks() {
    const isLoggedIn = this.user.isLoggedIn();
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
          label: 'Logout',
          link: 'user/logout'
        }
      ];
    }
  }

}
