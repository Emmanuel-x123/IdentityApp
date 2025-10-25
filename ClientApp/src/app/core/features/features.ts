import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import AOS from 'aos';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.html',
  styleUrls: ['./features.css']
})
export class Features implements AfterViewInit {
  features = [
    {
      icon: 'bi bi-search',
      title: 'Smart Property Search',
      description: 'Quickly filter properties by location, price, type, and amenities.'
    },
    {
      icon: 'bi bi-card-image',
      title: 'Detailed Listings',
      description: 'High-quality images and property details to make informed decisions.'
    },
    {
      icon: 'bi bi-map',
      title: 'Interactive Map',
      description: 'Explore neighborhoods and find properties with ease.'
    },
    {
      icon: 'bi bi-bookmark-star',
      title: 'Saved Searches',
      description: 'Keep track of your favorite properties and receive updates.'
    },
    {
      icon: 'bi bi-calculator',
      title: 'Mortgage Calculator',
      description: 'Estimate payments quickly and plan your budget effectively.'
    },
    {
      icon: 'bi bi-people',
      title: 'Trusted Agents',
      description: 'Connect with verified agents and brokers to guide your choices.'
    },
    {
      icon: 'bi bi-stars',
      title: 'Customer Testimonials',
      description: 'See why our platform is trusted by thousands of clients.'
    },
    {
      icon: 'bi bi-graph-up',
      title: 'Market Insights',
      description: 'Get real-time data and insights to make better decisions.'
    }
  ];

  ngAfterViewInit(): void {
    AOS.init({
      duration: 800,
      once: true,
      offset: 120
    });
  }
}
