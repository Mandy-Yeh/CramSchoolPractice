import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StudentInfoDetail } from '../models/studentInfo.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-c03',
  templateUrl: './c03.component.html',
  styleUrls: ['./c03.component.css'],
})
export class C03Component implements OnInit {
  @Input() studentInfoDetailData!: StudentInfoDetail;
  @Output() mode = new EventEmitter<string>();

  editStudentForm!: FormGroup;
  disabled: boolean = true;

  constructor(private fb: FormBuilder, private studentSvc: StudentService) {}

  ngOnInit(): void {
    this.editStudentForm = this.newEditStudentForm();
    this.doDetail(this.studentInfoDetailData);
  }
  // 建立表單
  newEditStudentForm() {
    return this.fb.group({
      id: [],
      name: [''],
      sex: [''],
      phone: [''],
      address: [''],
    });
  }

  // 塞值
  doDetail(data: StudentInfoDetail) {
    this.editStudentForm.patchValue({
      id: data.id,
      name: data.name,
      sex: data.sex,
      phone: data.phone,
      address: data.address,
    });
  }

  // 儲存
  doSaveStudent() {
    const ctrls = this.editStudentForm.getRawValue();
    this.studentSvc.editStudent(this.studentInfoDetailData.id, ctrls).subscribe(
      (response) => {
        console.log('Student edit successfully:', response);
        this.mode.emit('c01');
      },
      (error) => {
        console.error('Error edit student:', error);
      }
    );
  }
  // 取消
  doCancel() {
    this.mode.emit('c01');
  }
}
