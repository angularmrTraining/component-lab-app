import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
@Injectable()
export class UsersService {

  constructor(private http: HttpClient) {

  }
  getUsers(): Observable<any> {
    const url: string = 'https://mini-crm-api.herokuapp.com/api/v1/contacts';
    return this.http.get<any>(url);
  }
}
