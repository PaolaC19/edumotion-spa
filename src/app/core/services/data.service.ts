import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from '../models/course.model';
import { Testimonial } from '../models/testimonial.model';

/**
 * Servicio centralizado de acceso a datos.
 * Actualmente sirve datos simulados (mock), pero está diseñado para
 * reemplazarse fácilmente por llamadas HTTP a una API real (ver README).
 */
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly courses: Course[] = [
    {
      id: 1,
      title: 'Fundamentos de Habilidades Digitales',
      category: 'Habilidades Digitales',
      level: 'Principiante',
      durationHours: 20,
      description: 'Aprende a usar herramientas digitales esenciales para el trabajo y el estudio: ofimática en la nube, comunicación digital y seguridad básica.',
      icon: 'bi-laptop'
    },
    {
      id: 2,
      title: 'Introducción a la Inteligencia Artificial',
      category: 'Tecnologías Emergentes',
      level: 'Intermedio',
      durationHours: 30,
      description: 'Comprende los conceptos clave de IA y machine learning, y cómo aplicarlos en proyectos reales sin necesidad de ser programador experto.',
      icon: 'bi-cpu'
    },
    {
      id: 3,
      title: 'Emprendimiento Digital desde Cero',
      category: 'Emprendimiento',
      level: 'Principiante',
      durationHours: 25,
      description: 'Descubre cómo validar una idea de negocio, construir un MVP y conseguir tus primeros clientes usando canales digitales.',
      icon: 'bi-rocket-takeoff'
    },
    {
      id: 4,
      title: 'Desarrollo Web con Frameworks Modernos',
      category: 'Tecnologías Emergentes',
      level: 'Avanzado',
      durationHours: 40,
      description: 'Domina la construcción de aplicaciones web tipo SPA utilizando Angular, componentes reutilizables y buenas prácticas de arquitectura.',
      icon: 'bi-code-slash'
    },
    {
      id: 5,
      title: 'Marketing Digital para Startups',
      category: 'Emprendimiento',
      level: 'Intermedio',
      durationHours: 18,
      description: 'Estrategias de marketing de bajo costo para startups: redes sociales, email marketing y analítica de datos.',
      icon: 'bi-megaphone'
    },
    {
      id: 6,
      title: 'Ciberseguridad Esencial',
      category: 'Habilidades Digitales',
      level: 'Intermedio',
      durationHours: 22,
      description: 'Aprende a proteger tu información personal y profesional frente a las amenazas digitales más comunes.',
      icon: 'bi-shield-lock'
    }
  ];

  private readonly testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Laura Martínez',
      role: 'Diseñadora Gráfica',
      course: 'Fundamentos de Habilidades Digitales',
      quote: 'Edumotion me dio las bases que necesitaba para sentirme segura usando herramientas digitales en mi trabajo diario. El contenido es claro y muy práctico.',
      avatarInitials: 'LM',
      rating: 5
    },
    {
      id: 2,
      name: 'Camilo Rojas',
      role: 'Estudiante universitario',
      course: 'Introducción a la Inteligencia Artificial',
      quote: 'Nunca pensé que entendería IA tan rápido. Los instructores explican con ejemplos reales y el ritmo del curso se adapta a mi tiempo.',
      avatarInitials: 'CR',
      rating: 5
    },
    {
      id: 3,
      name: 'Valentina Gómez',
      role: 'Emprendedora',
      course: 'Emprendimiento Digital desde Cero',
      quote: 'Gracias a este programa lancé mi primer producto digital en menos de dos meses. El acompañamiento del tutor fue clave.',
      avatarInitials: 'VG',
      rating: 4
    },
    {
      id: 4,
      name: 'Andrés Torres',
      role: 'Desarrollador Junior',
      course: 'Desarrollo Web con Frameworks Modernos',
      quote: 'La calidad del contenido técnico es excelente. Pasé de conocimientos básicos a construir mi propia SPA en pocas semanas.',
      avatarInitials: 'AT',
      rating: 5
    }
  ];

  getCourses(): Observable<Course[]> {
    return of(this.courses);
  }

  getCourseById(id: number): Observable<Course | undefined> {
    return of(this.courses.find(c => c.id === id));
  }

  getTestimonials(): Observable<Testimonial[]> {
    return of(this.testimonials);
  }
}
