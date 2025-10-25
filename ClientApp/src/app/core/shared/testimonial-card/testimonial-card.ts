import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonial-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial-card.html',
  styleUrls: ['./testimonial-card.css']
})
export class TestimonialCard{
  @Input() name!: string;
  @Input() role!: string;
  @Input() image!: string;
  @Input() stars: number = 5;
  @Input() feedback!: string;
}
