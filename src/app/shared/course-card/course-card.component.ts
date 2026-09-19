import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Course } from '../../core/models/course.model';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent {
  @Input({ required: true }) course!: Course;

  get levelBadgeClass(): string {
    switch (this.course.level) {
      case 'Principiante': return 'text-bg-success';
      case 'Intermedio': return 'text-bg-warning';
      case 'Avanzado': return 'text-bg-danger';
      default: return 'text-bg-secondary';
    }
  }
}
