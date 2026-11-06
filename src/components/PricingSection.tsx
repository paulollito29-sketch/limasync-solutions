"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getWhatsAppUrl } from "../utils/whatsapp";

interface PricingSectionProps {
  lang?: "es" | "en";
}

const pricingContent = {
  es: {
    sectionId: "precios",
    heading: "Planes claros con 50% de adelanto",
    lead: "Inicias el desarrollo abonando el 50% y cancelas el 50% restante únicamente cuando recibes tu sistema verificado y funcionando en tu propio dominio.",
    plans: [
      {
        id: "express",
        tileClass: "plan-tile plan-tile-step-1",
        stripClass: "plan-action-strip strip-step-1",
        title: "Web Express",
        price: "S/ 499",
        unit: "Pago único · Inicias con S/ 249.50",
        desc: "Para profesionales, marcas y pymes que necesitan captar clientes en Lima en 72 horas.",
        features: [
          "Entrega garantizada en máximo 72 horas",
          "Sitio web de hasta 4 secciones de alto impacto",
          "Adaptado a celulares, tablets y computadoras",
          "Flujo directo a WhatsApp con mensaje prearmado",
          "Dominio .com propio por 1 año y certificado SSL",
          "Integración con Google Maps y ficha comercial",
        ],
        btn: "Iniciar Web Express con S/ 249.50",
        subject: "Cotización Plan Web Express (S/ 499) - LimaSync",
      },
      {
        id: "resto",
        tileClass: "plan-tile plan-tile-step-2",
        stripClass: "plan-action-strip strip-step-2",
        title: "Carta Digital QR",
        price: "S/ 790",
        unit: "Pago único · Inicias con S/ 395.00",
        desc: "Diseñado para restaurantes, cafeterías, sangucherías y dark kitchens con pedidos sin comisiones.",
        features: [
          "Carta QR interactiva y autoadministrable en tiempo real",
          "Recepción de pedidos directo a WhatsApp o cocina sin comisiones",
          "Organización por categorías (platos, bebidas, promociones)",
          "Panel simple para cambiar platos, fotos y precios en 1 clic",
          "Dominio .com propio y alojamiento de alta velocidad",
          "Códigos QR listos para imprimir en acrílicos de mesa",
          "Capacitación de 15 minutos para tu equipo",
        ],
        btn: "Iniciar Carta Digital QR con S/ 395",
        subject: "Cotización Plan Carta Digital QR (S/ 790) - LimaSync",
      },
      {
        id: "custom",
        tileClass: "plan-tile plan-tile-step-3",
        stripClass: "plan-action-strip strip-step-3",
        title: "Dashboard, CRM & Bots",
        price: "A cotizar",
        unit: "A medida según tu operación · 50% anticipo",
        desc: "Software empresarial a medida: gestión de prospectos CRM, control operativo, reportes automáticos y bots de WhatsApp 24/7.",
        features: [
          "CRM personalizado para captura y seguimiento de prospectos",
          "Portal administrativo y dashboard de métricas en vivo",
          "Bots de WhatsApp para calificación de clientes y respuestas 24/7",
          "Integración con bases de datos, pasarelas, ERP o Google Sheets",
          "Alertas automáticas por correo y webhook ante eventos clave",
          "Control de usuarios con roles y permisos jerárquicos",
          "Arquitectura en servidor Cloud VPS dedicado de alta capacidad",
          "Garantía de código, confidencialidad y soporte de ingenieros",
        ],
        btn: "Solicitar Cotización a Medida",
        subject: "Cotización Sistema Dashboard, CRM & Bots - LimaSync",
      },
    ],
    cloudCare: {
      title: "Cloud Care & Hosting",
      price: "S/ 99",
      unit: "(~$27) / mes sin contrato forzoso",
      desc: "Tu plataforma siempre en línea, rápida, respaldada y mantenida sobre servidores Cloud VPS de alto rendimiento.",
      features: [
        "Infraestructura dedicada Cloud VPS de alta velocidad",
        "Renovación automatizada de certificados de seguridad SSL",
        "Copias de seguridad semanales completas en la nube",
        "Monitoreo de disponibilidad 24/7 (99.9% uptime)",
        "Hasta 2 actualizaciones menores de texto, fotos o precios al mes",
        "Soporte directo con ingenieros de software",
        "Sin contratos de permanencia: cancela cuando quieras sin penalidades",
      ],
      btn: "Consultar Cloud Care & Hosting (S/ 99/mes)",
      subject: "Consulta Cloud Care & Hosting (S/ 99/mes) - LimaSync",
    },
  },
  en: {
    sectionId: "pricing",
    heading: "Clear plans with 50% deposit",
    lead: "Start development with a 50% deposit and pay the remaining 50% only after verifying your live platform on your own custom domain.",
    plans: [
      {
        id: "express",
        tileClass: "plan-tile plan-tile-step-1",
        stripClass: "plan-action-strip strip-step-1",
        title: "Web Express",
        price: "S/ 499",
        unit: "One-time · Start with S/ 249.50",
        desc: "For professionals, brands, and SMBs that need to capture leads in 72 hours.",
        features: [
          "Guaranteed delivery in 72 hours maximum",
          "High-impact website up to 4 custom sections",
          "Adapted for mobile phones, tablets, and desktop",
          "Direct WhatsApp conversion flow with pre-filled text",
          "Custom .com domain for 1 year and SSL certificate",
          "Google Maps and business profile integration",
        ],
        btn: "Start Web Express with S/ 249.50",
        subject: "Quote Web Express Plan (S/ 499) - LimaSync",
      },
      {
        id: "resto",
        tileClass: "plan-tile plan-tile-step-2",
        stripClass: "plan-action-strip strip-step-2",
        title: "Digital QR Menu",
        price: "S/ 790",
        unit: "One-time · Start with S/ 395.00",
        desc: "Built for restaurants, cafes, and dark kitchens with zero-commission ordering.",
        features: [
          "Interactive self-managed QR menu in real time",
          "Direct order routing to WhatsApp or kitchen without fees",
          "Organized by categories (dishes, drinks, specials)",
          "Simple panel to update dishes, photos, and prices in 1 click",
          "Custom .com domain and high-speed cloud hosting",
          "Print-ready QR codes for table stands",
          "15-minute onboarding session for your restaurant team",
        ],
        btn: "Start Digital QR Menu with S/ 395",
        subject: "Quote Digital QR Menu Plan (S/ 790) - LimaSync",
      },
      {
        id: "custom",
        tileClass: "plan-tile plan-tile-step-3",
        stripClass: "plan-action-strip strip-step-3",
        title: "Dashboard, CRM & Bots",
        price: "Custom quote",
        unit: "Tailored to your operations · 50% milestone",
        desc: "Custom business software: CRM pipeline, operations dashboard, automated reporting, and 24/7 WhatsApp bots.",
        features: [
          "Custom CRM for lead capture and pipeline tracking",
          "Real-time admin portal and live metrics dashboard",
          "24/7 WhatsApp bots for support and appointment booking",
          "Database, payment gateway, ERP, or Google Sheets sync",
          "Automated email and webhook alerts on key events",
          "Multi-user access with hierarchical role permissions",
          "Deployed on high-capacity dedicated Cloud VPS infrastructure",
          "Source code warranty, NDA, and direct engineering support",
        ],
        btn: "Request Custom Quote",
        subject: "Quote Custom Dashboard, CRM & Bots - LimaSync",
      },
    ],
    cloudCare: {
      title: "Cloud Care & Hosting",
      price: "S/ 99",
      unit: "(~$27) / month (no lock-in)",
      desc: "Your platform always online, secure, fast, and maintained on high-performance Cloud VPS servers.",
      features: [
        "High-speed Cloud VPS dedicated infrastructure",
        "Automated SSL security certificate renewals",
        "Weekly automatic full-site cloud backups",
        "24/7 uptime monitoring (99.9% availability)",
        "Up to 2 minor text, image, or price updates per month",
        "Direct support with software engineers",
        "No lock-in contracts: cancel anytime with zero penalties",
      ],
      btn: "Ask About Cloud Care (S/ 99/mo)",
      subject: "Inquiry Cloud Care & Hosting (S/ 99/mo) - LimaSync",
    },
  },
};

export default function PricingSection({ lang = "es" }: PricingSectionProps) {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    setIsDesktop(window.innerWidth >= 960);
  }, []);

  const t = pricingContent[lang];

  return (
    <section id={t.sectionId} className="pricing-chapter" data-chapter="paper">
      <div className="pricing-top-row">
        <motion.div
          className="pricing-heading-col"
          initial={{ opacity: 0, x: isDesktop ? -50 : 0, y: isDesktop ? 0 : 32 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 style={{ fontSize: "var(--step-head)", maxWidth: "15ch" }}>
            {t.heading}
          </h2>
        </motion.div>
        <motion.div
          className="pricing-lead-col"
          initial={{ opacity: 0, x: isDesktop ? 50 : 0, y: isDesktop ? 0 : 32 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p>{t.lead}</p>
        </motion.div>
      </div>

      <div className="pricing-step-grid">
        {t.plans.map((plan, idx) => {
          const planInitial = isDesktop
            ? idx === 0
              ? { opacity: 0, x: -48, y: 14 }
              : idx === 1
              ? { opacity: 0, y: 44, scale: 0.95 }
              : { opacity: 0, x: 48, y: 14 }
            : { opacity: 0, y: 36, scale: 0.98 };

          return (
            <motion.article
              key={plan.id}
              className={plan.tileClass}
              initial={planInitial}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.65,
                delay: idx * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="plan-tile-body">
                <h3 className="plan-name">{plan.title}</h3>
                <div>
                  <div className="plan-price">{plan.price}</div>
                  <div className="plan-unit">{plan.unit}</div>
                </div>
                <p style={{ fontSize: "var(--step-body)" }}>{plan.desc}</p>

                <ul className="plan-features">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx}>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={getWhatsAppUrl(`Hola LimaSync Solutions, ${plan.subject}`)}
                target="_blank"
                rel="noopener noreferrer"
                className={plan.stripClass}
              >
                <span>{plan.btn}</span>
                <span aria-hidden="true">→</span>
              </a>
            </motion.article>
          );
        })}
      </div>

      <motion.article
        className="cloudcare-tile"
        initial={{ opacity: 0, y: 42 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="cloudcare-main">
          <div>
            <h3 className="plan-name">{t.cloudCare.title}</h3>
            <div style={{ marginTop: "12px" }}>
              <div className="plan-price">{t.cloudCare.price}</div>
              <div className="plan-unit">{t.cloudCare.unit}</div>
            </div>
          </div>
          <p>{t.cloudCare.desc}</p>
        </div>

        <div className="cloudcare-list-col">
          <ul className="cloudcare-grid-features">
            {t.cloudCare.features.map((feat, idx) => (
              <li key={idx}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  style={{ flexShrink: 0, marginTop: "3px", color: "#38bdf8" }}
                >
                  <path
                    d="M4 12.5L9.5 18L20 6.5"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="square"
                  />
                </svg>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        <a
          href={getWhatsAppUrl(`Hola LimaSync Solutions, ${t.cloudCare.subject}`)}
          target="_blank"
          rel="noopener noreferrer"
          className="cloudcare-strip"
        >
          <span>{t.cloudCare.btn}</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M5 12H19M19 12L13 6M19 12L13 18"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="square"
            />
          </svg>
        </a>
      </motion.article>
    </section>
  );
}
