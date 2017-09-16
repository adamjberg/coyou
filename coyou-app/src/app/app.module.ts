import { UserService } from './user/user.service';
import { AuthGuard } from './auth.guard';
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
    DashboardModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
