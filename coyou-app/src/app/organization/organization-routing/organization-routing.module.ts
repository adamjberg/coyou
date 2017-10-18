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
  component: OrganizationListComponent
};
OrganizationRoute.children.push(OrganizationListRoute);

export const OrganizationEditRoute: Route = {
  path: 'edit',
  component: OrganizationEditComponent
};
OrganizationRoute.children.push(OrganizationEditRoute);


const routes: Routes = [
  OrganizationRoute
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class OrganizationRoutingModule { }
