"use client";

import { useState } from "react";
import TemplateBanner from "@/components/templates/TemplateBanner";

const PRACTICE_AREAS = [
  {
    icon: "⚖️",
    title: "Derecho Societario & M&A",
    tag: "Corporativo",
    desc: "Constitución exprés de S.A.C. y S.A.C.S. en SUNARP, aumento de capital, reorganizaciones societarias, pactos de accionistas y gobierno corporativo.",
    stats: "320+ empresas constituidas",
  },
  {
    icon: "🛡️",
    title: "Propiedad Intelectual & Marcas",
    tag: "INDECOPI",
    desc: "Búsqueda fonética y figurativa de antecedentes, registro de marca y lemas comerciales, defensas ante oposiciones y vigilancia de marca.",
    stats: "98.2% de éxito en registro",
  },
  {
    icon: "📄",
    title: "Contratos Comerciales & Laboral",
    tag: "Gestión Legal",
    desc: "Blindaje de acuerdos de confidencialidad (NDA), contratos de locación y servicios, planeamiento tributario básico y prevención de multas SUNAFIL.",
    stats: "Cero contingencias laborales",
  },
  {
    icon: "🏛️",
    title: "Litigios Civiles & Arbitraje CCL",
    tag: "Defensa Judicial",
    desc: "Cobranza judicial de deudas mercantiles, medidas cautelares, ejecución de garantías y arbitrajes comerciales ante la Cámara de Comercio de Lima.",
    stats: "S/ 18M+ recuperados",
  },
];

const TRUST_METRICS = [
  { value: "15+", label: "Años de Ejercicio", sub: "Colegio de Abogados de Lima" },
  { value: "S/ 45M+", label: "Contingencias Blindadas", sub: "Empresas & Startups" },
  { value: "98.4%", label: "Éxito en INDECOPI", sub: "Sin oposiciones denegadas" },
  { value: "⭐ 4.9", label: "Google Business", sub: "190+ valoraciones de clientes" },
];

export default function LegalTemplate() {
  const [matter, setMatter] = useState("Registro de Marca en INDECOPI");
  const [companyName, setCompanyName] = useState("");
  const [contactName, setContactName] = useState("");
  const [urgency, setUrgency] = useState("Esta misma semana");
  const [estimatedBudget, setEstimatedBudget] = useState("S/ 1,200 - S/ 2,500");

  const handleRequestConsultation = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*SOLICITUD DE ASESORÍA JURÍDICA — VARGAS & ASOCIADOS*\n
Titular: ${contactName || "No especificado"}
Empresa / RUC: ${companyName || "Persona Natural"}
Materia o Caso: ${matter}
Presupuesto / Rango: ${estimatedBudget}
Nivel de Urgencia: ${urgency}
Sede de Preferencia: San Isidro (Torre Begonias) o Virtual\n
_Solicitud amparada bajo secreto profesional generada desde la web demo de LimaSync Solutions_`;

    window.open(`https://wa.me/51906920958?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div style={{ background: "#0c0a09", color: "#fafaf9", minHeight: "100vh", fontFamily: "Georgia, serif" }}>
      <TemplateBanner niche="Abogados, Notarías & Consultoría Legal" />

      {/* Top Professional Credentials Header */}
      <div style={{ background: "#171412", borderBottom: "1px solid #292524", padding: "0.6rem 1.5rem", fontSize: "0.8rem", color: "#a8a29e", fontFamily: "sans-serif" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.75rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <span>🏛️ CAL N° 48120 · Registro Oficial Lima</span>
            <span style={{ display: "inline-block", width: "4px", height: "4px", background: "#78716c", borderRadius: "50%" }}></span>
            <span>📍 Torre Begonias Piso 14, Centro Financiero San Isidro</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span style={{ color: "#d97706", fontWeight: 700 }}>⭐ 4.9 / 5.0 (190+ Reseñas Verificadas)</span>
            <span>·</span>
            <span style={{ color: "#22c55e", fontWeight: 600 }}>● Consultas Urgentes 24/7</span>
          </div>
        </div>
      </div>

      {/* Hero Legal */}
      <header
        style={{
          borderBottom: "1px solid #292524",
          background: "radial-gradient(ellipse at top, #1c1917 0%, #0c0a09 100%)",
          padding: "5rem 1.5rem 4.5rem",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(217, 119, 6, 0.12)",
              border: "1px solid rgba(217, 119, 6, 0.3)",
              padding: "0.4rem 1rem",
              borderRadius: "4px",
              marginBottom: "1.5rem",
              fontFamily: "sans-serif",
            }}
          >
            <span style={{ color: "#d97706", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
              Firma Legal Especializada · Lima, Perú
            </span>
          </div>

          <h1 style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em" }}>
            Vargas & Asociados <span style={{ color: "#d97706", fontStyle: "italic", fontWeight: 400 }}>Abogados</span>
          </h1>

          <p
            style={{
              fontFamily: "sans-serif",
              color: "#a8a29e",
              fontSize: "1.15rem",
              marginTop: "1.25rem",
              lineHeight: 1.6,
              maxWidth: "700px",
              marginInline: "auto",
            }}
          >
            Blindamos jurídicamente las operaciones de empresas peruanas, inversionistas extranjeros y patrimonios familiares. Asesoría estratégica con rigor técnico ante el Poder Judicial, SUNARP e INDECOPI.
          </p>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "2.2rem", flexWrap: "wrap", fontFamily: "sans-serif" }}>
            <a
              href="#diagnostico"
              style={{
                background: "#d97706",
                color: "#ffffff",
                padding: "0.95rem 1.85rem",
                borderRadius: "4px",
                fontWeight: 700,
                fontSize: "0.95rem",
                textDecoration: "none",
                boxShadow: "0 4px 15px rgba(217, 119, 6, 0.35)",
              }}
            >
              Agendar Diagnóstico Legal ↓
            </a>
            <a
              href="https://wa.me/51906920958?text=Hola,%20requiero%20asesor%C3%ADa%20legal%20confidencial%20con%20el%20Dr.%20Vargas"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "rgba(255,255,255,0.03)",
                color: "#fafaf9",
                border: "1px solid #44403c",
                padding: "0.95rem 1.85rem",
                borderRadius: "4px",
                fontWeight: 600,
                fontSize: "0.95rem",
                textDecoration: "none",
              }}
            >
              💬 WhatsApp Privado & Confidencial
            </a>
          </div>

          {/* Social Proof Numbers */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "1.5rem",
              marginTop: "4rem",
              paddingTop: "2.5rem",
              borderTop: "1px solid #292524",
              fontFamily: "sans-serif",
            }}
          >
            {TRUST_METRICS.map((m, idx) => (
              <div key={idx} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2rem", fontWeight: 800, color: "#d97706", fontFamily: "Georgia, serif" }}>{m.value}</div>
                <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#f5f5f4", marginTop: "0.2rem" }}>{m.label}</div>
                <div style={{ fontSize: "0.75rem", color: "#78716c", marginTop: "0.1rem" }}>{m.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Áreas de Práctica con Tarjetas Profesionales */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "5rem 1.5rem" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem", fontFamily: "sans-serif" }}>
          <span style={{ color: "#d97706", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Servicios Jurídicos Especializados
          </span>
          <h2 style={{ fontSize: "2.5rem", fontFamily: "Georgia, serif", marginTop: "0.5rem", color: "#fafaf9" }}>
            Protección Integral para su Negocio
          </h2>
          <p style={{ color: "#a8a29e", maxWidth: "600px", margin: "0.5rem auto 0", fontSize: "0.95rem" }}>
            Enfoque preventivo para evitar contingencias judiciales costosas antes de que ocurran.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 270px), 1fr))", gap: "1.75rem" }}>
          {PRACTICE_AREAS.map((p, idx) => (
            <div
              key={idx}
              style={{
                background: "#141210",
                border: "1px solid #292524",
                padding: "2.25rem 2rem",
                borderRadius: "8px",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                  <span style={{ fontSize: "2.2rem" }}>{p.icon}</span>
                  <span
                    style={{
                      fontFamily: "sans-serif",
                      background: "rgba(217, 119, 6, 0.15)",
                      color: "#fbbf24",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      padding: "0.25rem 0.6rem",
                      borderRadius: "3px",
                      textTransform: "uppercase",
                    }}
                  >
                    {p.tag}
                  </span>
                </div>
                <h3 style={{ fontSize: "1.3rem", margin: "0.75rem 0 0.5rem", color: "#fafaf9", lineHeight: 1.3 }}>{p.title}</h3>
                <p style={{ fontFamily: "sans-serif", color: "#a8a29e", fontSize: "0.88rem", lineHeight: 1.6, marginTop: "0.75rem" }}>
                  {p.desc}
                </p>
              </div>

              <div
                style={{
                  marginTop: "1.5rem",
                  paddingTop: "1rem",
                  borderTop: "1px solid #262220",
                  fontFamily: "sans-serif",
                  fontSize: "0.8rem",
                  color: "#d97706",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
              >
                <span>✓</span> {p.stats}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Perfil del Socio Director */}
      <section style={{ background: "#141210", borderTop: "1px solid #292524", borderBottom: "1px solid #292524", padding: "4.5rem 1.5rem" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "3rem", alignItems: "center" }}>
          <div
            style={{
              background: "#1c1917",
              border: "1px solid #38332f",
              borderRadius: "8px",
              padding: "2rem",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "110px",
                height: "110px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #d97706, #78350f)",
                margin: "0 auto 1.25rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2.8rem",
                border: "3px solid #d97706",
              }}
            >
              ⚖️
            </div>
            <h3 style={{ fontSize: "1.4rem", color: "#fafaf9" }}>Dr. Alejandro Vargas Morales</h3>
            <p style={{ fontFamily: "sans-serif", color: "#d97706", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", marginTop: "0.2rem" }}>
              Socio Director · CAL N° 48120
            </p>
            <div style={{ fontFamily: "sans-serif", fontSize: "0.82rem", color: "#a8a29e", marginTop: "1rem", lineHeight: 1.5, textAlign: "left" }}>
              <p>• Magíster en Derecho de la Empresa por la PUCP.</p>
              <p>• Ex-miembro de la Comisión de Arbitraje de la Cámara de Comercio de Lima (CCL).</p>
              <p>• Expositor invitado en INDECOPI sobre Registro de Propiedad Intelectual en LatAm.</p>
            </div>
          </div>

          <div>
            <span style={{ fontFamily: "sans-serif", color: "#d97706", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase" }}>
              Ética, Confidencialidad y Rigor
            </span>
            <h2 style={{ fontSize: "2.2rem", marginTop: "0.5rem", lineHeight: 1.2 }}>
              Respaldo Legal de Primer Nivel al Alcance de su Empresa
            </h2>
            <p style={{ fontFamily: "sans-serif", color: "#a8a29e", fontSize: "0.95rem", lineHeight: 1.7, marginTop: "1rem" }}>
              Nuestra práctica rechaza los honorarios opacos y la burocracia innecesaria. Trabajamos con entregables concretos, cronogramas verificables ante notarías y reporte semanal de estado de expedientes.
            </p>

            <div style={{ fontFamily: "sans-serif", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 180px), 1fr))", gap: "1rem", marginTop: "1.5rem" }}>
              <div style={{ background: "#1c1917", padding: "1rem", borderRadius: "6px", border: "1px solid #292524" }}>
                <span style={{ color: "#22c55e", fontWeight: 700 }}>🔒 Secreto Profesional</span>
                <p style={{ fontSize: "0.78rem", color: "#78716c", marginTop: "0.2rem" }}>Amparado por el Art. 2 inc. 18 de la Constitución Política.</p>
              </div>
              <div style={{ background: "#1c1917", padding: "1rem", borderRadius: "6px", border: "1px solid #292524" }}>
                <span style={{ color: "#d97706", fontWeight: 700 }}>⚡ Trámites Digitales</span>
                <p style={{ fontSize: "0.78rem", color: "#78716c", marginTop: "0.2rem" }}>Firmas digitales certificadas y expedientes SID-SUNARP.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario Diagnóstico Legal */}
      <section id="diagnostico" style={{ padding: "5rem 1.5rem", maxWidth: "800px", margin: "0 auto" }}>
        <div
          style={{
            background: "#141210",
            border: "1px solid #38332f",
            padding: "2.75rem 2.25rem",
            borderRadius: "12px",
            fontFamily: "sans-serif",
            boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <span style={{ color: "#d97706", fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Evaluación Confidencial
            </span>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "2.2rem", color: "#fafaf9", marginTop: "0.4rem" }}>
              Solicitar Diagnóstico Jurídico Preliminar
            </h2>
            <p style={{ color: "#a8a29e", fontSize: "0.9rem", marginTop: "0.4rem" }}>
              Reciba una propuesta de honorarios y análisis de viabilidad legal en menos de 4 horas hábiles.
            </p>
          </div>

          <form onSubmit={handleRequestConsultation} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.85rem", color: "#d6d3d1", marginBottom: "0.35rem", fontWeight: 600 }}>
                  Nombre del Titular o Representante:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Lic. Martín Salazar"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  style={{ width: "100%", padding: "0.8rem", background: "#0c0a09", color: "#fff", border: "1px solid #44403c", borderRadius: "6px", boxSizing: "border-box" }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.85rem", color: "#d6d3d1", marginBottom: "0.35rem", fontWeight: 600 }}>
                  Empresa o Razón Social (Opcional):
                </label>
                <input
                  type="text"
                  placeholder="Ej: Andes Cloud S.A.C. / RUC 2060..."
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  style={{ width: "100%", padding: "0.8rem", background: "#0c0a09", color: "#fff", border: "1px solid #44403c", borderRadius: "6px", boxSizing: "border-box" }}
                />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.85rem", color: "#d6d3d1", marginBottom: "0.35rem", fontWeight: 600 }}>
                  Materia Legal a Tratar:
                </label>
                <select
                  value={matter}
                  onChange={(e) => setMatter(e.target.value)}
                  style={{ width: "100%", padding: "0.8rem", background: "#0c0a09", color: "#fff", border: "1px solid #44403c", borderRadius: "6px" }}
                >
                  <option value="Registro de Marca en INDECOPI">Registro de Marca en INDECOPI</option>
                  <option value="Constitución de Empresa S.A.C. / RUC 20">Constitución de Empresa S.A.C. / RUC 20</option>
                  <option value="Revisión o Redacción de Contratos Comerciales">Revisión o Redacción de Contratos Comerciales</option>
                  <option value="Contingencia Laboral con Trabajadores">Contingencia Laboral con Trabajadores</option>
                  <option value="Litigio Civil o Cobranza Judicial de Facturas">Litigio Civil o Cobranza Judicial de Facturas</option>
                  <option value="Arbitraje Comercial ante la CCL">Arbitraje Comercial ante la CCL</option>
                </select>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.85rem", color: "#d6d3d1", marginBottom: "0.35rem", fontWeight: 600 }}>
                  Rango Estimado de Inversión:
                </label>
                <select
                  value={estimatedBudget}
                  onChange={(e) => setEstimatedBudget(e.target.value)}
                  style={{ width: "100%", padding: "0.8rem", background: "#0c0a09", color: "#fff", border: "1px solid #44403c", borderRadius: "6px" }}
                >
                  <option value="S/ 600 - S/ 1,200 (Consultoría Puntual)">S/ 600 - S/ 1,200 (Consultoría Puntual)</option>
                  <option value="S/ 1,200 - S/ 2,500 (Trámite Registral Completo)">S/ 1,200 - S/ 2,500 (Trámite Registral Completo)</option>
                  <option value="S/ 2,500 - S/ 6,000 (Patrocinio o Blindaje)">S/ 2,500 - S/ 6,000 (Patrocinio o Blindaje)</option>
                  <option value="A evaluar según complejidad del litigio">A evaluar según complejidad del litigio</option>
                </select>
              </div>
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.85rem", color: "#d6d3d1", marginBottom: "0.35rem", fontWeight: 600 }}>
                Nivel de Urgencia para la Primera Sesión:
              </label>
              <select
                value={urgency}
                onChange={(e) => setUrgency(e.target.value)}
                style={{ width: "100%", padding: "0.8rem", background: "#0c0a09", color: "#fff", border: "1px solid #44403c", borderRadius: "6px" }}
              >
                <option value="🚨 Urgencia Inmediata (Hoy mismo / Menos de 24h)">🚨 Urgencia Inmediata (Hoy mismo / Menos de 24h)</option>
                <option value="Esta misma semana">Esta misma semana</option>
                <option value="Planificación estratégica para el próximo mes">Planificación estratégica para el próximo mes</option>
              </select>
            </div>

            <div style={{ background: "rgba(217, 119, 6, 0.08)", border: "1px solid rgba(217, 119, 6, 0.25)", padding: "0.9rem", borderRadius: "6px", fontSize: "0.82rem", color: "#e7e5e4" }}>
              ⚖️ <strong>Garantía de Confidencialidad:</strong> Al pulsar el botón, se generará una ficha estructurada para enviar de forma directa y privada al WhatsApp del estudio legal.
            </div>

            <button
              type="submit"
              style={{
                background: "#d97706",
                color: "#ffffff",
                padding: "1rem",
                borderRadius: "6px",
                border: "none",
                fontWeight: 700,
                fontSize: "1.05rem",
                cursor: "pointer",
                marginTop: "0.5rem",
                boxShadow: "0 6px 20px rgba(217, 119, 6, 0.4)",
              }}
            >
              Enviar Diagnóstico por WhatsApp Confidencial →
            </button>
          </form>
        </div>
      </section>

      {/* Footer Legal */}
      <footer style={{ borderTop: "1px solid #292524", background: "#080706", padding: "2.5rem 1.5rem", textAlign: "center", fontFamily: "sans-serif", fontSize: "0.8rem", color: "#78716c" }}>
        <p>© 2026 Vargas & Asociados Abogados S.A.C. · RUC 20608912341 · Todos los derechos reservados.</p>
        <p style={{ marginTop: "0.4rem" }}>Oficinas: Av. Las Begonias 441 Piso 14, San Isidro, Lima · Teléfono: +51 906 920 958</p>
      </footer>
    </div>
  );
}
