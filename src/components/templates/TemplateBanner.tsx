"use client";

import { useState } from "react";

interface TemplateBannerProps {
  niche: string;
  price?: string;
  deliveryTime?: string;
  currentSlug?: string;
}

const ALL_DEMOS = [
  { slug: "restaurante", name: "Gastronomía", icon: "🍽️" },
  { slug: "salud", name: "Salud & Dental", icon: "🩺" },
  { slug: "legal", name: "Legal & Notaría", icon: "⚖️" },
  { slug: "tienda", name: "Moda & Tienda", icon: "🛍️" },
  { slug: "servicios", name: "Servicios Hogar", icon: "🔧" },
  { slug: "educacion", name: "Educación & Cursos", icon: "🎓" },
  { slug: "hoteleria", name: "Hotel & Hospedaje", icon: "🏨" },
];

export default function TemplateBanner({
  niche,
  deliveryTime = "72 horas",
  currentSlug,
}: TemplateBannerProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const whatsappUrl =
    "https://wa.me/51906920958?text=" +
    encodeURIComponent(
      `Hola LimaSync Solutions, estoy probando la demo de ${niche} y quiero cotizar la implementación para mi negocio.`
    );

  return (
    <aside aria-label="Barra de información del demo" className="template-banner-wrap">
      {/* Left: Badge & Info */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <span
          style={{
            background: "#22c55e",
            color: "#052e16",
            padding: "0.2rem 0.55rem",
            borderRadius: "999px",
            fontWeight: 800,
            fontSize: "0.72rem",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.3rem",
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#15803d" }} />
          <span>Demo<span className="template-banner-badge-text"> Oficial Activa</span></span>
        </span>
        <span className="template-banner-desc" style={{ color: "#cbd5e1", fontSize: "0.82rem", whiteSpace: "nowrap" }}>
          Plantilla para <strong style={{ color: "#fff" }}>{niche}</strong> · Entrega en <strong style={{ color: "#38bdf8" }}>{deliveryTime}</strong>
        </span>
      </div>

      {/* Right: Switcher + Back + WhatsApp */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", flexWrap: "wrap" }}>
        {/* Switcher Dropdown */}
        <div style={{ position: "relative" }}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.18)",
              color: "#e2e8f0",
              padding: "0.3rem 0.65rem",
              borderRadius: "6px",
              fontSize: "0.8rem",
              fontWeight: 600,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
            }}
          >
            <span>Cambiar Demo ▾</span>
          </button>

          {dropdownOpen && (
            <div
              style={{
                position: "absolute",
                top: "calc(100% + 6px)",
                right: 0,
                background: "#0f172a",
                border: "1px solid #334155",
                borderRadius: "8px",
                padding: "0.4rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.2rem",
                width: "200px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
                zIndex: 10000,
              }}
            >
              {ALL_DEMOS.map((d) => (
                <a
                  key={d.slug}
                  href={`/templates/${d.slug}`}
                  onClick={() => setDropdownOpen(false)}
                  style={{
                    color: d.slug === currentSlug ? "#38bdf8" : "#cbd5e1",
                    textDecoration: "none",
                    padding: "0.4rem 0.6rem",
                    borderRadius: "4px",
                    fontSize: "0.82rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    background: d.slug === currentSlug ? "rgba(56, 189, 248, 0.12)" : "transparent",
                    fontWeight: d.slug === currentSlug ? 700 : 500,
                  }}
                >
                  <span>{d.icon}</span>
                  <span>{d.name}</span>
                </a>
              ))}
            </div>
          )}
        </div>

        <a
          href="/demos"
          style={{
            color: "#cbd5e1",
            textDecoration: "none",
            fontSize: "0.8rem",
            padding: "0.3rem 0.65rem",
            borderRadius: "6px",
            border: "1px solid rgba(255,255,255,0.18)",
            transition: "all 0.2s",
            background: "rgba(255,255,255,0.04)",
          }}
        >
          ← Demos en Vivo
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "#22c55e",
            color: "#ffffff",
            textDecoration: "none",
            padding: "0.35rem 0.85rem",
            borderRadius: "6px",
            fontWeight: 700,
            fontSize: "0.82rem",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            boxShadow: "0 2px 8px rgba(34, 197, 94, 0.3)",
          }}
        >
          <span>📲 Cotizar esta web</span>
        </a>
      </div>
    </aside>
  );
}
