# Edumotion — SPA (Angular + Bootstrap)

Aplicación web tipo **Single Page Application (SPA)** desarrollada para **Edumotion**,
una startup ficticia de educación digital, como entregable de la asignatura
**Ingeniería Web II** (UNIMINUTO).

## 🚀 Descripción del proyecto

Edumotion necesita una plataforma que:

- Presente su identidad y propuesta de valor.
- Muestre de forma ordenada y atractiva sus cursos y programas.
- Comparta testimonios de usuarios piloto.
- Facilite el contacto a través de un formulario y redes sociales.
- Garantice una experiencia de usuario fluida en cualquier dispositivo (responsive).

Este proyecto resuelve esos requerimientos con una SPA construida en **Angular 17**
(componentes standalone, *lazy loading* de rutas) y **Bootstrap 5** para el diseño
responsivo, complementado con **Bootstrap Icons**.

## 🛠️ Tecnologías utilizadas

| Herramienta        | Uso |
|---------------------|-----|
| Angular 17           | Framework principal (componentes standalone + Router) |
| TypeScript            | Lenguaje de desarrollo |
| Bootstrap 5           | Sistema de grillas y componentes responsivos |
| Bootstrap Icons       | Iconografía |
| Angular Reactive Forms | Validación del formulario de contacto |
| SCSS                  | Estilos personalizados por componente |

## 📁 Estructura del proyecto

```
src/app/
├── core/
│   ├── models/            # Interfaces TypeScript (Course, Testimonial)
│   └── services/          # DataService (fuente de datos, fácilmente reemplazable por HTTP/API)
├── shared/                 # Componentes reutilizables
│   ├── navbar/              # Barra de navegación responsiva
│   ├── footer/               # Pie de página con enlaces y redes sociales
│   ├── course-card/           # Tarjeta reutilizable para mostrar un curso
│   └── testimonial-card/       # Tarjeta reutilizable para mostrar un testimonio
├── pages/                   # Vistas / rutas de la aplicación
│   ├── home/                  # Página de inicio (hero, propuesta de valor, destacados)
│   ├── courses/                # Catálogo de cursos con filtro por categoría
│   ├── testimonials/            # Listado completo de testimonios
│   ├── contact/                  # Formulario de contacto + información/redes
│   └── not-found/                 # Página 404
├── app.routes.ts             # Definición de rutas (lazy-loaded)
├── app.component.ts/html      # Shell principal (navbar + router-outlet + footer)
```

## 🧭 Rutas de la aplicación

| Ruta          | Página          |
|---------------|-----------------|
| `/`           | Inicio          |
| `/cursos`     | Catálogo de cursos |
| `/testimonios`| Testimonios      |
| `/contacto`   | Contacto         |
| `**`          | Página 404       |

## 📲 Diseño responsivo

El diseño se adapta a **móvil, tablet y escritorio** mediante el sistema de grillas
de Bootstrap (`col-12 col-md-6 col-lg-4`, etc.), un menú de navegación colapsable
(`navbar-toggler`) en pantallas pequeñas, y tipografía/espaciados fluidos.

## ⚙️ Instalación y ejecución local

### Requisitos previos
- Node.js 18 o superior
- npm 9 o superior

### Pasos

```bash
# 1. Clonar el repositorio
git clone <URL_DEL_REPOSITORIO>
cd edumotion-spa

# 2. Instalar dependencias
npm install

# 3. Levantar el servidor de desarrollo
npm start
# o bien: npx ng serve

# 4. Abrir en el navegador
http://localhost:4200
```

### Compilar para producción

```bash
npm run build
# Los archivos optimizados se generan en dist/edumotion-spa/browser
```

## 🔌 Reemplazar los datos simulados por una API real

Todos los datos (cursos y testimonios) se sirven desde `DataService`
(`src/app/core/services/data.service.ts`) usando observables (`of(...)`).
Para conectar una API real, basta con reemplazar internamente el uso de `of(...)`
por `HttpClient.get<Course[]>('https://tu-api.com/cursos')`, sin modificar los
componentes que consumen el servicio.

## 👥 Créditos

Proyecto académico desarrollado por estudiantes de Ingeniería Web II — UNIMINUTO,
como entregable de la actividad "Interfaz para una startup de educación digital:
desarrollo front-end basado en frameworks modernos".

## 📄 Licencia

Uso académico.
