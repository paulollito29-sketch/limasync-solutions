"use client";

import { useState } from "react";
import TemplateBanner from "@/components/templates/TemplateBanner";

const SERVICES_LIST = [
  { id: "gasfiteria", name: "Gasfitería & Detección de Fugas", basePrice: 60, icon: "🔧", desc: "Reparación de tuberías, bombas de agua, termas eléctricas y desatoro con máquina sonda." },
  { id: "electricidad", name: "Electricidad & Tableros Eléctricos", basePrice: 70, icon: "⚡", desc: "Instalación de interruptores termomagnéticos, diferencial, cableado indeco y cortocircuitos." },
  { id: "clima", name: "Aire Acondicionado & Climatización", basePrice: 90, icon: "❄️", desc: "Mantenimiento preventivo, recarga de gas ecológico e instalación de equipos split inverter." },
  { id: "pintura", name: "Pintura & Drywall para Interiores", basePrice: 80, icon: "🎨", desc: "Acabados satinados, sellado antihumedad y división de ambientes residenciales y comerciales." },
];

const DISTRICTS = [
  { name: "Miraflores", surcharge: 0 },
  { name: "San Isidro", surcharge: 0 },
  { name: "Santiago de Surco", surcharge: 5 },
  { name: "Barranco", surcharge: 0 },
  { name: "San Borja", surcharge: 0 },
  { name: "San Miguel", surcharge: 5 },
  { name: "Magdalena del Mar", surcharge: 0 },
  { name: "Jesús María", surcharge: 0 },
  { name: "Pueblo Libre", surcharge: 5 },
  { name: "Los Olivos", surcharge: 10 },
  { name: "La Molina", surcharge: 10 },
];

export default function ServiciosTemplate() {
  const [selectedService, setSelectedService] = useState(SERVICES_LIST[0].id);
  const [selectedDistrict, setSelectedDistrict] = useState(DISTRICTS[0].name);
  const [isEmergency, setIsEmergency] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const currentService = SERVICES_LIST.find((s) => s.id === selectedService)!;
  const currentDistrict = DISTRICTS.find((d) => d.name === selectedDistrict)!;

  const estimatedTotal =
    currentService.basePrice + currentDistrict.surcharge + (isEmergency ? 35 : 0);

  const handleSendQuote = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `*SOLICITUD DE SERVICIO TÉCNICO — LIMAFIX PRO*\n`;
    text += `Cliente: ${name || "Cliente"}\n`;
    text += `Servicio Requerido: ${currentService.name}\n`;
    text += `Distrito: ${selectedDistrict}\n`;
    if (address) text += `Dirección: ${address}\n`;
    text += `Modalidad: ${isEmergency ? "🚨 URGENCIA INMEDIATA (24/7)" : "Visita Programada Estándar"}\n`;
    text += `*Estimado Base: S/ ${estimatedTotal}*\n`;
    text += `\n_Cotización generada desde la web demo desarrollada por LimaSync Solutions_`;

    window.open(`https://wa.me/51906920958?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div style={{ background: "#0f172a", color: "#f8fafc", minHeight: "100vh", fontFamily: "sans-serif" }}>
      <TemplateBanner niche="Servicios Técnicos, Mantenimiento & Hogar" />

      {/* Hero Servicios */}
      <header
        style={{
          background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
          padding: "4.5rem 1.5rem 3.5rem",
          textAlign: "center",
          borderBottom: "1px solid #334155",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <span
            style={{
              background: "#3b82f6",
              color: "#fff",
              padding: "0.25rem 0.75rem",
              borderRadius: "999px",
              fontSize: "0.8rem",
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            Técnicos Certificados SENCICO · Cobertura en Toda Lima
          </span>
          <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 800, marginTop: "1rem" }}>
            LimaFix <span style={{ color: "#60a5fa" }}>Pro Services</span>
          </h1>
          <p style={{ color: "#94a3b8", fontSize: "1.1rem", marginTop: "0.75rem" }}>
            Gasfitería, electricidad y climatización a domicilio. Puntualidad garantizada y 6 meses de garantía por escrito.
          </p>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "1.75rem", flexWrap: "wrap" }}>
            <a
              href="#cotizador"
              style={{
                background: "#3b82f6",
                color: "#fff",
                padding: "0.85rem 1.6rem",
                borderRadius: "8px",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Calcular Cotización Online ↓
            </a>
            <a
              href="https://wa.me/51906920958?text=Hola,%20tengo%20una%20urgencia%20en%20mi%20hogar"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#ef4444",
                color: "#fff",
                padding: "0.85rem 1.6rem",
                borderRadius: "8px",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              🚨 Emergencia Inmediata WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Servicios Cards */}
      <section style={{ maxWidth: "1150px", margin: "0 auto", padding: "4rem 1.5rem" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: 800, textAlign: "center", marginBottom: "2.5rem" }}>
          Nuestros Servicios Especializados
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
          {SERVICES_LIST.map((s) => (
            <div
              key={s.id}
              onClick={() => setSelectedService(s.id)}
              style={{
                background: selectedService === s.id ? "#1e293b" : "#131c2e",
                border: selectedService === s.id ? "2px solid #3b82f6" : "1px solid #334155",
                borderRadius: "12px",
                padding: "1.5rem",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              <span style={{ fontSize: "2.2rem" }}>{s.icon}</span>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, margin: "0.75rem 0 0.4rem" }}>{s.name}</h3>
              <p style={{ color: "#94a3b8", fontSize: "0.85rem", lineHeight: 1.5 }}>{s.desc}</p>
              <div style={{ marginTop: "1rem", paddingTop: "0.75rem", borderTop: "1px solid #334155", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: "#60a5fa", fontWeight: 700, fontSize: "0.95rem" }}>Desde S/ {s.basePrice}</span>
                <span style={{ fontSize: "0.75rem", color: selectedService === s.id ? "#38bdf8" : "#64748b" }}>
                  {selectedService === s.id ? "✓ Seleccionado" : "Elegir"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cotizador Interactivo por Distrito */}
      <section id="cotizador" style={{ background: "#0b1120", borderTop: "1px solid #1e293b", padding: "4rem 1.5rem" }}>
        <div
          style={{
            maxWidth: "650px",
            margin: "0 auto",
            background: "#1e293b",
            padding: "2.5rem",
            borderRadius: "16px",
            border: "1px solid #334155",
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          }}
        >
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, textAlign: "center" }}>
            Cotizador Rápido por Distrito
          </h2>
          <p style={{ textAlign: "center", color: "#94a3b8", fontSize: "0.9rem", marginTop: "0.3rem" }}>
            Conoce el costo base de inspección y mano de obra antes de que llegue el técnico.
          </p>

          <form onSubmit={handleSendQuote} style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            <div>
              <label style={{ display: "block", fontSize: "0.85rem", color: "#cbd5e1", marginBottom: "0.3rem" }}>
                1. Servicio Seleccionado:
              </label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                style={{ width: "100%", padding: "0.7rem", background: "#0f172a", color: "#fff", border: "1px solid #475569", borderRadius: "8px" }}
              >
                {SERVICES_LIST.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name} (Base S/ {s.basePrice})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.85rem", color: "#cbd5e1", marginBottom: "0.3rem" }}>
                2. Distrito de Lima:
              </label>
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                style={{ width: "100%", padding: "0.7rem", background: "#0f172a", color: "#fff", border: "1px solid #475569", borderRadius: "8px" }}
              >
                {DISTRICTS.map((d) => (
                  <option key={d.name} value={d.name}>
                    {d.name} {d.surcharge > 0 ? `(+S/ ${d.surcharge} traslado)` : "(Sin recargo)"}
                  </option>
                ))}
              </select>
            </div>

            <div style={{ background: "#0f172a", padding: "1rem", borderRadius: "8px", border: "1px solid #334155", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <span style={{ fontWeight: 700, fontSize: "0.9rem", display: "block" }}>¿Es una emergencia urgente?</span>
                <span style={{ fontSize: "0.75rem", color: "#94a3b8" }}>Llegada del técnico en menos de 45 minutos (+S/ 35)</span>
              </div>
              <input
                type="checkbox"
                checked={isEmergency}
                onChange={(e) => setIsEmergency(e.target.checked)}
                style={{ width: "20px", height: "20px", cursor: "pointer" }}
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.85rem", color: "#cbd5e1", marginBottom: "0.3rem" }}>
                3. Tu Nombre:
              </label>
              <input
                type="text"
                required
                placeholder="Ej. Carlos Mendoza"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ width: "100%", padding: "0.7rem", background: "#0f172a", color: "#fff", border: "1px solid #475569", borderRadius: "8px", boxSizing: "border-box" }}
              />
            </div>

            {/* Total estimado */}
            <div style={{ background: "#0f172a", padding: "1.25rem", borderRadius: "8px", border: "1px solid #3b82f6", marginTop: "0.5rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem", color: "#94a3b8" }}>
                <span>Tarifa Base Servicio:</span>
                <span>S/ {currentService.basePrice}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem", color: "#94a3b8", marginTop: "0.3rem" }}>
                <span>Traslado a {selectedDistrict}:</span>
                <span>S/ {currentDistrict.surcharge}</span>
              </div>
              {isEmergency && (
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem", color: "#ef4444", marginTop: "0.3rem" }}>
                  <span>Recargo Urgencia 24/7:</span>
                  <span>S/ 35</span>
                </div>
              )}
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "1.3rem", fontWeight: 800, color: "#60a5fa", marginTop: "0.75rem", borderTop: "1px solid #334155", paddingTop: "0.75rem" }}>
                <span>Estimado Total:</span>
                <span>S/ {estimatedTotal}</span>
              </div>
            </div>

            <button
              type="submit"
              style={{
                background: "#22c55e",
                color: "#fff",
                padding: "0.95rem",
                borderRadius: "8px",
                border: "none",
                fontWeight: 700,
                fontSize: "1rem",
                cursor: "pointer",
                marginTop: "0.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
              }}
            >
              <span>📲</span> Confirmar y Solicitar Técnico por WhatsApp
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
