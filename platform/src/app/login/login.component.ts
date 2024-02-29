import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { LoginDtl } from '../models/login.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient,
    private loginService: LoginService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.newLoginFormForm();
  }
  // 建立表單
  newLoginFormForm() {
    return this.fb.group({
      name: [],
      password: [''],
    });
  }

  doLogin() {
    const ctrls = this.loginForm.getRawValue();
    this.loginService.loginApi(ctrls).subscribe(
      (response) => {
        console.log('login successfully:', response);
        this.storageService.set('token', response.accessToken);
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Error login:', error);
      }
    );
  }
}
