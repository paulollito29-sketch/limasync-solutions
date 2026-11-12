"use client";

import React from "react";
import { getWhatsAppUrl } from "../utils/whatsapp";

interface MinimalContactCtaProps {
  lang?: "es" | "en";
  email?: string;
  showFaqLink?: boolean;
}

export default function MinimalContactCta({
  lang = "es",
  email = "limasync0@gmail.com",
  showFaqLink = true,
}: MinimalContactCtaProps) {
  const isEs = lang === "es";

  return (
    <footer id="contacto" className="obys-faq-footer-section" aria-label="Contacto y Créditos LimaSync">
      {/* FAQ Bridge Banner aligned strictly to 12-column Swiss grid */}
      {showFaqLink && (
        <div className="obys-faq-bridge-banner">
          {/* Columns 1-8: Content */}
          <div className="faq-bridge-content">
            <h2 className="faq-bridge-title">
              {isEs ? "¿TIENES PREGUNTAS SOBRE EL PROCESO O PAGOS?" : "QUESTIONS ABOUT THE PROCESS OR PAYMENTS?"}
            </h2>
            <p className="faq-bridge-desc">
              {isEs
                ? "Revisa nuestras respuestas sobre costos, tiempos de entrega de 72h, dominio, propiedad de código y panel autoadministrable."
                : "Review our answers regarding costs, 72h delivery SLA, domains, IP rights, and administration."}
            </p>
          </div>

          {/* Columns 9-12: Action Button */}
          <div className="faq-bridge-action-col">
            <a
              href="/faq"
              className="faq-bridge-btn font-mono"
              aria-label={isEs ? "Ver preguntas frecuentes de LimaSync" : "View LimaSync frequently asked questions"}
            >
              <span>{isEs ? "VER PREGUNTAS FRECUENTES ↗" : "VIEW ALL FAQS ↗"}</span>
            </a>
          </div>
        </div>
      )}

      {/* Bottom Agency Credits aligned to 12-column Swiss grid (5 + 4 + 3 cols) */}
      <div className="obys-bottom-credits">
        {/* Columns 1-5 */}
        <div className="credits-agency-col">
          <h3 className="credits-agency-title">Website by LimaSync Digital Engineering</h3>
          <p style={{ color: "var(--ink-muted)", fontSize: "0.85rem", margin: "4px 0 0" }}>
            {isEs
              ? "Estudio de Software en Lima, Perú · Proyectos para todo el país y el extranjero."
              : "Software Engineering Studio in Lima, Peru · Global Delivery."}
          </p>
        </div>

        {/* Columns 6-9: Email Direct Button (identical style to WhatsApp button, hides raw email) */}
        <div className="credits-email-col">
          <span className="credits-col-label font-mono">
            {isEs ? "CONTACTO DIRECTO" : "DIRECT CONTACT"}
          </span>
          <a
            href={`mailto:${email}?subject=${encodeURIComponent(
              isEs ? "Consulta de proyecto · LimaSync" : "Project inquiry · LimaSync"
            )}`}
            className="credits-action-btn font-mono"
            aria-label={isEs ? "Enviar correo directo a LimaSync" : "Send direct email to LimaSync"}
          >
            <span>{isEs ? "Correo Directo ↗" : "Direct Email ↗"}</span>
          </a>
        </div>

        {/* Columns 10-12: WhatsApp Direct Button */}
        <div className="credits-contact-col">
          <span className="credits-col-label font-mono">WHATSAPP</span>
          <a
            href={getWhatsAppUrl(
              isEs
                ? "Hola LimaSync, quiero consultar por un proyecto de software."
                : "Hello LimaSync, I want to inquire about a software project."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="credits-action-btn font-mono"
            aria-label={isEs ? "Contactar por WhatsApp" : "Contact via WhatsApp"}
          >
            <span>{isEs ? "WhatsApp Directo ↗" : "Direct WhatsApp ↗"}</span>
          </a>
          <span className="credits-prev-project" style={{ display: "block", marginTop: "8px" }}>
            ©2026 LimaSync Solutions
          </span>
        </div>
      </div>
    </footer>
  );
}
