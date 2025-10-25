import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AccountService } from '../../account/account.service';
import { ValidationMessage } from '../../../core/shared/validation-message/validation-message';
import { Notification } from '../../../core/shared/modals/notification/notification';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, ValidationMessage, Notification],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  errorMessages: string[] = [];
  showPassword = false;

  // Notification modal
  showNotification = false;
  notificationTitle = '';
  notificationMessage = '';
  notificationSuccess = true;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.loginForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  login() {
    this.submitted = true;
    this.errorMessages = [];

    if (this.loginForm.valid) {
      this.accountService.login(this.loginForm.value).subscribe({
        next: (response) => {
          this.notificationTitle = 'Login Successful';
          this.notificationMessage = 'Welcome back!';
          this.notificationSuccess = true;
          this.showNotification = true;

          setTimeout(() => {
            this.router.navigateByUrl('/dashboard');
          }, 1500);
        },
        error: (error) => {
          this.notificationTitle = 'Login Failed';
          this.notificationMessage = 'Invalid credentials or an error occurred.';
          this.notificationSuccess = false;
          this.showNotification = true;

          if (error.error?.errors) {
            this.errorMessages = error.error.errors;
          } else if (error.error) {
            this.errorMessages.push(error.error);
          }
        },
      });
    }
  }

  onNotificationClosed() {
    this.showNotification = false;
  }
}
