import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';

const appRoutes: Routes = [
  { path: '**', redirectTo: 'dashboard', canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'user/login' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
