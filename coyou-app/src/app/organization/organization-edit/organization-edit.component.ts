import { OrganizationService } from '../organization.service';
import { IOrganization } from 'models';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-organization-edit',
  templateUrl: './organization-edit.component.html',
  styleUrls: ['./organization-edit.component.css']
})
export class OrganizationEditComponent implements OnInit {

  private organization: IOrganization;

  constructor(private organizationService: OrganizationService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: { organization: IOrganization }) => {
        if (data.organization) {
          this.organization = data.organization;

        } else {
          this.organization = {};
        }
      });
  }

  async onSubmit() {
    try {
      const saved = await this.organizationService.save(this.organization);
      this.router.navigate(['organizations/view', saved._id]);
    } catch (err) { console.error(err); }
  }

}
