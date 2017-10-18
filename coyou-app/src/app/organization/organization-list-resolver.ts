import { IOrganization } from 'models';
import { OrganizationService } from './organization.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Injectable } from '@angular/core';
import {
    Router, Resolve,
    ActivatedRouteSnapshot
} from '@angular/router';

@Injectable()
export class OrganizationListResolver implements Resolve<IOrganization> {
    constructor(private organizationService: OrganizationService, private router: Router) { }

    async resolve(route: ActivatedRouteSnapshot) {
        try {
            const orgs = await this.organizationService.getAll();
            return orgs;
        } catch (err) {
            this.router.navigate(['/dashboard']);
        }
        return null;
    }
}
