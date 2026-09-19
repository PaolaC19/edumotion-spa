import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataService } from '../../core/services/data.service';
import { Course } from '../../core/models/course.model';
import { Testimonial } from '../../core/models/testimonial.model';
import { CourseCardComponent } from '../../shared/course-card/course-card.component';
import { TestimonialCardComponent } from '../../shared/testimonial-card/testimonial-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, CourseCardComponent, TestimonialCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  featuredCourses: Course[] = [];
  featuredTestimonials: Testimonial[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getCourses().subscribe(courses => {
      this.featuredCourses = courses.slice(0, 3);
    });

    this.dataService.getTestimonials().subscribe(testimonials => {
      this.featuredTestimonials = testimonials.slice(0, 2);
    });
  }
}
