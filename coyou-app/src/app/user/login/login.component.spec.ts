import { } from 'jasmine';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserService } from '../user.service';
import { LoginComponent } from './login.component';

const UserServiceStub = {

};

const RouterStub = {

};

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule],
      providers: [
        { provide: UserService, useValue: UserServiceStub },
        { provide: Router, useValue: RouterStub }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
