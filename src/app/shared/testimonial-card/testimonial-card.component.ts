import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Testimonial } from '../../core/models/testimonial.model';

@Component({
  selector: 'app-testimonial-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial-card.component.html',
  styleUrl: './testimonial-card.component.scss'
})
export class TestimonialCardComponent {
  @Input({ required: true }) testimonial!: Testimonial;

  get stars(): number[] {
    return Array(5).fill(0).map((_, i) => i);
  }
}
