import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './newsletter.html',
  styleUrls: ['./newsletter.css']
})
export class NewsletterComponent {
  email = '';
  message = '';
  subscribed = false;

  subscribe() {
    if (!this.email || !this.email.includes('@')) {
      this.message = 'Please enter a valid email address.';
      return;
    }

    // Simulate API call
    setTimeout(() => {
      this.subscribed = true;
      this.message = 'Thank you for subscribing! You’ll get our latest land updates soon.';
      this.email = '';
    }, 1000);
  }
}
