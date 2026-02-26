# Brelio — Landing Page

Landing page de [Brelio](https://brelio.com.ar), agencia de software a medida y automatización de procesos.

**Stack:** React 19 · Vite · TypeScript · Tailwind CSS v4 · Motion · Vercel Serverless

---

## Arrancar en local

```bash
# 1. Instalar dependencias
npm install

# 2. Configurar variables de entorno
cp .env.example .env
# Editá .env con tus credenciales reales

# 3. Correr en modo desarrollo
npm run dev
# → http://localhost:3000
```

> **Nota:** El formulario de contacto llama a `/api/contact` que solo funciona en Vercel. En local, el envío va a dar error de red — esto es esperado. Para testear el formulario localmente, usá el [Vercel CLI](#vercel-cli-local).

---

## CMS — Editar contenido

Todo el contenido editable del sitio está en un solo archivo:

```
src/content/siteConfig.ts
```

Desde ahí podés cambiar sin tocar ningún componente:

- Datos de la empresa (email, WhatsApp, redes)
- Items del portafolio
- Artículos del blog
- Textos del footer y navegación
- Títulos y descripciones SEO por página

Después de editar, hacé commit y push. Vercel re-deploya automáticamente.

---

## Vercel CLI (local con API)

Para testear el formulario localmente con las funciones serverless:

```bash
# Instalar Vercel CLI globalmente
npm i -g vercel

# Linkear el proyecto
vercel link

# Correr en local (levanta Vite + API juntos)
vercel dev
# → http://localhost:3000
```

---

## Deploy en Vercel

### Primera vez

1. Subí el repositorio a GitHub
2. Entrá a [vercel.com/new](https://vercel.com/new) e importá el repo
3. Vercel detecta automáticamente que es un proyecto Vite
4. Antes de confirmar el deploy, agregá las variables de entorno en "Environment Variables":

| Variable | Descripción |
|---|---|
| `SMTP_HOST` | Host SMTP (ej: `smtp.gmail.com`) |
| `SMTP_PORT` | Puerto SMTP (ej: `587`) |
| `SMTP_USER` | Tu email Gmail |
| `SMTP_PASS` | Contraseña de aplicación Gmail |
| `MAIL_TO` | Email donde recibirás leads |
| `NOTION_TOKEN` | Token de integración Notion |
| `NOTION_DATABASE_ID` | ID de la base de datos Notion |
| `APP_URL` | URL del sitio en producción |

5. Hacé clic en "Deploy"

### Re-deploys

Cada push a `main` genera un nuevo deploy automáticamente.

---

## Notion — Setup de la base de datos

Creá una base de datos en Notion con estas columnas exactas (el tipo entre paréntesis):

| Nombre | Tipo |
|---|---|
| Nombre | Title |
| Empresa | Text |
| Email | Email |
| WhatsApp | Phone |
| Objetivo | Multi-select |
| Problema | Text |
| Etapa | Select |
| Urgencia | Select |
| Presupuesto | Select |
| Fecha | Date |

Luego compartí la base de datos con tu integración desde el botón "Conectar a" en Notion.

---

## Gmail — App Password

Para usar Gmail como SMTP sin problemas:

1. Activá **Verificación en 2 pasos** en tu cuenta Google
2. Andá a [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
3. Creá una contraseña para "Correo / Windows Computer" (o cualquier nombre)
4. Usá esa contraseña de 16 caracteres como `SMTP_PASS`

---

## Estructura del proyecto

```
Brelio-LandingPage/
├── api/
│   └── contact.ts          # Serverless function: email + Notion
├── public/
│   └── favicon.svg
├── src/
│   ├── content/
│   │   └── siteConfig.ts   # ← CMS: todo el contenido editable
│   ├── components/
│   │   ├── Layout.tsx
│   │   └── Logo.tsx
│   ├── hooks/
│   │   └── usePageMeta.ts
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Services.tsx
│   │   ├── Solutions.tsx
│   │   ├── Portfolio.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── Blog.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── vercel.json
└── vite.config.ts
```

---

## Scripts

```bash
npm run dev      # Desarrollo local (puerto 3000)
npm run build    # Build de producción
npm run preview  # Preview del build local
npm run lint     # TypeScript type-check
```
