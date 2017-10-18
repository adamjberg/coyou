import { AuthGuard } from '../../auth.guard';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route, Routes } from '@angular/router';

export const DashboardRoute: Route = {
  path: 'dashboard',
  component: DashboardComponent,
  canActivate: [AuthGuard]
};

const routes: Routes = [
  DashboardRoute
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class DashboardRoutingModule { }
