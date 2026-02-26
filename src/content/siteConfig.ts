/**
 * siteConfig.ts — Fuente única de verdad para todo el contenido editable de Brelio.
 *
 * INSTRUCCIONES DE USO (CMS):
 * Editá este archivo para actualizar textos, datos de contacto, portfolio y blog
 * sin tocar ningún componente. Cada campo está comentado para facilitar la edición.
 */

// ─── Información de la empresa ─────────────────────────────────────────────

export const company = {
  name: "Brelio",
  tagline: "Software a Medida + Automatización + Criterio de Producto",
  description:
    "Ordenamos procesos, definimos sistemas y desarrollamos soluciones a medida para empresas que necesitan operar con más claridad, control y escalabilidad.",
  email: "hola@brelio.com.ar",
  whatsapp: "+54 9 3794 120561",
  whatsappLink: "https://wa.me/5493794120561",
  address: "Argentina",
  // URLs de redes sociales
  social: {
    linkedin: "https://linkedin.com/in/lisandroarguello",
    twitter: "",
    instagram: "",
    github: "",
  },
  // URL base del sitio (sin slash final)
  siteUrl: "https://brelio.com.ar",
};

// ─── Navegación ────────────────────────────────────────────────────────────

export const navLinks = [
  { label: "Inicio", to: "/" },
  { label: "Servicios", to: "/servicios" },
  { label: "Soluciones", to: "/soluciones" },
  { label: "Casos", to: "/portfolio" },
  { label: "Nosotros", to: "/sobre-mi" },
  { label: "Contacto", to: "/contacto" },
];

// ─── SEO por página ────────────────────────────────────────────────────────

export const pageMeta = {
  home: {
    title: "Brelio – Software a Medida y Automatización de Procesos",
    description:
      "Ordenamos tu operación y la convertimos en software que realmente funciona. Desarrollo a medida, automatización y criterio de producto para PyMEs.",
  },
  services: {
    title: "Servicios – Brelio",
    description:
      "Automatización, desarrollo a medida, MVPs y consultoría de producto. Servicios para ordenar y escalar tu operación.",
  },
  solutions: {
    title: "Soluciones – Brelio",
    description:
      "Soluciones concretas para logística, ventas, RRHH, finanzas y más. Ve cómo resolvemos problemas reales.",
  },
  portfolio: {
    title: "Casos de Éxito – Brelio",
    description:
      "Proyectos reales con impacto medible. Desde sistemas logísticos hasta SaaS y apps de bienestar.",
  },
  about: {
    title: "Nosotros – Brelio",
    description:
      "Somos el punto de unión entre negocio y tecnología. Conocé nuestra filosofía y forma de trabajar.",
  },
  contact: {
    title: "Contacto – Brelio",
    description:
      "Contanos tu proceso y te decimos qué conviene construir primero. Sin compromiso, pero con criterio.",
  },
  blog: {
    title: "Blog – Brelio",
    description:
      "Reflexiones sobre producto, sistemas y la intersección entre negocio y código.",
  },
};

// ─── Portfolio / Casos de Éxito ────────────────────────────────────────────
// Para agregar un proyecto nuevo: copiá un objeto del array y editá sus campos.
// Para las imágenes, podés usar URLs de Unsplash (https://unsplash.com) o subir
// imágenes propias a /public/images/ y referenciarlas como "/images/mi-imagen.jpg".

export type Project = {
  id: number;
  title: string;
  category: string;
  tags: string[];
  description: string;
  impact: string;
  role: string;
  image: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Sistema de Gestión Operativa Milla a Milla",
    category: "Logística & Operaciones",
    tags: ["Logística", "Autoasignación", "Multi-Sucursal"],
    description:
      "Panel multi-sucursal con autoasignación por GPS y Kanban de pedidos. Solución para la asignación manual de cadetes sin visibilidad en tiempo real.",
    impact: "92% entregas a tiempo, tiempo promedio 41 min, -2.1% incidencias.",
    role: "Product Ownership + UX + Backend + Reportes",
    image:
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&q=80",
  },
  {
    id: 2,
    title: "WebApp SaaS – Calculadora de Costos Logísticos",
    category: "SaaS & Herramientas Internas",
    tags: ["SaaS", "Cálculo ROI", "Automatización"],
    description:
      "Simulador con variables técnicas configurables: costos, márgenes y retorno. Resuelve cotizaciones manuales con márgenes imprecisos.",
    impact: "Propuestas comerciales precisas en minutos con datos concretos.",
    role: "Estrategia de producto + Diseño funcional + UX",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    id: 3,
    title: "Ecommerce con Wizard de Selección Inteligente",
    category: "E-Commerce",
    tags: ["E-Commerce", "Wizard Flow", "Conversión"],
    description:
      "Wizard guiado de 3 pasos: vehículo, batería por stock real y entrega. Reduce la alta tasa de errores por selección incorrecta de batería.",
    impact: "Reducción de devoluciones y aumento de conversión en el flujo.",
    role: "UX Flow + Estrategia de conversión + Definición funcional",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  },
  {
    id: 4,
    title: "App de Finanzas Personales – Control Total",
    category: "Fintech & Finanzas",
    tags: ["Fintech", "Dashboard", "Metas Financieras"],
    description:
      "Dashboard con salud financiera, asignación automática y metas con progreso. Soluciona la falta de visibilidad de ingresos y gastos.",
    impact: "Control real, hábitos de ahorro visibles y metas proyectadas.",
    role: "Product Ownership + UX + Frontend + Modo Offline",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
  },
  {
    id: 5,
    title: "Landing + App de Bienestar",
    category: "Health Tech & Wellness",
    tags: ["Health Tech", "Habit Tracking", "Mobile-first"],
    description:
      "Sistema de 60 días: tracker diario, tarjetas IF-THEN y Protocolo 4D. Para controlar la impulsividad reactiva.",
    impact: "Cambio de hábito medible semana a semana, privacidad total.",
    role: "Estrategia de producto + UX + Landing",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
  },
  {
    id: 6,
    title: "House Shifting Service – App On-Demand",
    category: "On-Demand & Servicios",
    tags: ["On-Demand", "App Mobile", "Asignación Auto"],
    description:
      "App mobile con inventario de muebles, fecha, vehículo y asignación automática. Estandariza mudanzas y precios.",
    impact: "Cotización instantánea, proceso claro y seguimiento en tiempo real.",
    role: "UX Mobile + Estrategia de flujo + Diseño de producto",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
];

// ─── Blog / Artículos ───────────────────────────────────────────────────────
// Para agregar un artículo: copiá un objeto y editá sus campos.
// El campo `content` es el cuerpo del artículo en texto plano o markdown (opcional).

export type Article = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
};

export const articles: Article[] = [
  {
    id: 1,
    title: "Por qué tu MVP debería ser más pequeño de lo que pensás",
    excerpt:
      "La mayoría de los fundadores construyen demasiado. Aquí explico cómo recortar hasta que duela y por qué eso es exactamente lo correcto.",
    date: "Feb 2026",
    readTime: "5 min",
    category: "Estrategia",
    slug: "mvp-mas-pequeno",
  },
  {
    id: 2,
    title: "De Excel a Sistema Propio: Cuándo dar el salto",
    excerpt:
      "Señales claras de que tu hoja de cálculo ya no escala y necesitas software a medida. Una guía práctica para tomar la decisión.",
    date: "Ene 2026",
    readTime: "7 min",
    category: "Operaciones",
    slug: "de-excel-a-sistema",
  },
  {
    id: 3,
    title: "La trampa del No-Code sin estructura",
    excerpt:
      "Las herramientas visuales son geniales, pero si el proceso está roto, solo automatizarás el caos. Lo que nadie te dice sobre no-code.",
    date: "Dic 2025",
    readTime: "4 min",
    category: "Tecnología",
    slug: "trampa-no-code",
  },
];

// ─── Footer ─────────────────────────────────────────────────────────────────

export const footerDescription =
  "Ordenamos procesos, definimos sistemas y desarrollamos soluciones a medida para empresas que necesitan operar con más claridad, control y escalabilidad.";

export const footerContactBlurb =
  "Hablemos de tu operación. Si hoy sentís que el negocio creció más rápido que tus procesos, probablemente ya sea momento de estructurarlo.";
