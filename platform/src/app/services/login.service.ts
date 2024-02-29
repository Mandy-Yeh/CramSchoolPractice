import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { LoginDtl } from '../models/login.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  loginApi(data: LoginDtl): Observable<any> {
    let url = 'http://localhost:8080/api/v1/user/login';
    return this.http.post(url, data, this.httpOptions);
  }

  handleError(
    arg0: string,
    showNotice: any
  ): (
    err: any,
    caught: import('rxjs').Observable<Object>
  ) => import('rxjs').ObservableInput<any> {
    throw new Error('Method not implemented.');
  }
}
