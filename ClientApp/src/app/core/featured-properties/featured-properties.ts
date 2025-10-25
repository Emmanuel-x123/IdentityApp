import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import AOS from 'aos';

@Component({
  selector: 'app-featured-properties',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-properties.html',
  styleUrls: ['./featured-properties.css']
})
export class FeaturedProperties implements AfterViewInit {
  ngAfterViewInit(): void {
    AOS.init({ duration: 800, once: true, offset: 100 });
  }

  properties = [
    {
      img: 'assets/images/land1.jpg',
      title: 'Buy & Build Land in Lekki Phase 2',
      location: 'Lekki, Lagos',
      size: '600 sqm',
      price: '₦25,000,000',
      tag: 'Buy & Build'
    },
    {
      img: 'assets/images/land2.jpg',
      title: 'Dry Land in Ibeju-Lekki',
      location: 'Ibeju-Lekki, Lagos',
      size: '500 sqm',
      price: '₦15,000,000',
      tag: 'Verified'
    },
    {
      img: 'assets/images/land3.jpg',
      title: 'Commercial Plot near Dangote Refinery',
      location: 'Epe, Lagos',
      size: '1 Acre',
      price: '₦65,000,000',
      tag: 'Hot Deal'
    },
    {
      img: 'assets/images/land4.jpg',
      title: 'Agricultural Land for Lease',
      location: 'Abeokuta, Ogun',
      size: '5 Acres',
      price: '₦10,000,000',
      tag: 'Featured'
    }
  ];
}
