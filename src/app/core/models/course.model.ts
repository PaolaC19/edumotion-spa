export interface Course {
  id: number;
  title: string;
  category: string;
  level: 'Principiante' | 'Intermedio' | 'Avanzado';
  durationHours: number;
  description: string;
  icon: string; // bootstrap-icons class name
}
