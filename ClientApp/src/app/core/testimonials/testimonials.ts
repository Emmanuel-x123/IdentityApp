import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialCard } from '../shared/testimonial-card/testimonial-card';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, TestimonialCard],
  templateUrl: './testimonials.html',
  styleUrls: ['./testimonials.css']
})
export class Testimonials implements AfterViewInit {
  testimonials = [
    {
      name: 'Grace Akinola',
      role: 'Investor, Abuja',
      image: 'assets/testimonials/client1.jpg',
      stars: 4,
      feedback:
        'I bought my first plot through this platform and was impressed by how transparent the process was. Got my documents in under a week!'
    },
    {
      name: 'Samuel Odu',
      role: 'Landowner, Lagos',
      image: 'assets/testimonials/client2.jpg',
      stars: 5,
      feedback:
        'Their lands are properly verified and documented. I have already built a rental property on one of the plots!'
    },
    {
      name: 'Ngozi Okafor',
      role: 'Land Investor, Enugu',
      image: 'assets/testimonials/client3.jpg',
      stars: 5,
      feedback:
        'They guided me throughout inspection and paperwork. 100% reliable and professional service!'
    },
    {
      name: 'Tunde Adebayo',
      role: 'Builder, Ibadan',
      image: 'assets/testimonials/client4.jpg',
      stars: 5,
      feedback:
        'Bought two plots through them and both were authentic and quickly processed. Excellent service from start to finish!'
    }
  ];

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = this.el.nativeElement.querySelectorAll('.animate-on-scroll');
    elements.forEach((el: HTMLElement) => observer.observe(el));
  }
}
