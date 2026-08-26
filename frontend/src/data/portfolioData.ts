import type { ProjectDetail, SkillCategory } from '../types/portfolio'

export const HERO_DATA = {
  greeting: 'Hola, soy Desarrollador de Software',
  title: 'Construyo aplicaciones web, APIs y soluciones de automatización.',
  subtitle: 'Especializado en arquitectura de software, calidad de código y resolución de problemas técnicos complejos.',
  coreStack: ['TypeScript', 'Vue 3', 'Node.js', 'PostgreSQL', 'Express'],
  email: 'alejopmotta@gmail.com',
  github: 'https://github.com/DanExl24',
}

export const PROJECTS_DATA: ProjectDetail[] = [
  {
    id: 'gedasc',
    title: 'GEDASC',
    shortDescription: 'Aplicación web para la gestión de accesos en el SENA (CTA), con escaneo de códigos de barras (Quagga.js) y captura de firmas digitales en canvas (Signature Pad) sincronizados con el backend en tiempo real.',
    fullDescription: 'GEDASC es una plataforma integral diseñada para optimizar el control de acceso y seguridad dentro del Centro Tecnológico de la Amazonia. En el frontend, integra Quagga.js para decodificar códigos de barras desde la cámara web y enviar los datos instantáneamente al backend para su validación, junto con Signature Pad para capturar firmas digitales en canvas HTML5 para la custodia de equipos de cómputo.',
    githubUrl: 'https://github.com/DanExl24/GEDASC',
    liveUrl: 'https://gedasc.adsoproject.dev/dashboard',
    tags: ['Vue 3', 'TypeScript', 'Express', 'PostgreSQL', 'Quagga.js', 'Signature Pad', 'Docker', 'Socket.io'],
    architecture: {
      frontend: [
        'Vue 3',
        'TypeScript',
        'Pinia (State Management)',
        'Vue Router',
        'Tailwind CSS',
        'Quagga.js (Escaneo y decodificación óptica de códigos de barras)',
        'Signature Pad (Captura de firmas en canvas interactivo)'
      ],
      backend: [
        'Node.js',
        'Express',
        'TypeScript',
        'Socket.IO (Sincronización en tiempo real)',
        'Zod (Validación estricta de payloads)'
      ],
      database: ['PostgreSQL', 'Prisma ORM'],
      testing: ['Pruebas de endpoints REST'],
      integrations: [
        'Pipeline de datos: Lectura de código de barras frontend → API Backend → Validación en BD',
        'Almacenamiento de firmas digitales para actas de custodia',
        'Docker (Entorno de contenedores)'
      ]
    },
    highlights: [
      'Escaneo y decodificación de códigos de barras en el cliente con Quagga.js y despacho inmediato al backend.',
      'Captura interactiva de firmas de aprendices con Signature Pad sobre canvas HTML5.',
      'Sincronización y monitoreo en vivo para celadores mediante WebSockets con Socket.IO.',
      'Arquitectura tipada de extremo a extremo con TypeScript, Prisma ORM y Zod.'
    ]
  },
  {
    id: 'academia-neiva',
    title: 'Academia Neiva',
    shortDescription: 'Sistema de información web avanzado para la gestión integral de instituciones educativas en Neiva, con control de matrículas, notas, planeación MEN (DBA) y auditorías.',
    fullDescription: 'Plataforma administrativa y académica de gran envergadura orientada a colegios e instituciones en Neiva. Facilita la administración escolar, calificación cuantitativa/cualitativa, seguimiento de asistencia, planeación curricular articulada con el catálogo oficial del MEN (Derechos Básicos de Aprendizaje - DBA) y auditorías de supervisión docente.',
    githubUrl: 'https://github.com/DanExl24/AcademiaNeiva',
    liveUrl: 'https://academianeiva.adsoproject.dev/',
    tags: ['Vue 3', 'TypeScript', 'Express', 'PostgreSQL', 'Docker', 'Kysely'],
    architecture: {
      frontend: ['Vue 3', 'TypeScript', 'Pinia', 'Vue Router', 'Quasar', 'Tailwind CSS'],
      backend: ['Node.js', 'Express', 'TypeScript', 'Socket.IO', 'Zod', 'Kysely (Type-safe SQL Query Builder)'],
      database: ['PostgreSQL'],
      testing: ['Postman / Bruno (Validación exhaustiva de colecciones de APIs)']
    },
    highlights: [
      'Planeación curricular integrada con los Derechos Básicos de Aprendizaje (DBA) del MEN.',
      'Módulo robusto de auditorías y supervisión académica en tiempo real.',
      'Consultas altamente optimizadas mediante Kysely type-safe SQL query builder.'
    ]
  },
  {
    id: 'bimeh',
    title: 'BIMEH',
    shortDescription: 'Sistema web que automatiza la consulta, consolidación y visualización del historial de novedades y disponibilidad operacional del personal, integrándose con Google Drive API.',
    fullDescription: 'BIMEH centraliza y procesa datos operativos dispersos en hojas de cálculo en la nube, transformándolos en paneles de disponibilidad inmediata. Lee información de Google Drive, normaliza los datos y entrega reportes consolidados sobre el estado y novedades de los miembros del equipo.',
    githubUrl: 'https://github.com/DanExl24/BIMEH',
    liveUrl: 'https://bimeh.adsoproject.dev/',
    tags: ['Vue 3', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'Google Drive API', 'Docker'],
    upcomingNotice: 'El proyecto se encuentra en proceso de expansión hacia aplicaciones de escritorio y dispositivos móviles, reutilizando la arquitectura backend y los servicios existentes.',
    architecture: {
      frontend: ['Vue 3', 'Vite', 'Tailwind CSS', 'Pinia'],
      backend: ['Python', 'FastAPI'],
      database: ['PostgreSQL'],
      integrations: ['Google Drive API', 'Docker']
    },
    highlights: [
      'Ingestión y extracción continua de novedades desde Google Drive mediante API oficial.',
      'Backend asíncrono de alto rendimiento con FastAPI y Python.',
      'Diseño modular preparado para extenderse a clientes de escritorio y móviles.'
    ]
  },
  {
    id: 'pyautom',
    title: 'Pyautom',
    shortDescription: 'Sistema web para la consulta, analítica y estadísticas de fichas formativas del SENA extraídas y procesadas dinámicamente desde archivos Excel de Google Drive.',
    fullDescription: 'Herramienta especializada en analítica y automatización de datos académicos del SENA. Automatiza la descarga, análisis con OpenPyXL y extracción estructurada a JSON para alimentar dashboards interactivos de rendimiento y estadísticas de fichas formativas.',
    githubUrl: 'https://github.com/DanExl24/Py_autom/tree/agy-v1.1',
    liveUrl: 'https://pyautom.adsoproject.dev/',
    tags: ['Vue 3', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'Google Drive API', 'OpenPyXL'],
    architecture: {
      frontend: ['Vue 3', 'Vite', 'Tailwind CSS', 'Pinia'],
      backend: ['Python', 'FastAPI'],
      database: ['PostgreSQL'],
      dataProcessing: ['Archivos Excel (.xlsx) → Procesamiento con OpenPyXL → JSON normalizado'],
      integrations: ['Google Drive API']
    },
    highlights: [
      'Procesamiento programático de hojas de cálculo complejas con OpenPyXL.',
      'Cálculo de estadísticas automáticas y visualización de métricas clave.',
      'Pipeline de transformación de datos crudos a JSON estructurado y listo para el cliente.'
    ]
  }
]

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend Development',
    iconName: 'Layout',
    skills: [
      { name: 'Vue 3', description: 'Desarrollo de SPAs, Composition API, componentes, composables y estado reactivo.', highlight: true, badge: 'CORE' },
      { name: 'TypeScript', description: 'Tipado estricto, interfaces, genéricos y contratos sólidos de datos.', highlight: true, badge: 'CORE' },
      { name: 'Tailwind CSS', description: 'Construcción ágil de interfaces estéticas, diseño responsivo y sistemas de diseño.', highlight: true, badge: 'CORE' },
      { name: 'JavaScript (ES6+)', description: 'Manipulación del DOM, programación asíncrona, promesas y consumo de APIs.' },
      { name: 'HTML5 & CSS3', description: 'Maquetación semántica, accesibilidad web (a11y) y layouts modernos (Grid/Flexbox).' },
      { name: 'Quasar Framework', description: 'Construcción y uso de componentes UI modulares e integraciones avanzadas.' }
    ]
  },
  {
    title: 'Backend & APIs',
    iconName: 'Server',
    skills: [
      { name: 'Node.js & Express', description: 'Construcción de servidores robustos, middlewares y APIs RESTful escalables.', highlight: true, badge: 'CORE' },
      { name: 'Prisma ORM & Kysely', description: 'Modelado, migraciones y consultas type-safe optimizadas sobre SQL.' },
      { name: 'Socket.IO', description: 'Comunicación bidireccional en tiempo real para eventos y sincronizaciones instantáneas.' },
      { name: 'Zod', description: 'Validación estricta de esquemas en tiempo de ejecución para requests y payloads.' }
    ]
  },
  {
    title: 'Bases de Datos',
    iconName: 'Database',
    skills: [
      { name: 'PostgreSQL', description: 'Diseño relacional de esquemas, llaves foráneas, índices, transacciones y consultas complejas.', highlight: true, badge: 'CORE' }
    ]
  },
  {
    title: 'Testing & QA',
    iconName: 'ShieldCheck',
    skills: [
      { name: 'Playwright', description: 'Automatización de pruebas E2E (End-to-End) y flujos críticos de usuario.', highlight: true, badge: 'CORE' },
      { name: 'Postman & Bruno', description: 'Diseño de colecciones de pruebas, validación automatizada de contratos de APIs y tests de integración.' }
    ]
  },
  {
    title: 'Herramientas & DevOps',
    iconName: 'Terminal',
    skills: [
      { name: 'Git & GitHub', description: 'Control de versiones profesional, flujos con ramas, pull requests, issues y CI/CD.', highlight: true, badge: 'CORE' },
      { name: 'Docker', description: 'Contenerización de aplicaciones, Dockerfiles y entornos consistentes de despliegue.' },
      { name: 'Notion', description: 'Documentación técnica estructurada, seguimiento ágil y organización de proyectos.' }
    ]
  },
  {
    title: 'Integraciones & Procesamiento',
    iconName: 'Cpu',
    skills: [
      { name: 'Google Drive API', description: 'Integración programática para lectura, sincronización y descarga automatizada de archivos en la nube.', highlight: true, badge: 'CORE' },
      { name: 'OpenPyXL (Data Processing)', description: 'Lectura, escritura, parsing y transformación de archivos Excel (.xlsx) a estructuras JSON normalizadas.', highlight: true, badge: 'CORE' }
    ]
  },
  {
    title: 'Otros Lenguajes & Fundamentos',
    iconName: 'Code',
    skills: [
      { name: 'Python', description: 'Nivel intermedio: Automatización ágil de tareas manuales, scripting para procesamiento de archivos y manipulación de datos.', badge: 'Intermedio' },
      { name: 'C++', description: 'Programación orientada a objetos, gestión eficiente de memoria y fundamentos de RAII.' }
    ]
  }
]
