import { Component } from '@angular/core';
import { Header } from '../../core/header/header';
import { Hero } from '../../core/hero/hero';
import { Features } from '../../core/features/features';
import { About } from '../../core/about/about';
import { FeaturedProperties } from '../../core/featured-properties/featured-properties';
import { Testimonials } from '../../core/testimonials/testimonials';
import { NewsletterComponent } from '../../core/newsletter/newsletter';
import { Footer } from '../../core/footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Header, Hero, Features, About, FeaturedProperties, Testimonials, NewsletterComponent, Footer], // ✅ Combine both components in one imports array
  templateUrl: './home.html',
  styleUrls: ['./home.css'] // ✅ should be plural
})
export class Home {}
