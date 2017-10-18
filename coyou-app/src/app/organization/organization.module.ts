import { OrganizationRoutingModule } from './organization-routing/organization-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationListComponent } from './organization-list/organization-list.component';
import { OrganizationEditComponent } from './organization-edit/organization-edit.component';

@NgModule({
  imports: [
    CommonModule,
    OrganizationRoutingModule
  ],
  declarations: [OrganizationListComponent, OrganizationEditComponent]
})
export class OrganizationModule { }
