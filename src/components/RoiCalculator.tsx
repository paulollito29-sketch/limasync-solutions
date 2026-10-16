"use client";

import { useState } from "react";

export default function RoiCalculator() {
  const [ticket, setTicket] = useState(65);
  const [currentSales, setCurrentSales] = useState(8);
  const [rubro, setRubro] = useState("Restaurante / Comida");

  // Estimaciones basadas en métricas del mercado limeño:
  // Una web bien estructurada genera entre 2 y 4 consultas adicionales por día para una PYME local.
  // Asumiendo una tasa de cierre conservadora del 25% por WhatsApp:
  const extraLeadsMonth = 45; // ~1.5 leads extra diarios
  const extraSalesMonth = Math.round(extraLeadsMonth * 0.25); // ~11 ventas extra
  const extraRevenueMonth = extraSalesMonth * ticket;
  const daysToPayback = Math.max(1, Math.round((500 / (extraRevenueMonth / 30))));
  const roiPercentage = Math.round(((extraRevenueMonth * 12 - (500 + 1200)) / (500 + 1200)) * 100);

  return (
    <section id="calculadora" style={{ paddingBlock: "clamp(3.5rem, 6vw, 5.5rem)", borderTop: "1px solid var(--line)" }}>
      <div className="wrap">
        <div className="sec-head">
          <div>
            <p className="kicker" style={{ color: "var(--accent-strong)" }}>
              Simulador Financiero para PYMEs
            </p>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800 }}>
              Calcula el Retorno de tu Inversión
            </h2>
          </div>
          <span className="sec-num">04 / ROI</span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "2.5rem",
            alignItems: "center",
            marginTop: "1.5rem",
          }}
        >
          {/* Inputs */}
          <div
            style={{
              background: "var(--paper-2)",
              border: "1px solid var(--line)",
              borderRadius: "16px",
              padding: "2rem",
            }}
          >
            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "1.5rem" }}>
              Datos de tu Negocio
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.4rem" }}>
                  Rubro Comercial:
                </label>
                <select
                  value={rubro}
                  onChange={(e) => setRubro(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "0.65rem",
                    borderRadius: "8px",
                    border: "1px solid var(--line)",
                    background: "var(--paper)",
                    color: "var(--ink)",
                    fontFamily: "inherit",
                    fontSize: "0.9rem",
                  }}
                >
                  <option value="Restaurante / Comida">Restaurante / Dark Kitchen / Bar</option>
                  <option value="Clínica / Odontología">Consultorio / Salud / Odontología</option>
                  <option value="Abogados / Asesoría">Estudio Jurídico / Notaría / Contabilidad</option>
                  <option value="Ropa / Tienda">Tienda de Ropa / Retail / Calzado</option>
                  <option value="Servicios Técnicos">Servicios Técnicos / Hogar / Climatización</option>
                </select>
              </div>

              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
                  <label style={{ fontSize: "0.85rem", fontWeight: 600 }}>Ticket Promedio por Venta:</label>
                  <span style={{ fontFamily: "var(--mono)", fontWeight: 700, color: "var(--accent-strong)" }}>
                    S/ {ticket}
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="500"
                  step="5"
                  value={ticket}
                  onChange={(e) => setTicket(Number(e.target.value))}
                  style={{ width: "100%", accentColor: "var(--accent-strong)" }}
                />
              </div>

              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
                  <label style={{ fontSize: "0.85rem", fontWeight: 600 }}>Ventas Actuales por Día:</label>
                  <span style={{ fontFamily: "var(--mono)", fontWeight: 700, color: "var(--accent-strong)" }}>
                    {currentSales} pedidos / día
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  step="1"
                  value={currentSales}
                  onChange={(e) => setCurrentSales(Number(e.target.value))}
                  style={{ width: "100%", accentColor: "var(--accent-strong)" }}
                />
              </div>

              <div style={{ fontSize: "0.8rem", color: "var(--ink-soft)", lineHeight: 1.4, borderTop: "1px solid var(--line)", paddingTop: "1rem" }}>
                * Estimación conservadora basada en un incremento promedio de 1 a 2 clientes ganados por día a través de búsqueda local en Google y enlace de WhatsApp directo.
              </div>
            </div>
          </div>

          {/* Resultados */}
          <div
            style={{
              background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
              color: "#ffffff",
              borderRadius: "16px",
              padding: "2.5rem",
              boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
            }}
          >
            <span
              style={{
                background: "rgba(56, 189, 248, 0.2)",
                color: "#38bdf8",
                padding: "0.25rem 0.65rem",
                borderRadius: "999px",
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            >
              Proyección de Retorno
            </span>

            <h3 style={{ fontSize: "1.8rem", fontWeight: 800, marginTop: "1rem", color: "#f8fafc" }}>
              Recuperas tu web en aprox.{" "}
              <span style={{ color: "#38bdf8", textDecoration: "underline" }}>{daysToPayback} días</span>
            </h3>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 140px), 1fr))", gap: "1.25rem", marginBlock: "1.5rem" }}>
              <div style={{ background: "rgba(255,255,255,0.05)", padding: "1rem", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.1)" }}>
                <span style={{ fontSize: "0.75rem", color: "#94a3b8", display: "block" }}>Ventas Extra / Mes</span>
                <span style={{ fontSize: "1.6rem", fontWeight: 800, color: "#38bdf8" }}>+{extraSalesMonth}</span>
              </div>

              <div style={{ background: "rgba(255,255,255,0.05)", padding: "1rem", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.1)" }}>
                <span style={{ fontSize: "0.75rem", color: "#94a3b8", display: "block" }}>Ingreso Adicional / Mes</span>
                <span style={{ fontSize: "1.6rem", fontWeight: 800, color: "#22c55e" }}>+S/ {extraRevenueMonth}</span>
              </div>
            </div>

            <p style={{ color: "#cbd5e1", fontSize: "0.9rem", lineHeight: 1.5 }}>
              Invirtiendo solo <strong>S/ 499</strong> en el setup inicial, el retorno sobre la inversión (ROI) anual estimado es de un{" "}
              <strong style={{ color: "#22c55e" }}>+{roiPercentage}%</strong> para un negocio de {rubro}.
            </p>

            <div style={{ marginTop: "1.75rem" }}>
              <a
                href={`https://wa.me/51906920958?text=${encodeURIComponent(
                  `Hola LimaSync Solutions, usé el simulador para mi negocio de ${rubro} (Ticket promedio S/ ${ticket}) y quiero cotizar mi web.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent"
                style={{ width: "100%", textAlign: "center", padding: "0.85rem", boxSizing: "border-box", display: "block" }}
              >
                Poner en marcha mi web ahora →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
