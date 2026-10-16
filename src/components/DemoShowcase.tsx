"use client";

import { useState } from "react";

interface TemplateInfo {
  slug: string;
  rubroId: string;
  rubroName: string;
  rubroIcon: string;
  title: string;
  desc: string;
  idealFor: string;
  features: string[];
  color: string;
  badge: string;
  hasLiveDemo: boolean;
}

interface DemoShowcaseProps {
  lang?: "es" | "en";
}

const RUBROS_ES = [
  { id: "all", label: "Todos los Rubros", icon: "✨" },
  { id: "gastronomia", label: "Gastronomía & Bares", icon: "🍽️" },
  { id: "salud", label: "Salud & Bienestar", icon: "🩺" },
  { id: "legal", label: "Legal & Corporativo", icon: "⚖️" },
  { id: "moda", label: "Moda & Comercio", icon: "🛍️" },
  { id: "servicios", label: "Servicios Técnicos", icon: "🔧" },
  { id: "educacion", label: "Educación & Academias", icon: "🎓" },
  { id: "hoteleria", label: "Hoteles & Hospedaje", icon: "🏨" },
];

const RUBROS_EN = [
  { id: "all", label: "All Industries", icon: "✨" },
  { id: "gastronomia", label: "Dining & Bars", icon: "🍽️" },
  { id: "salud", label: "Health & Aesthetics", icon: "🩺" },
  { id: "legal", label: "Legal & Advisory", icon: "⚖️" },
  { id: "moda", label: "Fashion & Retail", icon: "🛍️" },
  { id: "servicios", label: "Technical Services", icon: "🔧" },
  { id: "educacion", label: "Education & Coaching", icon: "🎓" },
  { id: "hoteleria", label: "Hotels & Real Estate", icon: "🏨" },
];

const TEMPLATES_ES: TemplateInfo[] = [
  {
    slug: "restaurante",
    rubroId: "gastronomia",
    rubroName: "Gastronomía & Alimentos",
    rubroIcon: "🍽️",
    title: "La Redonda — Cevichería & Bistro",
    desc: "Menú interactivo categorizado, carrito de compras en tiempo real, cálculo de delivery y checkout directo formateado a WhatsApp.",
    idealFor: "Cevicherías, Pollerías, Cafeterías, Bares, Dark Kitchens y Pastelerías",
    features: ["Menú QR Digital", "Cálculo de Delivery", "Pedidos a WhatsApp", "Reservas de Mesa"],
    color: "#ea580c",
    badge: "Alta Demanda",
    hasLiveDemo: true,
  },
  {
    slug: "salud",
    rubroId: "salud",
    rubroName: "Salud, Odontología & Bienestar",
    rubroIcon: "🩺",
    title: "San Isidro Dental & Estética",
    desc: "Agendamiento interactivo de citas por fecha/turno, catálogo de especialidades con tarifas transparentes y botón de urgencias 24/7.",
    idealFor: "Clínicas Dentales, Consultorios Médicos, Centros Estéticos, Spas y Fisioterapia",
    features: ["Agendamiento de Citas", "Catálogo de Tratamientos", "Urgencias 24h", "WhatsApp Integrado"],
    color: "#0284c7",
    badge: "Profesional",
    hasLiveDemo: true,
  },
  {
    slug: "legal",
    rubroId: "legal",
    rubroName: "Legal, Notarías & Asesoría",
    rubroIcon: "⚖️",
    title: "Vargas & Asociados Abogados",
    desc: "Presencia sobria de alto estatus, desglose de áreas de práctica (Societario, Marcas INDECOPI, Litigios) y formulario de diagnóstico confidencial.",
    idealFor: "Estudios Jurídicos, Notarías, Estudios Contables y Consultorías Tributarias",
    features: ["Diagnóstico Confidencial", "Marcas INDECOPI", "RUC 20 Societario", "Citas Privadas"],
    color: "#d97706",
    badge: "Corporativo",
    hasLiveDemo: true,
  },
  {
    slug: "tienda",
    rubroId: "moda",
    rubroName: "Moda, Calzado & Retail (E-commerce)",
    rubroIcon: "🛍️",
    title: "Gamarra Urbana Streetwear",
    desc: "Tienda online rápida con selector de tallas y colores, control de bolsa de compras, cálculo de envíos Olva/Shalom y pago por Yape/Plin.",
    idealFor: "Boutiques, Tiendas de Ropa, Calzado, Marcas de Gamarra, Joyería y Accesorios",
    features: ["Selector Talla/Color", "Checkout WhatsApp", "Cálculo Envíos Perú", "Catálogo Visual"],
    color: "#8b5cf6",
    badge: "E-Commerce Express",
    hasLiveDemo: true,
  },
  {
    slug: "servicios",
    rubroId: "servicios",
    rubroName: "Servicios Técnicos & Mantenimiento",
    rubroIcon: "🔧",
    title: "LimaFix Pro Services",
    desc: "Gasfitería, electricidad y climatización con cotizador dinámico por distrito de Lima y botón de emergencia para llegadas en 45 minutos.",
    idealFor: "Gasfiteros, Electricistas, Climatización, Cerrajerías, Pintores y Reformas",
    features: ["Cotizador por Distrito", "Botón de Urgencia 24h", "Precios Transparentes", "Garantía Escrita"],
    color: "#10b981",
    badge: "Alta Conversión",
    hasLiveDemo: true,
  },
  {
    slug: "educacion",
    rubroId: "educacion",
    rubroName: "Educación, Talleres & Cursos",
    rubroIcon: "🎓",
    title: "Nexus Academia & Capacitación",
    desc: "Catálogo de cursos y talleres con fechas de inicio, syllabus descargable, perfil de profesores y matrícula exprés a WhatsApp.",
    idealFor: "Academias, Institutos, Cursos Virtuales, Talleres Infantiles y Asesorías de Tesis",
    features: ["Catálogo de Cursos", "Syllabus en PDF", "Matrícula WhatsApp", "Pagos Yape/Plin"],
    color: "#6366f1",
    badge: "Formación",
    hasLiveDemo: true,
  },
  {
    slug: "hoteleria",
    rubroId: "hoteleria",
    rubroName: "Hotelería, Hospedaje & Airbnb",
    rubroIcon: "🏨",
    title: "Nuna Boutique Hotel & Suites",
    desc: "Galería de habitaciones y departamentos, calculadora de tarifa por noche, amenidades y reservas directas a WhatsApp sin comisiones.",
    idealFor: "Hoteles Boutique, Hostales Turísticos, Departamentos Airbnb y Casas de Playa",
    features: ["Galería de Habitaciones", "Tarifas por Temporada", "Sin Comisiones Booking", "Reserva WhatsApp"],
    color: "#ec4899",
    badge: "Turismo & Alojamientos",
    hasLiveDemo: true,
  },
];

const TEMPLATES_EN: TemplateInfo[] = [
  {
    slug: "restaurante",
    rubroId: "gastronomia",
    rubroName: "Dining & Food Service",
    rubroIcon: "🍽️",
    title: "La Redonda — Cevichería & Bistro",
    desc: "Interactive categorized menu, real-time cart, automated delivery fee estimation, and direct WhatsApp checkout.",
    idealFor: "Cevicherías, Chicken Rotisseries, Cafés, Bars, Dark Kitchens and Bakeries",
    features: ["Digital QR Menu", "Delivery Calculator", "WhatsApp Ordering", "Table Booking"],
    color: "#ea580c",
    badge: "Most Popular",
    hasLiveDemo: true,
  },
  {
    slug: "salud",
    rubroId: "salud",
    rubroName: "Healthcare & Aesthetics",
    rubroIcon: "🩺",
    title: "San Isidro Dental & Aesthetics",
    desc: "Interactive appointment scheduling, treatment catalog with upfront pricing, and 24/7 emergency dispatch.",
    idealFor: "Dental Clinics, Medical Practices, Aesthetic Clinics, Spas and Physical Therapy",
    features: ["Online Booking", "Treatment Catalog", "24/7 Emergencies", "WhatsApp Direct"],
    color: "#0284c7",
    badge: "Professional",
    hasLiveDemo: true,
  },
  {
    slug: "legal",
    rubroId: "legal",
    rubroName: "Legal & Business Advisory",
    rubroIcon: "⚖️",
    title: "Vargas & Associates Law",
    desc: "Distinguished corporate presence, practice areas (Corporate, Trademarks, Litigation), and confidential legal assessment form.",
    idealFor: "Law Firms, Notaries, Accounting Firms, Tax & Management Consultancies",
    features: ["Confidential Assessment", "Trademark Registration", "Corporate Law", "Private Consults"],
    color: "#d97706",
    badge: "Corporate",
    hasLiveDemo: true,
  },
  {
    slug: "tienda",
    rubroId: "moda",
    rubroName: "Fashion & Retail (E-commerce)",
    rubroIcon: "🛍️",
    title: "Gamarra Urbana Streetwear",
    desc: "High-speed digital store with size/color pickers, shopping bag drawer, shipping calculations, and WhatsApp checkout.",
    idealFor: "Boutiques, Clothing Brands, Footwear, Fashion Retailers and Accessories",
    features: ["Size & Color Picker", "WhatsApp Checkout", "Live Cart Drawer", "Visual Catalog"],
    color: "#8b5cf6",
    badge: "Express Store",
    hasLiveDemo: true,
  },
  {
    slug: "servicios",
    rubroId: "servicios",
    rubroName: "Technical Services & Repairs",
    rubroIcon: "🔧",
    title: "LimaFix Pro Services",
    desc: "Plumbing, electrical, and HVAC repairs with dynamic district cost calculator and 45-minute emergency dispatch.",
    idealFor: "Plumbers, Electricians, HVAC Specialists, Locksmiths and Contractors",
    features: ["District Calculator", "24/7 Emergency Dispatch", "Upfront Pricing", "Written Guarantee"],
    color: "#10b981",
    badge: "High Conversion",
    hasLiveDemo: true,
  },
  {
    slug: "educacion",
    rubroId: "educacion",
    rubroName: "Education & Coaching",
    rubroIcon: "🎓",
    title: "Nexus Academy & Coaching",
    desc: "Course & workshop catalog with upcoming intake dates, downloadable syllabus, instructor bios, and WhatsApp enrollment.",
    idealFor: "Academies, Online Courses, Workshops, Thesis Advisors and Personal Trainers",
    features: ["Course Catalog", "Downloadable Syllabus", "WhatsApp Enrollment", "Direct Payment"],
    color: "#6366f1",
    badge: "Learning",
    hasLiveDemo: true,
  },
  {
    slug: "hoteleria",
    rubroId: "hoteleria",
    rubroName: "Hospitality & Vacation Rentals",
    rubroIcon: "🏨",
    title: "Nuna Boutique Hotel & Suites",
    desc: "Room & apartment galleries, seasonal nightly rates, amenities guide, and zero-commission direct WhatsApp bookings.",
    idealFor: "Boutique Hotels, Hostels, Airbnb Rentals, Bed & Breakfasts and Beach Houses",
    features: ["Room Gallery", "Seasonal Rates", "0% Booking Commission", "WhatsApp Direct"],
    color: "#ec4899",
    badge: "Hospitality",
    hasLiveDemo: true,
  },
];

const copy = {
  es: {
    kicker: "Plantillas por Rubros · Arquitecturas Especializadas en 72 Horas",
    title: "Elige la Plantilla Diseñada para tu Rubro",
    subtitle:
      "Cada tipo de negocio vende de forma diferente. No usamos plantillas genéricas: cada arquitectura incluye las herramientas exactas de tu rubro (carta QR, agendamiento de citas, cotizador por distrito o carrito Yape) listas por solo S/ 499.",
    filterAll: "Todos los Rubros",
    idealLabel: "Ideal para:",
    viewDemo: "Probar Demo en Vivo ↗",
    requestRubro: "Pedir este Rubro por WhatsApp →",
    orderWa: "Cotizar plantilla para mi negocio",
    waMsg: (t: TemplateInfo) =>
      `Hola LimaSync Solutions, tengo un negocio en el rubro de ${t.rubroName} y me interesa la plantilla (${t.title}) de S/ 499.`,
  },
  en: {
    kicker: "Templates by Industry · Tailored Web Architectures in 72 Hours",
    title: "Select the Template Built for Your Industry",
    subtitle:
      "Every business sells differently. We don't build generic websites: each architecture incorporates the exact tools your industry needs (QR menu, appointment scheduler, district calculator, or instant WhatsApp checkout) ready for S/ 499 (~$135).",
    filterAll: "All Industries",
    idealLabel: "Ideal for:",
    viewDemo: "Test Live Demo ↗",
    requestRubro: "Order this Industry on WhatsApp →",
    orderWa: "Get a quote for my business",
    waMsg: (t: TemplateInfo) =>
      `Hello LimaSync Solutions, I have a business in the ${t.rubroName} industry and I want the template (${t.title}) for S/ 499.`,
  },
};

export default function DemoShowcase({ lang = "es" }: DemoShowcaseProps) {
  const [selectedRubro, setSelectedRubro] = useState<string>("all");
  const rubros = lang === "en" ? RUBROS_EN : RUBROS_ES;
  const allTemplates = lang === "en" ? TEMPLATES_EN : TEMPLATES_ES;
  const t = copy[lang];

  const filtered =
    selectedRubro === "all"
      ? allTemplates
      : allTemplates.filter((item) => item.rubroId === selectedRubro);

  return (
    <section id="demos" style={{ paddingBlock: "clamp(3.5rem, 6vw, 5.5rem)", borderTop: "1px solid var(--line)" }}>
      <div className="wrap">
        <div className="sec-head">
          <div>
            <p className="kicker" style={{ color: "var(--accent-strong)" }}>
              {t.kicker}
            </p>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800 }}>
              {t.title}
            </h2>
          </div>
          <span className="sec-num">{lang === "en" ? "02 / Industries" : "02 / Rubros"}</span>
        </div>

        <p style={{ maxWidth: "70ch", color: "var(--ink-soft)", marginBottom: "2rem", fontSize: "1.05rem" }}>
          {t.subtitle}
        </p>

        {/* Rubro Filter Tabs Bar */}
        <div
          role="tablist"
          aria-label={lang === "en" ? "Filter by industry" : "Filtrar por rubro"}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginBottom: "2.5rem",
          }}
        >
          {rubros.map((r) => {
            const isActive = selectedRubro === r.id;
            return (
              <button
                key={r.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedRubro(r.id)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  padding: "0.55rem 1rem",
                  borderRadius: "9999px",
                  fontSize: "0.85rem",
                  fontWeight: isActive ? 700 : 500,
                  fontFamily: "var(--sans)",
                  background: isActive ? "var(--ink)" : "var(--paper-2)",
                  color: isActive ? "var(--paper)" : "var(--ink)",
                  border: isActive ? "1px solid var(--ink)" : "1px solid var(--line)",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                  boxShadow: isActive ? "0 4px 12px rgba(0,0,0,0.12)" : "none",
                }}
              >
                <span>{r.icon}</span>
                <span>{r.label}</span>
              </button>
            );
          })}
        </div>

        {/* Template Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.75rem",
          }}
        >
          {filtered.map((item) => (
            <div
              key={item.slug}
              style={{
                background: "var(--paper-2)",
                border: "1px solid var(--line)",
                borderRadius: "14px",
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem", gap: "0.5rem" }}>
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      color: item.color,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.35rem",
                    }}
                  >
                    <span>{item.rubroIcon}</span>
                    <span>{item.rubroName}</span>
                  </span>
                  <span
                    style={{
                      background: "rgba(0,0,0,0.06)",
                      border: "1px solid var(--line)",
                      fontSize: "0.7rem",
                      padding: "0.15rem 0.5rem",
                      borderRadius: "999px",
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.5rem" }}>{item.title}</h3>
                
                {/* Ideal para el rubro */}
                <div
                  style={{
                    background: "var(--paper)",
                    border: "1px solid var(--line)",
                    borderRadius: "6px",
                    padding: "0.45rem 0.65rem",
                    marginBottom: "0.85rem",
                    fontSize: "0.8rem",
                    color: "var(--ink)",
                    lineHeight: 1.4,
                  }}
                >
                  <strong style={{ color: "var(--accent-strong)", marginRight: "0.3rem" }}>{t.idealLabel}</strong>
                  <span>{item.idealFor}</span>
                </div>

                <p style={{ color: "var(--ink-soft)", fontSize: "0.9rem", lineHeight: 1.5, marginBottom: "1.25rem" }}>
                  {item.desc}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.5rem" }}>
                  {item.features.map((f, idx) => (
                    <span
                      key={idx}
                      style={{
                        background: "var(--paper)",
                        border: "1px solid var(--line)",
                        fontSize: "0.75rem",
                        padding: "0.2rem 0.5rem",
                        borderRadius: "4px",
                        fontFamily: "var(--mono)",
                      }}
                    >
                      ✓ {f}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ borderTop: "1px solid var(--line)", paddingTop: "1rem", display: "flex", gap: "0.6rem" }}>
                {item.hasLiveDemo ? (
                  <a
                    href={`/templates/${item.slug}`}
                    style={{
                      flex: 1,
                      textAlign: "center",
                      background: "var(--ink)",
                      color: "var(--paper)",
                      padding: "0.65rem 1rem",
                      borderRadius: "8px",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      textDecoration: "none",
                    }}
                  >
                    {t.viewDemo}
                  </a>
                ) : (
                  <a
                    href={`https://wa.me/51906920958?text=${encodeURIComponent(t.waMsg(item))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      flex: 1,
                      textAlign: "center",
                      background: "var(--accent-strong)",
                      color: "var(--accent-ink)",
                      padding: "0.65rem 1rem",
                      borderRadius: "8px",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      textDecoration: "none",
                    }}
                  >
                    {t.requestRubro}
                  </a>
                )}
                <a
                  href={`https://wa.me/51906920958?text=${encodeURIComponent(t.waMsg(item))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "#22c55e",
                    color: "#fff",
                    padding: "0.65rem 0.85rem",
                    borderRadius: "8px",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                  }}
                  title={t.orderWa}
                >
                  📲
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
