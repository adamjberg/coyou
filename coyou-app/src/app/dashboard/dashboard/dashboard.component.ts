import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private user: IUser;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {};
    this.route.data
      .subscribe((data: { user: IUser }) => {
        if (data.user) {
          this.user = data.user;
        }
      });
  }

}
