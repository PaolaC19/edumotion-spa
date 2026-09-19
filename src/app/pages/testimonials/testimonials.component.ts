import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../core/services/data.service';
import { Testimonial } from '../../core/models/testimonial.model';
import { TestimonialCardComponent } from '../../shared/testimonial-card/testimonial-card.component';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, TestimonialCardComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent implements OnInit {
  testimonials: Testimonial[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getTestimonials().subscribe(data => {
      this.testimonials = data;
    });
  }
}
