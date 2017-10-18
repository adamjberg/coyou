import { OrganizationService } from '../organization.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { OrganizationEditComponent } from './organization-edit.component';

describe('OrganizationEditComponent', () => {
  let component: OrganizationEditComponent;
  let fixture: ComponentFixture<OrganizationEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizationEditComponent],
      imports: [FormsModule, RouterTestingModule.withRoutes([])],
      providers: [
        { provide: OrganizationService, useValue: {} }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
