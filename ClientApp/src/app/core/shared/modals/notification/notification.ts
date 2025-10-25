import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification.html',
  styleUrls: ['./notification.css'],
})
export class Notification implements OnInit, OnDestroy {
  @Input() title: string = 'Notification';
  @Input() message: string = '';
  @Input() isSuccess: boolean = true;
  @Input() autoClose: boolean = true;        // 👈 auto-close toggle
  @Input() duration: number = 4000;          // 👈 duration in ms

  @Output() closed = new EventEmitter<void>();

  private timer: any;

  ngOnInit() {
    if (this.autoClose) {
      this.timer = setTimeout(() => this.close(), this.duration);
    }
  }

  ngOnDestroy() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  close() {
    this.closed.emit();
  }
}
