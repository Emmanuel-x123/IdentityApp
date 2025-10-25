import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class Footer{
  currentYear = new Date().getFullYear();

  company = {
    name: 'LandScape Realty',
    tagline: 'Connecting You to the Future of Land Ownership',
    address: 'Plot 15, Admiralty Way, Lekki Phase 1, Lagos, Nigeria',
    phone: '+234 802 123 4567',
    email: 'info@landscape.ng'
  };

  quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'Lands for Sale', path: '/lands' },
    { label: 'Agents', path: '/agents' },
    { label: 'Contact', path: '/contact' },
    { label: 'About Us', path: '/about' }
  ];

  socialLinks = [
    { icon: 'bi bi-facebook', url: 'https://facebook.com' },
    { icon: 'bi bi-instagram', url: 'https://instagram.com' },
    { icon: 'bi bi-twitter-x', url: 'https://x.com' },
    { icon: 'bi bi-linkedin', url: 'https://linkedin.com' }
  ];
}
