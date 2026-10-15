"use client";

import { useState } from "react";
import TemplateBanner from "@/components/templates/TemplateBanner";

const PRACTICE_AREAS = [
  {
    icon: "⚖️",
    title: "Derecho Societario & Corporativo",
    desc: "Constitución de empresas S.A.C. / S.A.C.S., aumento de capital, acuerdos de accionistas y gobierno corporativo ante SUNARP y Notarías.",
  },
  {
    icon: "🛡️",
    title: "Registro de Marcas (INDECOPI)",
    desc: "Búsqueda de antecedentes fonéticos, registro de marca comercial, lemas comerciales y defensa ante oposiciones de terceros.",
  },
  {
    icon: "📄",
    title: "Contratos Mercantiles & Laboral",
    desc: "Redacción y blindaje de contratos de prestación de servicios, acuerdos de confidencialidad (NDA), vesting y cumplimiento MTPE.",
  },
  {
    icon: "🏛️",
    title: "Litigios Civiles & Arbitraje",
    desc: "Representación judicial estratégica, cobranza coactiva de deudas mercantiles y arbitrajes comerciales ante la Cámara de Comercio de Lima.",
  },
];

export default function LegalTemplate() {
  const [matter, setMatter] = useState("Registro de Marca en INDECOPI");
  const [companyName, setCompanyName] = useState("");
  const [contactName, setContactName] = useState("");
  const [urgency, setUrgency] = useState("Esta misma semana");

  const handleRequestConsultation = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*SOLICITUD DE ASESORÍA JURÍDICA — VARGAS & ASOCIADOS*\n
Contacto: ${contactName || "No especificado"}
Empresa: ${companyName || "Persona Natural"}
Materia o Caso: ${matter}
Nivel de Urgencia: ${urgency}\n
_Solicitud confidencial generada desde la web demo de LimaSync Solutions_`;

    window.open(`https://wa.me/51981906958?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div style={{ background: "#0c0a09", color: "#fafaf9", minHeight: "100vh", fontFamily: "Georgia, serif" }}>
      <TemplateBanner niche="Abogados, Notarías & Consultoría Legal" />

      {/* Hero Legal */}
      <header
        style={{
          borderBottom: "1px solid #292524",
          background: "radial-gradient(ellipse at top, #1c1917 0%, #0c0a09 100%)",
          padding: "5rem 1.5rem 4rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "820px", margin: "0 auto" }}>
          <span
            style={{
              fontFamily: "sans-serif",
              letterSpacing: "0.15em",
              color: "#d97706",
              fontSize: "0.8rem",
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            Estudio Jurídico · Lima, Perú
          </span>
          <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", marginTop: "1rem", fontWeight: 700, lineHeight: 1.2 }}>
            Vargas & Asociados <span style={{ color: "#d97706", fontStyle: "italic" }}>Abogados</span>
          </h1>
          <p
            style={{
              fontFamily: "sans-serif",
              color: "#a8a29e",
              fontSize: "1.1rem",
              marginTop: "1.2rem",
              lineHeight: 1.6,
              maxWidth: "650px",
              marginInline: "auto",
            }}
          >
            Protegemos el patrimonio y la solidez legal de empresas, startups y familias con más de 15 años de trayectoria ante el Poder Judicial e INDECOPI.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "2rem", flexWrap: "wrap", fontFamily: "sans-serif" }}>
            <a
              href="#consulta"
              style={{
                background: "#d97706",
                color: "#ffffff",
                padding: "0.85rem 1.75rem",
                borderRadius: "4px",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Agendar Diagnóstico Legal ↓
            </a>
            <a
              href="https://wa.me/51981906958?text=Hola,%20requiero%20asesor%C3%ADa%20legal%20urgente"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "transparent",
                color: "#fafaf9",
                border: "1px solid #44403c",
                padding: "0.85rem 1.75rem",
                borderRadius: "4px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Consulta WhatsApp Confidencial
            </a>
          </div>
        </div>
      </header>

      {/* Áreas de Práctica */}
      <section style={{ maxWidth: "1150px", margin: "0 auto", padding: "4.5rem 1.5rem" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem", fontFamily: "sans-serif" }}>
          <span style={{ color: "#d97706", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase" }}>
            Especialización Técnica
          </span>
          <h2 style={{ fontSize: "2.4rem", fontFamily: "Georgia, serif", marginTop: "0.5rem" }}>
            Nuestras Áreas de Práctica
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
          {PRACTICE_AREAS.map((p, idx) => (
            <div
              key={idx}
              style={{
                background: "#1c1917",
                border: "1px solid #292524",
                padding: "2rem",
                borderRadius: "8px",
                transition: "border-color 0.2s",
              }}
            >
              <span style={{ fontSize: "2rem" }}>{p.icon}</span>
              <h3 style={{ fontSize: "1.25rem", margin: "1rem 0 0.5rem", color: "#f5f5f4" }}>{p.title}</h3>
              <p style={{ fontFamily: "sans-serif", color: "#a8a29e", fontSize: "0.9rem", lineHeight: 1.5 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Formulario Diagnóstico Legal */}
      <section id="consulta" style={{ background: "#141210", borderTop: "1px solid #292524", padding: "4rem 1.5rem" }}>
        <div
          style={{
            maxWidth: "640px",
            margin: "0 auto",
            background: "#1c1917",
            border: "1px solid #292524",
            padding: "2.5rem",
            borderRadius: "8px",
            fontFamily: "sans-serif",
          }}
        >
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "2rem", color: "#fafaf9", textAlign: "center" }}>
            Solicitar Dictamen o Diagnóstico Preliminar
          </h2>
          <p style={{ textAlign: "center", color: "#a8a29e", fontSize: "0.9rem", marginTop: "0.5rem" }}>
            Todas las consultas están amparadas bajo secreto profesional y estricta confidencialidad.
          </p>

          <form onSubmit={handleRequestConsultation} style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            <div>
              <label style={{ display: "block", fontSize: "0.85rem", color: "#d6d3d1", marginBottom: "0.3rem" }}>
                Nombre y Apellidos:
              </label>
              <input
                type="text"
                required
                placeholder="Dr. / Lic. / Ing."
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                style={{ width: "100%", padding: "0.75rem", background: "#0c0a09", color: "#fff", border: "1px solid #44403c", borderRadius: "4px", boxSizing: "border-box" }}
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.85rem", color: "#d6d3d1", marginBottom: "0.3rem" }}>
                Nombre de su Empresa o RUC (Opcional):
              </label>
              <input
                type="text"
                placeholder="Ej. Inversiones Lima S.A.C."
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                style={{ width: "100%", padding: "0.75rem", background: "#0c0a09", color: "#fff", border: "1px solid #44403c", borderRadius: "4px", boxSizing: "border-box" }}
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.85rem", color: "#d6d3d1", marginBottom: "0.3rem" }}>
                Materia Legal a Tratar:
              </label>
              <select
                value={matter}
                onChange={(e) => setMatter(e.target.value)}
                style={{ width: "100%", padding: "0.75rem", background: "#0c0a09", color: "#fff", border: "1px solid #44403c", borderRadius: "4px" }}
              >
                <option value="Constitución de Empresa S.A.C. / RUC 20">Constitución de Empresa S.A.C. / RUC 20</option>
                <option value="Registro de Marca en INDECOPI">Registro de Marca en INDECOPI</option>
                <option value="Revisión o Redacción de Contratos Comerciales">Revisión o Redacción de Contratos Comerciales</option>
                <option value="Contingencia Laboral con Trabajadores">Contingencia Laboral con Trabajadores</option>
                <option value="Litigio Civil o Cobranza Judicial">Litigio Civil o Cobranza Judicial</option>
              </select>
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.85rem", color: "#d6d3d1", marginBottom: "0.3rem" }}>
                Plazo o Urgencia:
              </label>
              <select
                value={urgency}
                onChange={(e) => setUrgency(e.target.value)}
                style={{ width: "100%", padding: "0.75rem", background: "#0c0a09", color: "#fff", border: "1px solid #44403c", borderRadius: "4px" }}
              >
                <option value="Inmediata (menos de 24 horas)">Inmediata (menos de 24 horas)</option>
                <option value="Esta misma semana">Esta misma semana</option>
                <option value="Planificación estratégica a mediano plazo">Planificación estratégica a mediano plazo</option>
              </select>
            </div>

            <button
              type="submit"
              style={{
                background: "#d97706",
                color: "#ffffff",
                padding: "0.95rem",
                borderRadius: "4px",
                border: "none",
                fontWeight: 700,
                fontSize: "1rem",
                cursor: "pointer",
                marginTop: "0.75rem",
              }}
            >
              Enviar Consulta por WhatsApp Privado →
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
