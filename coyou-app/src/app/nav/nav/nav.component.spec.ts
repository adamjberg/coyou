import { } from 'jasmine';
import { UserService } from '../../user/user.service';
import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NavComponent } from './nav.component';

const UserServiceStub = {
  isLoggedIn: jasmine.createSpy('isLoggedIn')
};

@Component({
  template: ''
})
class BlankComponent {

}

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BlankComponent, NavComponent],
      imports: [RouterTestingModule.withRoutes([
        {
          path: 'user/login',
          component: BlankComponent
        },
        {
          path: 'user/signup',
          component: BlankComponent
        },
      ])],
      providers: [
        { provide: UserService, useValue: UserServiceStub }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    UserServiceStub.isLoggedIn.and.returnValue(false);
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
