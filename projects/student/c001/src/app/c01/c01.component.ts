import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StudentInfoDetail } from '../models/studentInfo.model';
import { StudentService } from '../services/student.service';
import { StorageService } from 'platform/src/app/services/storage.service';

@Component({
  selector: 'app-c01',
  templateUrl: './c01.component.html',
  styleUrls: ['./c01.component.css'],
})
export class C01Component implements OnInit {
  @Output() mode = new EventEmitter<string>();
  @Output() selectData = new EventEmitter<StudentInfoDetail>();

  // 學生資料
  studentInfoDetail!: StudentInfoDetail[];
  token!: string;

  constructor(
    private studentSvc: StudentService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.token = this.storageService.get('token');
    this.getAllStudents();
  }
  getAllStudents() {
    this.studentSvc.getAllStudents(this.token).subscribe({
      next: (item: any) => {
        this.studentInfoDetail = item;
      },
      error: () => {},
    });
  }
  changeMode(type: string, data?: StudentInfoDetail) {
    if (data) {
      this.selectData.emit(data); //傳選到的資料給父層
    }
    this.mode.emit(type); //傳mode給父層
  }
  doDelete(data: StudentInfoDetail) {
    this.studentSvc.deleteStudent(data.id).subscribe(
      (response) => {
        console.log('Student delete successfully:', response);
        this.getAllStudents();
      },
      (error) => {
        console.error('Error delete student:', error);
      }
    );
  }
}
