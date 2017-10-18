import { OrganizationService } from '../organization.service';
import { Component, OnInit } from '@angular/core';
import { IOrganization } from 'models';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.css']
})
export class OrganizationListComponent implements OnInit {

  private organizations: IOrganization[];

  constructor(private organizationService: OrganizationService, private route: ActivatedRoute) { }

  async ngOnInit() {
    this.organizations = [];
    this.route.data
      .subscribe((data: { organizations: IOrganization[] }) => {
        if (data.organizations) {
          this.organizations = data.organizations;
        }
      });
  }

  async remove(id: string) {
    await this.organizationService.remove(id);
    this.organizations = this.organizations.filter((org) => org._id !== id);
  }

}
