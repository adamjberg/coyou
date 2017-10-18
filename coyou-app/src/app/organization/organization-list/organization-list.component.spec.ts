import { OrganizationService } from '../organization.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { OrganizationListComponent } from './organization-list.component';

describe('OrganizationListComponent', () => {
  let component: OrganizationListComponent;
  let fixture: ComponentFixture<OrganizationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizationListComponent],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: OrganizationService,
          useValue: {}
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
