import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AccountService } from '../../account/account.service';
import { ValidationMessage } from '../../../core/shared/validation-message/validation-message';
import { Notification } from '../../../core/shared/modals/notification/notification';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule, ValidationMessage, Notification],
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
})
export class Register implements OnInit {
  registerForm!: FormGroup;
  submited = false;
  errorMessages: string[] = [];
  showPassword = false;

  // For notification modal
  showNotification = false;
  notificationTitle = '';
  notificationMessage = '';
  notificationSuccess = true;

  constructor(
    private accountService: AccountService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      email: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(100),
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[^a-zA-Z0-9]).{10,}$'),
        ],
      ],
    });
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  register() {
    this.submited = true;
    this.errorMessages = [];

    if (this.registerForm.valid) {
      this.accountService.register(this.registerForm.value).subscribe({
        next: (response) => {
          this.notificationTitle = 'Registration Successful';
          this.notificationMessage = 'Your account has been created successfully.';
          this.notificationSuccess = true;
          this.showNotification = true;

          setTimeout(() => {
            this.router.navigateByUrl('/account/login');
          }, 1500);
        },
        error: (error) => {
          this.notificationTitle = 'Registration Failed';
          this.notificationMessage = 'An error occurred while creating your account.';
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
