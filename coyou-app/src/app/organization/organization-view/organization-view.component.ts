import { IOrganization } from 'models';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-organization-view',
  templateUrl: './organization-view.component.html',
  styleUrls: ['./organization-view.component.css']
})
export class OrganizationViewComponent implements OnInit {

  public organization: IOrganization;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.organization = {};
    this.route.data
      .subscribe((data: { organization: IOrganization }) => {
        if (data.organization) {
          this.organization = data.organization;
        }
      });
  }

}
