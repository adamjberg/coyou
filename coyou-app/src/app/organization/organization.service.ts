import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IOrganization } from 'models';

@Injectable()
export class OrganizationService {

  constructor(private http: HttpClient) { }

  get(id: string) {
    return this.http.get<IOrganization>(`api/organizations/${id}`).toPromise();
  }

  getAll() {
    return this.http.get<IOrganization[]>('api/organizations').toPromise();
  }

  save(organization: IOrganization) {
    return this.http.post<IOrganization>('api/organizations', organization).toPromise();
  }

  remove(id: string) {
    return this.http.delete(`api/organizations/${id}`).toPromise();
  }

}
