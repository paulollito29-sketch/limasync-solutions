"use client";

import { useState } from "react";
import TemplateBanner from "@/components/templates/TemplateBanner";

const SERVICES = [
  {
    title: "Diseño de Sonrisa Digital",
    desc: "Carillas de porcelana y resina de alta estética modeladas digitalmente en 3D.",
    price: "Desde S/ 450 por pieza",
    time: "2 sesiones",
  },
  {
    title: "Ortodoncia Invisible (Alineadores)",
    desc: "Placas transparentes termoformadas para alinear tus dientes sin brackets metálicos.",
    price: "Desde S/ 1,800 total",
    time: "6 a 12 meses",
  },
  {
    title: "Implantes Dentales de Titanio",
    desc: "Reemplazo fijo de piezas perdidas con tornillo de titanio biocompatible y corona cerámica.",
    price: "Desde S/ 1,200",
    time: "1 sesión quirúrgica",
  },
  {
    title: "Blanqueamiento Láser LED",
    desc: "Aclara hasta 4 tonos en una sola sesión de 45 minutos sin sensibilidad excesiva.",
    price: "S/ 249 (Promo del Mes)",
    time: "45 minutos",
  },
  {
    title: "Limpieza Profunda con Ultrasonido",
    desc: "Profilaxis integral, destartraje ultrasónico y aplicación de flúor remineralizante.",
    price: "S/ 80",
    time: "30 minutos",
  },
];

export default function SaludTemplate() {
  const [specialty, setSpecialty] = useState("Diseño de Sonrisa Digital");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("Tarde (3:00 PM - 7:00 PM)");

  const handleBookAppointment = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*SOLICITUD DE CITA ODONTOLÓGICA — SAN ISIDRO DENTAL*\n
Paciente: ${name || "No especificado"}
Teléfono: ${phone || "No especificado"}
Especialidad/Tratamiento: ${specialty}
Fecha solicitada: ${date || "A convenir"}
Horario preferido: ${preferredTime}\n
_Enviado desde la web demo de LimaSync Solutions_`;

    window.open(`https://wa.me/51906920958?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div style={{ background: "#f8fafc", color: "#0f172a", minHeight: "100vh", fontFamily: "sans-serif" }}>
      <TemplateBanner niche="Clínicas, Salud & Odontología" />

      {/* Header Clínica */}
      <header
        style={{
          background: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
          color: "#fff",
          padding: "4.5rem 1.5rem 4rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(255,255,255,0.15)",
              padding: "0.3rem 0.8rem",
              borderRadius: "999px",
              fontSize: "0.85rem",
              fontWeight: 600,
            }}
          >
            <span>⚕️</span> Especialistas Certificados COP · San Isidro, Lima
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", marginTop: "1.2rem", fontWeight: 800 }}>
            San Isidro <span style={{ color: "#7dd3fc" }}>Dental & Estética</span>
          </h1>
          <p style={{ color: "#e0f2fe", fontSize: "1.1rem", marginTop: "1rem", lineHeight: 1.6 }}>
            Odontología de alta precisión, tecnología 3D y atención personalizada para toda tu familia. Tu sonrisa en manos expertas.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "2rem", flexWrap: "wrap" }}>
            <a
              href="#agendar"
              style={{
                background: "#ffffff",
                color: "#0369a1",
                padding: "0.85rem 1.6rem",
                borderRadius: "8px",
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            >
              Agendar Cita Online ↓
            </a>
            <a
              href="https://wa.me/51906920958?text=Hola,%20tengo%20una%20urgencia%20dental"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#ef4444",
                color: "#ffffff",
                padding: "0.85rem 1.6rem",
                borderRadius: "8px",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              🚨 Urgencias 24h WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Grid de Tratamientos */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "4rem 1.5rem" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span style={{ color: "#0284c7", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase" }}>
            Nuestras Especialidades
          </span>
          <h2 style={{ fontSize: "2.2rem", fontWeight: 800, marginTop: "0.5rem" }}>Tratamientos de Vanguardia</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {SERVICES.map((s, idx) => (
            <div
              key={idx}
              style={{
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "12px",
                padding: "1.75rem",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#0369a1" }}>{s.title}</h3>
                <p style={{ color: "#64748b", fontSize: "0.9rem", marginTop: "0.6rem", lineHeight: 1.5 }}>{s.desc}</p>
              </div>
              <div style={{ marginTop: "1.5rem", borderTop: "1px solid #f1f5f9", paddingTop: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem" }}>
                  <span style={{ fontWeight: 700, color: "#0f172a" }}>{s.price}</span>
                  <span style={{ color: "#94a3b8" }}>⏱️ {s.time}</span>
                </div>
                <button
                  onClick={() => {
                    setSpecialty(s.title);
                    const el = document.getElementById("agendar");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  style={{
                    width: "100%",
                    marginTop: "0.75rem",
                    background: "#f0f9ff",
                    color: "#0284c7",
                    border: "1px solid #bae6fd",
                    padding: "0.5rem",
                    borderRadius: "6px",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Seleccionar para Agendar
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Formulario de Cita Online */}
      <section id="agendar" style={{ background: "#f1f5f9", padding: "4rem 1.5rem" }}>
        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            background: "#ffffff",
            padding: "2.5rem",
            borderRadius: "16px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
          }}
        >
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, textAlign: "center", color: "#0f172a" }}>
            Agendar Consulta
          </h2>
          <p style={{ textAlign: "center", color: "#64748b", fontSize: "0.9rem", marginTop: "0.3rem" }}>
            Reserva tu cupo en segundos. Te responderemos inmediatamente para confirmar.
          </p>

          <form onSubmit={handleBookAppointment} style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            <div>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.3rem" }}>
                Nombre Completo del Paciente:
              </label>
              <input
                type="text"
                required
                placeholder="Ej. María Gonzales"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ width: "100%", padding: "0.7rem", borderRadius: "8px", border: "1px solid #cbd5e1", boxSizing: "border-box" }}
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.3rem" }}>
                Teléfono WhatsApp:
              </label>
              <input
                type="tel"
                required
                placeholder="Ej. 987 654 321"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{ width: "100%", padding: "0.7rem", borderRadius: "8px", border: "1px solid #cbd5e1", boxSizing: "border-box" }}
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.3rem" }}>
                Tratamiento de Interés:
              </label>
              <select
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
                style={{ width: "100%", padding: "0.7rem", borderRadius: "8px", border: "1px solid #cbd5e1" }}
              >
                {SERVICES.map((s, idx) => (
                  <option key={idx} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.3rem" }}>
                  Fecha Estimada:
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  style={{ width: "100%", padding: "0.7rem", borderRadius: "8px", border: "1px solid #cbd5e1", boxSizing: "border-box" }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.3rem" }}>
                  Horario de Preferencia:
                </label>
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  style={{ width: "100%", padding: "0.7rem", borderRadius: "8px", border: "1px solid #cbd5e1" }}
                >
                  <option value="Mañana (9:00 AM - 1:00 PM)">Mañana (9am - 1pm)</option>
                  <option value="Tarde (3:00 PM - 7:00 PM)">Tarde (3pm - 7pm)</option>
                  <option value="Noche (7:00 PM - 9:00 PM)">Noche (7pm - 9pm)</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              style={{
                background: "#0284c7",
                color: "#ffffff",
                padding: "0.9rem",
                borderRadius: "8px",
                border: "none",
                fontWeight: 700,
                fontSize: "1rem",
                cursor: "pointer",
                marginTop: "1rem",
                boxShadow: "0 4px 12px rgba(2,132,199,0.3)",
              }}
            >
              Confirmar Reserva por WhatsApp →
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
