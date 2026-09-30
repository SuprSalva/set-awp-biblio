# Guía de Estudio · Primer Parcial (Desarrollo Móvil Integral)

Página hecha con Vite + React + Bootstrap, basada en la planeación FRSAC28_C (Unidad I) y en las prácticas del cuatrimestre.

```bash
npm install
npm run dev
```

Para probar la PWA (instalable y sin conexión): `npm run build` y luego `npm run preview`.

## Componentes

| Componente | Qué muestra | Tema del PDF |
| --- | --- | --- |
| `Header`, `Navbar`, `Footer` | Estructura de la página y navegación entre secciones | 5.1 Estructura, 5.4 Props |
| `Inicio` | Temas por semana y ponderación del parcial (50/40/10) | Políticas de evaluación |
| `SeccionPWA`, `TarjetaConcepto`, `TablaComparativa` | Web, SOA, nativa, multiplataforma, PWA, monolito vs microservicios, requerimientos y herramientas | 1. Conceptos, 2. Herramientas |
| `SeccionJS`, `EjemploJS` | Ejemplos 3.1 a 3.9 que se ejecutan con un botón | 3. Repaso JavaScript |
| `SeccionReact`, `Contador`, `Saludo` | React CDN, contador con useState, estructura Vite, import/export y props | 4. Intro React, 5. Fundamentos |
| `Quiz`, `Pregunta` | Autoevaluación de 10 preguntas con calificación | 6. Examen |
| `SeccionPracticas`, `practicas/Demo` | Muestra los componentes de las prácticas; `Demo` recibe contenido por `children` | Prácticas |
| `practicas/BtnEnviar`, `practicas/Galeria` (+ `Imagen`) | Botón y galería "Empleado del mes" | Project 1003 |
| `practicas/ViteReactHero` | Plantilla inicial de Vite: logos importados, `count is`, HMR | react-vite-project |
| `practicas/ListaTareas` | Gestor de tareas con prioridad, estadísticas y promesa/async | P 1.3 |
| `practicas/MenuCafe`, `practicas/MenuItem` | Menú con filtro por categoría, descuentos y contador de órdenes | P 1.4 / P 1.5 |
| `practicas/PWABadge` | Aviso de "listo sin conexión" / actualización del Service Worker | create-pwa |
