import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-validation-message',
  templateUrl: './validation-message.html',
  imports: [CommonModule],
  styleUrl: './validation-message.css'
})
export class ValidationMessage {
  @Input() errorMessages: string[] | undefined;
}
