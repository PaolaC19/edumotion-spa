import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../core/services/data.service';
import { Course } from '../../core/models/course.model';
import { CourseCardComponent } from '../../shared/course-card/course-card.component';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {
  allCourses: Course[] = [];
  filteredCourses: Course[] = [];
  categories: string[] = [];
  selectedCategory = 'Todas';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getCourses().subscribe(courses => {
      this.allCourses = courses;
      this.filteredCourses = courses;
      this.categories = ['Todas', ...new Set(courses.map(c => c.category))];
    });
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
    this.filteredCourses = category === 'Todas'
      ? this.allCourses
      : this.allCourses.filter(c => c.category === category);
  }
}
