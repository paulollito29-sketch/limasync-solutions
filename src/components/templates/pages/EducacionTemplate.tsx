"use client";

import { useState } from "react";
import TemplateBanner from "@/components/templates/TemplateBanner";

const COURSES = [
  {
    id: "marketing",
    name: "Growth Marketing & Campañas en Meta Ads 2026",
    duration: "4 semanas (16 hrs lectivas)",
    modality: "En Vivo por Zoom + Grabaciones Full HD",
    price: "S/ 199",
    originalPrice: "S/ 380",
    start: "Lunes 20 de Octubre",
    badge: "Más Demandado",
    seatsLeft: 4,
    instructor: "Mg. Renzo Palacios (Ex-Growth Lead en Startups YC)",
    desc: "Aprende a estructurar campañas rentables de Meta Ads y TikTok Ads con Píxel CAPI, segmentaciones avanzadas y creativos de alta conversión.",
    syllabus: [
      "Módulo 1: Arquitectura de campañas CBO vs ABO y embudos de venta",
      "Módulo 2: Configuración del API de Conversiones (CAPI) y eventos de servidor",
      "Módulo 3: Creación de copys persuasivos y guiones virales para TikTok",
      "Módulo 4: Análisis de métricas ROAS, CAC, LTV y optimización de presupuesto",
    ],
  },
  {
    id: "powerbi",
    name: "Excel Financiero, DAX & Dashboards en Power BI",
    duration: "5 semanas (20 hrs lectivas)",
    modality: "En Vivo por Zoom + Casos Empresariales Reales",
    price: "S/ 249",
    originalPrice: "S/ 450",
    start: "Martes 21 de Octubre",
    badge: "Certificación Oficial",
    seatsLeft: 6,
    instructor: "Ing. Andrea Barreda (Senior Data Analyst en Scotiabank)",
    desc: "Domina Power Query para limpieza masiva de bases de datos, modelado relacional en estrella y fórmulas DAX para tableros ejecutivos.",
    syllabus: [
      "Módulo 1: Extracción, transformación y limpieza ETL en Power Query",
      "Módulo 2: Modelado de datos relacional y relaciones muchos a muchos",
      "Módulo 3: Fórmulas DAX esenciales: CALCULATE, FILTER, TIME INTELLIGENCE",
      "Módulo 4: Diseño UX de tableros interactivos para Gerencia General",
    ],
  },
  {
    id: "tesis",
    name: "Programa Intensivo de Tesis & Metodología APA 7ma",
    duration: "6 semanas de mentoría 1 a 1",
    modality: "Sesiones personalizadas + Revisión Turnitin",
    price: "S/ 399",
    originalPrice: "S/ 700",
    start: "Inicio Inmediato (Cupo Personalizado)",
    badge: "Asesoría 1 a 1",
    seatsLeft: 3,
    instructor: "Dr. Carlos Vilchez (Docente Investigador Renacyt / PUCP)",
    desc: "Planteamiento del problema, matriz de consistencia metodológica, validación de instrumentos estadísticos y simulación de jurado sustentador.",
    syllabus: [
      "Módulo 1: Delimitación del problema y estado del arte internacional",
      "Módulo 2: Operacionalización de variables y matriz de consistencia",
      "Módulo 3: Análisis estadístico con SPSS / R y reporte de resultados",
      "Módulo 4: Control de similitud Turnitin (< 15%) y defensa oratoria",
    ],
  },
  {
    id: "diseno",
    name: "Diseño UX/UI, Design Systems & Figma Profesional",
    duration: "4 semanas (16 hrs lectivas)",
    modality: "100% Práctico con feedback de portafolio",
    price: "S/ 189",
    originalPrice: "S/ 350",
    start: "Sábado 25 de Octubre",
    badge: "Portafolio Real",
    seatsLeft: 5,
    instructor: "Valeria Cárdenas (Product Designer en Interbank)",
    desc: "Aprende Auto Layout, Variables y Componentes interactivos en Figma. Diseña aplicaciones móviles y sitios web listos para exportar a desarrollo.",
    syllabus: [
      "Módulo 1: Fundamentos de Usabilidad y Arquitectura de la Información",
      "Módulo 2: Dominio de Auto Layout, Constraints y Responsive Design",
      "Módulo 3: Creación de Design Systems con Tokens y Componentes",
      "Módulo 4: Prototipado de microinteracciones y armado de portafolio",
    ],
  },
];

export default function EducacionTemplate() {
  const [selectedCourse, setSelectedCourse] = useState(COURSES[0].id);
  const [studentName, setStudentName] = useState("");
  const [phone, setPhone] = useState("");
  const [schedule, setSchedule] = useState("Noches (7:30 pm - 9:30 pm)");

  const currentCourse = COURSES.find((c) => c.id === selectedCourse) || COURSES[0];

  const handleEnroll = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*SOLICITUD DE MATRÍCULA CON DESCUENTO — ACADEMIA NEXUS*\n\n` +
      `Alumno: ${studentName || "No especificado"}\n` +
      `WhatsApp: ${phone || "No especificado"}\n` +
      `Curso Seleccionado: ${currentCourse.name}\n` +
      `Inversión Promocional: ${currentCourse.price} (Precio regular: ${currentCourse.originalPrice})\n` +
      `Horario Preferido: ${schedule}\n` +
      `Fecha de Inicio: ${currentCourse.start}\n` +
      `Cupos restantes confirmados: ${currentCourse.seatsLeft}\n\n` +
      `_Deseo recibir el silabo completo en PDF y los datos de pago para reservar mi vacante._`;

    window.open(`https://wa.me/51906920958?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div style={{ background: "#0b0f19", color: "#f1f5f9", minHeight: "100vh", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <TemplateBanner niche="Educación, Academias & Cursos Online" />

      {/* Trust Announcement Bar */}
      <div style={{ background: "#1e1b4b", borderBottom: "1px solid #312e81", padding: "0.55rem 1.5rem", fontSize: "0.8rem", color: "#c7d2fe" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span style={{ color: "#38bdf8", fontWeight: 700 }}>🎓 Ciclo Académico 2026-IV</span>
            <span>·</span>
            <span>Certificados verificables con QR en LinkedIn</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span style={{ color: "#fbbf24", fontWeight: 700 }}>⭐ 4.9 / 5.0 (1,240+ Egresados)</span>
            <span>·</span>
            <span style={{ color: "#4ade80" }}>Acceso vitalicio al campus</span>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          padding: "1.2rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div style={{ width: "42px", height: "42px", background: "linear-gradient(135deg, #6366f1, #3b82f6)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem" }}>
            🎓
          </div>
          <div>
            <span style={{ fontWeight: 800, fontSize: "1.25rem", letterSpacing: "-0.02em", color: "#fff" }}>
              NEXUS
            </span>
            <span style={{ color: "#818cf8", fontSize: "0.82rem", marginLeft: "0.4rem", fontWeight: 700, letterSpacing: "0.08em" }}>
              ACADEMIA DIGITAL
            </span>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <span style={{ fontSize: "0.85rem", color: "#94a3b8" }}>🟢 Matrículas abiertas hasta completar cupos</span>
          <a
            href="https://wa.me/51906920958?text=Hola,%20deseo%20asesor%C3%ADa%20personalizada%20sobre%20los%20cursos%20de%20Nexus"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#4f46e5",
              color: "#fff",
              padding: "0.6rem 1.2rem",
              borderRadius: "8px",
              fontWeight: 700,
              fontSize: "0.85rem",
              textDecoration: "none",
              boxShadow: "0 4px 15px rgba(79, 70, 229, 0.4)",
            }}
          >
            Hablar con un Asesor
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header
        style={{
          padding: "4.5rem 1.5rem 3.5rem",
          textAlign: "center",
          maxWidth: "880px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "rgba(99, 102, 241, 0.15)",
            border: "1px solid rgba(99, 102, 241, 0.4)",
            color: "#a5b4fc",
            padding: "0.35rem 0.95rem",
            borderRadius: "999px",
            fontSize: "0.8rem",
            fontWeight: 700,
            marginBottom: "1.5rem",
          }}
        >
          <span>🚀 Aprende Habilidades Tecnológicas de Alta Demanda</span>
          <span>·</span>
          <span>Grupos Reducidos (Máx 25 alumnos)</span>
        </div>

        <h1
          style={{
            fontSize: "clamp(2.3rem, 5.5vw, 4rem)",
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
            marginBottom: "1.25rem",
          }}
        >
          Educación Práctica con Certificación y <span style={{ color: "#818cf8" }}>Casos Reales</span>
        </h1>

        <p style={{ color: "#94a3b8", fontSize: "1.15rem", lineHeight: 1.6, maxWidth: "700px", margin: "0 auto" }}>
          Clases en directo por Zoom con docentes que lideran la industria tecnológica peruana. Adquiere competencias aplicadas de inmediato en tu trabajo o negocio.
        </p>

        {/* Quick Highlights */}
        <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginTop: "2.5rem", flexWrap: "wrap", fontSize: "0.9rem", color: "#cbd5e1" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ color: "#22c55e", fontWeight: 800 }}>✓</span> 100% Clases en Directo
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ color: "#22c55e", fontWeight: 800 }}>✓</span> Grabaciones de por Vida
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ color: "#22c55e", fontWeight: 800 }}>✓</span> Certificado con Validez Curricular
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ color: "#22c55e", fontWeight: 800 }}>✓</span> Soporte en Comunidad Discord
          </div>
        </div>
      </header>

      {/* Course Catalog & Enrollment Form */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "1rem 1.5rem 5rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "2.5rem",
            alignItems: "start",
          }}
        >
          {/* List of Courses */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.2rem" }}>
              <h2 style={{ fontSize: "1.45rem", fontWeight: 800, color: "#f8fafc" }}>
                Programas Disponibles
              </h2>
              <span style={{ fontSize: "0.8rem", color: "#818cf8", fontWeight: 600 }}>Selecciona un programa para ver el sílabo</span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              {COURSES.map((course) => {
                const isSelected = course.id === selectedCourse;
                return (
                  <div
                    key={course.id}
                    onClick={() => setSelectedCourse(course.id)}
                    style={{
                      background: isSelected ? "rgba(99, 102, 241, 0.12)" : "rgba(30, 41, 59, 0.4)",
                      border: isSelected ? "2px solid #6366f1" : "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "14px",
                      padding: "1.5rem",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      boxShadow: isSelected ? "0 10px 30px rgba(99, 102, 241, 0.2)" : "none",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.6rem" }}>
                      <span style={{ fontWeight: 800, fontSize: "1.15rem", color: isSelected ? "#a5b4fc" : "#f1f5f9", lineHeight: 1.3 }}>
                        {course.name}
                      </span>
                      <span
                        style={{
                          background: "rgba(99, 102, 241, 0.25)",
                          color: "#c7d2fe",
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          padding: "0.25rem 0.6rem",
                          borderRadius: "4px",
                          whiteSpace: "nowrap",
                          marginLeft: "0.5rem",
                        }}
                      >
                        {course.badge}
                      </span>
                    </div>

                    <p style={{ color: "#94a3b8", fontSize: "0.88rem", marginBottom: "0.75rem", lineHeight: 1.5 }}>
                      {course.desc}
                    </p>

                    <div style={{ fontSize: "0.82rem", color: "#a5b4fc", marginBottom: "1rem", fontWeight: 600 }}>
                      👨‍🏫 Docente: {course.instructor}
                    </div>

                    {/* Syllabus Preview Accordion when Selected */}
                    {isSelected && (
                      <div style={{ background: "rgba(0,0,0,0.3)", borderRadius: "8px", padding: "1rem", border: "1px solid rgba(99,102,241,0.2)", marginBottom: "1rem" }}>
                        <span style={{ fontSize: "0.75rem", color: "#818cf8", fontWeight: 700, textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}>
                          Contenido Programático del Curso:
                        </span>
                        <ul style={{ margin: 0, paddingLeft: "1.2rem", fontSize: "0.8rem", color: "#cbd5e1", lineHeight: 1.6 }}>
                          {course.syllabus.map((syl, i) => (
                            <li key={i}>{syl}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: "0.82rem",
                        color: "#cbd5e1",
                        borderTop: "1px solid rgba(255,255,255,0.06)",
                        paddingTop: "0.85rem",
                      }}
                    >
                      <div>
                        <span>⏱️ {course.duration}</span>
                        <span style={{ color: "#f87171", marginLeft: "0.75rem", fontWeight: 600 }}>🔥 Quedan {course.seatsLeft} cupos</span>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <span style={{ textDecoration: "line-through", color: "#64748b", fontSize: "0.8rem", marginRight: "0.4rem" }}>
                          {course.originalPrice}
                        </span>
                        <span style={{ fontSize: "1.25rem", fontWeight: 800, color: "#38bdf8" }}>
                          {course.price}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interactive Enrollment Box */}
          <div
            style={{
              background: "#1e293b",
              border: "1px solid rgba(99, 102, 241, 0.4)",
              borderRadius: "16px",
              padding: "2.25rem",
              boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
              position: "sticky",
              top: "90px",
            }}
          >
            <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "1.2rem", marginBottom: "1.5rem" }}>
              <span style={{ fontSize: "0.78rem", color: "#818cf8", textTransform: "uppercase", fontWeight: 700 }}>
                Reserva de Vacante · Descuento Especial
              </span>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 800, marginTop: "0.4rem", color: "#fff" }}>
                {currentCourse.name}
              </h3>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "0.75rem", fontSize: "0.85rem" }}>
                <span style={{ color: "#94a3b8" }}>📅 Inicio: <strong style={{ color: "#f8fafc" }}>{currentCourse.start}</strong></span>
                <span style={{ background: "rgba(34, 197, 94, 0.15)", color: "#4ade80", padding: "0.2rem 0.5rem", borderRadius: "4px", fontWeight: 700 }}>
                  Ahorras 45% hoy
                </span>
              </div>
            </div>

            <form onSubmit={handleEnroll} style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.85rem", marginBottom: "0.4rem", color: "#cbd5e1", fontWeight: 600 }}>
                  Nombre y Apellidos del Estudiante:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Lic. Pamela Morales"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  style={{
                    width: "100%",
                    background: "#0f172a",
                    border: "1px solid #334155",
                    borderRadius: "8px",
                    padding: "0.8rem",
                    color: "#fff",
                    fontSize: "0.95rem",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.85rem", marginBottom: "0.4rem", color: "#cbd5e1", fontWeight: 600 }}>
                  Número de WhatsApp (para envío del sílabo):
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Ej: 987 654 321"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  style={{
                    width: "100%",
                    background: "#0f172a",
                    border: "1px solid #334155",
                    borderRadius: "8px",
                    padding: "0.8rem",
                    color: "#fff",
                    fontSize: "0.95rem",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.85rem", marginBottom: "0.4rem", color: "#cbd5e1", fontWeight: 600 }}>
                  Horario de Preferencia:
                </label>
                <select
                  value={schedule}
                  onChange={(e) => setSchedule(e.target.value)}
                  style={{
                    width: "100%",
                    background: "#0f172a",
                    border: "1px solid #334155",
                    borderRadius: "8px",
                    padding: "0.8rem",
                    color: "#fff",
                    fontSize: "0.95rem",
                    boxSizing: "border-box",
                  }}
                >
                  <option value="Noches (7:30 pm - 9:30 pm)">Noches (7:30 pm - 9:30 pm)</option>
                  <option value="Sábados Intensivos (9:00 am - 1:00 pm)">Sábados Intensivos (9:00 am - 1:00 pm)</option>
                  <option value="Grabaciones a mi propio ritmo">Grabaciones a mi propio ritmo</option>
                </select>
              </div>

              <div
                style={{
                  background: "rgba(34, 197, 94, 0.08)",
                  border: "1px solid rgba(34, 197, 94, 0.25)",
                  borderRadius: "8px",
                  padding: "0.9rem",
                  fontSize: "0.82rem",
                  color: "#86efac",
                  lineHeight: 1.5,
                }}
              >
                ✓ Aceptamos Yape, Plin y transferencia BCP / BBVA.<br />
                ✓ Se emite boleta o factura con RUC para reembolso corporativo.<br />
                ✓ Garantía de satisfacción de 7 días.
              </div>

              <button
                type="submit"
                style={{
                  background: "#22c55e",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "8px",
                  padding: "1rem",
                  fontWeight: 800,
                  fontSize: "1.05rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  boxShadow: "0 6px 20px rgba(34, 197, 94, 0.35)",
                }}
              >
                <span>📲 Reservar Cupo por WhatsApp ({currentCourse.price})</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.08)", background: "#060911", padding: "2.5rem 1.5rem", textAlign: "center", fontSize: "0.8rem", color: "#64748b" }}>
        <p>© 2026 Nexus Academia Digital S.A.C. · RUC 20609182390 · Formación Tecnológica Certificada</p>
        <p style={{ marginTop: "0.4rem" }}>Plataforma compatible con dispositivos móviles, tablets y computadoras de escritorio.</p>
      </footer>
    </div>
  );
}
