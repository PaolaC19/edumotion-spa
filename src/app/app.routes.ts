import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Edumotion | Inicio'
  },
  {
    path: 'cursos',
    loadComponent: () =>
      import('./pages/courses/courses.component').then(m => m.CoursesComponent),
    title: 'Edumotion | Cursos'
  },
  {
    path: 'testimonios',
    loadComponent: () =>
      import('./pages/testimonials/testimonials.component').then(m => m.TestimonialsComponent),
    title: 'Edumotion | Testimonios'
  },
  {
    path: 'contacto',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Edumotion | Contacto'
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent),
    title: 'Edumotion | Página no encontrada'
  }
];
