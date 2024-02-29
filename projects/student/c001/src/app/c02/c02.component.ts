import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-c02',
  templateUrl: './c02.component.html',
  styleUrls: ['./c02.component.css'],
})
export class C02Component implements OnInit {
  @Output() mode = new EventEmitter<string>();

  createStudentForm!: FormGroup;

  constructor(private fb: FormBuilder, private studentSvc: StudentService) {}

  ngOnInit(): void {
    this.createStudentForm = this.newCreateStudentForm();
  }
  // 建立表單
  newCreateStudentForm() {
    return this.fb.group({
      id: [],
      name: [''],
      sex: [''],
      phone: [''],
      address: [''],
    });
  }
  // 儲存
  doSaveStudent() {
    const ctrls = this.createStudentForm.getRawValue();
    this.studentSvc.createNewStudent(ctrls).subscribe(
      (response) => {
        console.log('Student added successfully:', response);
        this.mode.emit('c01');
      },
      (error) => {
        console.error('Error adding student:', error);
      }
    );
  }
  // 取消
  doCancel() {
    this.mode.emit('c01');
  }
}
