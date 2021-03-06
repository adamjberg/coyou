import { CarModule } from './car/car.module';
import { OrganizationModule } from './organization/organization.module';
import { NavModule } from './nav/nav.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { UserModule } from './user/user.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    HttpClientModule,
    UserModule,
    NavModule,
    DashboardModule,
    OrganizationModule,
    CarModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
