"use client";

const WHATSAPP_PRICING =
  "https://wa.me/51906920958?text=" +
  encodeURIComponent("Hola LimaSync Solutions, quiero contratar el Pack Web S/ 499 con entrega en 72 horas.");

export default function PricingSection() {
  return (
    <section id="precios" style={{ paddingBlock: "clamp(3.5rem, 6vw, 5.5rem)", borderTop: "1px solid var(--line)" }}>
      <div className="wrap">
        <div className="sec-head">
          <div>
            <p className="kicker" style={{ color: "var(--accent-strong)" }}>
              Tarifas Claras · Sin Letra Chica · Para PYMEs de Lima
            </p>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800 }}>
              Plan Web S/ 499 + S/ 99/mes
            </h2>
          </div>
          <span className="sec-num">03 / Precios</span>
        </div>

        <p style={{ maxWidth: "68ch", color: "var(--ink-soft)", marginBottom: "3rem", fontSize: "1.05rem" }}>
          Un modelo accesible y predecible: 50% de adelanto (S/ 249) al iniciar y el 50% restante (S/ 249) contra entrega verificada en 72 horas.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
            alignItems: "stretch",
          }}
        >
          {/* Card 1: Setup S/ 499 */}
          <div
            style={{
              background: "var(--paper-2)",
              border: "2px solid var(--accent-strong)",
              borderRadius: "16px",
              padding: "2.25rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: "-12px",
                right: "24px",
                background: "var(--accent-strong)",
                color: "#fff",
                padding: "0.25rem 0.75rem",
                borderRadius: "999px",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Entrega en 72 Horas
            </span>

            <div>
              <p style={{ fontFamily: "var(--mono)", fontSize: "0.85rem", color: "var(--ink-soft)", textTransform: "uppercase" }}>
                Paso 1 · Creación & Lanzamiento
              </p>
              <div style={{ marginBlock: "0.75rem 1.5rem" }}>
                <span style={{ fontSize: "3rem", fontWeight: 900, letterSpacing: "-0.03em" }}>S/ 499</span>
                <span style={{ color: "var(--ink-soft)", fontSize: "0.95rem" }}> / pago único</span>
              </div>
              <p style={{ color: "var(--ink-soft)", fontSize: "0.95rem", lineHeight: 1.5, marginBottom: "1.5rem" }}>
                Sitio web corporativo o landing page de hasta 4 secciones, diseñado para convertir visitantes en clientes reales por WhatsApp.
              </p>

              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.9rem" }}>
                {[
                  "Entrega garantizada en máximo 72 horas",
                  "Adaptada al 100% para celulares, tablets y computadoras",
                  "Botones de WhatsApp estratégicos con mensajes predefinidos",
                  "Integración con Google Maps & Ficha de Google Business",
                  "Dominio .com incluido por 1 año y certificado SSL de seguridad",
                  "Hasta 2 rondas de ajustes de textos, colores y fotos",
                  "Capacitación de 15 min en videollamada para que operes con autonomía",
                ].map((item, idx) => (
                  <li key={idx} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                    <span style={{ color: "#22c55e", fontWeight: "bold" }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ marginTop: "2rem" }}>
              <a
                href={WHATSAPP_PRICING}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent"
                style={{ width: "100%", textAlign: "center", padding: "0.85rem", boxSizing: "border-box", display: "block" }}
              >
                Comenzar con S/ 249 de adelanto →
              </a>
            </div>
          </div>

          {/* Card 2: Mantenimiento S/ 99/mes */}
          <div
            style={{
              background: "var(--paper)",
              border: "1px solid var(--line)",
              borderRadius: "16px",
              padding: "2.25rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p style={{ fontFamily: "var(--mono)", fontSize: "0.85rem", color: "var(--ink-soft)", textTransform: "uppercase" }}>
                Paso 2 · Soporte & Paz Mental
              </p>
              <div style={{ marginBlock: "0.75rem 1.5rem" }}>
                <span style={{ fontSize: "3rem", fontWeight: 900, letterSpacing: "-0.03em" }}>S/ 99</span>
                <span style={{ color: "var(--ink-soft)", fontSize: "0.95rem" }}> / mes (sin contrato forzoso)</span>
              </div>
              <p style={{ color: "var(--ink-soft)", fontSize: "0.95rem", lineHeight: 1.5, marginBottom: "1.5rem" }}>
                Tu web siempre en línea, rápida y protegida en nuestros servidores VPS. Olvídate de problemas técnicos o caídas.
              </p>

              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.9rem" }}>
                {[
                  "Alojamiento en Servidor VPS Cloud de alta velocidad",
                  "Renovación continua de Certificado de Seguridad SSL",
                  "Copias de seguridad semanales automáticas de toda tu web",
                  "Monitoreo 24/7 de tiempo activo (Uptime 99.9%)",
                  "Hasta 2 cambios menores de texto, fotos, precios o platos al mes",
                  "Soporte directo por WhatsApp con ingenieros de sistemas",
                  "Sin penalidad de permanencia: cancelas cuando quieras",
                ].map((item, idx) => (
                  <li key={idx} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--accent-strong)", fontWeight: "bold" }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ marginTop: "2rem" }}>
              <a
                href="https://wa.me/51906920958?text=Hola,%20quiero%20conocer%20m%C3%A1s%20sobre%20el%20plan%20de%20mantenimiento%20mensual"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ width: "100%", textAlign: "center", padding: "0.85rem", boxSizing: "border-box", display: "block" }}
              >
                Consultar detalles de mantenimiento →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
