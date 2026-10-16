"use client";

import { useState } from "react";
import TemplateBanner from "@/components/templates/TemplateBanner";

const COURSES = [
  {
    id: "marketing",
    name: "Marketing Digital & Campañas en Meta Ads",
    duration: "4 semanas (16 horas)",
    modality: "En Vivo por Zoom + Grabaciones",
    price: "S/ 199",
    start: "Próximo Lunes",
    badge: "Más Demandado",
    desc: "Aprende a crear anuncios rentables en Facebook, Instagram y TikTok para conseguir prospectos calificados todos los días.",
  },
  {
    id: "powerbi",
    name: "Excel Avanzado, Dashboards & Power BI",
    duration: "5 semanas (20 horas)",
    modality: "En Vivo por Zoom + Casos Prácticos",
    price: "S/ 249",
    start: "1er Martes de cada mes",
    badge: "Certificación Incluida",
    desc: "Domina fórmulas matriciales, Power Query, modelado DAX y tableros interactivos de control de gestión.",
  },
  {
    id: "tesis",
    name: "Asesoría Integral de Tesis & Metodología",
    duration: "Acompañamiento personalizado",
    modality: "Sesiones 1 a 1 + Correcciones",
    price: "S/ 399",
    start: "Inicio Inmediato",
    badge: "Personalizado",
    desc: "Planteamiento del problema, matriz de consistencia, validación de instrumentos y preparación para la sustentación.",
  },
  {
    id: "diseno",
    name: "Diseño Gráfico Publicitario & Figma",
    duration: "4 semanas (16 horas)",
    modality: "Práctico 100% online",
    price: "S/ 189",
    start: "Próximo Sábado",
    badge: "Práctico",
    desc: "Crea piezas visuales de impacto, carruseles para redes sociales y prototipos de interfaces digitales.",
  },
];

export default function EducacionTemplate() {
  const [selectedCourse, setSelectedCourse] = useState(COURSES[0].id);
  const [studentName, setStudentName] = useState("");
  const [phone, setPhone] = useState("");
  const [schedule, setSchedule] = useState("Noches (7:00 pm - 9:30 pm)");

  const currentCourse = COURSES.find((c) => c.id === selectedCourse) || COURSES[0];

  const handleEnroll = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*SOLICITUD DE MATRÍCULA — ACADEMIA NEXUS*\n
Alumno: ${studentName || "No especificado"}
Teléfono: ${phone || "No especificado"}
Curso: ${currentCourse.name}
Tarifa: ${currentCourse.price}
Horario Preferido: ${schedule}
Fecha estimada de inicio: ${currentCourse.start}\n
_Solicitud enviada desde la plantilla oficial de LimaSync Solutions_`;

    window.open(`https://wa.me/51906920958?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div style={{ background: "#0b0f19", color: "#f1f5f9", minHeight: "100vh", fontFamily: "var(--sans)" }}>
      <TemplateBanner niche="Educación, Academias & Cursos Online" />

      {/* Header */}
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
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ fontSize: "1.6rem" }}>🎓</span>
          <div>
            <span style={{ fontWeight: 800, fontSize: "1.2rem", letterSpacing: "-0.02em", color: "#fff" }}>
              NEXUS
            </span>
            <span style={{ color: "#818cf8", fontSize: "0.85rem", marginLeft: "0.4rem", fontWeight: 600 }}>
              ACADEMIA DIGITAL
            </span>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <span style={{ fontSize: "0.85rem", color: "#94a3b8" }}>Ciclo 2026 · Matrículas Abiertas</span>
          <a
            href="https://wa.me/51906920958?text=Hola,%20deseo%20informaci%C3%B3n%20sobre%20los%20cursos%20de%20la%20Academia%20Nexus"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#6366f1",
              color: "#fff",
              padding: "0.55rem 1rem",
              borderRadius: "8px",
              fontWeight: 700,
              fontSize: "0.85rem",
              textDecoration: "none",
            }}
          >
            Consultar por WhatsApp
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header
        style={{
          padding: "4.5rem 1.5rem 3.5rem",
          textAlign: "center",
          maxWidth: "860px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "inline-block",
            background: "rgba(99, 102, 241, 0.15)",
            border: "1px solid rgba(99, 102, 241, 0.4)",
            color: "#a5b4fc",
            padding: "0.3rem 0.85rem",
            borderRadius: "999px",
            fontSize: "0.8rem",
            fontWeight: 700,
            marginBottom: "1.5rem",
          }}
        >
          Aprende Habilidades de Alta Demanda con Expertos
        </div>
        <h1
          style={{
            fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: "1.25rem",
          }}
        >
          Formación Práctica con Certificación y Proyectos Reales
        </h1>
        <p style={{ color: "#94a3b8", fontSize: "1.1rem", lineHeight: 1.6, maxWidth: "680px", margin: "0 auto" }}>
          Clases en vivo por Zoom, grupos reducidos, asesoría docente continua y certificación verificable para potenciar tu currículum.
        </p>
      </header>

      {/* Course Catalog & Enrollment Form */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "1rem 1.5rem 5rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem",
            alignItems: "start",
          }}
        >
          {/* List of Courses */}
          <div>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "1.2rem", color: "#f8fafc" }}>
              Nuestros Cursos Disponibles
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {COURSES.map((course) => {
                const isSelected = course.id === selectedCourse;
                return (
                  <div
                    key={course.id}
                    onClick={() => setSelectedCourse(course.id)}
                    style={{
                      background: isSelected ? "rgba(99, 102, 241, 0.12)" : "rgba(30, 41, 59, 0.5)",
                      border: isSelected ? "2px solid #6366f1" : "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "12px",
                      padding: "1.25rem",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
                      <span style={{ fontWeight: 700, fontSize: "1.05rem", color: isSelected ? "#818cf8" : "#f1f5f9" }}>
                        {course.name}
                      </span>
                      <span
                        style={{
                          background: "rgba(99, 102, 241, 0.2)",
                          color: "#c7d2fe",
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          padding: "0.2rem 0.5rem",
                          borderRadius: "4px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {course.badge}
                      </span>
                    </div>
                    <p style={{ color: "#94a3b8", fontSize: "0.88rem", marginBottom: "0.85rem", lineHeight: 1.4 }}>
                      {course.desc}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: "0.82rem",
                        color: "#cbd5e1",
                        borderTop: "1px solid rgba(255,255,255,0.06)",
                        paddingTop: "0.75rem",
                      }}
                    >
                      <span>⏱️ {course.duration}</span>
                      <span style={{ fontSize: "1.1rem", fontWeight: 800, color: "#38bdf8" }}>{course.price}</span>
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
              border: "1px solid rgba(99, 102, 241, 0.3)",
              borderRadius: "16px",
              padding: "2rem",
              boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
            }}
          >
            <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "1.2rem", marginBottom: "1.5rem" }}>
              <span style={{ fontFamily: "var(--mono)", fontSize: "0.78rem", color: "#818cf8", textTransform: "uppercase" }}>
                Ficha de Inscripción Rápida
              </span>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginTop: "0.4rem" }}>
                {currentCourse.name}
              </h3>
              <div style={{ display: "flex", gap: "1rem", marginTop: "0.75rem", fontSize: "0.85rem", color: "#94a3b8" }}>
                <span>📅 Inicio: {currentCourse.start}</span>
                <span>🏷️ Inversión: <strong style={{ color: "#38bdf8" }}>{currentCourse.price}</strong></span>
              </div>
            </div>

            <form onSubmit={handleEnroll} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.85rem", marginBottom: "0.4rem", color: "#cbd5e1" }}>
                  Nombre y Apellidos del Alumno
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Carlos Mendoza"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  style={{
                    width: "100%",
                    background: "#0f172a",
                    border: "1px solid #334155",
                    borderRadius: "8px",
                    padding: "0.75rem",
                    color: "#fff",
                    fontSize: "0.95rem",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.85rem", marginBottom: "0.4rem", color: "#cbd5e1" }}>
                  Número de WhatsApp
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
                    padding: "0.75rem",
                    color: "#fff",
                    fontSize: "0.95rem",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.85rem", marginBottom: "0.4rem", color: "#cbd5e1" }}>
                  Horario de Preferencia
                </label>
                <select
                  value={schedule}
                  onChange={(e) => setSchedule(e.target.value)}
                  style={{
                    width: "100%",
                    background: "#0f172a",
                    border: "1px solid #334155",
                    borderRadius: "8px",
                    padding: "0.75rem",
                    color: "#fff",
                    fontSize: "0.95rem",
                    boxSizing: "border-box",
                  }}
                >
                  <option value="Noches (7:00 pm - 9:30 pm)">Noches (7:00 pm - 9:30 pm)</option>
                  <option value="Sábados Intensivos (9:00 am - 1:00 pm)">Sábados Intensivos (9:00 am - 1:00 pm)</option>
                  <option value="Grabaciones a mi propio ritmo">Grabaciones a mi propio ritmo</option>
                </select>
              </div>

              <div
                style={{
                  background: "rgba(34, 197, 94, 0.1)",
                  border: "1px solid rgba(34, 197, 94, 0.3)",
                  borderRadius: "8px",
                  padding: "0.85rem",
                  fontSize: "0.82rem",
                  color: "#86efac",
                  lineHeight: 1.4,
                }}
              >
                ✓ Aceptamos pagos con Yape, Plin y transferencia BCP / BBVA.<br />
                ✓ Acceso vitalicio al aula virtual y material de descarga.
              </div>

              <button
                type="submit"
                style={{
                  background: "#22c55e",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "8px",
                  padding: "0.95rem",
                  fontWeight: 800,
                  fontSize: "1rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  boxShadow: "0 6px 20px rgba(34, 197, 94, 0.3)",
                }}
              >
                <span>📲 Matricularme vía WhatsApp ({currentCourse.price})</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
