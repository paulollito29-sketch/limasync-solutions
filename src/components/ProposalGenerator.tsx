"use client";

import { useState } from "react";

export default function ProposalGenerator() {
  const [open, setOpen] = useState(false);
  const [businessName, setBusinessName] = useState("");
  const [clientName, setClientName] = useState("");
  const [phone, setPhone] = useState("");
  const [rubro, setRubro] = useState("Restaurante / Gastronomía");
  const [domain, setDomain] = useState(".com");
  const [copied, setCopied] = useState(false);

  const contractText = `=====================================================
PROPUESTA COMERCIAL Y CONTRATO DE DESARROLLO WEB
PROVEEDOR: LIMASYNC SOLUTIONS (RUC 20 EN TRÁMITE / SAC)
CLIENTE: ${clientName.toUpperCase() || "EL CLIENTE"} (${businessName.toUpperCase() || "NEGOCIO"})
=====================================================

1. OBJETO DEL CONTRATO:
LimaSync Solutions se compromete al diseño, desarrollo, configuración y despliegue del sitio web oficial para ${businessName || "el negocio del cliente"}, bajo el rubro de ${rubro}.

2. PRECIO Y CONDICIONES DE PAGO:
• Inversión Total Setup: S/ 499.00 (Quinientos y 00/100 Soles).
• Modalidad 50/50:
  - Primer Pago (50%): S/ 249.00 al momento de la firma y entrega de materiales base (logo y textos).
  - Segundo Pago (50%): S/ 249.00 contra entrega y verificación del sitio web en línea.

3. PLAZO DE ENTREGA:
• 72 horas calendario desde la confirmación del pago inicial del 50%.

4. ALCANCE TÉCNICO INCLUIDO:
• Sitio Web Responsive de hasta 4 secciones (Inicio, Catálogo/Servicios, Nosotros/Testimonios, Contacto/Ubicación).
• Botón flotante estratégico de WhatsApp con mensaje pre-configurado para captación de leads.
• Integración con Google Maps y optimización básica para Google Business Profile.
• Registro de Dominio oficial (${domain}) incluido por 1 año.
• Certificado de Seguridad SSL (HTTPS) activado.
• Hasta 2 rondas de revisión y ajustes menores antes de la entrega final.

5. PLAN DE MANTENIMIENTO Y ALOJAMIENTO (OPCIONAL / MES 2 EN ADELANTE):
• Costo mensual: S/ 99.00 / mes (Primer mes bonificado con el setup).
• Incluye: Alojamiento en Servidor VPS Cloud, backups semanales, soporte técnico continuo y hasta 2 actualizaciones menores de texto o precios al mes. Sin permanencia obligatoria.

6. ACEPTACIÓN:
El abono del anticipo de S/ 249.00 constituye la aceptación plena de los términos de esta propuesta.
=====================================================`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const sendByWhatsApp = () => {
    const url = `https://wa.me/51906920958?text=${encodeURIComponent(
      `*PROPUESTA DE SERVICIO WEB (S/ 499 + S/ 99/MES)*\n\n${contractText}`
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div style={{ marginTop: "2rem", textAlign: "center" }}>
      <button
        onClick={() => setOpen(true)}
        style={{
          background: "var(--paper)",
          color: "var(--ink)",
          border: "1px solid var(--line)",
          padding: "0.75rem 1.5rem",
          borderRadius: "8px",
          fontFamily: "var(--mono)",
          fontSize: "0.85rem",
          fontWeight: 700,
          cursor: "pointer",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <span>📑</span> Generar Contrato / Propuesta Formal en 1 Clic
      </button>

      {open && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.75)",
            backdropFilter: "blur(4px)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem",
          }}
        >
          <div
            style={{
              background: "var(--paper)",
              color: "var(--ink)",
              borderRadius: "16px",
              padding: "2rem",
              maxWidth: "680px",
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
              textAlign: "left",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 800 }}>Generador de Contrato Estándar S/ 499</h3>
              <button
                onClick={() => setOpen(false)}
                style={{ background: "none", border: "none", fontSize: "1.5rem", cursor: "pointer", color: "var(--ink-soft)" }}
              >
                ✕
              </button>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))", gap: "1rem", marginBottom: "1.25rem" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.25rem" }}>
                  Nombre del Negocio / Marca:
                </label>
                <input
                  type="text"
                  placeholder="Ej. Cevichería El Puerto"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  style={{ width: "100%", padding: "0.5rem", borderRadius: "6px", border: "1px solid var(--line)", background: "var(--paper-2)", color: "var(--ink)", boxSizing: "border-box" }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.25rem" }}>
                  Representante o Contacto:
                </label>
                <input
                  type="text"
                  placeholder="Ej. Roberto Quispe"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  style={{ width: "100%", padding: "0.5rem", borderRadius: "6px", border: "1px solid var(--line)", background: "var(--paper-2)", color: "var(--ink)", boxSizing: "border-box" }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.25rem" }}>
                  Rubro Comercial:
                </label>
                <select
                  value={rubro}
                  onChange={(e) => setRubro(e.target.value)}
                  style={{ width: "100%", padding: "0.5rem", borderRadius: "6px", border: "1px solid var(--line)", background: "var(--paper-2)", color: "var(--ink)" }}
                >
                  <option value="Restaurante / Gastronomía">Restaurante / Gastronomía</option>
                  <option value="Clínica / Odontología">Clínica / Odontología</option>
                  <option value="Estudio Jurídico / Contable">Estudio Jurídico / Contable</option>
                  <option value="Tienda / Moda & Ropa">Tienda / Moda & Ropa</option>
                  <option value="Servicios Técnicos / Hogar">Servicios Técnicos / Hogar</option>
                </select>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.25rem" }}>
                  Extensión de Dominio:
                </label>
                <select
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  style={{ width: "100%", padding: "0.5rem", borderRadius: "6px", border: "1px solid var(--line)", background: "var(--paper-2)", color: "var(--ink)" }}
                >
                  <option value=".com">Dominio .com (Incluido)</option>
                  <option value=".pe">Dominio .pe (+S/ 70 extra)</option>
                </select>
              </div>
            </div>

            {/* Vista Previa del Contrato */}
            <pre
              style={{
                background: "var(--paper-2)",
                border: "1px solid var(--line)",
                borderRadius: "8px",
                padding: "1rem",
                fontFamily: "var(--mono)",
                fontSize: "0.75rem",
                whiteSpace: "pre-wrap",
                maxHeight: "260px",
                overflowY: "auto",
                lineHeight: 1.45,
                color: "var(--ink)",
              }}
            >
              {contractText}
            </pre>

            <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.25rem", justifyContent: "flex-end" }}>
              <button
                onClick={copyToClipboard}
                style={{
                  background: copied ? "#22c55e" : "var(--paper-2)",
                  color: copied ? "#fff" : "var(--ink)",
                  border: "1px solid var(--line)",
                  padding: "0.6rem 1.2rem",
                  borderRadius: "6px",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  cursor: "pointer",
                }}
              >
                {copied ? "✓ ¡Copiado al Portapapeles!" : "Copiar Texto"}
              </button>
              <button
                onClick={sendByWhatsApp}
                style={{
                  background: "#22c55e",
                  color: "#fff",
                  border: "none",
                  padding: "0.6rem 1.2rem",
                  borderRadius: "6px",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  cursor: "pointer",
                }}
              >
                Enviar por WhatsApp →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
