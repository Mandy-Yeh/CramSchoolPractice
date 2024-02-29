import { Component, OnInit } from '@angular/core';
import { StudentInfoDetail } from './models/studentInfo.model';

@Component({
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'c001';
  functionMode = 'c01';
  studentInfoDetailData!: StudentInfoDetail;

  constructor() {}

  ngOnInit(): void {}
  modeChange(mode: string) {
    this.functionMode = mode;
  }
  selectData(data: StudentInfoDetail) {
    this.studentInfoDetailData = data;
  }
}
