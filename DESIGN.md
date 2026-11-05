# Design System: LimaSync Solutions (Refined Precision)

Sistema de diseño formalizado para LimaSync Solutions. Evolución refinada de la identidad actual (papel técnico cálido + azul eléctrico de ingeniería + tipografía mono/grotesk), elevando el estándar visual sin alterar la identidad base.

---

## 1. Aesthetic & Worldview (Identidad Visual)

- **Postura:** *Editorial Engineering / Swiss Modernism*. 
- **Filosofía:** "Lo que ya está, pero llevado a nivel de estudio de software de clase mundial".
- **Concepto clave:** Máxima legibilidad, contraste deliberado, bordes milimétricos (1px con hairline precision) y eliminación de sombras difusas o ruido visual innecesario.
- **Micro-interacciones:** Rápidas, mecánicas y sin rebotes exagerados (`cubic-bezier(0.16, 1, 0.3, 1)`).

---

## 2. Color Palette & Tokens

Paleta basada en superficies cálidas tipo papel técnico suizo, con texto en tinta carbón profundo y un azul eléctrico de ingeniería reservado para puntos de acción y conversión.

```css
:root {
  /* Surface Ladder (Papel técnico cálido) */
  --paper: #f8f7f4;        /* Canvas base limpio, tono papel natural */
  --paper-2: #f0eee8;      /* Elevación 1: cards, contenedores secundarios */
  --paper-3: #e8e5dc;      /* Elevación 2: chips, tags, estados hover en botones */
  --paper-dark: #121316;   /* Superficie oscura para bloques técnicos / footer */

  /* Ink Spectrum (Tinta técnica) */
  --ink: #111110;          /* Texto primario y títulos de alto impacto */
  --ink-soft: #4b4943;     /* Texto de apoyo, explicaciones secundarias */
  --ink-muted: #828075;    /* Números de paso, kicker labels, timestamps */

  /* Hairlines & Borders */
  --line: #ded9cd;         /* Divisores principales de sección y grilla */
  --line-subtle: #eae6dc;  /* Líneas internas de tablas o cards */
  --line-strong: #111110;  /* Bordes de énfasis estructural */

  /* Engineering Accents (Azul Eléctrico / Cyan) */
  --accent: #0284c7;        /* Azul técnico primario */
  --accent-strong: #0369a1; /* Azul sobrio para enlaces y títulos destacados */
  --accent-vibrant: #0ea5e9;/* Puntos de foco, badges de entrega en 72h */
  --accent-ink: #ffffff;    /* Texto sobre fondo de acento */

  /* Functional Accents */
  --status-live: #16a34a;   /* Verde de disponibilidad / WhatsApp online */
  --status-badge: #dcfce7;  /* Fondo de badges de confirmación */
}
```

---

## 3. Typography Hierarchy

Combinación intencional de **Space Grotesk** (carácter geométrico y moderno) con **IBM Plex Mono** (precisión técnica de ingeniería).

| Rol | Tipografía | Tamaño / Tracking | Uso |
|---|---|---|---|
| **Display (Hero Headline)** | `Space Grotesk` (700) | `clamp(2.5rem, 6vw, 4.25rem)` / `-0.035em` | Título de apertura, mensaje principal de entrega 72h |
| **H2 Section Headings** | `Space Grotesk` (700) | `clamp(1.85rem, 3.8vw, 2.75rem)` / `-0.025em` | Títulos de bloques ("Qué hacemos", "Tarifas") |
| **H3 Card Titles** | `Space Grotesk` (600) | `1.25rem – 1.45rem` / `-0.015em` | Nombres de planes, servicios y módulos |
| **Body Primary** | `Space Grotesk` (400) | `1.05rem` / `-0.01em` / Interlineado `1.6` | Descripciones de servicios y párrafos del Hero |
| **Technical & Kicker** | `IBM Plex Mono` (500) | `0.78rem – 0.85rem` / `+0.04em` / `uppercase` | Pre-títulos ("01 / SERVICIOS"), badges, precios unitarios |
| **Code & Data Values** | `IBM Plex Mono` (600) | `0.9rem – 1.1rem` | Tiempos de entrega ("72h"), cifras y montos monetarios |

---

## 4. Spacing & Structural Grid

- **Layout base:** Sistema de rejilla fluida con contenedor máximo calibrado a `1180px` (`.wrap`).
- **Ritmo vertical:**
  - Separación entre secciones: `clamp(4.5rem, 8vw, 7rem)`.
  - Distancia título-a-contenido: `clamp(2rem, 3.5vw, 3rem)`.
- **Estructura de tarjetas:**
  - Padding interno: `clamp(1.5rem, 3vw, 2.5rem)`.
  - Radio de curvatura: `12px` (sobrio, no redondeo excesivo ni burbujas estilo app móvil genérica).
  - Bordes: `1px solid var(--line)` o `1.5px solid var(--ink)` en planes destacados.

---

## 5. UI Elements & Component Standards

### Botones
- **Primario (`.btn-accent`):** Fondo `var(--accent-strong)`, texto `var(--accent-ink)`, borde nulo o sutil. Padding horizontal `1.5rem`, vertical `0.85rem`. Hover con leve oscurecimiento o micro-elevación (`transform: translateY(-1px)`).
- **Secundario / Outline (`.btn`):** Fondo `transparent`, borde `1.5px solid var(--ink)`, texto `var(--ink)`.
- **Botón WhatsApp Flotante:** Fijado inferior derecho, indicador de estado verde pulsante ("En línea ahora"), sin obstruir contenido central ni el footer en móviles.

### Tags y Chips
- Fondo `var(--paper-3)`, texto `var(--ink-soft)`, tipografía mono reducida a `0.78rem`.
- Borde sutil `1px solid var(--line)`.

---

## 6. Motion & Animation Principles

- **Duración:** Rápida y precisa (`150ms – 250ms`).
- **Transiciones:** Suaves sobre opacidad y traslación vertical de 4px (`translateY(-2px)` a `translateY(-4px)`).
- **Regla de oro:** Sin rebotes infantiles (*springs* descontrolados) ni animaciones de entrada lentas que demoren la lectura o el cierre de venta.
