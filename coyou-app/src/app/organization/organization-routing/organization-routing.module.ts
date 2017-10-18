import { OrganizationListResolver } from '../organization-list-resolver';
import { OrganizationDetailResolver } from '../organization-detail-resolver';
import { OrganizationViewComponent } from '../organization-view/organization-view.component';
import { OrganizationEditComponent } from '../organization-edit/organization-edit.component';
import { OrganizationListComponent } from '../organization-list/organization-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route, Routes } from '@angular/router';

export const OrganizationRoute: Route = {
  path: 'organizations',
  children: []
};

export const OrganizationListRoute: Route = {
  path: 'list',
  component: OrganizationListComponent,
  resolve: {
    organizations: OrganizationListResolver
  }
};
OrganizationRoute.children.push(OrganizationListRoute);

export const OrganizationNewRoute: Route = {
  path: 'new',
  component: OrganizationEditComponent
};
OrganizationRoute.children.push(OrganizationNewRoute);

export const OrganizationEditRoute: Route = {
  path: 'edit/:id',
  component: OrganizationEditComponent,
  resolve: {
    organization: OrganizationDetailResolver
  }
};
OrganizationRoute.children.push(OrganizationEditRoute);

export const OrganizationViewRoute: Route = {
  path: 'view/:id',
  component: OrganizationViewComponent,
  resolve: {
    organization: OrganizationDetailResolver
  }
};
OrganizationRoute.children.push(OrganizationViewRoute);

const routes: Routes = [
  OrganizationRoute
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  providers: [
    OrganizationListResolver,
    OrganizationDetailResolver
  ]
})
export class OrganizationRoutingModule { }
