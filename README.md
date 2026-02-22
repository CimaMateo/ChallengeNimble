# Nimble Gravity — Frontend Challenge

Challenge técnico realizado en **React** como parte del proceso de selección para el rol de **Junior Fullstack Developer** en [Nimble Gravity](https://nimblegravity.com/es).

---

## Autor

**Mateo Cima Crucet**
(https://github.com/CimaMateo/ChallengeNimble)
(https://www.linkedin.com/in/mateo-cima)
(https://portafoliocimamateo.vercel.app/)

---

## Descripción

Mini aplicación en React que se conecta a la API de Nimble Gravity para:

1. Obtener los datos del candidato a partir de su email
2. Listar las posiciones abiertas disponibles
3. Enviar la postulación a la posición seleccionada con la URL del repositorio

---

## Tecnologías

- **React** + **Vite**
- CSS
- Fetch API para las llamadas HTTP

---

## Estructura del proyecto

```
src/
├── Api.js                  # Llamadas a la API centralizadas
├── App.jsx                 # Componente raíz
├── App.css                 # Estilos globales
├── components/
│   ├── Header.jsx          # Barra de navegación
│   ├── Hero.jsx            # Sección hero
│   ├── CandidateStep.jsx   # verificación de email
│   ├── JobsStep.jsx        # listado de posiciones
│   └── JobCard.jsx         # Card individual de cada posición
└── hooks/
    ├── useCandidate.js     # Hook para obtener datos del candidato
    ├── useJobs.js          # Hook para listar posiciones
    └── useJobSubmit.js     # Hook para enviar la postulación
```

---

## Funcionalidades implementadas

- Verificación de candidato por email vía API
- Listado dinámico de posiciones abiertas
- Input de URL de repositorio por posición
- Envío de postulación 
- Manejo de estados de carga y error en toda la UI
- Diseño inspirado en el sitio oficial de Nimble Gravity
- Responsive