"use client";

interface TemplateInfo {
  slug: string;
  niche: string;
  title: string;
  desc: string;
  features: string[];
  color: string;
  badge: string;
}

interface DemoShowcaseProps {
  lang?: "es" | "en";
}

const TEMPLATES_ES: TemplateInfo[] = [
  {
    slug: "restaurante",
    niche: "Gastronomía & Bares",
    title: "La Redonda — Cevichería & Bistro",
    desc: "Menú interactivo categorizado, carrito de compras en tiempo real, cálculo de delivery y checkout directo formateado a WhatsApp.",
    features: ["Menú QR Digital", "Cálculo de Delivery", "Pedidos a WhatsApp", "Reservas de Mesa"],
    color: "#ea580c",
    badge: "Alta Demanda",
  },
  {
    slug: "salud",
    niche: "Salud, Odontología & Estética",
    title: "San Isidro Dental & Estética",
    desc: "Agendamiento interactivo de citas por fecha/turno, catálogo de especialidades con tarifas transparentes y botón de urgencias 24/7.",
    features: ["Agendamiento de Citas", "Catálogo de Tratamientos", "Urgencias 24h", "WhatsApp Integrado"],
    color: "#0284c7",
    badge: "Profesional",
  },
  {
    slug: "legal",
    niche: "Abogados, Notarías & Consultoría",
    title: "Vargas & Asociados Abogados",
    desc: "Presencia sobria de alto estatus, desglose de áreas de práctica (Societario, Marcas INDECOPI, Litigios) y formulario de diagnóstico confidencial.",
    features: ["Diagnóstico Confidencial", "Marcas INDECOPI", "RUC 20 Societario", "Citas Privadas"],
    color: "#d97706",
    badge: "Corporativo",
  },
  {
    slug: "tienda",
    niche: "Moda, Retail & Gamarra",
    title: "Gamarra Urbana Streetwear",
    desc: "Tienda online rápida con selector de tallas y colores, control de bolsa de compras, cálculo de envíos Olva/Shalom y pago por Yape/Plin.",
    features: ["Selector Talla/Color", "Checkout WhatsApp", "Cálculo Envíos Perú", "Catálogo Visual"],
    color: "#8b5cf6",
    badge: "E-Commerce Express",
  },
  {
    slug: "servicios",
    niche: "Servicios Técnicos & Hogar",
    title: "LimaFix Pro Services",
    desc: "Gasfitería, electricidad y climatización con cotizador dinámico por distrito de Lima y botón de emergencia para llegadas en 45 minutos.",
    features: ["Cotizador por Distrito", "Botón de Urgencia 24h", "Precios Transparentes", "Garantía Escrita"],
    color: "#10b981",
    badge: "Alta Conversión",
  },
];

const TEMPLATES_EN: TemplateInfo[] = [
  {
    slug: "restaurante",
    niche: "Dining, Bars & Bistros",
    title: "La Redonda — Cevichería & Bistro",
    desc: "Interactive categorized menu, real-time cart, automated delivery fee estimation, and direct WhatsApp checkout.",
    features: ["Digital QR Menu", "Delivery Calculator", "WhatsApp Ordering", "Table Booking"],
    color: "#ea580c",
    badge: "Most Popular",
  },
  {
    slug: "salud",
    niche: "Healthcare & Aesthetics",
    title: "San Isidro Dental & Aesthetics",
    desc: "Interactive appointment scheduling, treatment catalog with upfront pricing, and 24/7 emergency dispatch.",
    features: ["Online Booking", "Treatment Catalog", "24/7 Emergencies", "WhatsApp Direct"],
    color: "#0284c7",
    badge: "Professional",
  },
  {
    slug: "legal",
    niche: "Law Firms & Consultancy",
    title: "Vargas & Associates Law",
    desc: "Distinguished corporate presence, practice areas (Corporate, Trademarks, Litigation), and confidential legal assessment form.",
    features: ["Confidential Assessment", "Trademark Registration", "Corporate Law", "Private Consults"],
    color: "#d97706",
    badge: "Corporate",
  },
  {
    slug: "tienda",
    niche: "Fashion & Retail",
    title: "Gamarra Urbana Streetwear",
    desc: "High-speed digital store with size/color pickers, shopping bag drawer, shipping calculations, and WhatsApp checkout.",
    features: ["Size & Color Picker", "WhatsApp Checkout", "Live Cart Drawer", "Visual Catalog"],
    color: "#8b5cf6",
    badge: "Express Store",
  },
  {
    slug: "servicios",
    niche: "Home Services & Repairs",
    title: "LimaFix Pro Services",
    desc: "Plumbing, electrical, and HVAC repairs with dynamic district cost calculator and 45-minute emergency dispatch.",
    features: ["District Calculator", "24/7 Emergency Dispatch", "Upfront Pricing", "Written Guarantee"],
    color: "#10b981",
    badge: "High Conversion",
  },
];

const copy = {
  es: {
    kicker: "Catálogo de Demos en Vivo · Entrega en 72 Horas",
    title: "5 Plantillas Maestras para tu Negocio",
    subtitle:
      "No inventamos la rueda en cada proyecto. Hemos diseñado y optimizado 5 arquitecturas web ultra-rápidas según tu rubro, listas para personalizar con tu logo, fotos y colores por solo S/ 499.",
    viewDemo: "Probar Demo en Vivo ↗",
    orderWa: "Pedir por WhatsApp",
    waMsg: (t: TemplateInfo) =>
      `Hola LimaSync Solutions, me interesa la plantilla de ${t.niche} (${t.title}) para mi negocio.`,
  },
  en: {
    kicker: "Live Demo Catalog · 72-Hour Delivery",
    title: "5 Master Templates for Your Business",
    subtitle:
      "We don't reinvent the wheel every time. We've crafted 5 battle-tested, ultra-fast web architectures tailored to your industry, ready to customize with your branding for just S/ 499 (~$135).",
    viewDemo: "Test Live Demo ↗",
    orderWa: "Order via WhatsApp",
    waMsg: (t: TemplateInfo) =>
      `Hello LimaSync Solutions, I am interested in the ${t.niche} template (${t.title}) for my business.`,
  },
};

export default function DemoShowcase({ lang = "es" }: DemoShowcaseProps) {
  const templates = lang === "en" ? TEMPLATES_EN : TEMPLATES_ES;
  const t = copy[lang];

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
          <span className="sec-num">{lang === "en" ? "02 / Demos" : "02 / Demos"}</span>
        </div>

        <p style={{ maxWidth: "68ch", color: "var(--ink-soft)", marginBottom: "2.5rem", fontSize: "1.05rem" }}>
          {t.subtitle}
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.75rem",
          }}
        >
          {templates.map((item) => (
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
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: item.color,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {item.niche}
                  </span>
                  <span
                    style={{
                      background: "rgba(0,0,0,0.06)",
                      border: "1px solid var(--line)",
                      fontSize: "0.7rem",
                      padding: "0.15rem 0.5rem",
                      borderRadius: "999px",
                      fontWeight: 600,
                    }}
                  >
                    {item.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.5rem" }}>{item.title}</h3>
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
