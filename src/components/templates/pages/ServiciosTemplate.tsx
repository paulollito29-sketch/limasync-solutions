"use client";

import { useState } from "react";
import TemplateBanner from "@/components/templates/TemplateBanner";

const SERVICES_LIST = [
  {
    id: "gasfiteria",
    name: "Gasfitería & Detección con Geófono",
    basePrice: 65,
    icon: "🔧",
    badge: "Urgencias 24/7",
    desc: "Detección no destructiva de fugas ocultas, reparación de bombas hidroneumáticas, termas eléctricas/gas y desatoro con sonda Ridgid.",
    equipment: "Geófono digital · Cámara endoscópica · Sonda eléctrica",
  },
  {
    id: "electricidad",
    name: "Electricidad & Cuadros Termomagnéticos",
    basePrice: 75,
    icon: "⚡",
    badge: "Certificado",
    desc: "Diagnóstico de cortocircuitos, instalación de llaves diferenciales Schneider, balanceo de cargas y pozo a tierra con protocolo CENEPRED.",
    equipment: "Pinza amperimétrica · Megóhmetro · Cable Indeco 100% Cobre",
  },
  {
    id: "clima",
    name: "Aire Acondicionado & Climatización",
    basePrice: 95,
    icon: "❄️",
    badge: "Mantenimiento",
    desc: "Limpieza profunda con hidrolavadora a presión, recarga de gas ecológico R410A, mantenimiento preventivo de unidades Split Inverter.",
    equipment: "Bomba de vacío · Manifold digital · Desinfectante bactericida",
  },
  {
    id: "pintura",
    name: "Pintura Satinada & Drywall Acústico",
    basePrice: 85,
    icon: "🎨",
    badge: "Acabados A1",
    desc: "Empastado, sellado antihumedad con látex lavable Vencedor/CPP, divisiones en drywall para departamentos y oficinas comerciales.",
    equipment: "Lijadora orbital con aspiración · Airless Graco",
  },
];

const DISTRICTS = [
  { name: "Miraflores", surcharge: 0, arrivalTime: "25 - 35 min" },
  { name: "San Isidro", surcharge: 0, arrivalTime: "25 - 35 min" },
  { name: "Santiago de Surco", surcharge: 5, arrivalTime: "30 - 45 min" },
  { name: "San Borja", surcharge: 0, arrivalTime: "20 - 35 min" },
  { name: "Barranco", surcharge: 0, arrivalTime: "30 - 40 min" },
  { name: "San Miguel", surcharge: 5, arrivalTime: "35 - 50 min" },
  { name: "Magdalena del Mar", surcharge: 0, arrivalTime: "30 - 40 min" },
  { name: "Jesús María", surcharge: 0, arrivalTime: "30 - 40 min" },
  { name: "Pueblo Libre", surcharge: 5, arrivalTime: "35 - 45 min" },
  { name: "La Molina", surcharge: 10, arrivalTime: "40 - 55 min" },
  { name: "Los Olivos", surcharge: 10, arrivalTime: "45 - 60 min" },
];

export default function ServiciosTemplate() {
  const [selectedService, setSelectedService] = useState(SERVICES_LIST[0].id);
  const [selectedDistrict, setSelectedDistrict] = useState(DISTRICTS[0].name);
  const [isEmergency, setIsEmergency] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [details, setDetails] = useState("");

  const currentService = SERVICES_LIST.find((s) => s.id === selectedService)!;
  const currentDistrict = DISTRICTS.find((d) => d.name === selectedDistrict)!;

  const estimatedTotal =
    currentService.basePrice + currentDistrict.surcharge + (isEmergency ? 35 : 0);

  const handleSendQuote = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `*SOLICITUD DE SERVICIO TÉCNICO A DOMICILIO — LIMAFIX PRO*\n\n`;
    text += `Cliente: ${name || "Cliente"}\n`;
    text += `Servicio Requerido: ${currentService.name}\n`;
    text += `Distrito: ${selectedDistrict} (Tiempo estimado: ${currentDistrict.arrivalTime})\n`;
    if (address) text += `Dirección / Referencia: ${address}\n`;
    if (details) text += `Detalle del Problema: ${details}\n`;
    text += `Modalidad: ${isEmergency ? "🚨 EMERGENCIA INMEDIATA (Arribo prioritario)" : "Visita Técnica Programada"}\n`;
    text += `*Estimado Mano de Obra: S/ ${estimatedTotal}*\n\n`;
    text += `_Garantía por escrito de 90 días · Facturación electrónica RUC 20_`;

    window.open(`https://wa.me/51906920958?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div style={{ background: "#0b1120", color: "#f8fafc", minHeight: "100vh", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <TemplateBanner niche="Servicios Técnicos, Mantenimiento & Hogar" />

      {/* Top Notification Bar */}
      <div style={{ background: "#1e293b", borderBottom: "1px solid #334155", padding: "0.55rem 1.5rem", fontSize: "0.8rem", color: "#94a3b8" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span style={{ color: "#22c55e", fontWeight: 700 }}>🟢 Central Operativa Activa</span>
            <span>·</span>
            <span>4 técnicos en ruta en este momento</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span style={{ color: "#fbbf24", fontWeight: 700 }}>⭐ 4.9 / 5.0 en Google Maps (620+ reseñas)</span>
            <span>·</span>
            <span>Garantía escrita 90 días</span>
          </div>
        </div>
      </div>

      {/* Hero Servicios */}
      <header
        style={{
          background: "radial-gradient(ellipse at top, #1e3a8a 0%, #0b1120 70%)",
          padding: "5rem 1.5rem 4rem",
          textAlign: "center",
          borderBottom: "1px solid #1e293b",
        }}
      >
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(59, 130, 246, 0.15)",
              border: "1px solid rgba(59, 130, 246, 0.4)",
              color: "#93c5fd",
              padding: "0.35rem 0.9rem",
              borderRadius: "999px",
              fontSize: "0.8rem",
              fontWeight: 700,
              marginBottom: "1.5rem",
            }}
          >
            <span>🛡️ Técnicos Homologados SENCICO</span>
            <span>·</span>
            <span>Seguro contra Accidentes SCTR</span>
          </div>

          <h1 style={{ fontSize: "clamp(2.3rem, 5.5vw, 4rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.02em" }}>
            LimaFix <span style={{ color: "#38bdf8" }}>Pro Services</span>
          </h1>

          <p style={{ color: "#94a3b8", fontSize: "1.2rem", marginTop: "1rem", lineHeight: 1.6, maxWidth: "680px", marginInline: "auto" }}>
            Especialistas en gasfitería con geófono, electricidad domiciliaria y climatización. Llegamos a su domicilio en menos de 45 minutos con tarifa clara y sin sorpresas.
          </p>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "2.2rem", flexWrap: "wrap" }}>
            <a
              href="#cotizador"
              style={{
                background: "#2563eb",
                color: "#fff",
                padding: "0.95rem 1.85rem",
                borderRadius: "8px",
                fontWeight: 700,
                fontSize: "0.95rem",
                textDecoration: "none",
                boxShadow: "0 4px 15px rgba(37, 99, 235, 0.4)",
              }}
            >
              Calcular Cotización en Vivo ↓
            </a>
            <a
              href="https://wa.me/51906920958?text=Hola,%20tengo%20una%20emergencia%20tecnica%20urgente%20en%20mi%20domicilio"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#dc2626",
                color: "#fff",
                padding: "0.95rem 1.85rem",
                borderRadius: "8px",
                fontWeight: 700,
                fontSize: "0.95rem",
                textDecoration: "none",
                boxShadow: "0 4px 15px rgba(220, 38, 38, 0.4)",
              }}
            >
              🚨 Solicitar Emergencia 24/7
            </a>
          </div>

          {/* Quick Badges Bar */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1.2rem",
              marginTop: "3.5rem",
              paddingTop: "2.5rem",
              borderTop: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "#38bdf8" }}>35 min</div>
              <div style={{ fontSize: "0.85rem", color: "#cbd5e1", marginTop: "0.2rem" }}>Tiempo Promedio de Arribo</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "#22c55e" }}>90 Días</div>
              <div style={{ fontSize: "0.85rem", color: "#cbd5e1", marginTop: "0.2rem" }}>Garantía Escrita de Mano de Obra</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "#fbbf24" }}>S/ 0</div>
              <div style={{ fontSize: "0.85rem", color: "#cbd5e1", marginTop: "0.2rem" }}>Costos Ocultos de Diagnóstico</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "#a855f7" }}>Factura / Boleta</div>
              <div style={{ fontSize: "0.85rem", color: "#cbd5e1", marginTop: "0.2rem" }}>Aceptamos Tarjetas, Yape y Plin</div>
            </div>
          </div>
        </div>
      </header>

      {/* Servicios Cards */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "4.5rem 1.5rem" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span style={{ color: "#38bdf8", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Especialistas Matriculados
          </span>
          <h2 style={{ fontSize: "2.3rem", fontWeight: 800, marginTop: "0.4rem" }}>
            Nuestros Servicios Técnicos Especializados
          </h2>
          <p style={{ color: "#94a3b8", fontSize: "0.95rem", maxWidth: "600px", margin: "0.4rem auto 0" }}>
            Equipos de última generación para resolver cualquier problema técnico en una sola visita.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: "1.5rem" }}>
          {SERVICES_LIST.map((s) => (
            <div
              key={s.id}
              onClick={() => setSelectedService(s.id)}
              style={{
                background: selectedService === s.id ? "#1e293b" : "#0f172a",
                border: selectedService === s.id ? "2px solid #38bdf8" : "1px solid #334155",
                borderRadius: "14px",
                padding: "1.75rem",
                cursor: "pointer",
                transition: "all 0.2s ease",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: selectedService === s.id ? "0 8px 30px rgba(56, 189, 248, 0.15)" : "none",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
                  <span style={{ fontSize: "2.3rem" }}>{s.icon}</span>
                  <span
                    style={{
                      background: "rgba(56, 189, 248, 0.15)",
                      color: "#38bdf8",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      padding: "0.2rem 0.5rem",
                      borderRadius: "4px",
                    }}
                  >
                    {s.badge}
                  </span>
                </div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, margin: "0.5rem 0 0.3rem", color: "#f8fafc" }}>{s.name}</h3>
                <p style={{ color: "#94a3b8", fontSize: "0.85rem", lineHeight: 1.5, marginTop: "0.5rem" }}>{s.desc}</p>

                <div style={{ background: "rgba(0,0,0,0.3)", padding: "0.6rem 0.75rem", borderRadius: "6px", border: "1px solid #1e293b", marginTop: "1rem" }}>
                  <span style={{ fontSize: "0.72rem", color: "#64748b", textTransform: "uppercase", fontWeight: 700, display: "block" }}>Instrumental:</span>
                  <span style={{ fontSize: "0.78rem", color: "#cbd5e1" }}>{s.equipment}</span>
                </div>
              </div>

              <div style={{ marginTop: "1.25rem", paddingTop: "0.75rem", borderTop: "1px solid #334155", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <span style={{ display: "block", fontSize: "0.72rem", color: "#64748b" }}>Tarifa Base:</span>
                  <span style={{ color: "#38bdf8", fontWeight: 800, fontSize: "1.1rem" }}>S/ {s.basePrice}</span>
                </div>
                <button
                  type="button"
                  style={{
                    background: selectedService === s.id ? "#38bdf8" : "transparent",
                    color: selectedService === s.id ? "#0b1120" : "#94a3b8",
                    border: selectedService === s.id ? "none" : "1px solid #475569",
                    padding: "0.4rem 0.8rem",
                    borderRadius: "6px",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  {selectedService === s.id ? "✓ Seleccionado" : "Seleccionar"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cotizador Interactivo por Distrito */}
      <section id="cotizador" style={{ background: "#080d1a", borderTop: "1px solid #1e293b", padding: "5rem 1.5rem" }}>
        <div
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            background: "#1e293b",
            padding: "2.75rem 2.25rem",
            borderRadius: "16px",
            border: "1px solid #334155",
            boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <span style={{ color: "#38bdf8", fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Transparencia Absoluta
            </span>
            <h2 style={{ fontSize: "2rem", fontWeight: 800, marginTop: "0.3rem" }}>
              Cotizador Rápido por Distrito
            </h2>
            <p style={{ color: "#94a3b8", fontSize: "0.9rem", marginTop: "0.3rem" }}>
              Conoce el costo estimado de mano de obra y tiempo de traslado antes de solicitar al técnico.
            </p>
          </div>

          <form onSubmit={handleSendQuote} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.85rem", color: "#cbd5e1", marginBottom: "0.35rem", fontWeight: 600 }}>
                  1. Servicio Requerido:
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  style={{ width: "100%", padding: "0.8rem", background: "#0f172a", color: "#fff", border: "1px solid #475569", borderRadius: "8px" }}
                >
                  {SERVICES_LIST.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} (Base S/ {s.basePrice})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.85rem", color: "#cbd5e1", marginBottom: "0.35rem", fontWeight: 600 }}>
                  2. Distrito de Lima:
                </label>
                <select
                  value={selectedDistrict}
                  onChange={(e) => setSelectedDistrict(e.target.value)}
                  style={{ width: "100%", padding: "0.8rem", background: "#0f172a", color: "#fff", border: "1px solid #475569", borderRadius: "8px" }}
                >
                  {DISTRICTS.map((d) => (
                    <option key={d.name} value={d.name}>
                      {d.name} · Arribo {d.arrivalTime} {d.surcharge > 0 ? `(+S/ ${d.surcharge})` : "(Sin recargo)"}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Emergency Toggle */}
            <div
              style={{
                background: isEmergency ? "rgba(239, 68, 68, 0.15)" : "#0f172a",
                padding: "1rem 1.25rem",
                borderRadius: "10px",
                border: isEmergency ? "1px solid #ef4444" : "1px solid #334155",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                transition: "all 0.2s ease",
              }}
            >
              <div>
                <span style={{ fontWeight: 700, fontSize: "0.95rem", color: isEmergency ? "#fca5a5" : "#f8fafc", display: "block" }}>
                  ¿Es una Urgencia Crítica Inmediata?
                </span>
                <span style={{ fontSize: "0.8rem", color: "#94a3b8" }}>
                  Despacho de cuadrilla de rescate en menos de 35 minutos (+S/ 35)
                </span>
              </div>
              <input
                type="checkbox"
                checked={isEmergency}
                onChange={(e) => setIsEmergency(e.target.checked)}
                style={{ width: "22px", height: "22px", cursor: "pointer", accentColor: "#ef4444" }}
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.85rem", color: "#cbd5e1", marginBottom: "0.35rem", fontWeight: 600 }}>
                  3. Tu Nombre Completo:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Carlos Mendoza"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{ width: "100%", padding: "0.8rem", background: "#0f172a", color: "#fff", border: "1px solid #475569", borderRadius: "8px", boxSizing: "border-box" }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.85rem", color: "#cbd5e1", marginBottom: "0.35rem", fontWeight: 600 }}>
                  Dirección o Referencia:
                </label>
                <input
                  type="text"
                  placeholder="Ej: Av. Benavides 1450 Dpto 402"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  style={{ width: "100%", padding: "0.8rem", background: "#0f172a", color: "#fff", border: "1px solid #475569", borderRadius: "8px", boxSizing: "border-box" }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.85rem", color: "#cbd5e1", marginBottom: "0.35rem", fontWeight: 600 }}>
                Breve descripción de la falla o requerimiento:
              </label>
              <input
                type="text"
                placeholder="Ej: Fuga de agua en pared del baño o llave termomagnética que salta"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                style={{ width: "100%", padding: "0.8rem", background: "#0f172a", color: "#fff", border: "1px solid #475569", borderRadius: "8px", boxSizing: "border-box" }}
              />
            </div>

            {/* Total estimado Box */}
            <div style={{ background: "#0f172a", padding: "1.4rem", borderRadius: "10px", border: "1px solid #38bdf8" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem", color: "#94a3b8" }}>
                <span>Tarifa Base ({currentService.name}):</span>
                <span>S/ {currentService.basePrice}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem", color: "#94a3b8", marginTop: "0.35rem" }}>
                <span>Traslado a {selectedDistrict} ({currentDistrict.arrivalTime}):</span>
                <span>S/ {currentDistrict.surcharge}</span>
              </div>
              {isEmergency && (
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem", color: "#ef4444", marginTop: "0.35rem", fontWeight: 600 }}>
                  <span>Despacho Urgente Prioritario 24/7:</span>
                  <span>+S/ 35</span>
                </div>
              )}
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "1.35rem", fontWeight: 800, color: "#38bdf8", marginTop: "0.85rem", borderTop: "1px solid #334155", paddingTop: "0.85rem" }}>
                <span>Presupuesto Estimado:</span>
                <span>S/ {estimatedTotal}</span>
              </div>
            </div>

            <button
              type="submit"
              style={{
                background: "#22c55e",
                color: "#fff",
                padding: "1rem",
                borderRadius: "8px",
                border: "none",
                fontWeight: 800,
                fontSize: "1.05rem",
                cursor: "pointer",
                marginTop: "0.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.6rem",
                boxShadow: "0 6px 20px rgba(34, 197, 94, 0.35)",
              }}
            >
              <span>📲</span> Confirmar y Solicitar Técnico por WhatsApp (S/ {estimatedTotal})
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #1e293b", background: "#050811", padding: "2.5rem 1.5rem", textAlign: "center", fontSize: "0.8rem", color: "#64748b" }}>
        <p>© 2026 LimaFix Pro Services S.A.C. · RUC 20609812455 · Especialistas de Mantenimiento y Emergencias</p>
        <p style={{ marginTop: "0.4rem" }}>Cobertura: Miraflores, San Isidro, Surco, San Borja, Barranco, La Molina y Lima Metropolitana</p>
      </footer>
    </div>
  );
}
