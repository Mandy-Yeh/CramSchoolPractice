import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StudentInfoDetail } from '../models/studentInfo.model';
import { Observable, catchError } from 'rxjs';
import { StorageService } from 'platform/src/app/services/storage.service';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}

  //取得token
  gettoken(token?: string) {
    token = this.storageService.get('token');
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }),
    };
  }

  getAllStudents(token: string) {
    let url = 'http://localhost:8080/api/v1/student/all';

    return this.http.get(url, this.gettoken(token));
  }

  createNewStudent(data: StudentInfoDetail): Observable<any> {
    let url = 'http://localhost:8080/api/v1/student/new';

    return this.http.post(url, data, this.gettoken());
  }

  editStudent(id: number, data: StudentInfoDetail): Observable<any> {
    let url = `http://localhost:8080/api/v1/student/edit/${id}`;
    return this.http.put(url, data, this.gettoken());
  }
  deleteStudent(id: number): Observable<any> {
    let url = `http://localhost:8080/api/v1/student/delete/${id}`;
    return this.http.delete(url, this.gettoken());
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
