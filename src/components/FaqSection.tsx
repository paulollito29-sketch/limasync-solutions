"use client";

import React, { useState } from "react";
import { getWhatsAppUrl } from "../utils/whatsapp";

interface FaqSectionProps {
  lang?: "es" | "en";
}

export default function FaqSection({ lang = "es" }: FaqSectionProps) {
  const isEs = lang === "es";

  const faqs = [
    {
      category: isEs ? "Costos y Pagos" : "Costs & Payments",
      q: isEs ? "¿Cuánto cuesta un proyecto en LimaSync?" : "How much does a project cost at LimaSync?",
      a: isEs
        ? "Nuestros planes parten desde S/ 499 para Webs Corporativas express, S/ 990 para Tiendas Online e-commerce y desde S/ 1,890 para Sistemas ERP / CRM. Tras un diagnóstico técnico de 15 minutos te emitimos una cotización formal con precio cerrado, sin costos sorpresa ni cargos mensuales ocultos."
        : "Corporate websites start at S/ 499, e-commerce stores at S/ 990, and ERP/CRM systems at S/ 1,890. Following a brief technical diagnosis, we provide a fixed-price proposal detailing all deliverables with no hidden fees.",
    },
    {
      category: isEs ? "Garantía 50/50" : "50/50 Guarantee",
      q: isEs ? "¿Cómo funciona exactamente la garantía 50/50?" : "How does the 50/50 milestone guarantee work?",
      a: isEs
        ? "Solo abonas el 50% de anticipo para registrar tu dominio propio y arrancar la arquitectura. El 50% restante lo cancelas únicamente cuando te presentamos la plataforma funcionando en producción sobre tu dominio y tú das tu conformidad formal."
        : "You pay only 50% deposit to secure your custom domain and initiate architecture. The remaining 50% is paid strictly when you test the live system in production and grant your formal sign-off.",
    },
    {
      category: isEs ? "Tiempos de Entrega" : "Delivery Timelines",
      q: isEs ? "¿Cuánto tiempo toma la entrega de mi sistema?" : "How long does delivery take?",
      a: isEs
        ? "Una web corporativa o landing page de alta conversión se entrega en 72 horas hábiles garantizadas. Una tienda virtual toma entre 5 y 7 días hábiles. Sistemas más complejos como ERP, CRM o apps móviles se entregan mediante sprints ágiles cada 15 días con entregables funcionales."
        : "A corporate website is delivered within 72 business hours guaranteed. An e-commerce store takes 5 to 7 business days. Complex ERP, CRM, or mobile apps are delivered in bi-weekly agile sprints with functional releases.",
    },
    {
      category: isEs ? "Autoadministración" : "Self-Management",
      q: isEs ? "¿Puedo editar los textos, precios o productos yo mismo?" : "Can I edit content or products myself?",
      a: isEs
        ? "Sí, totalmente. Implementamos paneles de administración intuitivos y modernos (o CMS headless) para que puedas actualizar fotos, precios, productos de stock y textos en tiempo real desde tu laptop o celular sin depender de un programador."
        : "Yes, absolutely. We provide intuitive self-managed dashboards so you can upload products, update prices, change text, and manage assets from your computer or phone without developer dependency.",
    },
    {
      category: isEs ? "Propiedad del Código" : "Intellectual Property",
      q: isEs ? "¿El código y el dominio me pertenecen al 100%?" : "Do I own 100% of the code and domain?",
      a: isEs
        ? "Sí. Al cancelar el saldo te transferimos las credenciales de tu dominio, el repositorio de código fuente y el acceso a los servidores en la nube. Cero candados de permanencia ni cobros por licencias propietarias."
        : "Yes. Upon balance settlement, full domain ownership, source code repositories, and cloud server credentials are transferred to your company. Zero lock-in contracts.",
    },
    {
      category: isEs ? "Soporte Técnico" : "Technical Support",
      q: isEs ? "¿Qué pasa si surge un error o necesito soporte posterior?" : "What if a bug arises or I need support later?",
      a: isEs
        ? "Todos nuestros desarrollos incluyen garantía técnica contra fallas y soporte directo por WhatsApp. Además, ofrecemos planes de mantenimiento preventivo y optimización continua opcionales."
        : "All developments include a warranty against defects and direct WhatsApp support. We also provide optional ongoing preventative maintenance and optimization plans.",
    },
  ];

  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: isEs ? "Todas las preguntas" : "All questions" },
    { id: isEs ? "Costos y Pagos" : "Costs & Payments", label: isEs ? "Costos y Pagos" : "Costs & Payments" },
    { id: isEs ? "Garantía 50/50" : "50/50 Guarantee", label: isEs ? "Garantía 50/50" : "50/50 Guarantee" },
    { id: isEs ? "Tiempos de Entrega" : "Delivery Timelines", label: isEs ? "Tiempos" : "Timelines" },
    { id: isEs ? "Propiedad del Código" : "Intellectual Property", label: isEs ? "Propiedad" : "Ownership" },
  ];

  const filteredFaqs = activeCategory === "all"
    ? faqs
    : faqs.filter((f) => f.category === activeCategory);

  return (
    <div className="faq-page-container">
      {/* FAQ Hero Header */}
      <div className="faq-page-header">
        <span className="mono-dim">(05) / CENTRO DE TRANSPARENCIA</span>
        <h1 className="faq-page-h1">{isEs ? "PREGUNTAS FRECUENTES" : "FREQUENTLY ASKED QUESTIONS"}</h1>
        <p className="faq-page-subtitle">
          {isEs
            ? "Todo sobre nuestra metodología de ingeniería de software, precios transparentes, garantía 50/50 y tiempos de entrega."
            : "Everything about our software engineering methodology, transparent pricing, 50/50 guarantee, and delivery times."}
        </p>

        {/* Category Filter Pills */}
        <div className="faq-categories-row" role="tablist">
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setActiveCategory(c.id)}
              className={`faq-cat-pill ${activeCategory === c.id ? "active" : ""}`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Accordions List */}
      <div className="faq-page-list">
        {filteredFaqs.map((f, i) => (
          <details key={i} className="faq-page-item" open={i === 0}>
            <summary>
              <div className="faq-summary-content">
                <span className="faq-pill-tag">{f.category}</span>
                <span className="faq-question-text">{f.q}</span>
              </div>
              <span className="faq-toggle-icon" aria-hidden="true">+</span>
            </summary>
            <div className="faq-answer-body">
              <p>{f.a}</p>
            </div>
          </details>
        ))}
      </div>

      {/* Direct WhatsApp Consultation Banner */}
      <div className="faq-direct-contact-card">
        <div>
          <span className="mono-dim">¿TIENES UNA PREGUNTA NO LISTADA AQUÍ?</span>
          <h2 className="faq-contact-card-title">Habla directamente con un ingeniero de software</h2>
          <p className="faq-contact-card-desc">
            Te respondemos en minutos con diagnóstico técnico real, sin respuestas automáticas ni rodeos comerciales.
          </p>
        </div>
        <a
          href={getWhatsAppUrl("Hola LimaSync, estuve revisando las preguntas frecuentes y tengo una consulta técnica sobre mi proyecto.")}
          target="_blank"
          rel="noopener noreferrer"
          className="faq-whatsapp-direct-btn"
        >
          <span>Escribir por WhatsApp ↗</span>
        </a>
      </div>
    </div>
  );
}
