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
export class OrganizationDetailResolver implements Resolve<IOrganization> {
    constructor(private organizationService: OrganizationService, private router: Router) { }

    async resolve(route: ActivatedRouteSnapshot) {
        const id = route.paramMap.get('id');

        try {
            const org = await this.organizationService.get(id);
            return org;
        } catch (err) {
            this.router.navigate(['/organizations/list']);
        }
        return null;
    }
}
