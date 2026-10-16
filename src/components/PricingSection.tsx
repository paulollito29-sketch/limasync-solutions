"use client";

interface PricingSectionProps {
  lang?: "es" | "en";
}

const content = {
  es: {
    sectionId: "precios",
    secNum: "03 / Precios",
    kicker: "Tarifas Claras · Sin Letra Chica · Para PYMEs de Lima",
    title: "Plan Web S/ 499 + S/ 99/mes",
    subtitle:
      "Un modelo accesible y predecible: 50% de adelanto (S/ 249) al iniciar y el 50% restante (S/ 249) contra entrega verificada en 72 horas.",
    badge72h: "Entrega en 72 Horas",
    step1Kicker: "Paso 1 · Creación & Lanzamiento",
    price1: "S/ 499",
    price1Unit: " / pago único",
    desc1:
      "Sitio web corporativo o landing page de hasta 4 secciones, diseñado para convertir visitantes en clientes reales por WhatsApp.",
    features1: [
      "Entrega garantizada en máximo 72 horas",
      "Adaptada al 100% para celulares, tablets y computadoras",
      "Botones de WhatsApp estratégicos con mensajes predefinidos",
      "Integración con Google Maps & Ficha de Google Business",
      "Dominio .com incluido por 1 año y certificado SSL de seguridad",
      "Hasta 2 rondas de ajustes de textos, colores y fotos",
      "Capacitación de 15 min en videollamada para que operes con autonomía",
    ],
    btn1: "Comenzar con S/ 249 de adelanto →",
    waMsg1: "Hola LimaSync Solutions, quiero cotizar el desarrollo de mi web con entrega en 72 horas.",
    step2Kicker: "Paso 2 · Soporte & Paz Mental",
    price2: "S/ 99",
    price2Unit: " / mes (sin contrato forzoso)",
    desc2:
      "Tu web siempre en línea, rápida y protegida en nuestros servidores VPS. Olvídate de problemas técnicos o caídas.",
    features2: [
      "Alojamiento en Servidor VPS Cloud de alta velocidad",
      "Renovación continua de Certificado de Seguridad SSL",
      "Copias de seguridad semanales automáticas de toda tu web",
      "Monitoreo 24/7 de tiempo activo (Uptime 99.9%)",
      "Hasta 2 cambios menores de texto, fotos, precios o platos al mes",
      "Soporte directo por WhatsApp con ingenieros de sistemas",
      "Sin penalidad de permanencia: cancelas cuando quieras",
    ],
    btn2: "Consultar detalles de mantenimiento →",
    waMsg2: "Hola, quiero conocer más sobre el plan de mantenimiento mensual de S/ 99/mes",
  },
  en: {
    sectionId: "pricing",
    secNum: "03 / Pricing",
    kicker: "Transparent Pricing · No Hidden Fees · Built for Growing Businesses",
    title: "Web Plan S/ 499 + S/ 99/mo (~$135 + $27/mo)",
    subtitle:
      "Predictable and transparent: 50% deposit (S/ 249) to begin and the remaining 50% (S/ 249) upon verified live delivery within 72 hours.",
    badge72h: "72-Hour Delivery",
    step1Kicker: "Step 1 · Build & Launch",
    price1: "S/ 499",
    price1Unit: " (~$135) / one-time",
    desc1:
      "High-converting corporate website or landing page with up to 4 sections, engineered to turn visitors into real paying clients via WhatsApp.",
    features1: [
      "Guaranteed live delivery within 72 business hours",
      "100% responsive design for phones, tablets and desktops",
      "Strategic WhatsApp conversion buttons with preset messages",
      "Google Maps & Google Business Profile setup",
      ".com domain included for 1 year + SSL security certificate",
      "Up to 2 revision rounds for copy, colors, and imagery",
      "15-minute video training session for effortless autonomous updates",
    ],
    btn1: "Start with 50% deposit (S/ 249) →",
    waMsg1: "Hello LimaSync Solutions, I want to get a quote for my website with 72h delivery.",
    step2Kicker: "Step 2 · Support & Peace of Mind",
    price2: "S/ 99",
    price2Unit: " (~$27) / month (no lock-in)",
    desc2:
      "Your website always online, lightning-fast, and monitored 24/7 on high-speed VPS Cloud servers.",
    features2: [
      "High-speed Cloud VPS hosting infrastructure",
      "Continuous auto-renewal for SSL Security Certificates",
      "Automated weekly full-site cloud backups",
      "24/7 uptime and health monitoring (99.9% uptime)",
      "Up to 2 minor text, photo, price or menu updates per month",
      "Direct priority WhatsApp support with systems engineers",
      "Zero lock-in contracts: cancel anytime with no penalties",
    ],
    btn2: "Ask about monthly care & hosting →",
    waMsg2: "Hello, I want to learn more about the monthly maintenance and hosting plan",
  },
};

export default function PricingSection({ lang = "es" }: PricingSectionProps) {
  const t = content[lang];
  const waUrl1 = `https://wa.me/51906920958?text=${encodeURIComponent(t.waMsg1)}`;
  const waUrl2 = `https://wa.me/51906920958?text=${encodeURIComponent(t.waMsg2)}`;

  return (
    <section id={t.sectionId} style={{ paddingBlock: "clamp(3.5rem, 6vw, 5.5rem)", borderTop: "1px solid var(--line)" }}>
      <div className="wrap">
        <div className="sec-head">
          <div>
            <p className="kicker" style={{ color: "var(--accent-strong)" }}>
              {t.kicker}
            </p>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800 }}>
              {t.title}
            </h2>
          </div>
          <span className="sec-num">{t.secNum}</span>
        </div>

        <p style={{ maxWidth: "68ch", color: "var(--ink-soft)", marginBottom: "3rem", fontSize: "1.05rem" }}>
          {t.subtitle}
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
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
              {t.badge72h}
            </span>

            <div>
              <p style={{ fontFamily: "var(--mono)", fontSize: "0.85rem", color: "var(--ink-soft)", textTransform: "uppercase" }}>
                {t.step1Kicker}
              </p>
              <div style={{ marginBlock: "0.75rem 1.5rem" }}>
                <span style={{ fontSize: "3rem", fontWeight: 900, letterSpacing: "-0.03em" }}>{t.price1}</span>
                <span style={{ color: "var(--ink-soft)", fontSize: "0.95rem" }}>{t.price1Unit}</span>
              </div>
              <p style={{ color: "var(--ink-soft)", fontSize: "0.95rem", lineHeight: 1.5, marginBottom: "1.5rem" }}>
                {t.desc1}
              </p>

              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.9rem" }}>
                {t.features1.map((item, idx) => (
                  <li key={idx} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                    <span style={{ color: "#22c55e", fontWeight: "bold" }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ marginTop: "2rem" }}>
              <a
                href={waUrl1}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent"
                style={{ width: "100%", textAlign: "center", padding: "0.85rem", boxSizing: "border-box", display: "block" }}
              >
                {t.btn1}
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
                {t.step2Kicker}
              </p>
              <div style={{ marginBlock: "0.75rem 1.5rem" }}>
                <span style={{ fontSize: "3rem", fontWeight: 900, letterSpacing: "-0.03em" }}>{t.price2}</span>
                <span style={{ color: "var(--ink-soft)", fontSize: "0.95rem" }}>{t.price2Unit}</span>
              </div>
              <p style={{ color: "var(--ink-soft)", fontSize: "0.95rem", lineHeight: 1.5, marginBottom: "1.5rem" }}>
                {t.desc2}
              </p>

              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.9rem" }}>
                {t.features2.map((item, idx) => (
                  <li key={idx} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--accent-strong)", fontWeight: "bold" }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ marginTop: "2rem" }}>
              <a
                href={waUrl2}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ width: "100%", textAlign: "center", padding: "0.85rem", boxSizing: "border-box", display: "block" }}
              >
                {t.btn2}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
