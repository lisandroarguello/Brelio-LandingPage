# Auditoría de Contenido y UX — Home Page Brelio

> Fecha: 2026-03-31
> Objetivo: Reducir texto en la home + auditar consistencia UX (tipografía, espaciado, jerarquía)

---

## 1. MAPA DE SECCIONES — Estado actual

```
┌─────────────────────────────────────────────────────────────┐
│                    HOME PAGE — 9 SECCIONES                  │
│                    ~503 líneas de código                     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  1. HERO                          min-h-[90vh]        │  │
│  │     - Badge tagline (1 línea)                         │  │
│  │     - H1 título (2 líneas)                            │  │
│  │     - Subtítulo (2 líneas)                            │  │
│  │     - 2 CTAs                                          │  │
│  │     Texto total: ~35 palabras                         │  │
│  │     VEREDICTO: ✅ OK — conciso y efectivo             │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  2. PROBLEMA/CONTRASTE            py-24/py-32         │  │
│  │     - H2 + 3 párrafos + callout (izquierda)           │  │
│  │     - 2 cards con 5 items c/u (derecha)               │  │
│  │     - Frase mono al pie del card                      │  │
│  │     Texto total: ~120 palabras                        │  │
│  │     VEREDICTO: ⚠️ EXCESIVO — redundante con Hero      │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  3. QUÉ HACEMOS (Servicios)       py-24/py-32         │  │
│  │     - H2 + subtítulo + 6 cards + callout              │  │
│  │     Texto total: ~80 palabras                         │  │
│  │     VEREDICTO: ✅ OK — cards son concisos             │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  4. METODOLOGÍA                   py-24/py-32         │  │
│  │     - H2 + subtítulo + 3 cards + frase mono           │  │
│  │     Texto total: ~70 palabras                         │  │
│  │     VEREDICTO: ✅ OK — estructura clara               │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  5. BENEFICIOS                    py-24/py-32         │  │
│  │     - H2 + 6 items lista + quote + mockup decorativo  │  │
│  │     Texto total: ~80 palabras                         │  │
│  │     VEREDICTO: ⚠️ REDUNDANTE — repite ideas sec. 2-4  │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  6. TARGET / AUDIENCIA            py-24/py-32         │  │
│  │     - H2 + card "es para vos si" (5 items)            │  │
│  │     - Perfil ideal + descripción                      │  │
│  │     Texto total: ~90 palabras                         │  │
│  │     VEREDICTO: ⚠️ FUSIONABLE con Diferencial          │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  7. DIFERENCIAL / USP             py-24/py-32         │  │
│  │     - H2 + párrafo + 4 items + card "Resultado"       │  │
│  │     Texto total: ~100 palabras                        │  │
│  │     VEREDICTO: ⚠️ FUSIONABLE con Target               │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  8. CTA FINAL                     py-32               │  │
│  │     - H2 + subtítulo + 2 CTAs + nota                  │  │
│  │     Texto total: ~40 palabras                         │  │
│  │     VEREDICTO: ✅ OK — cierre efectivo                │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  9. FOOTER (Layout.tsx)                               │  │
│  │     - Logo + descripción + nav + contacto             │  │
│  │     Texto total: ~50 palabras                         │  │
│  │     VEREDICTO: ✅ OK                                  │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                             │
│  TOTAL ESTIMADO: ~665 palabras en Home                     │
│  OBJETIVO: Reducir a ~400-450 palabras (-30/35%)           │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. DIAGNÓSTICO DE CONTENIDO — Texto a reducir

### Secciones con problemas de densidad de texto

```
REDUNDANCIA DE MENSAJES — Flujo actual
═══════════════════════════════════════

Hero ──────► "Salir del Excel, WhatsApp, procesos manuales"
                │
Problema ──► "Procesos en Excel, WhatsApp y personas clave"   ← REPITE
                │
Beneficios ─► "Menos tareas manuales"                         ← REPITE
                │
Target ────► "Tu operación depende de Excel, WhatsApp         ← REPITE x3
              o procesos manuales"
                │
CTA Final ──► "Si tu operación depende de tareas manuales"    ← REPITE x4

═══════════════════════════════════════
El mismo dolor se menciona 5 VECES en la home.
Recomendación: Mencionarlo fuerte 1 vez (Hero) y referirlo
implícitamente en el resto.
```

### Plan de reducción por sección

```
┌─────────────────┬──────────────┬──────────────┬─────────────────────────────┐
│ Sección         │ Palabras HOY │ Palabras META│ Acción                      │
├─────────────────┼──────────────┼──────────────┼─────────────────────────────┤
│ 1. Hero         │     ~35      │     ~30      │ Mantener, acortar subtítulo │
│ 2. Problema     │    ~120      │     ~70      │ Eliminar párrafo medio,     │
│                 │              │              │ simplificar callout         │
│ 3. Servicios    │     ~80      │     ~60      │ Eliminar callout inferior   │
│ 4. Metodología  │     ~70      │     ~60      │ Mantener (bien estructurado)│
│ 5. Beneficios   │     ~80      │      0       │ ❌ ELIMINAR SECCIÓN         │
│ 6. Target       │     ~90      │     ~50      │ Fusionar con Diferencial    │
│ 7. Diferencial  │    ~100      │     ~70      │ Fusionar con Target,        │
│                 │              │              │ simplificar                 │
│ 8. CTA Final    │     ~40      │     ~30      │ Simplificar heading         │
│ 9. Footer       │     ~50      │     ~50      │ Mantener                    │
├─────────────────┼──────────────┼──────────────┼─────────────────────────────┤
│ TOTAL           │    ~665      │    ~420      │ -37% reducción              │
└─────────────────┴──────────────┴──────────────┴─────────────────────────────┘
```

### Estructura propuesta (de 9 → 7 secciones)

```
ANTES (9 secciones)              DESPUÉS (7 secciones)
═══════════════════              ══════════════════════

1. Hero ────────────────────►    1. Hero (sin cambios)
2. Problema/Contraste ──────►    2. Problema/Contraste (recortado)
3. Servicios ───────────────►    3. Servicios (sin callout final)
4. Metodología ─────────────►    4. Metodología (sin cambios)
5. Beneficios ──────────────►    ❌ ELIMINADA (redundante)
6. Target ──────────────────┐
                            ├──► 5. Por qué Brelio (fusión 6+7)
7. Diferencial ─────────────┘
8. CTA Final ───────────────►    6. CTA Final (simplificado)
9. Footer ──────────────────►    7. Footer (sin cambios)
```

---

## 3. AUDITORÍA UX — Tipografía

### Inventario de tamaños tipográficos

```
ESCALA TIPOGRÁFICA ACTUAL
═════════════════════════

                    Mobile              Desktop             Uso
                    ──────              ───────             ───
Hero H1:            text-5xl (3rem)     text-7xl → 8xl     Título principal
                                        (4.5→6rem)

Section H2 (x5):   text-3xl (1.875rem) text-5xl (3rem)    Títulos de sección
                    text-4xl (2.25rem)  text-6xl (3.75rem) CTA Final H2
                    text-3xl            text-4xl (2.25rem) Differential H2

Card Titles:        text-xl (1.25rem)   text-xl             Cards problema
                    text-2xl (1.5rem)   text-2xl            Cards metodología
                    text-xl             text-xl             Cards servicio
                    text-2xl            text-2xl            "Brelio es para vos"
                    text-2xl            text-2xl            "El Resultado"

Body Text:          text-lg (1.125rem)  text-xl (1.25rem)  Subtítulos sección
                    text-lg             text-lg             Párrafos
                    text-sm (0.875rem)  text-sm             Items de lista
                    text-xl             text-xl             Quote beneficios

Small/Meta:         text-xs (0.75rem)   text-sm (0.875rem) Badges, labels
                    text-sm             text-sm             Footer, mono labels
```

### Problemas de consistencia tipográfica

```
⚠️  INCONSISTENCIAS DETECTADAS
════════════════════════════════

1. HEADINGS H2 — 3 tamaños distintos
   ┌──────────────────────────────────────────────────────┐
   │ Sección Problema:    text-3xl → text-5xl             │
   │ Sección Target:      text-3xl → text-4xl   ← MENOR  │
   │ Sección Diferencial: text-3xl → text-4xl   ← MENOR  │
   │ Sección CTA Final:   text-4xl → text-6xl   ← MAYOR  │
   │ Resto de secciones:  text-3xl → text-5xl             │
   └──────────────────────────────────────────────────────┘
   RECOMENDACIÓN: Unificar todos los H2 a text-3xl → md:text-5xl
   Excepto CTA Final que puede ser text-4xl → md:text-5xl

2. CARD TITLES — 2 tamaños mezclados sin razón
   ┌──────────────────────────────────────────────────────┐
   │ Cards de servicio:     text-xl                       │
   │ Cards de metodología:  text-2xl   ← MÁS GRANDE      │
   │ Cards de problema:     text-xl                       │
   └──────────────────────────────────────────────────────┘
   RECOMENDACIÓN: Unificar a text-xl en todos los cards

3. LIST ITEMS — inconsistencia de tamaño
   ┌──────────────────────────────────────────────────────┐
   │ Lista problema (card):    text-sm                    │
   │ Lista beneficios:         text-lg   ← MUY DIFERENTE │
   │ Lista "es para vos si":   text-lg                    │
   └──────────────────────────────────────────────────────┘
   RECOMENDACIÓN: Unificar listas en cards a text-sm,
   listas standalone a text-base

4. BODY TEXT — cambios de tamaño inline
   ┌──────────────────────────────────────────────────────┐
   │ Línea 105: text-xl dentro de un párrafo text-lg      │
   │            "Tienen un problema de estructura"         │
   │ Línea 415: text-xl dentro de un párrafo text-lg      │
   │            "En Brelio, unificamos ambas partes"       │
   └──────────────────────────────────────────────────────┘
   RECOMENDACIÓN: Usar solo font-bold para énfasis,
   no cambiar tamaño inline
```

### Escala tipográfica recomendada

```
ESCALA PROPUESTA (Design System)
════════════════════════════════

Token          │ Mobile         │ Desktop          │ Uso
───────────────┼────────────────┼──────────────────┼─────────────────
display        │ text-5xl       │ text-7xl         │ Solo Hero H1
h2             │ text-3xl       │ text-5xl         │ Todos los H2
h3             │ text-xl        │ text-xl          │ Títulos de cards
h4             │ text-lg        │ text-lg          │ Sub-items, labels
body-lg        │ text-lg        │ text-xl          │ Subtítulos sección
body           │ text-base      │ text-base        │ Párrafos normales
body-sm        │ text-sm        │ text-sm          │ Items en cards
caption        │ text-xs        │ text-sm          │ Badges, meta, mono
```

---

## 4. AUDITORÍA UX — Espaciado y Layout

```
PADDING DE SECCIONES — Estado actual
═════════════════════════════════════

Sección          │ Padding Y           │ Consistente?
─────────────────┼─────────────────────┼──────────────
Hero             │ pt-24 pb-32         │ ⚠️ Asimétrico
Problema         │ py-24 md:py-32      │ ✅
Servicios        │ py-24 md:py-32      │ ✅
Metodología      │ py-24 md:py-32      │ ✅
Beneficios       │ py-24 md:py-32      │ ✅
Target           │ py-24 md:py-32      │ ✅
Diferencial      │ py-24 md:py-32      │ ✅
CTA Final        │ py-32               │ ⚠️ Sin responsive
Footer           │ py-12               │ ✅ (distinto rol)

RECOMENDACIÓN: Unificar py-24 md:py-32 en todas las secciones.
CTA Final debería ser py-24 md:py-32 también.


GAPS ENTRE HEADING Y CONTENIDO
═══════════════════════════════

Sección          │ mb del H2     │ Consistente?
─────────────────┼───────────────┼──────────────
Hero             │ mb-8          │ ─
Problema         │ mb-8          │ ✅
Servicios        │ mb-8 → mb-20  │ ⚠️ Doble (header wrapper mb-20)
Metodología      │ mb-6 → mb-20  │ ⚠️ Doble (wrapper mb-20)
Beneficios       │ mb-10         │ ⚠️ Distinto
Target           │ mb-6 → mb-16  │ ⚠️ Distinto
Diferencial      │ mb-8          │ ✅
CTA Final        │ mb-8          │ ✅

RECOMENDACIÓN: Estandarizar:
  - mb-6 para H2 a subtítulo
  - mb-16 para header-group a contenido
```

---

## 5. AUDITORÍA UX — Colores y Estados

```
COLORES DE TEXTO — Uso actual
══════════════════════════════

Color               │ Usos                          │ Consistente?
────────────────────┼───────────────────────────────┼──────────────
text-white          │ Headings, énfasis             │ ✅
text-slate-200      │ Items lista solución          │ ⚠️ Solo 1 uso
text-slate-300      │ Items lista beneficios/target │ ✅
text-slate-400      │ Body text, subtítulos         │ ✅
text-slate-500      │ H2 secundario, meta text      │ ✅
text-gray-400       │ Nav links, footer links       │ ⚠️ Mezcla gray/slate
text-gray-500       │ Footer headings               │ ⚠️ Mezcla gray/slate
text-gray-600       │ Footer copyright              │ ⚠️ Mezcla gray/slate

PROBLEMAS:
  1. Se mezclan paletas "slate" y "gray" sin razón
  2. text-slate-200 solo se usa en 1 lista (inconsistente)

RECOMENDACIÓN:
  - Unificar todo a paleta "slate"
  - text-slate-200 → text-slate-300 (unificar listas)
  - text-gray-400/500/600 → text-slate-400/500/600
```

```
BORDES — Patrones actuales
══════════════════════════

Patrón                    │ Usos │ Consistente?
──────────────────────────┼──────┼──────────────
border-white/5            │  12  │ ✅ Borde sutil
border-white/10           │   4  │ ✅ Borde medio
border-white/20           │   1  │ ✅ Hover state
border-emerald-500/10     │   2  │ ✅ Accent sutil
border-emerald-500/20     │   3  │ ✅ Accent medio
border-emerald-500/30     │   2  │ ✅ Accent fuerte
border-red-500/10         │   1  │ ✅ Error sutil

VEREDICTO: ✅ Los bordes son consistentes
```

---

## 6. AUDITORÍA UX — Botones / CTAs

```
BOTONES — Inventario completo
══════════════════════════════

Ubicación     │ Estilo                              │ Tamaño    │ Padding
──────────────┼─────────────────────────────────────┼───────────┼──────────
Hero CTA 1    │ bg-emerald-500, text-slate-900      │ text-lg   │ px-8 py-4
Hero CTA 2    │ bg-white/5, border-white/10         │ text-lg   │ px-8 py-4
Nav "Hablemos"│ bg-white, text-black                │ text-sm   │ px-5 py-2
CTA Final 1   │ bg-emerald-500, text-slate-900      │ text-xl   │ px-10 py-5
CTA Final 2   │ bg-white/5, border-white/10         │ text-xl   │ px-10 py-5

PROBLEMAS:
  1. ⚠️ CTAs del Hero (text-lg, px-8 py-4) vs CTA Final (text-xl, px-10 py-5)
     → Tamaños distintos para el mismo tipo de botón
  2. ⚠️ Hero CTA 1 tiene font-bold, CTA Final 1 también → OK
  3. ⚠️ Hero CTA 1 tiene shadow-lg, CTA Final 1 tiene shadow-xl → inconsistente
  4. ⚠️ Hero CTA 1 tiene hover:bg-emerald-400, CTA Final no tiene hover color

RECOMENDACIÓN: Unificar CTAs primarios y secundarios:
  - Primario: px-8 py-4 text-lg font-bold bg-emerald-500
              hover:bg-emerald-400 shadow-lg shadow-emerald-500/20
  - Secundario: px-8 py-4 text-lg font-medium bg-white/5
                border border-white/10 hover:bg-white/10
```

---

## 7. RESUMEN EJECUTIVO — Prioridades

```
MATRIZ DE IMPACTO vs ESFUERZO
══════════════════════════════

              Alto Impacto                    Bajo Impacto
         ┌────────────────────────┬────────────────────────┐
         │                        │                        │
  Bajo   │ 1. Eliminar sección   │ 4. Unificar gray→slate │
 Esfuerzo│    Beneficios          │                        │
         │ 2. Fusionar Target +  │ 5. Estandarizar mb     │
         │    Diferencial         │    de headings         │
         │                        │                        │
         ├────────────────────────┼────────────────────────┤
         │                        │                        │
  Alto   │ 3. Reducir texto      │ 6. Componentizar       │
 Esfuerzo│    sección Problema    │    botones (futuro)    │
         │                        │                        │
         │ 7. Unificar escala    │                        │
         │    tipográfica         │                        │
         └────────────────────────┴────────────────────────┘


ORDEN DE EJECUCIÓN RECOMENDADO:
═══════════════════════════════

  PASO 1 → Eliminar sección "Beneficios" (líneas 305-357)
  PASO 2 → Fusionar secciones "Target" + "Diferencial" en una
  PASO 3 → Recortar texto de sección "Problema"
  PASO 4 → Unificar H2 a text-3xl md:text-5xl
  PASO 5 → Unificar card titles a text-xl
  PASO 6 → Reemplazar gray→slate en Layout.tsx
  PASO 7 → Unificar CTAs (tamaño y estados hover)
  PASO 8 → Estandarizar espaciado (mb, py de secciones)
```

---

## 8. DETALLE DE CAMBIOS POR ARCHIVO

### `src/pages/Home.tsx`

| Líneas | Cambio | Tipo |
|--------|--------|------|
| 48 | `lg:text-8xl` → eliminar, dejar `md:text-7xl` | Tipografía |
| 98 | Mantener `text-3xl md:text-5xl` | OK |
| 102-113 | Reducir a 1 párrafo + callout | Contenido |
| 105 | Eliminar `text-xl` inline del `<strong>` | Tipografía |
| 181 | Mantener `text-3xl md:text-5xl` | OK |
| 237-241 | Eliminar callout inferior de Servicios | Contenido |
| 293 | `text-2xl` → `text-xl` (card titles metodología) | Tipografía |
| 305-357 | **ELIMINAR sección Beneficios completa** | Contenido |
| 359-467 | **FUSIONAR Target + Diferencial** | Contenido |
| 363 | `text-3xl md:text-4xl` → `text-3xl md:text-5xl` | Tipografía |
| 411 | `text-3xl md:text-4xl` → `text-3xl md:text-5xl` | Tipografía |
| 415 | Eliminar `text-xl` inline del `<span>` | Tipografía |
| 472 | `text-4xl md:text-6xl` → `text-3xl md:text-5xl` | Tipografía |
| 470 | `py-32` → `py-24 md:py-32` | Espaciado |
| 482 | `text-xl px-10 py-5` → `text-lg px-8 py-4` | Botones |
| 488 | `text-xl px-10 py-5` → `text-lg px-8 py-4` | Botones |

### `src/components/Layout.tsx`

| Líneas | Cambio | Tipo |
|--------|--------|------|
| 17 | `text-gray-400` → `text-slate-400` | Color |
| 195 | `text-gray-500` → `text-slate-500` | Color |
| 196 | `text-gray-400` → `text-slate-400` | Color |
| 208 | `text-gray-500` → `text-slate-500` | Color |
| 212 | `text-gray-400` → `text-slate-400` | Color |
| 231 | `text-gray-600` → `text-slate-600` | Color |

---

*Este documento es un diagnóstico. Los cambios se aplicarán en commits separados por tipo (contenido, tipografía, colores, espaciado).*
