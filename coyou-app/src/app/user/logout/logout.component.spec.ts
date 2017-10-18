import { UserService } from '../user.service';
import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LogoutComponent } from './logout.component';

const UserServiceStub = {
  logOut: jasmine.createSpy('logOut')
};

@Component({
  template: ''
})
class BlankComponent {

}


describe('LogoutComponent', () => {
  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BlankComponent, LogoutComponent],
      imports: [RouterTestingModule.withRoutes([
        {
          path: 'user/login',
          component: BlankComponent
        }
      ])],
      providers: [
        { provide: UserService, useValue: UserServiceStub },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
