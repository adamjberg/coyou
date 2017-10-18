import { OrganizationService } from './organization.service';
import { OrganizationRoutingModule } from './organization-routing/organization-routing.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrganizationListComponent } from './organization-list/organization-list.component';
import { OrganizationEditComponent } from './organization-edit/organization-edit.component';
import { OrganizationViewComponent } from './organization-view/organization-view.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    OrganizationRoutingModule,
  ],
  providers: [OrganizationService],
  declarations: [OrganizationListComponent, OrganizationEditComponent, OrganizationViewComponent]
})
export class OrganizationModule { }
